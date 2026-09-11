# 開發者版：從硬體能力走到 App 整合

:::editorial dev-intro
這一版按產品能力建立開發問題：先釐清型號與條件，再對照可用的公開介面，最後列出需要測試的分支。規格表的上限不是 App 已達成的結果；文中「整合思路」是有來源前提的編輯解釋，尚未編譯或在新品上執行。可先從正在處理的產品讀起，再用同主題入口切到另一受眾的說明。
:::

## iPhone 18 Pro 與 iPhone 18 Pro Max：影像規格要拆成可驗收的組合 {#iphone-pro}

:::narrative dev-pro-software KB-227,KB-228,KB-229,KB-240
影像軟體的控制可以從畫面和規格一起看：台灣規格的 Pro 控制項目列出光圈、快門、白平衡及色階分佈圖；影片實際展示分佈圖與快門面板。這讓需求從「最高錄影規格」走到「使用者想控制什麼」。錄製後，規格列有加入電影級模式效果與混音，影片也呈現混音模式選單。

Apple 參考影像則是另一條路線：影片照片選單有 View Reference Image，並明列歐盟與中國的限制。目前核對範圍還不足以解說簽章或雲端驗證機制；相關 API 也沒有由 AVFoundation 的一般拍攝文件獲得確認。
:::

:::summary dev-pro-summary KB-020,KB-023,KB-123,KB-124,KB-128
iPhone 18 Pro 與 iPhone 18 Pro Max 的研究重點，是 {{KB-020:晶片}}、可變光圈主相機、多鏡頭配置與有條件的專業錄影。光圈列出 {{KB-023:光圈檔位}}，但「手機有這個控制」與「第三方可呼叫相同控制」仍須分開核對。錄影要同時看鏡頭、格式與儲存條件；USB 資料速率也取決於連接線。
:::

:::table dev-pro-hardware KB-021,KB-022,KB-122,KB-152,KB-121,KB-123,KB-128
{"caption":"iPhone 18 Pro／iPhone 18 Pro Max 的硬體與配置","rows":[{"label":"iPhone 18 Pro 顯示器：標稱／矩形量測","claim_id":"KB-021"},{"label":"iPhone 18 Pro Max 顯示器：標稱／矩形量測","claim_id":"KB-022"},{"label":"重量與共用厚度","claim_id":"KB-122"},{"label":"顯示情境與更新頻率","claim_id":"KB-152"},{"label":"容量選項","claim_id":"KB-121"},{"label":"後置影像配置","claim_id":"KB-123"},{"label":"資料傳輸上限","claim_id":"KB-128"}]}
:::

:::narrative dev-pro-imaging KB-023,KB-123,KB-124
先把「望遠」拆清楚：規格列示的望遠焦段、光學品質變焦與數位變焦分別列示，不能合成一個倍數去描述相同成像能力。光學品質望遠的像素條件也與完整望遠感光元件的標示不同。若 App 介面要呈現鏡頭選項，這份資料足以幫助提出核對問題，尚不足以直接寫出新品相機枚舉結果。

錄影也是多條件的組合。主相機杜比視界的最高模式與 ProRes 外接儲存上限恰有相同標示，不代表兩者有相同工作流程。ProRes RAW 要相容 app，Genlock 還要相容第三方硬體與軟體。**整合思路（編輯解釋）**：先列使用者要的輸出，再確認鏡頭、格式、配件與儲存；任一條件未確認，介面便不應把完整能力當作可立即使用。
:::

:::narrative dev-pro-capture KB-200,KB-201,KB-202,KB-203
AVFoundation 的已核對架構是 **輸入 → session → 輸出**：相機或麥克風提供媒體，session 連接輸入與輸出，輸出可產生影片檔或供即時處理的像素資料。這個流程說明 App 的公開拍攝架構，並不是對新品內部影像管線的逆向推測。

接入前先完成權限說明：相機與麥克風分別使用 `NSCameraUsageDescription`、`NSMicrophoneUsageDescription`。在建立拍攝 session 前，以 `AVCaptureDevice.authorizationStatus(for:)` 檢查狀態，尚未決定才於適合的時機呼叫 `requestAccess(for:completionHandler:)`。例如使用者打開 App 的拍攝功能時才詢問，是依官方指引整理的實作順序。

格式層則查 `AVCaptureDevice.formats`，需要超出 preset 的設定時，由該裝置支援的格式選擇 `activeFormat`。這裡的「支援」是當下 capture device 回報的能力，不能用產品頁最高規格替代。上述文件仍未直接確認新品可變光圈的第三方控制，亦未確認每一種專業格式；這些是後續 SDK 與裝置測試的具體項目。
:::

:::narrative dev-pro-capture-runtime KB-280,KB-281,KB-282,KB-283,KB-284,KB-285
在拍攝架構之下，還要取得當下可用的裝置與能力。`DiscoverySession.devices` 列出符合條件的裝置，清單可隨連接狀態改變；`supportedMultiCamDeviceSets` 才描述可同時運作的多相機集合。這些是執行時的查詢入口，不能直接把產品多鏡頭規格填成 App 的固定選單。

單張拍攝由 `AVCapturePhotoOutput` 查能力、`AVCapturePhotoSettings` 表達這次要求，再由 delegate 接收流程事件。自動閃光等選項在拍攝時才決定，實際結果要看 `AVCaptureResolvedPhotoSettings`，其 `uniqueID` 可回連原請求。

