# 工程與內容交接

## 2026-09-12 現行部署規則：工程與內容認證分開

使用者明確批准草稿在正式網址公開展示，接著要求修正原本的驗證規則。一般 draft／preview 產物通過完整 scaffold、來源／產物安全及明確目標檢查，即可進入 Hosting 計畫；不再為每次草稿上線另立內容例外。完整影音與語意未完成仍如實顯示，release／production 內容認證不冒稱通過。

`check:status` 新增 Hosting 本機前檢，與完整內容認證分開顯示；前檢不代表遠端登入、執行授權或線上成功。正常部署仍須明確 project／site／channel、單次旗標、新計畫／nonce／receipt、同提交 CI 與產物驗收。永久旗標維持 false，私人影片留在本機。新的操作文件已移除歷史矛盾規則；先前流程保留於 Git。另修正內容前檢失敗誤刪有效工程驗證、較嚴格紀錄不能沿用，以及把審查進度寫死為 pending 的不必要耦合。

當前部署結果、精確提交與遠端逐檔驗收以本機 `dist/delivery.json` 為準。下方歷史「內容未完成所以不能 live」只描述舊流程；目前正常草稿 Hosting 依 [部署文件](DEPLOYMENT.md) 操作。

## 2026-09-12 Developer 擴充與美元更正

本輪新增 S30–S51 共 22 份 Apple Developer 文件及 38 條技術對照主張；目前 51 份來源、205 條 KB（202 verified／3 candidate）、四稿 186 節點（event 45、dev 57、AI 使用者 48、大眾 36）。新內容分配到原有主題，涵蓋生成限制與 App 動作驗收、相機與照片流程、健康資料與訓練排程、動作感測、版面和一般活動接續。來源快照、版本及逐項複核保留；未推定新品實機相容。

使用者明確確認影片價格為美元，五條影片價格按 USD 顯示並記錄確認來源；原畫面 evidence、數字、時間及台灣價格保留。目前 Apple YouTube 播放器已裁為 1:17:16，已實際核對代表畫面與官方五個章節。原始證據仍保留固定版本時間；閱讀時間軸與外連換算為目前 YouTube 時間，超界不附錯誤定位。使用者提供的影片僅作本機分析，不納入公開樹。

獨立語意複核已修正照片載入表示、心率資料精簡與系統／App 參數解析責任。202 條 verified 均有正文引用，candidate 不進正文，semantic 已重新綁定全部新內容但仍 pending。原音模型能力測試與影片語意核對分開記錄，安裝或短測試不能完成全片承諾；正式 coverage 仍以來源檔記錄為準。

下方「原音停用」及舊內容數量屬歷史階段；本輪依新授權研究本機原音理解能力。全片影音、GAP-001 至 GAP-003 與正式發布門檻繼續適用。當前本機驗證、公開提交／CI 與音訊能力結果由本機交付紀錄分別保存；歷史草稿預覽不含本輪新增內容。

## 2026-09-12 維護續接：狀態報告與 CI 收尾

工程依賴固定更新至 Playwright 1.60.0，處理 Node 24.16.0 下的瀏覽器解壓相容性問題；CI 加入明確逾時限制，不再無限等待安裝。保留全部測試與內容門檻，最終 CI 仍須對應最新提交。

本次新增 `npm run check:status`，以現有資料產生 `dist/status.json`。它重算覆蓋聯集，核對目前來源／產物是否仍符合完整驗證與乾淨重建紀錄，並列出正式發布阻擋；不查詢遠端、不刪除既有驗證，也不把歷史 preview 視為目前版本。命令成功只表示報告產生，發布仍使用原 gate。

續接時發現舊 `dist/delivery.json` 仍屬草稿部署階段，與後續交接文字不一致。舊檔已逐位元組保存於私有維護紀錄；本次交付改以目前 `dist/status.json` 與新的 `dist/delivery.json` 判讀，歷史 preview 的來源快照、receipt 及授權消耗狀態繼續保留。交付檔僅是有時間戳的快照，後續修改應重跑狀態檢查。

