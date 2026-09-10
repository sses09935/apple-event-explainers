# 發布檢查清單

本輪已完成本機發布準備，並依追加授權建立私人空 GitHub repository 與 Firebase 專用空環境；沒有推送、開源或網站部署。內容仍是已核對子集；不得將工程就緒當成整場內容核准。

| 狀態 | 本輪結論與依據 |
| --- | --- |
| repository-ready | **本機是**。189個明列公開檔案通過名稱／繁中、敏感資訊、私有路徑、檔案邊界與文件連結檢查；只用公開清單在新副本依 lockfile 安裝，完整 scaffold 與合成 release／production 通過。主工作區仍未初始化 Git；另建 ignored 空 Git 工作目錄與私人空 repository，尚未推送。 |
| content-release-ready | **否**。S01 承諾範圍仍0–4860.06秒 audio+visual；原音核對0秒、視覺79個單一畫格約2.635967秒、字幕30秒。GAP001–003仍 blocking，semantic decision 為 pending。 |
| deployment-prepared | **本機是**。preview／production、六頁 metadata、404、Hosting headers、明確 project／site／channel、計畫、產物與完整驗證綁定、一次性確認及失敗不重試已實作並通過本機正反例；專用目標已建立並回查；尚缺內容完成與該次發布／部署授權。 |
| live-verified | **否**。沒有部署 preview／live，未實測部署權限、網站 TLS／CDN、線上內容或回復。 |

## 本輪交付

- 新增26條已核對功能／技術主張，共154條 KB、151 verified／3 candidate。三份正文獨立，六頁保留；event 44、dev 39、AI 使用者37、普羅大眾28節點。
- AI 使用者版先讀任務；開發者版增加 App 動作／資料與模型 session 流程；普羅大眾版增加功能用途。規格與精簡適用條件表都從同一 KB 生成，未知不推定支援。
- 原128條主張的 ID、狀態、數值／單位及精確 evidence 保留；產品全名、繁中、搜尋與輔助標籤從可編輯來源修正。
- 135項單元測試、27組 Chromium 互動、三尺寸及120%字級驗證；完整數量、模擬與未測範圍見 [QA](QA-before-non-audio-integration.md)。

## 實際阻擋確認

以下對真實工作區均 **exit 1，符合預期**：`verify:release`、`verify:production`、`build:production`、未帶授權的 `deploy`，以及 `deploy:plan -- --channel review`。沒有將語意旗標改 approved、縮小 required_scope、刪除 gap 或借用合成內容取得成功。

四項專用目標已依使用者確認建立並回查後寫入 config；預設 allow_remote_write／allow_deploy 均 false。GitHub 為私人空 repository 且目前帳號具 ADMIN 權限；Firebase 專案／site 可讀及 origin 已驗證，未做 Hosting 寫入權限實測。登入與環境建立不代表已授權發布。

## 公開邊界與複驗

公開 source tree 包含程式、設定、lockfile、KB、四份草稿、三份選材、來源中繼資料、文件、兩張精簡介面示例及測試。Firebase 僅接收經檢查的 dist/web；原影音、原頁、完整字幕／ASR、私有工作檔與大量 QA 不在兩者之中。

`npm run check:public-tree` 產生本機 dist/public-tree.json 的精確清單與摘要。`npm run verify:public-tree` 在新 OS 暫存副本使用獨立 npm cache、空白使用者設定與公開 registry 安裝，保存本機 docs/qa/public-rebuild.json 和逐命令退出碼，移除副本。主機的 Chromium 測試 runtime 是工程依賴；不帶入原專案 node_modules、dist、研究快照或登入檔。公開重建證明可生成與測試網站，不能重新證明媒體事實。

最終公開副本可由 `node build/public-tree.mjs --export NEW_DIRECTORY` 建立；目的地必須不存在。未有 Git，不聲稱完成不存在的 index／歷史稽核；日後 Git 已存在時工具另檢查追蹤清單、index 與可達歷史，不重寫歷史。

後續依序：補齊同版本證據與功能條件 → 重做整場語意審查 → 重查已設定的專用目標與登入 → verify:production → 本機計畫與明確 preview 授權 → preview 網址核對 → 新的 live 計畫及授權 → 正式 smoke test。操作與回復見 [DEPLOYMENT](../DEPLOYMENT.md)，剩餘研究定位見 [FEATURE_COVERAGE](../FEATURE_COVERAGE.md)。

## 原始要求逐項對照

以下按整合指令的0–18項核對目前檔案，不以測試數量代替內容完成。