手動曝光也有取捨：`setExposureModeCustom` 的曝光時間與 ISO 須在支援範圍內，修改前後要取得、釋放 configuration lock。照片品質預設 `balanced` 在暗處需要多張融合時可能暫時覆寫數值；文件要求以 `speed` 才能在 `custom` 或 `locked` 模式下維持指定值。這是公開拍攝 API 的條件，未證明影片原廠影像控制介面或新品可變光圈向第三方開放，本文亦未執行 SDK／實機測試。
:::

:::table dev-pro-power KB-127,KB-129
{"caption":"台灣規格的續航與充電條件","rows":[{"label":"iPhone 18 Pro／iPhone 18 Pro Max：一般使用","claim_id":"KB-127","value_names":["iPhone 18 Pro 一般使用","iPhone 18 Pro Max 一般使用"]},{"label":"iPhone 18 Pro／iPhone 18 Pro Max：影片播放","claim_id":"KB-127","value_names":["iPhone 18 Pro 影片播放","iPhone 18 Pro Max 影片播放"]},{"label":"iPhone 18 Pro／iPhone 18 Pro Max：影片串流","claim_id":"KB-127","value_names":["iPhone 18 Pro 串流","iPhone 18 Pro Max 串流"]},{"label":"充電模式","claim_id":"KB-129"}]}
:::

:::note dev-pro-power-note KB-024,KB-127,KB-129,KB-150,KB-151,KB-153,KB-154,KB-159,KB-181,KB-182
新核對影片畫格有持續效能比較與影片播放卡，但測試前提仍不完整。台灣規格的 SIM 配置與影片字幕候選的 eSIM-only 機型不能混用。表中的一般使用、播放與串流來自不同測試情境，沒有一項代表開發中 App 的固定耗電結果。快充同樣有轉接器、線材與起算條件；測試計畫應保留這些變數。前置相機的錄影與外接儲存上限另列，不能套用後置主相機的模式。部分功能需要 Apple 帳號與網路，包裝清單未包含快充轉接器，車禍偵測求救也需要可用連線。IP68 防護會因耗損改變；感測器與輔助使用功能雖已列在規格中，第三方是否能讀到特定資料仍要另行確認。
:::

## iPhone Duo：先處理可用空間，再處理裝置狀態 {#iphone-duo}

:::narrative dev-duo-software KB-234,KB-235,KB-236,KB-237,KB-238,KB-241,KB-248
**版面變大後，工作流程也改變。** Apple 在影片展示訊息與照片並排、兩個網頁並排及換邊；另有半摺疊擺放觀看內容，以及直立擺放時顯示行事曆與床邊時鐘的畫面。這些把設計問題從螢幕尺寸推進到「同時處理哪些內容、狀態如何維持」。下文的 SwiftUI 文件只提供空間選擇的公開對照，不會自動證明同一套多視窗或姿態 API。

相機示例讓被攝者從外螢幕看取景，還展示兒童動畫；視訊通話則讓裝置兩側的人看到通話。規格另列 Duo 雙面 FaceTime 與行動網路或 Wi-Fi 通話；雙方須有具 FaceTime 功能的裝置，仍須合看 Wi-Fi 註腳、行動方案與可能的數據費用。這些連線條件不會自動成為第三方雙面通話接口。

台灣規格確認智慧拍攝與 Duo 雙面預覽名稱，但自動觸發、配對相機與第三方控制流程仍未完整核對。影片的擺放、入鏡與合照畫面可以說明目的；另行連續核對的短片段中，手機預覽曾變暗再恢復合照構圖。這個畫面變化不足以確認辨識到就緒、自動快門或已儲存，也不能替未展示的事件或回呼提供實作契約。
:::

:::summary dev-duo-summary KB-030,KB-031,KB-032,KB-033,KB-034,KB-164
iPhone Duo 的開發問題跨越內外螢幕、不同前置相機與側邊 Touch ID。{{KB-034:相容配件}} 的功能仍標示 {{KB-034:功能推出時間}}，不能當成已交付的輸入能力。內外螢幕的尺寸是版面研究起點，並不是已確認的摺疊狀態 API。
:::

:::table dev-duo-layout KB-031,KB-032,KB-161,KB-160,KB-162,KB-164,KB-168
{"caption":"iPhone Duo 需要分開處理的配置","rows":[{"label":"內螢幕尺寸","claim_id":"KB-031"},{"label":"外螢幕尺寸","claim_id":"KB-032"},{"label":"兩面解析度與更新頻率","claim_id":"KB-161"},{"label":"容量、重量與開合厚度","claim_id":"KB-160"},{"label":"運算規格","claim_id":"KB-162"},{"label":"兩個前置相機的錄影","claim_id":"KB-164"},{"label":"台灣行動方案配置","claim_id":"KB-168"}]}
:::

:::narrative dev-duo-layout-logic KB-031,KB-032,KB-161,KB-204
**版面思路（編輯解釋）**：同一項任務可以準備寬版與緊湊版排列，並以實際可用空間決定顯示方式。SwiftUI 的 `ViewThatFits` 依宣告順序評估子視圖，選第一個理想尺寸能放進建議空間的選項；預設檢查水平與垂直，也能指定要檢查的軸。順序因此是偏好順序，不能把最簡化的視圖擺前面，再期待它一定選較豐富的版面。

這份文件直接支持的是「依空間選視圖」。它沒有確認 iPhone Duo 開合事件、內外螢幕轉移、應用程式生命週期或視窗數量。若設計需要在摺疊時搬移播放進度或保留編輯狀態，應把那些行為列成待驗證需求，不能用顯示器對角線或這個 SwiftUI symbol 當成證明。規格的像素解析度也不是本文量測過的 App 版面座標。
:::