2026-09-12（Asia/Taipei）唯讀查驗確認專用 GitHub 為 Public、Firebase project／site 與設定相符。續接時遠端仍是首次提交，初次 Actions run 34431800822 已完成且為 cancelled；本機另有未推送的交接提交。後續提交與 CI 必須依同一 SHA 的實際結果判讀，最新精確結果保存在本機交付檔；不沿用舊 in_progress 或本機測試宣稱遠端成功。

內容輸入摘要保持不變：167 條 KB、164 verified／3 candidate、161 節點；原音 0 秒、畫面聯集約 43.1058 秒、字幕 30 秒。完整 required_scope、GAP-001 至 GAP-003 及 semantic pending 保留。依本次清理要求，已移除無效能力探測與被成功結果取代的失敗紀錄；原音重試不列入目前待辦。現環境不具原音核對能力，僅在有新的可用輸入能力或同版本可信審查紀錄時重新啟動，屆時才處理 F11 及全片缺口。

## 2026-09-10 最新續接狀態

本次已取得GitHub開源push／Public與通過完整內容門檻後的Firebase live授權，沿用既有專用環境。只讀線上核對已通過，正式origin與設定一致。先前草稿預覽已部署並完成指定驗收，舊授權已消耗；本次不重用舊計畫。GitHub公開與正式內容發布分別驗證，實際結果記於下方本次收尾紀錄及本機dist/delivery.json。

已保全舊部署來源快照、產物、計畫、receipt與線上驗收資料。F11增加15個實際單幀，共0.5005秒；視覺聯集約43.1058秒、原音0秒、字幕30秒。KB-181證據說明的晶片名稱誤植已回看原圖修正；原主張與定位保留。四稿／三份選材重新比較，完整影音、GAP-001至003與semantic pending繼續阻擋正式發布。

以下保留各階段歷史；「未push／未部署」及舊數字只代表該節當時狀態。

### 本次已核實的公開與門檻結果

