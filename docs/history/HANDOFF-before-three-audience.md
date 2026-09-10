# 工程與內容交接：目前狀態

2026-09-10，**partial-evidence-ready，尚未部署**。本文件為現行交接；前階段與本輪安全檢查點完整保留在 [歷史交接](HANDOFF-before-three-source.md)。不要把歷史的零內容或單一來源規則當成現況。

## 安全位置與已保留成果

唯一可寫專案 `<project-root>`，不是原 `<reference-checkout>`。本目錄無 Git、無父層 repo、無 remote；沒有 reset、清除歷史、改遠端或提交。原 repo 只讀，最後 HEAD 仍 `da932859edf5ffc9c00f3c1431db355432d1c3b9`、status 乾淨。

保留既有 Node.js ESM + Markdown → `dist/web`、三頁、主題、字型、Reading/Audit、搜尋、目錄、字級、深淺色、no-JS 與來源卡。初始工程 baseline 的 verify:scaffold 已實跑 exit 0（47 單元、11 Chromium 組），私有檢查點保存原始資料／hash；公開歷史 QA 位於 `qa/scaffold-before-video/`。

沿用 S01、KB-001 等 ID 與證據卡錨點。新增三類來源時保留既有 35 條 verified 與 3 條候選，僅修正必要限制並加入 5 條 Developer 主張。影片摘要不再混入規格頁資料；由資料自動形成的摘要選材因此改變，逐 claim 錨點不變。

## 來源與實際研究結果

- S01 為使用者指定 YouTube `39BalPDuTo0`，以 watch canonical 固定。發布者 Apple 已核對；已取得格式 134 視訊、139 音訊，全檔長度 4860.06 秒，時間以媒體起點與 PTS 為準。hash 與取得紀錄見 manifest。
- 原 Apple TV 頁面可開、API 可讀，媒體 HLS HTTP 403／0 bytes；已存 `qa/apple-tv-intake/`。使用者改以 YouTube 為主後，沒有把 Apple TV 秒數搬過來。
- 字幕下載空回應／逾時、API 400；YouTube 轉錄稿 UI 可讀，CC1/DTVCC1 不證明人工字幕。音訊檔可取得，但工具回覆不支援音訊輸入，因此沒有 audio_checked=true。
- 正式影片只核對 12 個畫格，約在 16:54、17:24、23:15、31:37、31:40、36:30、52:41、1:01:53、1:02:15、1:17:16、1:17:27、1:17:30。**不是這些時間之間連續看完**；coverage 精確保存每個 frame interval。字幕候選範圍另列 15:41–15:50、20:02–20:12、20:55–21:06。
- S02–S06 五個規格頁均 HTTP 200，正文標題、主體、zh-TW、canonical 與 cited locator 已核對；HEAD 路由覆核沒有重新導向。見 `qa/source-routing.json`。
- S07–S09 三份 Local Authentication 文件：實際頁面及同源 DocC JSON 均取得，核對 identifier、章節與 metadata.platforms。只沿 KB-033 Touch ID 功能研究，沒有 SDK／真機測試。

目前 43 KB：40 verified（影片 12／規格 23／Developer 5）、3 candidate、0 disputed。正文 40 blocks；8 筆 page review；4 個 not-yet-reviewed gap，其中前三個阻擋整場 release。未處理的原音訊、連續畫面、地區／價格條件與其他技術方向不可說「影片沒公布」或「沒有 API」。

來源語意覆核另見 `qa/semantic-subset-review.json`：整合者 Codex 再次回到原畫格與官方原文，沒有聲稱另一 Agent 或人類複核。KB-024 的 eSIM 限制收窄至註記支持內容；KB-063/064 補齊電池測試前提。Siri 語言、效能及 eSIM-only 電池字幕仍為 candidate。先前聊天中其他 API／健康／錄影等說法未直接匯入 KB。

## 資料與工程變更

- AGENTS、README、DATA_CONTRACT 改為三類來源；manifest schema v3 沿用 supplemental_sources 登錄，不增加 registry 或 KB。
- sources/coverage v2 新增 page_reviews；網頁 evidence 用 locator/context/revision，不造時間。影片的秒數、版本、模態聯集檢查保留。
- build/data.mjs 只准入五個指定規格 URL 與三份具體 Developer 文件；Developer 需 verified 產品研究前提。一般文件只能 context-only，不接受自動相容推論；SDK availability、verification、產品狀態分開。
- Developer session 尚未收錄；類型保留並拒絕未核准路徑。未實作 session 時間／coverage 前不得拿 S01 混用，也不把目前網頁支援描述成 session 驗收完成。
- renderer 在 Reading 顯示三類標籤、限制與來源；Audit 加詳細紀錄。首頁分列影片與全部計數；event-only 摘要／時間軸只使用 S01。全部正文使用 KB 原句，表格欄位逐項可到證據卡。
- `build/migrate-source-contract.mjs` 提供可重跑 v2 → v3 manifest 遷移；KB／證據／時間不變，已是 v3 不寫檔。單元測試涵蓋輸入保留與重跑。
- 修正 scrollspy：啟動位置依實際 scroll-padding 加 scroll-margin 計算，避免點目錄後仍亮前節。保留頁底判斷。
- 新增真實三類引用／回連／複製秒數及 no-JS 瀏覽器驗收。發現快速回連後立即切頁會中止 script 請求，測試改為等待頁面 load；未刪除資源失敗檢查。

## 時間定位與可續接邊界

在 Codex 內建瀏覽器窄視窗實測 YouTube `t=1014s`、`2190s`、`4636s`：控制時間及實際畫面與固定證據畫格相符；0／4859 秒邊界顯示正確控制時間。現採 youtube-link，只提供官方整秒網址與精確複製時間；不提供 iframe，不承諾子秒 seek 或自動停止。YouTube 目前頁面標題已變動，保留取得快照名稱，沒有替換媒體版本。

未進行 Safari／Firefox／完整輔助科技稽核；正式 E2E 僅 Chromium 與記錄尺寸。原聲音訊及全片連續畫面仍是主要缺口，整場 semantic-review 保持 pending，digest 對應當前資料。

接續應取得可實際聽取核對的同版本音訊處理能力，再逐段擴張 coverage 與 KB。必要時先補充已核對產品功能相關的具體 Developer 原文；不要依聊天 API 名稱硬湊技術關聯。換媒體版本時須重新對齊，不搬舊時間。

## 本機命令與保護

`npm run preview` → http://127.0.0.1:4173；修改後 `npm run build:web` 並重新整理。工程及 release 結果見 [QA](../QA.md) 與 `qa/final-command-results.json`。release 正確拒絕未完整內容，不以 fixture 或縮小承諾範圍繞過。

私有原媒體／完整頁面與工作檔只在 research/.private；dist 白名單無媒體、字幕、PDF、fixture 或私有路徑。CI 只指定 dist/web artifact，本輪沒有執行遠端 CI。未增加英文、PDF、多受眾、CMS、動畫、SEO 擴充或產品插圖。ALLOW_REMOTE_WRITE／ALLOW_DEPLOY 均 false；deploy 程式固定拒絕，沒有遠端操作。