:::narrative dev-duo-layout-state KB-296,KB-297
`ViewThatFits` 之外，`AnyLayout` 可在不同 Layout 容器之間切換並保留子視圖狀態；官方用 Dynamic Type 的字級條件示範橫排與直排變換。`horizontalSizeClass` 則描述讀取它的視圖可用橫向空間，會受到方向與 iPad 視窗配置等因素影響，App 要處理執行期間的變更。

這兩份文件提供「版面變了如何安排與保留子視圖」的既有方法；狀態保留只限該容器契約，不能延伸成 iPhone Duo 開合、內外螢幕切換、跨 App 或跨裝置的完整狀態延續。
:::

:::narrative dev-duo-auth KB-033,KB-100,KB-101,KB-102,KB-103,KB-104
側邊 Touch ID 提供了另一條明確研究路線。`LocalAuthentication` 延伸 App 的既有驗證流程，App 取得驗證結果，不能讀取指紋影像等底層生物資料。這個界線也應反映在資料模型與介面說明中，避免讓使用者誤以為 App 保存指紋。

在要求驗證前，以 `canEvaluatePolicy(_:error:)` 檢查指定政策的先決條件；不要長期保存回傳值，因為系統設定可能改變。`biometryType` 要在該方法呼叫之後才設定，不論方法回傳成功或失敗，呼叫前預設是 `none`。因此讀到預設值時，不能直接把它解讀成硬體不含生物辨識。官方另提醒不要從 `evaluatePolicy(_:localizedReason:reply:)` 的 reply 區塊呼叫這個檢查，以免可能死鎖。這裡仍是公開流程的技術對照，沒有新品真機驗證。
:::

:::narrative dev-duo-media-power KB-163,KB-164,KB-165,KB-166,KB-167,KB-168,KB-169,KB-172,KB-173
iPhone Duo 後置規格的主相機與超廣角、雙面預覽及雙向同拍，適合拆成不同使用流程。該頁錄製格式列 HEVC 與 H.264，未在這一列列出 ProRes；應保留「本次規格範圍未確認」，不能擴大成任何方式都不可能使用。內外前置相機也有不同錄影上限，切換使用情境時不能沿用同一能力文案。

續航的外螢幕與內螢幕數字分開量測；一般使用則平均使用兩面，不能拿外螢幕播放上限去估算混合工作流程。快充測試以打開配置進行。行動連線需要 eSIM 方案，USB 傳輸需要相應速率線材，無線功能也有地區條件，MagSafe 與 Qi2 另有功率上限；感測器清單不等於第三方資料介面清單。這些限制比單獨記住晶片名稱更能形成可驗收的測試組合。
:::

:::narrative dev-motion-services KB-293,KB-294,KB-295
規格中出現陀螺儀與加速度計後，可對照 `CMMotionManager` 的既有動作服務。它管理加速度、旋轉、磁場及融合後的 device-motion 資料；後者可包含裝置姿態、重力方向與使用者造成的加速度。

可用性與正在更新須分開檢查，例如 `isGyroAvailable` 與 `isGyroActive`；硬體不可用時，對應的 start 呼叫不生效。官方要求 App 使用一個 manager，並在不需要資料時停止相關更新。這些是裝置動作的通用契約，沒有核准 iPhone Duo 鉸鏈角度、摺疊事件或耳機專屬姿態能力。
:::

## Apple Watch Series 12：健康資料授權是產品功能的一部分 {#watch-series}

:::narrative dev-health-experience KB-230,KB-231,KB-130
**從數據顯示走到解說介面。** 影片以日間、夜間生命徵象與準備指數狀態呈現健康資訊，又在手機示例中以睡眠摘要解釋資料。動作評估畫面依序顯示手機擺放、鏡頭定位、動作示範、踏步與結果。這些是產品體驗的研究入口，HealthKit 的授權與 workout 文件並未直接開放同一套評分或個人化解說模型。

若開發自己的健康介面，應先區分原始可讀資料、由 App 計算的結果與展示性說明，不能把讀得到某類資料等同能重現 Apple 的指標。這是編輯提出的實作問題；新健康體驗的完整推出、語言、費用與資格仍待原音核對，沒有據此宣稱台灣目前可用或臨床效力。
:::

:::summary dev-series-summary KB-040,KB-130,KB-131,KB-132
Apple Watch Series 12 的技術研究同時涉及感測資料、運動記錄與配對條件。它搭載 {{KB-040:晶片}}；但自家健康 App 的功能清單，不能當成第三方能讀取每項指標的契約。配對規格要求 {{KB-132:配對系統}}，仍不會自動解決個別資料授權。
:::

:::table dev-series-spec KB-041,KB-042,KB-043,KB-135,KB-136,KB-139,KB-138
{"caption":"Apple Watch Series 12 的配置、顯示與電力","rows":[{"label":"材質","claim_id":"KB-041"},{"label":"精密陶瓷尺寸與其他材質差別","claim_id":"KB-042"},{"label":"錶面材質","claim_id":"KB-043"},{"label":"顯示器","claim_id":"KB-135"},{"label":"三種續航情境","claim_id":"KB-136"},{"label":"快速充電","claim_id":"KB-139"},{"label":"定位與LTE型號","claim_id":"KB-138"}]}
:::