[GitHub原始碼](https://github.com/sses09935/apple-event-explainers)已正常push並設為Public；首次提交為[e8cd7a2f111cfbf31ae8ed8751dfa7a203beabf5](https://github.com/sses09935/apple-event-explainers/commit/e8cd7a2f111cfbf31ae8ed8751dfa7a203beabf5)，匿名核對192個Git檔案物件一致。主工作區仍非Git，work/github沿用main與原origin；沒有force push、tag或GitHub Release。每個提交的遠端CI以相同e8cd7a2f111cfbf31ae8ed8751dfa7a203beabf5的[Actions紀錄](https://github.com/sses09935/apple-event-explainers/actions)判讀。

本次內容版本已通過193項單元、27組完整Chromium E2E、3459個內部連結與12張代表圖目視；僅含公開清單的新副本依lockfile安裝、scaffold與合成release／production通過。文件收尾後的最終source-tree、產物、提交與CI對應由本機dist/delivery.json保存；完整範圍和限制見 [QA](QA.md)。

真實release、production及新live計畫均拒絕；沒有可發布的production產物或本次live版本。阻礙仍是全片audio＋visual、GAP-001至003與semantic pending。舊草稿preview的來源、產物、計畫與已消耗receipt已比對保存資料全部相符；那是舊版本驗收，不能當作本次修正版的線上驗收。

## 先前內容整合與部署歷史

2026-09-10（Asia/Taipei）。本輪完成可獨立進行的非音訊內容整合與台灣官網價格增補。工程與具體驗證見 [QA](QA.md)，交付狀態見 [發布清單](RELEASE_CHECKLIST.md)；[整合前交接](history/HANDOFF-before-non-audio-integration.md)保留歷史。

## 已完成

共167條KB、164 verified／3 candidate，四稿161節點、27表133列。新增KB-247／248條件、KB-249 Handoff，以及KB-250–259台灣價格／日期；修正23條既有主張。原154條ID與狀態、舊精確evidence定位及S01–S23固定來源版本保留，修正前資料另存。S24–S29六份官方HTML為使用者新提供台灣首頁後的價格追加範圍，獨立類別、版本、身分及定位。

- Calendar保留中途3個與最後9個候選，未宣稱按下Add All或加入成功；捷徑只見既有卡與欄位。
- Handoff只見一支手機既有切換提示；照片是手持花枝、路牌／自行車消失與泳圈視角等不同照片示例；合照只新增預覽變暗再恢復。沒有補猜輸入、觸發或存檔。
- 五份規格140註腳重讀，補語言／系統、帳號／網路／地區、配件／充電與其他限制；保留相容／所有產品的一般名稱範圍。
- 四稿修正折疊姿態、充電配件、模型未就緒原因、潮濕充電禁語、食譜背景及未支持的追蹤措辭。重要條件在Reading可見。
- 三版prices-dates另有台灣7列價格、3列日期表，全部由KB生成；手機完整容量價與原文約稅額留KB。影片原價卡不覆寫，event價格增補前後不變。

## 證據與未知

五段新增連續影格共40.303秒，與舊79個單幀取聯集約42.6053秒；音訊0秒、字幕30秒。精確範圍及功能索引見 [FEATURE_COVERAGE](FEATURE_COVERAGE.md)。連續檢視只覆蓋所列區間，原片、影格、HTML及ASR保留在本機私有研究，不進Git／公開樹／站台／CI artifacts。

全四稿與三份選材已逐節重審主體、數字、條件、強度與claim_ids；新digest綁定全部正式內容。semantic decision仍pending，required_scope仍0–4860.06秒audio＋visual，GAP-001至003仍blocking。GAP-003已更新台灣網頁查核進度，但影片原價卡的幣別／市場／含稅仍待原音。台灣日期保留原文月日，未明列的年份／時區、具體起價錶帶及手錶／耳機個別稅額保持未知。

## 本機交付與環境

六頁、本機預覽、168項單元、27組完整Chromium E2E、條件／價格增補與公開副本乾淨重建已驗證；仍不是正式內容發布。公開來源清單、網站產物與私有研究分開，最終摘要對應由dist/delivery.json記錄。主工作區無Git，ignored的work/github保持原狀。

專用私人空GitHub repository與Firebase project／site在前輪已建立並核實。本輪沒有重做環境、變更登入、push、公開、建立Release、preview／live部署或線上成品驗證；allow_remote_write／allow_deploy保持false。後續獲明確發布授權時才依 [DEPLOYMENT](DEPLOYMENT.md)只讀重查既有目標，不重填或重建已提供環境。

## 目前限制與重新啟動條件

原音核對目前停用，不排程重試。只有取得新的可用原音輸入能力或可信且綁定固定來源版本的審查紀錄時，才重新啟動 F11 的2050–2170秒及全片缺口核對；完成證據後須重新審查四稿與選材並通過正式門檻。

私人研究續接：research/.private/resume-20260910；價格原文／JSON映射在其pricing子目錄。新商店的其他功能FAQ僅留待審，不自動准入。當前檢查結果與命令記錄集中docs/qa；本機交付是dist/delivery.json，精確公開副本位置也記在該檔。


<!-- verified-draft-preview-review-20260910-post-deployment -->

## 2026-09-10 草稿預覽已部署並完成指定線上驗收

本節追加最新結果；前文「尚未部署／尚未線上驗證」及原測試數量保留為當時紀錄，以本節判讀這次 preview 狀態。Firebase project／site 均為 `apple-event-explainers`，唯一 channel 為 `review-20260910`；[本次草稿預覽](https://apple-event-explainers--review-20260910-fa40aajd.web.app/) 已由 CLI 回報部署成功，CLI 顯示到期時間 `2026-09-17 09:30:56`（Asia/Taipei；已核對此 Mac 的 Intl 時區，保留 CLI 原值）。這是使用者核准的單次 7 天 preview，持有連結者可閱覽。

CLI 部署結果與線上驗收分開記錄：`docs/qa/draft-preview-deployment.json` 為 `cli-succeeded`；`docs/qa/draft-preview-remote.json` 在 `2026-09-10T01:36:35.141Z` 記錄 `status: passed`、`preview_verified: true`。本次以 Chromium 對六頁的 390／1280px 執行 40 項檢查，12 張所列視窗截圖完成目視；123 個遠端檔案解壓後的位元組摘要與部署 artifact 相符。此結果涵蓋指定 HTTPS 預覽與所列操作／視窗，不是全頁目視、所有瀏覽器或跨地區 CDN 的驗收。

本次 HTTP `X-Robots-Tag` 實際觀察為 `noindex`；經遠端位元組核對的六頁 HTML robots meta 為 `noindex,nofollow`。兩者分別記錄，不宣稱 header 與 HTML meta 或計畫值完全相同。noindex 是索引指示，不是登入或存取控制。HTTPS 憑證及本次回應、來源回連、字型、robots 與真實 404 均依線上報告核對；未測試環境仍見該報告的 limits。

部署前 scaffold 實際完成 189 項單元測試、27 組完整本機 E2E。單次授權 receipt 已消耗，後續本機重用檢查實際拒絕；正式 release／production 與一般 preview 門檻仍因完整影音、blocking gaps 及 pending 語意審查而阻擋。內容、來源、coverage、gaps、semantic 與設定的 13 份基準檔案 SHA-256 保持不變；`draft`、`pending`、0–4860.06 秒 audio＋visual 承諾及 GAP-001 至 GAP-003 均保留。

只有本次 Hosting preview 已部署；live 未部署、`live_verified` 仍為 false。沒有 GitHub push、repository 公開、Release 或 Firebase Auth 網域同步；本次 CLI 使用 `--no-authorized-domains`。本紀錄不授權續期、重部署、其他 channel 或提升至 live，也不表示影片缺口已關閉。

### 部署快照與部署後文件追加

實際部署所用的公開來源快照保存於 `dist/deployment-source-review-20260910`；原 scaffold／artifact 綁定紀錄保存於本機私有 `research/.private/deployment-preview-20260910/verified-artifact.json`，部署計畫與遠端位元組核對記錄另保存精確 artifact 清單。這輪 deployment wrapper 實作完成後未重跑乾淨 public rebuild；先前的 clean-rebuild 紀錄只屬內容整合階段，不能用來宣稱本次部署來源快照已通過乾淨重建。凍結 source-tree digest 為 `f12f7c20d5df47a765d4849dcd719440923e3ed3b358b264a53368f79876e6e0`，部署 artifact digest 為 `de9a3aa651df2579df21de9b1f921beade870ff1f152c63a1ae6ad3d42280a0a`，output digest 為 `455f22ef0b5c6da9851948b7dde170df4a1618746d89ddfb022a87e284a93bb7`。

本次只在部署後追加 HANDOFF、QA、RELEASE_CHECKLIST、DEPLOYMENT 四份文件，因此目前 workspace source-tree digest 會與上述部署快照不同。舊 scaffold／交付驗證只適用凍結快照，沒有重新簽署成目前來源的驗證，也沒有因文件追加重建產物或重部署。四份原文件的私有備份、追加前後摘要及檢查結果記於 `research/.private/deployment-preview-20260910/post-deployment-doc-update.json`；既有 `dist/verification.json`、部署快照與線上 artifact 均保留不改。後續若修改產品內容或工程，須另行驗證，不能沿用已消耗授權。

原音及全片影音缺口仍存在；目前不安排重試，重新啟動條件依上方最新維護紀錄。這次 preview 可供閱讀回饋，不能關閉來源缺口。
