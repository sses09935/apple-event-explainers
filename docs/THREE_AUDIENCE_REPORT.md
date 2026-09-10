# 三受眾改版：before／after

> 先前階段紀錄；數量與測試是當時快照，最新狀態請見 [HANDOFF](HANDOFF.md) 與 [QA](QA.md)。

交付日期：2026-09-10（Asia/Taipei）。既有 Node.js ESM／Markdown 專案已產出可讀的三版網站；未更換框架或改寫原 AFM 專案。**三版工程完成；本輪選定來源的三版文章已完成編輯與語意複查；全片證據仍未完成，整場 release 被阻擋。**

## 實際閱讀入口與三版差異

| 版本／網址 | 獨立文章的任務與選材 |
| --- | --- |
| [開發者版](http://127.0.0.1:4173/dev.html) | 硬體／型號整合表、相機授權與格式、iPhone Duo 版面與身分驗證、HealthKit／Workout、音訊路由、AI 與近距離 runtime 檢查。將產品規格、SDK availability、自家功能與公開 API 分開；不假裝編譯或實測。 |
| [AI 使用者版](http://127.0.0.1:4173/ai-user.html) | 從拍攝、摺疊閱讀、運動、充電、通勤與翻譯等需求解釋差異；說明性例子明示非官方展示或本人實測。比較使用條件，不下必買結論。 |
| [普羅大眾版](http://127.0.0.1:4173/general.html) | 短段落、五張必要整合表與 FAQ，先交代各產品用途，再說尺寸／續航／功能限制及價格日期。保留重要條件，沒有把技術版的有條件支援改成保證。 |

三版各自包含 iPhone 18 Pro 與 iPhone 18 Pro Max、iPhone Duo、Apple Watch Series 12、Apple Watch Ultra 4、AirPods 5、Intelligence 六主題，穩定 topic ID 可切換到另一版同主題。草稿分別在 content/drafts；選材目的在 content/audiences。首頁以三張入口卡為首個主要閱讀區，只保留一個精簡未完成提示。event.html 保留舊總覽與錨點；sources.html 提供共同證據與跨頁回連。

## 資料真正增加了什麼

baseline（本機紀錄：`../qa/three-audience/baseline.json`，未納入公開匯出） 與 最終計算結果（本機紀錄：`../qa/three-audience/final-metrics.json`，未納入公開匯出） 均按 unique KB 計數，不因三版重用而增加。

| 項目 | Before | After |
| --- | ---: | ---: |
| unique KB | 43 | 128（新增85） |
| verified | 40 | 125 |
| candidate／disputed | 3／0 | 3／0 |
| verified：影片／規格／Developer | 12／23／5 | 15／87／23 |
| 已登錄來源 | 9 | 21 |
| Developer 文件 | 3，僅 LocalAuthentication | 15，新增12份 |
| 獨立受眾文章 | 0 | 3 |
| 正式 reader nodes（含編輯過渡） | event 的40個原句block | 117：event42、dev29、AI27、general19 |

按 KB 原 topic 的125條verified分布：iPhone 18 Pro27、iPhone Duo24、Series17、Ultra16、AirPods17；Touch ID／App驗證5、相機影音4、iPhone Duo版面1、健康運動5、音訊耳機3、AI／App開發3、近距離互動2、影片Intelligence1。這是分類分布，不是跨類重複計數。

五份指定台灣規格的完整可讀快照已按 `.techspecs-row`、欄位標籤、列表及關聯註腳檢視，原HTML hash重新計算匹配manifest。沒有只抓h2/h3，也沒有把HTTP 200算成閱讀完成。

| 規格來源 | 實際 DOM 列 | 選定內容納入 | 明確排除 |
| --- | ---: | ---: | ---: |
| S02 iPhone 18 Pro／iPhone 18 Pro Max | 40 | 27 | 13 |
| S03 iPhone Duo | 35 | 23 | 12 |
| S04 Apple Watch Series 12 | 21 | 17 | 4 |
| S05 Apple Watch Ultra 4 | 21 | 19 | 2 |
| S06 AirPods 5 | 16 | 13 | 3 |
| 合計 | 133 | 99 | 34 |

「納入」表示該列選定資訊與必要註腳進入KB，不代表逐字抄入整列；AirPods 5欄頭／重複版面不算新增事實。擴充包括材質容量、尺寸重量、顯示器、晶片、相機錄影、感測器、連線定位、充電續航、防護、健康運動、安全、輔助使用、相容性與限制。型號／內外螢幕／單次與含盒累計／不同操作模式分開，必要測試前提在Reading可讀。環境宣稱、購物導覽與次要完整格式清單等有排除理由；不適用及待核對另列。[逐列盤點](CONTENT_COVERAGE.md) 可追來源列、型號、註腳與KB。

## Developer 原文與未確認的關係

全部來源中繼資料仍只登錄於 manifest；以下為研究成果摘要，不是第二份registry。

| 方向 | 實際新增文件 | 本次確認／仍未確認 |
| --- | --- | --- |
| 相機／影音 | S10 Capture setup；S15 Requesting authorization to capture and save media；S16 formats | 通用capture接入、相機／麥克風權限、逐裝置格式列舉；可變光圈及全部官方相機功能的第三方控制未確認。 |
| iPhone Duo版面 | S11 ViewThatFits | 根據可用空間選擇視圖；特定摺疊事件、內外螢幕專用API未確認。既有S07–09驗證研究保留。 |
| 健康／運動 | S12 Authorizing access to health data；S13 HKWorkoutSession | 逐類資料授權、讀取隱私限制、runtime檢查、workout session；自家App所有指標／長時間模式／潛水能力的公開介面未確認。 |
| 耳機／音訊 | S14 currentRoute；S17 Responding to audio route changes | 輸入輸出路由及路由改變的播放處理；ANC、即時翻譯、全部手勢的第三方控制未確認。 |
| AI | S19 SystemLanguageModel；S20 availability | 裝置端文字模型與availability分流；不將Siri全功能、台灣／特定語言或新品規格當API相容證據。 |
| 近距離互動 | S18 deviceCapabilities；S21 NIDeviceCapability | 依裝置runtime能力分項檢查；不由UWB世代推定所有功能。 |

每份新文件實際取得HTML與DocC原文，確認canonical／identifier／title／版本與locator，直接讀取內容後才納入。SDK availability只採該文件明載metadata；文件均context-only。Core Bluetooth僅由耳機藍牙版本不足以支持控制／GATT關係，本輪不納入；VideoToolbox、App Intents、Metal未建立本輪產品特定支持關係，不以API名稱湊段落。沒有登錄session，也沒有借用S01時間。

## 有效正文與整合表

| 版本 | 作者正文非空白字元（含英數） | 其中漢字 | 整合表／列數 | 所選 unique KB |
| --- | ---: | ---: | ---: | ---: |
| 開發者 | 5,594 | 3,849 | 6／39 | 110 |
| AI使用者 | 3,789 | 3,007 | 7／33 | 81 |
| 普羅大眾 | 1,674 | 1,247 | 5／22 | 61 |

計數只含作者summary／narrative／FAQ／note插值後正文，排除導覽、標題、editorial過渡、表格、來源原文、重複限制、Audit與log。表格列數另報，不加進有效正文；三版共用事實也不計三倍新資訊。篇幅短於最初參考區間，採六主題敘事＋整合表完成各版任務，沒有用免責／查核文字補足字數。選材分布：dev含84規格、23Developer、3影片；AI含73規格、3Developer、5影片；general含53規格、8影片。三版讀者問題與敘述經逐段編輯檢查，非改標題／顏色的副本。

## 工程限制解除與保護

頁面manifest／schema／loader從三頁單draft改為必需完整六頁與三audience；缺頁仍報錯。最小grammar新增穩定node、多claim敘事、摘要、FAQ、note、editorial及KB表格。數值插值共用KB；source-map與證據回連含各頁／各節點／表格列。所有draft與audience設定納入semantic digest。首頁與摘要由編輯選材，event摘要／時間軸只用S01，舊40個引用順序與錨點保留。

Developer移除S07–09永久白名單，但仍驗逐份原文／身分／已核對研究前提／locator；未登錄、不相關或缺原文的反例保留。影片精確時間、版本、模態聯集、候選隔離、來源類別、安全Markdown、私有追蹤與dist白名單未放寬。表格保留逐列引用，條件按唯一KB去重；通用技術提示與相同來源版本SDK列表去重，重要限定在Reading可見。遷移工具保留原檔且可重跑，詳見HANDOFF與DATA_CONTRACT。

## 驗證與三種完成度

最終 scaffold完整log（本機紀錄：`qa/three-audience-scaffold.log`，不納入公開匯出） 的check、test、build:web、check:links、debug:web、test:e2e均exit 0；102單元通過、六頁2154內部連結／資源引用有效。隔離正向release fixture亦exit 0，正式資料與輸出digest不變；這不批准真實內容。Chromium 145於390／768／1280px，27組檢查、39張截圖，全數通過；三版390px／120%字級的18張表及25個API symbol另測鍵盤／換行／水平溢出。每版Reading／Audit、搜尋、目錄、字級、深淺色、鍵盤、引用往返、跨主題版本及no-JS均驗證。console與資源錯誤為零。詳見 [QA](QA.md) 與 browser-results（本機紀錄：`qa/browser-results.json`，不納入公開匯出）。

| 狀態軸 | 精確結果 |
| --- | --- |
| 三版工程 | 完成，本機可預覽，scaffold通過；未部署。 |
| 三版編輯 | 本輪已取得、選定的來源內容完成三份獨立文章與語意複查，125條正式主張可在所列限制下閱讀；不是獨立產品實測。 |
| 全片證據 | partial，S01全長4860.06秒；15單一畫格聯集約0.5005秒，音訊實際核對0秒，字幕僅30秒定位。沒有完整章節或連續畫面時間軸。 |
| 整場release | verify:release exit 1，符合預期：承諾coverage不足、blocking gaps未解除、完整semantic仍pending。required_scope未縮小。 |

本輪另核對3張候選附近畫格，新增KB180–182但保留KB090–092原候選及缺口：畫面只支持語言／地區卡、比較圖文字與36小時播放卡，不支持完整口述、工作負載或eSIM配置。全片與價格日期條件仍待核對，不寫成「影片未公開」。語意記錄已對最新digest重建，見 子集審查（本機紀錄：`../qa/three-audience/semantic-review.json`，未納入公開匯出）。Safari／Firefox、真機、SDK編譯與完整輔助科技未測。

原AFM仍相同HEAD且工作樹乾淨；本專案未初始化Git。未遠端寫入、push、release、CI執行或部署，未設定Firebase目標。research/.private原媒體／完整原文／字幕／大量畫格不進dist或artifact；正式截圖僅網站UI。原始資料與歷史文件保留。