:::narrative dev-series-health KB-130,KB-134,KB-205,KB-206,KB-207
HealthKit 的整合順序可整理成 **確認裝置可提供健康資料 → 說明用途 → 逐類型請求讀取／分享授權 → 依可取得資料呈現**。App 先加入 HealthKit capability，提供讀寫用途說明；呼叫其他 HealthKit 方法前，先檢查 `HKHealthStore.isHealthDataAvailable()`。請求授權不必一次包含所有資料，應與使用者正要完成的功能對應。

授權後的空資料也需要設計。官方文件說明，App 無法直接區分完整讀取授權與拒絕；使用者還可能只允許近期時間範圍。沒有較舊樣本，因此不能直接寫成「你沒有歷史紀錄」。**編輯解釋**：介面可以忠實呈現本次可讀資料與期間，避免把權限缺口變成健康判斷。

這一層不會取消產品註腳。血氧、體溫與生命徵象僅供保健；心電圖、心律不整與睡眠通知有不同適用年齡或對象，經期追蹤也不能作為避孕與診斷。Apple 自家的準備指數或睡眠分數，是否都對應第三方可讀類型，在本輪仍未確認。
:::

:::narrative dev-health-runtime-samples KB-288,KB-289,KB-290
接觸 HealthKit 時，framework 存在與健康資料可讀寫是兩件事：`isHealthDataAvailable()` 查的是當下裝置能力，文件仍列出企業環境限制，以及有 framework 卻不能讀寫的特定平台情況；通過此檢查也不等於取得個別資料型別授權。

心率 `heartRate` 採 count/time 單位與離散樣本，資料可能被 HealthKit 精簡或合併。動態情境 metadata 不保證每筆都有；缺少時依 `notSet` 處理，不能把缺值當成靜止。這提供匯入、呈現與缺值處理的具體邊界，不代表新品心率實測或準備指數算法已公開。
:::

:::note dev-series-workout KB-131,KB-136,KB-137,KB-138,KB-208,KB-155,KB-157
運動 App 的量測需求須與活動種類一起考慮。官方 `HKWorkoutSession` 說明會按活動調整感測器，室內與室外活動所收集的定位資料也不同；這與常態背景健康資料並非同一使用條件。Apple Watch Series 12 的正常、低耗電及室外運動續航是不同測試，不能互換；SOS 又需要可用連線，防水等級也不是允許任意潛水深度。規格也列手勢操控、文字大小與輔助觸控；App 的輔助使用與手勢處理不能省略實際測試。將活動、供電模式、連線與資料需求列成同一張驗收清單，才能避免各自成立卻互不相容的假設。
:::

## Apple Watch Ultra 4：長時間活動要處理 session 與資料缺口 {#watch-ultra}

:::narrative dev-watch-audio KB-232,KB-233,KB-133,KB-143
**語音內容有不同資料形狀。** Live Rewind 餐廳示例顯示談話文字及 Ask Siri 入口；Siri Recap 示例則以標題、摘要與重點清單呈現，另有控制中心的啟動入口。文字回看和重點摘要是不同輸出，應分別理解。

目前沒有核對到這些功能的第三方資料介面，不能用麥克風權限或 HealthKit 推導存取。原音中的回溯時間、背景處理、儲存及加密說明也尚未直接核對，因此本文不據此猜測系統架構。Siri AI 的英文 Beta 條件仍適用於對應產品說明，兩項新功能的額外推出條件尚待確認。
:::

:::summary dev-ultra-summary KB-050,KB-052,KB-145,KB-146,KB-147
Apple Watch Ultra 4 的 {{KB-050:錶殼材質}}、{{KB-145:定位}}、動作按鈕及較長活動模式，提供戶外需求的研究方向。長時間上限模式會關閉提示與分段，部分測量指標無法使用，潛水又需要相容第三方 app。不能把最長時間、最多資料與全部安全功能相加成一個保證。
:::

:::table dev-ultra-spec KB-051,KB-148,KB-053,KB-145,KB-146,KB-147,KB-149
{"caption":"Apple Watch Ultra 4：能力與操作情境","rows":[{"label":"高度","claim_id":"KB-051"},{"label":"重量、厚度與溫度範圍","claim_id":"KB-148"},{"label":"顯示器峰值","claim_id":"KB-053"},{"label":"定位與音訊","claim_id":"KB-145"},{"label":"正常／低耗電","claim_id":"KB-146","value_names":["正常使用最長","低耗電最長"]},{"label":"運動三種模式","claim_id":"KB-146","value_names":["室外訓練最長","長時間模式最長","長時間上限模式最長"]},{"label":"防水等級與潛水上限","claim_id":"KB-147"},{"label":"充電","claim_id":"KB-149"}]}
:::

:::narrative dev-ultra-session KB-141,KB-208,KB-209
`HKWorkoutSession` 是活動的工作階段。文件說明它會依活動調整 Apple Watch 感測器，產生高頻率心率樣本；室外自行車可取得定位，室內自行車則不同。這支持把活動種類納入開始流程，卻沒有證明所有自家 App 指標都可由同一個 session 取得。

同一時間 Apple Watch 只執行一個 workout session。如果另一個體能訓練開始，原 session 的 delegate 會收到 `errorAnotherWorkoutSessionStarted`，原工作階段隨即結束。**整合思路（編輯解釋）**：除了正常開始與結束，也要設計被另一活動取代的狀態，讓介面停止呈現「仍在記錄」的假象。這是依官方生命週期限制提出的測試項目，本文沒有實作背景記錄或驗證新品上的耗電表現。
:::