| 項次 | 目前證據與未完成條件 |
| --- | --- |
| 0 權限與範圍 | 六頁靜態架構與原參考歸屬保留；config 四個目標已核實、兩項預設旗標 false；已授權建立私人空 repo 與 Firebase 專用空環境，沒有公開或部署。 |
| 1 當前狀態與保留 | HANDOFF／QA 記錄重新計數；原128條身份、數值及 evidence 不變，event 舊引用順序保留。 |
| 2 來源與單一權威 | 事實只在 KB；manifest 登錄23個來源及名稱。Developer 有逐來源版本／身分／locator，session 未准入。 |
| 3 功能輪廓 | FEATURE_COVERAGE 涵蓋全場 ASR 結構及 F01–F22；名稱線索、已核對功能與待研究項目分開。仍有完整流程與服務條件缺口。 |
| 4 原音／畫面 | 79個精確 PTS 單一畫格有紀錄；未將 ASR 或抽樣算成原音／連續覆蓋。F11 對話原音及全片模態要求仍受阻。 |
| 5 用途與流程 | 三版解釋個人線索、清單、海報、捷徑、照片、拍攝、健康、多工及使用時間設定。流程只寫已核對步驟；聲音效果與未見觸發仍待核對。 |
| 6 三版取捨 | dev 的動作／資料／session、AI 使用者的任務路線、一般讀者的用途獨立撰寫；第三方接口只作文件對照。未完成新品 SDK／runtime 驗證。 |
| 7 條件與導覽 | 三版從同一 KB 生成適用條件表，未知維持未知；日期用途分開；穩定 topic／node 與回連保留。來源未提供的條件仍待研究。 |
| 8 全名與繁中 | quality／生成 DOM／公開清單共同檢查，歷史文件沒有整頁豁免。精確例外只有 S02 原標題、「Pro 控制項目」、「Duo 雙面預覽」及其來源理由；保留 API／URL／原始歸屬。 |
| 9 讀者、安全與效能 | 六頁互動、無 JS、三尺寸與120%字級經 Chromium 檢查；安全反例及本機實測見 QA。未測 Safari、真機、完整輔助科技。 |
| 10 三種資料邊界 | 公開原始碼清單、dist/web、私有原文／媒體／QA 分開。拒絕原始 HTML、無副檔名金鑰與憑證；未刪原件，未假稱檢查不存在的 Git 歷史。 |
| 11 公開重建與文件 | 189檔精確匯出，新 npm cache／空白設定安裝與完整測試；README、NOTICE、授權、貢獻與安全說明已整理。原始 code license 不涵蓋第三方素材。 |
| 12 輸出 profile | preview 可展示；production 已有核實 origin，仍需完整內容 gate。合成六頁 metadata／canonical／robots／sitemap／404 已測，真實正式包仍拒絕。 |
| 13 Firebase 操作 | 本機 wrapper、Hosting 設定、計畫及 mock 可用；project／site／channel、一次性確認與既有站保護皆檢查。日後操作及回復流程見 DEPLOYMENT；專用環境已回查，部署與回復尚未驗證。 |
| 14 同份資料與產物 | semantic digest 綁四份草稿及三份選材；verification、source tree、產物與計畫摘要另行比對。pending 保留，變動後不得沿用舊核准。 |
| 15 CI 與相依 | Node 24.16.0、lockfile、官方 action 完整 SHA、contents: read；只有 QA 與公開 dist artifact，沒有雲端 secrets 或自動部署。遠端 CI 未執行。 |
| 16 驗收矩陣 | 正式工作區 scaffold、公開乾淨重建與合成 release／production 分別記錄；真實 release／production／deploy 阻擋是預期結果，不能記作發布成功。 |
| 17 執行與剩餘工作 | 已先補功能再完成可獨立驗收的工程；未新增框架或平行平台。原音／連續畫面與整場語意審查仍需續接，沒有降格成先發布再補。 |
| 18 可接手交付 | 本清單、QA、FEATURE_COVERAGE、DEPLOYMENT 及本機精確匯出／產物清單可直接續接；四種狀態分開，環境網址不當作已部署的線上成果。 |

目前版本為 package 0.1.0，preview，來源範圍日期2026-09-09。實際內容核對時間、建置時間、內容摘要與 commit／dirty 狀態由 dist/web/build-info.json 記錄；完整交付摘要在本機 dist/delivery.json。來源清單、語意輸入與網站產物是不同摘要，建置時間變化不宣稱位元級重現。

## 手機接手環境

已安裝 GitHub CLI 2.95.0、Firebase CLI 15.21.0、Git 2.54.0、Node 24.16.0。手機連回同一台 Mac 後，先執行 `npm run check:environment -- --online`；目前兩個專用目標通過唯讀查驗。GitHub 保持私人與空白，Firebase 沒有網站 release，沒有啟用自動部署。重新登入使用官方瀏覽器流程，安全檢查不輸出登入憑證。詳見 [操作與配對條件](../DEPLOYMENT.md)。

內容審核的新發現與尚未整合項目已保存在 HANDOFF 的「內容工作保存點」；環境就緒不等於那些修正已完成。
