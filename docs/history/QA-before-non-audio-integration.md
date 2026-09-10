# 本機驗證與語意邊界

本輪日期：2026-09-10（Asia/Taipei）。最新公開狀態見 [發布清單](RELEASE_CHECKLIST-before-non-audio-integration.md)。[前輪 QA](QA-before-feature-release.md) 保留歷史數量，不能當本輪測試結果。機器紀錄與完整截圖位於本機 docs/qa，公開匯出只保留下列摘要與少量已檢視示例。

## 內容核對

原128條 KB 的 ID、verification、數值／單位及精確 evidence 定位比對不變。新增26條後為154條、151 verified／3 candidate；其中影片35、規格89、Developer27。四份草稿共148節點，三受眾共104節點。語意摘要包含全部草稿與 audience 選材，decision 仍 pending。

本輪核對64個新增單一畫格的介面與可讀內容，以及兩份新 Developer HTML／DocC 的身分、原文與定位。五份原規格 hash 匹配；產品名稱以實際標題及型號欄確認。3353段 ASR 只定位，不核准口述。正式視覺共79個單一畫格、聯集約2.635967秒；原音核對0秒、字幕30秒。全片 required_scope 0–4860.06秒 audio+visual 與三個 blocking gap 保留。

新補 KB-246 與三版 system-settings 已核對畫面標籤與敘事：依排程、分類額度與用量回答不同問題，沒有把不同帳號介面示例寫成同一帳號的連續操作，也未宣稱設定已生效。耳機翻譯對話仍待原音核對，精確範圍見功能索引。

三版編輯比對聚焦用途、操作完成程度、主體、數字、語言／地區、推出強度與第三方接口：海報維持候選而非加入成功；捷徑只寫已見流程卡；照片只寫前後差異；健康／語音效果不當實測；iPhone Duo 半摺疊觀看與直立時鐘分開。修正重複的產品全名、來源中的繁中錯詞及把快照 Beta 寫成即時狀態的措辭。沒有冒稱人類或其他 agent 複核。

## 工程結果

| 檢查 | 已取得結果與邊界 |
| --- | --- |
| check | 154 KB、148 reader nodes、六頁；來源關聯及名稱／用語有效 |
| npm test | 135 tests 通過，零跳過；含原102項與新增發布／隱私正反例 |
| build:web、check:links、debug:web | 六頁、2869個內部引用；精確錨點、DOM、產物白名單通過，非外站逐頁探測 |
| Chromium E2E | 27組通過，390／768／1280px、39張本機截圖 |
| test:release-fixture | 隔離副本實跑 npm ci、verify:release、verify:production 均 exit 0；正式內容與產物不變，副本已移除 |
| 套件稽核 | Ajv 8.18.0、markdown-it 14.3.1；本輪 npm audit 回報0項已知漏洞，不是無漏洞保證 |
| 公開清單與乾淨重建 | 結果與發布就緒狀態見 RELEASE_CHECKLIST；完整檔案清單不含私有研究或原 node_modules |

公開副本另抓出阻礙提示的優先順序，已改成來源存取受阻優先於部分核對狀態，保留首頁單一提示。

新增公開檔案類型白名單，拒絕無副檔名金鑰、原始 HTML 快照及憑證檔；明確私有媒體仍優先回報私有檔案錯誤。公開歷史文件也逐字檢查完整產品名，沒有整個資料夾豁免。另修正公開歷史文件的「不換框架」「視覺檢查」「記錄資訊」三處殘留簡體用字，將完整錯詞加入既有反例，沒有新增單字黑名單。部署執行時另帶的 channel 若與計畫不同，mock 也不得被呼叫。這三項反例加入本輪單元測試。