:::narrative dev-workout-schedule KB-291,KB-292
訓練規劃可另對照 `WorkoutScheduler`：先區分 `isSupported` 的裝置支援與 `requestAuthorization()`／`authorizationState` 的排程權限，再以 `schedule(_:at:)` 安排 WorkoutPlan。排程權限不能替代健康資料的讀取授權。

管理面亦有範圍：`scheduledWorkouts` 是此 App 排定的訓練，另有數量上限查詢、標記完成及移除方法。本文未從類別頁推算上限數字，也未驗證新品上的同步結果。
:::

:::narrative dev-ultra-boundaries KB-140,KB-142,KB-144,KB-146,KB-147,KB-148,KB-149,KB-156,KB-158
Apple Watch Ultra 4 的更長模式有清楚交換條件：長時間模式使跑姿量測不可用，上限模式另外關閉提示與分段，部分指標也不可用。若 App 要提供長時間圖表，必須先核對會收到什麼資料，不能把較疏或缺少的樣本當作使用者活動突然消失。本輪尚未取得這些自家模式與第三方 session 的直接對應文件。

戶外條件也需細分。腕上、一般作業與潛水作業溫度不是同一範圍；防水等級與休閒水肺潛水深度上限不是同一數字。Oceanic+ 要訂閱服務，產品官方註腳也保留潛伴與備用裝置要求。SOS 需要可用連線，並不因錶殼材質或警笛存在就能保證通訊。手勢與輔助使用功能亦須分別設計，不能推定第三方能攔截所有手勢。健康資料與配對條件仍適用，不能把 Apple Watch Ultra 4 名稱當成健康功能授權或醫療效果的提升。
:::

## AirPods 5：先辨識音訊路徑，再談智慧功能 {#airpods}

:::summary dev-airpods-summary KB-060,KB-110,KB-115,KB-116
AirPods 5 的 {{KB-060:耳機晶片}} 晶片、降噪及錄音功能是產品層的能力。對 App 而言，研究順序是先確認音訊路徑與裝置條件，再核對欲使用的公開介面。規格列有 {{KB-115:藍牙版本}} 藍牙，但較舊系統或非 Apple 裝置可能只能使用部分功能；連線成功不能直接當作智慧功能可用的判斷。
:::

:::narrative dev-airpods-boundary KB-110,KB-113,KB-116,KB-119
**整合思路（編輯解釋）**：將播放、通話、錄音及相機遙控分成不同需求。官方列有錄音室等級音訊錄製和語音隔離，但本規格頁沒有替第三方 App 提供一個「啟用所有 AirPods 5 功能」的呼叫契約。相機遙控須符合韌體與配對裝置條件；通話靜音還要相容 app。不能因耳機支援按壓與點頭操作，就假設 App 能攔截每一種動作。

空間音訊另有內容鏈的限制：硬體、軟體、app 和播放內容皆須相容，個人化檔案的建立又依賴具原深感測相機的 iPhone。這些條件適合分別列為測試案例，避免只用耳機型號做單一開關。
:::

:::table dev-airpods-config KB-061,KB-062,KB-063,KB-064,KB-118,KB-117
{"caption":"配置與驗收條件","rows":[{"label":"滑動調音量","claim_id":"KB-061"},{"label":"充電介面","claim_id":"KB-062"},{"label":"標準盒版：ANC 單次上限","claim_id":"KB-063","value_names":["啟用 ANC 最長使用時間"]},{"label":"無線盒版：ANC 單次上限","claim_id":"KB-064","value_names":["啟用 ANC 最長使用時間"]},{"label":"含盒反覆充電的累計上限","claim_id":"KB-118"},{"label":"盒內尋找揚聲器","claim_id":"KB-117"}]}
:::

:::note dev-airpods-ai KB-111,KB-112
即時翻譯與 Siri AI 都有 Beta 與支援條件。前者要求 Apple Intelligence、相容裝置、最新系統及耳機韌體；後者初期先支援英文。這是使用產品功能的前提，並不能證明第三方 App 可使用相同模型或資料。伺服器功能的每日限制也沒有在規格頁給出固定額度，不應在產品介面承諾不限次數。
:::

:::narrative dev-airpods-route KB-210,KB-211,KB-212
公開的音訊路由入口是 `AVAudioSession.currentRoute`，它描述當前輸入與輸出連接埠。裝置加入或移除時，audio session 會重新路由並通知觀察者；App 可觀察 `routeChangeNotification`，再依原因與當前／先前路由處理介面狀態。這比單純保存「曾經連過耳機」更貼近官方描述的即時狀態。

耳機斷線還有具體的使用者預期：Apple 指引要求尊重私密聆聽，移除耳機時應暫停播放；`AVPlayer` 會自動處理此情況，介面可觀察其 `rate` 變化更新狀態。**測試思路（編輯解釋）**：分別檢查接入、斷線與使用者重新選擇輸出後的顯示，讓播放介面跟隨真實路徑。這些文件沒有確認 AirPods 5 新品的降噪、翻譯或手勢控制 API；藍牙版本也不足以證明公開 BLE service，因此本輪沒有硬加 Core Bluetooth 控制示例。
:::

## AI：任務、App 動作與文字生成流程 {#intelligence}

:::summary dev-ai-workflows KB-220,KB-221,KB-222,KB-223,KB-224,KB-247
先看功能所需的工作流程：影片把郵件與訊息線索整理、相機內容提問、清單動作與行事曆候選串進日常任務，也展示 Describe a Shortcut 的既有流程卡、播放圖示與變更輸入欄。對 App 開發而言，值得拆成資料、動作、輸入與完成狀態來研究；舞台示例本身不會告訴我們第三方接口的全部契約。規格頁的視覺智慧另以已啟用 Apple Intelligence 的 iPhone 為適用主體，保留語言與地區限制；這提供條件核對入口，尚不足以確認上述每段示例的完整資格或共用接口。
:::

:::narrative dev-ai-intents KB-222,KB-223,KB-224,KB-242
**從影片任務回到公開 App 整合。** 食材示例的畫面依序出現請求、處理狀態與 Stuff 清單結果；海報示例則顯示{{KB-223:輸出}}，停在可加入行事曆的候選項目；沒有顯示按下 Add All 或加入後的紀錄。兩者提醒我們把「取得資料」與「動作完成」設計成不同狀態。捷徑片段直接切入既有 School Events 卡；卡片列出收到學校郵件後取得活動資訊、建立活動與提醒事項，但這段沒有顯示生成輸入、權限核准、播放點擊或執行結果。

App Intents 官方文件提供可研究的資料模型：用 app intent 宣告動作，用 app entity 與 app enum 表達系統需要理解的資料和選項，編譯器再產生讓系統發現這些宣告的資訊。以清單需求作**整合思路**，可先辨識清單與項目的資料，再定義加入項目的動作及其結果，最後檢查它在捷徑或 Siri 的實際呈現。這是依文件整理的設計方向，本文尚未實作此清單 App，也沒有證明 Stuff 的內部實作採用這個模型。

系統能發現動作與資料，是這份文件支持的範圍；真實帳號權限、參數解析、錯誤和執行確認，要留到該 App 的實作與裝置測試。App Intents 的框架版本亦不能替影片中的每項 Siri AI 新能力背書。
:::

:::narrative dev-ai-session-flow KB-243,KB-244,KB-245,KB-214
**把 App 內文字任務做成可處理失敗的流程。** Foundation Models 指南把摘要、實體擷取、改寫和分類列為可考慮的用途，同時指出基本數學、程式碼生成與邏輯推理未必適合。可以先選一個具體任務，例如替使用者提供的短文產生摘要，再決定輸入與輸出的形狀。

官方流程是先確認模型可用，再建立 `LanguageModelSession`，準備可信 `instructions` 與單一、明確的 prompt，透過 `respond(to:)` 非同步取得回應。單輪互動每次建立 session，多輪才重用；同一 session 前一請求未結束時不能再送下一個。這使「正在處理」與「可再次送出」成為介面需要表達的狀態。

若後續程式需要有型別的欄位，可研究 guided generation；若任務需要本機資料，官方亦描述透過工具執行額外動作的方式。這兩種能力分別處理輸出結構與資料取得，不表示模型自己具備所有資料。以上是核對官方 symbol 的文字流程，尚未編譯、實作工具或進行 runtime 驗證。
:::

:::narrative dev-ai-visual-boundary KB-225,KB-226,KB-229
聲音調整、照片前後差異與 Apple 參考影像，各自解決不同問題：互動偏好、影像編輯，以及從照片介面找到參考影像。照片示例分別呈現路牌與自行車消失、手持花枝人像構圖變寬，以及泳圈人像觀看角度改變；連續核對片段還可見高亮、光暈、模糊與格線等過渡，沒有可辨識的工具按鍵、觸控輸入或存檔確認。不同照片的效果不構成一條已驗證的操作流程，過渡時間也不能當作實機處理速度。影片中的這些畫面不足以推導一個共用模型、同一處理位置或同一第三方 API。參考影像的簽章與雲端流程只有待核對口述線索，先保留查看入口及畫面明列的地區條件。
:::

:::narrative dev-photo-import-boundary KB-286,KB-287
把照片交給 App 處理時，`PhotosPicker` 提供單選、多選及篩選；選取結果只是 placeholder，還要用 `Transferable` 載入表示，從 iCloud Photos 取資料時也可能因離線失敗。圖庫存取的 `PHAccessLevel` 另區分只新增的 `addOnly` 與讀寫的 `readWrite`，不能只看到一個權限層級就當作使用者已同意。

這些文件補的是媒體進出與權限邊界，沒有提供影片擴圖、物件移除或視角變換的公開算法，也沒有讓那些效果自動成為第三方可用能力。
:::

:::summary dev-ai-summary KB-126,KB-170,KB-133,KB-143,KB-213,KB-214,KB-180
產品層的 Siri AI、Apple Intelligence 條件與第三方 Foundation Models 文件要分層閱讀。產品頁的初期英文 Beta、每日使用限制，不能直接當成 App 模型呼叫契約；`SystemLanguageModel` 描述裝置端文字生成，使用前仍須判斷模型是否可用。

指定影片的語言卡另明確註記 Siri AI 不會在歐盟與中國提供；這是固定影片的公告條件，不是本次查詢各地即時服務的結果。
:::

:::narrative dev-ai-model KB-213,KB-214,KB-215
Foundation Models 的 `SystemLanguageModel` 指向可執行文字生成的裝置端 Apple 模型，`default` 用於基礎版本。官方說明模型會隨例行 OS 更新調整，因此 App 不應只用第一次測試的生成結果代表所有後續版本。

`availability` 是唯讀屬性，回傳模型可用狀態。官方示例分別處理裝置不符資格與模型尚未就緒的情況；介面應依實際回傳的可用狀態呈現，不自行指定不可用原因。**流程整理（未編譯示意）**：讀取 availability → 可用才呈現對應 AI 介面 → 不可用時顯示替代操作及符合實際原因的訊息。這段是文字流程，沒有提供或聲稱已執行完整 App 程式。