原 E2E 對單一影片片段的假設已改為逐個 evidence 驗證網址與精確複製時間。各版獨立檢查 Reading／Audit、搜尋 Enter／Escape、目錄與焦點、字級保存、配色、鍵盤橫捲、跨版同 topic、來源與返回連結、無 JavaScript 降級。三版窄螢幕120%字級無整頁水平溢出。來源類別與重要條件在 Reading 保持可見。另對新 system-settings 主題逐版驗證直接錨點、兩個同主題切版入口、KB-246 證據往返、返回與重新整理；三版390px截圖已逐一目視檢查，無整頁溢出。這3張局部截圖另存本機，未新增公開圖集。

新增測試涵蓋完整產品名、重複名稱、實際繁中錯例，以及合法「公里／核准／台灣」、API／URL、精確原名豁免。生成的 title／description／alt／aria 也檢查。合成正式六頁各有 self-canonical 與不同 metadata；404 回傳404，preview header 非索引、production header 可索引，固定檔名需重新驗證快取。CSP 下主題、字型、閱讀工具及按鈕載入的 mock 官方播放器可用。

部署正向案例只注入本機 mock，確認 staging bytes 與安全參數；未執行真實 Firebase CLI。缺授權、目標不符、原參考目標、缺／過期確認、產物或來源變動、缺完整發布驗證、pending 內容、重用確認與失敗後重試均拒絕。合成資料通過不核准真實內容。

## 本機效能與目視檢查

`node tests/measure-web.mjs` 可重現量測：loopback HTTP、Chromium 145、每頁／尺寸新 context、無 CPU／網路降速，等待字型完成。未測遠端 CDN 或宣稱 Lighthouse 分數。頁面未壓縮；gzip 數字僅計算估計。

公開 HTML 約4–460 KB，三篇正文約226–347 KB；每頁另外請求4個本機資源，合計約131 KB。macOS 優先使用系統字型，本次一般首屏 Noto woff2 請求為0；測試樣式強制 Noto Sans TC 後實際載入20個本機子集，無失敗且文字字型可用。所有一般頁面首屏外部請求0、水平溢出0。詳細毫秒數為單次本機觀察，保存在 docs/qa/performance.json，不能外推為使用者網速。

整合者實際檢視首頁、AI 任務、開發者 App 動作與普羅大眾的雙螢幕段落。公開示例：[首頁](../images/preview-home.png)、[AI 功能段落](../images/preview-ai-user-feature.png)。大量全長截圖不入公開清單；其大小沒有被當成網站效能問題。

## 未完成範圍

真實 verify:release／verify:production 必須因全片覆蓋、blocking gaps、pending 語意審查而失敗；build:production 的正式 origin 已由新 Hosting site 核實，內容門檻仍未通過。沒有縮小 scope 或刪 gap。Firefox、Safari／WebKit、真機、SDK 編譯、API runtime、完整輔助科技、遠端 CI、Firebase 帳號權限、TLS／CDN 與回復均未驗證。

本工作區無 Git；公開候選清單可檢查，不能宣稱已查不存在的 index／歷史。本輪追加授權只建立私人空 repository 與 Firebase 專用空環境；沒有推送、公開、網站部署或線上成品驗證。內容核對、來源取得、來源範圍日期與建置時間分開，活動日期／台灣觀看日期未用推算填空。

CI 只做驗證與受限的 dist/web artifact，上傳不含研究資料或 QA 圖。官方 checkout／setup-node／upload-artifact 的已讀取版本以完整 commit SHA 鎖定，Node 與 .nvmrc 一致；contents: read、停用 checkout credential 保留，無自動部署、遠端 secrets 或遠端 CI 執行紀錄。

## 發布環境追加驗證

新增四項環境與憑證檢查反例：所有探測限唯讀；原始 stdout／stderr 與 token 欄位不進輸出；本機模式不連帳號或使用預設目標。真實線上檢查已確認私人空 GitHub repository 與 ADMIN 權限、Firebase ACTIVE project 及該 project 的 Hosting site／defaultUrl。本機空 Git 工作目錄 ls-remote 成功，沒有 commit／push。Firebase 舊 CLI 登入已撤銷後重新授權。沒有 Hosting 部署權限實測、手機連線實測或自動發布。