SDK availability 只回答 symbol 在哪些系統版本開始提供，runtime 才回答當下裝置與設定狀態；兩者都不能替代特定語言、地區、工作負載及輸出品質的驗證。本輪沒有據此把 Siri 的所有功能、伺服器模型或耳機翻譯等同這個 framework，也沒有宣稱新品實機相容已通過。
:::

:::table dev-function-eligibility KB-126,KB-111,KB-224
{"caption":"從功能核對適用條件：固定來源快照，並非即時可用性查詢","rows":[{"label":"Siri AI 的手機規格條件","claim_id":"KB-126","value_names":["功能","產品","必要系統","語言與地區","來源中的推出狀態","其他條件"]},{"label":"AirPods 5 即時翻譯","claim_id":"KB-111","value_names":["功能","產品","必要系統","語言與地區","來源中的推出狀態","其他條件"]},{"label":"捷徑流程卡：尚未核對的條件","claim_id":"KB-224","value_names":["功能","產品","必要系統","語言與地區","來源中的推出狀態","其他條件"]}]}
:::

:::narrative dev-ai-structured-output KB-260,KB-261,KB-268,KB-269
把生成結果交給程式前，先界定型別與容量。Guided generation 以 @Generable 與 @Guide 約束輸出格式，屬性按宣告順序生成；執行時才知道的候選值可用 DynamicGenerationSchema 描述，再轉為 GenerationSchema。這使介面能處理預期結構，但格式正確仍不能當成內容正確的證據。

容量也不只計算使用者輸入。Instructions、Tool、Generable 型別與既有回覆都占用 context；超出可用容量會拋出錯誤。maximumResponseTokens 則限制回覆長度，過度嚴格可能留下格式或文法不完整的結果。**整合思路（編輯解釋）**：分別處理 schema 建立、context 超限與回覆截斷，不把它們都寫成同一個「AI 無法回答」。
:::

:::narrative dev-ai-tool-lifecycle KB-262,KB-263
工具讓 App 程式提供資料或執行動作，並不取消 Contacts、HealthKit 等既有隱私與安全機制。工具拋出錯誤時，ToolCallError 保留工具與底層錯誤，可用來區分資料不可用、權限或外部服務問題。

預設由模型決定是否呼叫工具；若用 required 強制呼叫，必須安排退出條件，例如從工具拋出錯誤，或由 DynamicProfile 改變模式，否則會持續呼叫。這份指南提供設計依據，沒有證明本次產品可使用每一種模式或取得任何私人資料。
:::

:::narrative dev-ai-language-safety KB-264,KB-265,KB-266,KB-267
可信 instructions 與使用者、網頁等外部輸入應分開。官方提醒把未核實資料放入 instructions 會增加提示注入風險。介面還要區分 guardrail 錯誤、字串中的拒絕，以及 guided generation 的 refusal；取得拒絕說明也可能失敗，因此仍需替代顯示。

語言則按當前模型與 App locale 查 supportsLocale，必要時讀 supportedLanguages。OS 與模型版本可能帶來不同支援；偵測不支援時要說明限制並提供替代流程。短段混合語言可能未被偵測，所以「沒有報錯」不構成品質或安全驗證，也不能拿這份裝置端文件證明 Siri AI 的所有語言功能。
:::

:::narrative dev-intent-execution-result KB-270,KB-271,KB-274,KB-276
App Intent 在必要參數解析完成後，才由 perform() 執行 App 程式。EntityQuery 則把系統持有的 ID 解析為 AppEntity；項目已不存在時應省略，而不是補造一個結果。authenticationPolicy 的預設 alwaysAllowed 甚至允許鎖定時不經認證執行 intent；有執行前認證需求時必須明確設定，底層資料與帳號條件仍另行成立。

執行結果可回傳值、對話或 snippet；值可以傳到下一個動作，但 Siri AI 可能不顯示 IntentDialog 或 ShowsSnippetView。**整合思路（編輯解釋）**：把參數解析、業務執行與結果呈現分開驗收，避免只看到一張卡片就宣稱跨 App 工作完成。
:::

:::note dev-shortcuts-declaration-data KB-272,KB-273
AppShortcutsProvider 集中提供預先配置的捷徑及其顯示設定。其文件另揭露 Apple 可能取用匿名化的捷徑短語、顯示表示值、相關 intent 標題與說明，訓練模型以改善捷徑體驗；不要把這段擴大成任意私人資料庫或全部使用者 prompt 的資料使用承諾。
:::

:::narrative dev-intents-validation-layers KB-278,KB-279
驗證需從程式一路走到使用入口：App Intents Testing 檢查執行結果；捷徑檢查參數、文案與跨動作型別；Spotlight 檢查 entity 可被發現；Siri 則用自然說法驗證端到端流程。前一層通過不能取代下一層。

Spotlight 索引不一定與 Simulator 相同，官方要求實體裝置驗證。Siri 還應測試不同說法、支援語言、跨 App 流程與官方列舉的耳機純語音情境，確認口頭結果保留重點。本文建立測試方向，尚未在新品上執行這些測試。
:::

## iPhone Handoff：把狀態提示與切換流程分開 {#handoff}

:::narrative dev-handoff KB-249
影片以 iPhone Handoff 為標題，展示單一手機鎖定畫面上的「{{KB-249:畫面提示}}」，之後放大同一手機的上半部。提示在畫面切入時已存在；這組視覺證據沒有呈現來源裝置、切換輸入或權限流程。

**研究問題（編輯解釋）**：若 App 的設計需要接續工作，應分別確認來源／目標、觸發、進行中狀態與完成回報。這是從展示畫面提出的待驗證問題；本文沒有由一般 Handoff、eSIM 或公開 API 常識補出門號移轉、通話不中斷或第三方相容性。
:::

:::narrative dev-handoff-public-context KB-298,KB-299
一般 App 接續可研究 `NSUserActivity`：它保存某個時點的活動，讓 Handoff 把資料傳到使用者其他裝置，由 App 重建該活動。App 以 `activityType` 區分活動，把 URL、內容識別或其他必要資料放進 activity，再透過 `becomeCurrent()`、`resignCurrent()`／`invalidate()` 管理目前活動；支援的類型需在 `NSUserActivityTypes` 宣告。

這是一般 App activity 的既有契約。影片只有已出現的切換提示，這份文件不能補證門號、SIM、通話、觸發操作或切換成功，亦未確認提示使用同一套機制。
:::

## 近距離能力：按功能確認支援 {#nearby-interaction}

:::narrative dev-nearby KB-125,KB-216,KB-217
超寬頻也有類似的分層。產品列第 2 代晶片，但 Nearby Interaction 提供的是可按功能判斷的 `NISession.deviceCapabilities`。它的能力物件以布林值描述功能支援，精確距離與方向量測可分別檢查。不要用晶片世代代替全部能力的判斷。

**整合思路（編輯解釋）**：先問目前裝置能提供哪些能力，再決定介面要顯示距離、方向或替代資訊；對未確認能力保留缺口。本文已找到 runtime 查詢入口，但未完成特定配件協定、權限、背景執行或新品實機研究，不能把這段寫成可直接部署的近距離定位方案。這同時說明為何 framework 文件必須逐項登錄：某一個 symbol 的平台版本，不能替另一個 symbol 或某個產品背書。
:::

## 系統設定：排程、分類額度與用量 {#system-settings}

:::narrative dev-system-settings KB-246
**把「使用多少」與「何時可用」拆成不同設定。** Apple 的影片並列用量摘要、Screen Time Schedule 與 Time Allowances：一邊查看使用統計，一邊按時段指定 App，或依分類設定共用額度，並切換平日與週末。畫面還有暫停使用、允許不限時及變更排程入口。

**設計問題（編輯解釋）**：如果自己的產品需要呈現類似設定，先分清用量資料、排程規則、分類額度和暫時覆寫，避免用同一開關表示全部狀態。這些是介面提出的設計問題；本輪沒有以自家系統畫面推定第三方資料權限或控制 API，也沒有實測設定生效。
:::

## 台灣價格與日期：安排設備與驗證時程 {#prices-dates}

:::editorial dev-taiwan-guide
安排驗證設備前，先對照所需型號、配置與預算，再回到前文的權限、格式及 runtime 測試項目。以下分別整理台灣官網購買資料與公告日期，供規劃時逐項核對；影片卡片仍可由發表會總覽查看。
:::

:::note dev-usd-context KB-004,KB-005,KB-006,KB-007,KB-010
影片所列價格依使用者確認以美元（USD）標示。安排台灣設備預算時仍以本節的台灣官網價格與配置為準；美元幣別不等於相同市場、稅額或購買條件。原音與完整市場語境仍須核對。
:::

:::table dev-taiwan-prices KB-250,KB-251,KB-252,KB-253,KB-254,KB-255,KB-256
{"caption":"台灣官網價格快照：對應配置、含稅總價與約含稅額","rows":[{"label":"iPhone 18 Pro","claim_id":"KB-250","value_names":["台灣價格","價格對應配置","幣別","含稅與運送","約含營業稅"]},{"label":"iPhone 18 Pro Max","claim_id":"KB-251","value_names":["台灣價格","價格對應配置","幣別","含稅與運送","約含營業稅"]},{"label":"iPhone Duo","claim_id":"KB-252","value_names":["台灣價格","價格對應配置","幣別","含稅與運送","約含營業稅"]},{"label":"Apple Watch Series 12","claim_id":"KB-253","value_names":["台灣價格","價格對應配置","幣別","含稅與運送","約含營業稅"]},{"label":"Apple Watch Ultra 4","claim_id":"KB-254","value_names":["台灣價格","價格對應配置","幣別","含稅與運送","約含營業稅"]},{"label":"AirPods 5","claim_id":"KB-255","value_names":["台灣價格","價格對應配置","幣別","含稅與運送","約含營業稅"]},{"label":"AirPods 5 配備無線充電盒","claim_id":"KB-256","value_names":["台灣價格","價格對應配置","幣別","含稅與運送","約含營業稅"]}]}
:::

:::table dev-taiwan-dates KB-257,KB-258,KB-259
{"caption":"台灣官網公告：開始預訂與開始發售分開列示","rows":[{"label":"iPhone 18 Pro 與 iPhone 18 Pro Max","claim_id":"KB-257","value_names":["開始預訂","開始發售","年份","時區"]},{"label":"iPhone Duo","claim_id":"KB-258","value_names":["開始預訂","開始發售","年份","時區"]},{"label":"Apple Watch Series 12、Apple Watch Ultra 4 與 AirPods 5","claim_id":"KB-259","value_names":["開始預訂","開始發售","年份","時區"]}]}
:::

:::editorial dev-close
實作時可將本文當成需求與核對清單：選產品配置，列必要條件，對照公開 API，再安排編譯與裝置測試。來源中心保留每個論述與規格列的回連；發表會總覽保留影片定位。尚未完成的全片音訊與連續畫面核對，仍是獨立證據缺口。
:::
