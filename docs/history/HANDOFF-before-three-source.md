# 工程交接：Apple Event Explainers

## 目前位置與範圍

**唯一工作專案：`<project-root>`。** 使用者明確指定此目錄；初始工程曾暫存於 Codex outputs，已移入本目錄，後續不要回到舊目錄開發。

本階段沒有 EVENT_VIDEO_URL。正式 KB、draft claim 區塊與 coverage/gaps 清單均為空；manifest 未知欄位均 null。沒有填產品、活動日期、假規格或舊 AFM3 事實。目標是可接續研究的 scaffold，不是內容發布。實際驗證結果見 `docs/QA.md` 與 `docs/qa/browser-results.json`；不能以文件預期取代測試結果。

固定三頁：index.html（首頁）、event.html（閱讀頁）、sources.html（證據頁）。Node.js ESM + Markdown → 靜態 HTML → dist/web，不使用 React、Next.js、CMS、資料庫或 PDF。

## 來源與隔離檢查

- 唯讀參考 repository：https://github.com/sses09935/apple-afm3-explainers
- 開始時以 `git ls-remote ... refs/heads/main` 解析的 SHA：`da932859edf5ffc9c00f3c1431db355432d1c3b9`。
- 本機參考 checkout：`<reference-checkout>`，HEAD 同上，開始時 `git status --short` 空白，remote origin 指向參考 repo。
- 開始時對原 repo 全部 tracked regular files 建立 SHA-256 基準，完成後比對，結果另存 `docs/qa/isolation-results.json`。
- 線上參考站 https://apple-afm3-explainers.web.app/ 已在 Codex 內建瀏覽器打開首頁與開發者閱讀頁；首頁顯示 commit `da93285`。網頁抓取工具失敗後改用瀏覽器成功。這是代表畫面的人工對照，不是完整逐像素／跨瀏覽器比對。
- 原始程式、Git 歷史、remote、原 dist、原 Firebase 設定未改。未建立遠端 repo、push、release 或部署。

## 工程參考紀錄

以下依實際原始碼檢查而非 README 推測。產品內容即使在檢查原站時看見，也不作新專案事實。

| 入口 | 原實作與檢查重點 | 處理 |
| --- | --- | --- |
| AGENTS.md | 六份雙語 PDF/Web、T1/T2、beta、受眾限制 | 排除產品不變式；重寫新專案 AGENTS |
| README.md、DESIGN.md | 讀取工程、建置、字型、介面與權威邊界相關段落；文件會混合歷史與產品內容 | 保留分離事實與呈現的原則；改寫本專案說明 |
| package.json、package-lock.json | ESM、markdown-it、attrs、Playwright、firebase-tools；鎖檔頂層依賴與實際 scripts 已核對 | 保留 ESM/Markdown/Playwright；移除 PDF、attrs、Firebase CLI，新增 Ajv、parse5；新鎖檔 |
| build/render.config.json | 固定 dev/ai-user/general × zh/en 六份草稿，out 指向 PDF | 改為 project.config.json 三頁角色 manifest；不另存第二份 page manifest |
| build/build.mjs | web 模式仍複製既有 PDF 至 dist/web/pdf；mkdir 而不先清除旧輸出；首頁有舊下載與發佈 metadata | 改写乾淨、白名單輸出的 web-only build；無 PDF、無下載、三種時間分開 |
| build/md2html.mjs | Markdown html:true + attrs；來源正則全部連 S-code；舊 status inline code；封面、footer、來源層級、storage key 固定 | 保留元件與狀態契約，改寫成嚴格 KB/draft parser；html:false；每 claim 一卡、每引用一回連 |
| build/check-sources.mjs | 固定六份 draft、KB source/status 正則，硬編 AFM3 關鍵字與 beta 數字 | 排除舊產品規則；JSON Schema + 時間／revision／coverage／正式內容關係驗證 |
| build/check-links.mjs | 掃描 Markdown 內連結；無生成頁 fragment 完整檢查 | 改為 parse5 檢查所有預期頁與 fragment、禁止危險 scheme，外部不自動探測 |
| build/debug-web.mjs | HTML 字串存在性；readerPages 先 filter 掉不存在頁，零頁也可能 every 全綠 | 改為 manifest 必備頁逐頁驗證、parse5 DOM、角色契約、輸出白名單；另有真實 E2E |
| design/base.css、theme-dev/ai-user/general.css | 實際檢查基礎 tokens、三主題與 screen/reader/dark 規則；16px/1.72，正文780/800，760/1180/1500斷點，90/100/110/120字級 | 改編 web-only base 與 dev 中性藍 tokens；移除其他受眾、PDF、產品圖／狀態；小標與操作可讀性略調整 |
| design/component-contract.md、design/readability.md | 阅读模式不隱藏來源／限制；table-wrap、source-ref、callout、卡片、側欄語義 | 保留並於 DESIGN.md 定義新頁面角色；不強迫首頁／證據頁有整套閱讀工具 |
| .github/workflows/ci.yml | 原 CI 不部署，但建置六份 PDF/Web、安裝 Chromium | 新 CI 只 verify:scaffold；artifact 僅 dist/web，不含研究／fixtures／raw logs；本次未遠端執行 |
| firebase.json、.firebaserc | 原 public=dist/web、predeploy=build:web、預設專案 apple-afm3-explainers | 完全不搬入新專案；無 fallback；deploy script 明確拒絕所有目標 |
| content/、sources/、tasks/、docs/ | 查看目錄结构与直接工程相依，未將來源庫／任務指令當作本階段授權 | 不匯入舊事實、來源引用、圖中關係、發布資訊或雙語草稿 |
| LICENSE、NOTICE、assets/fonts/noto-sans-tc | Apache-2.0、Nick Lian attribution、Noto SIL OFL | 保留 LICENSE，新增衍生 NOTICE、第三方說明；只複製可重用字型及 OFL，未複製圖像 |

原 build/md2html 的直接依賴（markdown-it、attrs、來源清單解析、SVG 內嵌、PDF 來源附錄）已檢查其用途；新 renderer 不保留 SVG 內嵌、PDF 與 attrs。沒有宣稱逐字讀完原 308KB lockfile 或全部產品資料。

## 檔案角色與資料流

1. `project.config.json` + `sources/event-manifest.json`：網站與唯一影片身份。
2. `content/knowledge-base.md`：結構化 Markdown 事實權威。
3. `sources/coverage.json`／`sources/gaps.json`：模態區段核對與缺口；不混成單一完成布林。
4. `content/drafts/event.md`：KB 區塊選材／排序／轉述。
5. `sources/semantic-review.json`：審查範圍、結論及來源摘要綁定。
6. `build/data.mjs` 載入、解析、schema 驗證、跨資料關係與 release gate。
7. `build/md2html.mjs` 渲染三頁，生成時間軸、主題入口、來源與回連；`build/player.mjs` 做受驗證紀錄約束的時間 adapter。
8. `design/*` 提供版面與閱讀進階功能；停用 JS 不影響主要內容、來源或原生 details。
9. `build/build.mjs` 只清理本專案的精確 dist/web 路徑，拒絕 root／symlink，白名單輸出網站、字型、授權與衍生 JSON。
10. `build/inspect.mjs` 檢查全部 manifest 頁、DOM／fragment、未知產物、舊內容標記、字型完整性與 Git 已追蹤私有資料。

精確欄位、enum、Markdown 範例與反例規則：`docs/DATA_CONTRACT.md`。機器 schema：`schemas/`。生成品與依賴目錄不可手改或建立第二份權威。

## 安裝、預覽、建置、驗證

Node.js >=22，本機實際使用 Node 24。先在此目錄執行：

```sh
cd <project-root>
npm ci
npx playwright install chromium
npm run preview
```

preview 先 build，僅監聽 127.0.0.1:4173；可用 `PORT=4174 npm run preview` 明確更換埠。Ctrl-C 停止。沒有自動檔案監看；編輯後 `npm run build:web` 並重新整理。

```sh
npm run check           # schema + 跨檔關係
npm run test            # Node 單元／反例
npm run build:web       # 清理並生成三頁
npm run check:links     # 生成 HTML 的本地檔案／錨點
npm run debug:web       # 靜態角色／完整性／輸出隱私
npm run test:e2e        # 實際 Chromium，3 種宽度 + mock/no-JS
npm run verify:scaffold # 以上整套，成功僅 scaffold-ready
npm run verify:release  # 先內容發布 gate，再工程；空骨架預期失敗
npm run test:release-fixture # 暫存副本的正向 release 工程測試
npm run review:digest   # 審查用精確來源 SHA-256
npm run deploy         # 預期拒絕，沒有遠端執行程式
```

E2E 使用 OS temp 下的隔離 fixture copy 與臨時 loopback server；結束清理。fixtures 的 entrypoint 只在 `tests/fixtures/make.mjs`。正式 dist/web 不出現 mock 影片、完整字幕、測試頁或私有檔。QA 截圖與結果在 docs/qa，只含空骨架與明示測試畫面，CI 不上传此目錄。

## 下一階段直接從影片研究開始

1. 使用者提供指定影片 URL 後，填 `sources/event-manifest.json.canonical_url`。先核對發布者身份與 canonical URL，同檔記 method、reviewer、verified_at、evidence_url。
2. 在不擴大事件來源的前提下取得所能實際檢視的素材。媒體／完整字幕／逐字稿／工作紀錄只放 `research/.private/`。如只能讀字幕，就如實記錄 audio/visual 尚未核對。
3. 填真實標題、影片長度、revision、時間基準、取得時間、字幕類型及 available_modalities。不要造 hash；用實際 artifact 識別並記清更新方式。
4. 定義 coverage.required_scope，逐段記錄取得與實際處理過的模態及 review_record。不用一個「看完」旗標。
5. 先加 KB candidate，填 statement/subject/topic/type/availability/qualifiers/structured_values。對照影片後加 evidence、coverage_ids 與查核紀錄，才改 verified。保留 disputed/unknown。
6. 在 draft 使用 `:::claim KB-NNN` 區塊選材；空區塊採 KB 原句，轉述需檢查語意未強化。時間、引用、條件、規格表與來源頁自動生成。
7. 用四種 gap kind 記錄資訊缺口。reviewed-not-found 連 coverage，explicit-not-disclosed 連片段，不可互換。
8. 真實播放／定位未驗證時維持 official-link。只有實際測過支援的 YouTube adapter，才填 player verification；本階段 mock 不算影片定位驗證。
9. 完成語意審查後執行 review:digest，更新 semantic-review；檢查 sources、claims、drafts、coverage、gaps，修改任一來源後重新審查。
10. build、瀏覽器 QA、verify:release。任何阻擋未解決就停在草稿。發布需要另外的使用者授權與新目標設定；不要繞過本階段固定拒絕的 deploy script。

## 2026-09-10 首次工程驗收結果（歷史）

狀態為 **scaffold-ready**。在本專案根目錄直接執行 `npm run verify:scaffold` 已 exit 0：40 項單元／反例、三頁／49 個本地連結、11 組 Chromium E2E 均通過。390/768/1280px 實測與 15 張截圖已保存。`verify:release` 與 `deploy` 均按預期 exit 1，沒有用假內容解除門檻。

本次補完 scrollspy 頁底判斷、短頁回頂門檻、來源頁覆蓋／缺口查核紀錄與 E2E 真實非同步等待；詳細結果、環境處理及未驗證界線見 `docs/QA.md`。正式事實來源沒有變動，語意審查仍 pending。

本專案尚未初始化 Git，沒有 remote，亦不在父層 Git repo。未複製參考 .git；不要將此狀態誤記為新 repo 已完成版本控制。原 AFM 215 個追蹤檔的 SHA-256 與起始基準完全相同，status 乾淨。

## 2026-09-10 提示詞逐項覆核（目前結果）

**scaffold-ready**。已將完整提示詞逐項映射至程式、測試及交接證據，見 `docs/REQUIREMENTS_AUDIT.md`。最新正式驗收為 47 項單元／反例、11 組 Chromium 瀏覽器檢查；15 張本地 QA 截圖另加 2 張唯讀參考站截圖。

覆核修正了空骨架測試對正式資料的硬編碼、搜尋漏掉主題標題、parser 誤刪 JSON 原文、時間小數秒被截斷、私有 symlink 的 Git 檢查，以及影片待核對／無缺口時的狀態文案。正式 KB 與影片來源仍維持 null／零主張，事件語意審查保持 pending。

`npm run test:release-fixture` 在 OS 暫存副本完成 `npm ci --offline --ignore-scripts --no-audit --no-fund` 與真正的 `npm run verify:release`，證明有內容時工程路徑可以通過；此結果僅屬合成案例，不是事件 release approval。報告記在 `docs/qa/release-fixture-results.json`，副本已清除，正式來源與輸出完整性亦有比對。

參考 main 再次唯讀解析，仍是開始時的 `da932859edf5ffc9c00f3c1431db355432d1c3b9`。參考站首頁與 dev 頁再次開啟、保存截圖；實際 dev 正文 16px、行高 27.52px（1.72）、寬度 780px，記錄在 `docs/qa/reference-review.json`。僅移植工程介面，不將參考畫面的產品事實加入事件來源。

## 已知界線

- 本階段沒有實際影片、轉錄、片段定位或事件語意驗證，無法完成內容 release。
- JSON 的 verified／approved 是可稽核紀錄，不是工具證明真假。結構測試不能自動確保轉述語意、選取範圍或 Apple 身份判斷正確。
- 選材僅支援一個事件 Markdown draft、三個頁面角色；沒有預建空產品頁，不是通用 CMS。
- 播放器只支援所述 YouTube URL；其他形式退回官方影片入口與時間。iframe 載入失敗訊號可能受跨來源限制，故始終顯示可用 fallback。
- 不包含跨瀏覽器／所有輔助科技／完整 WCAG 稽核。瀏覽器測試僅驗證本機 Chromium 與記錄的視窗、互動。
- noindex 不是隱私保護。即使草稿也不得把完整媒體或私有資料放進 dist/web。

## 2026-09-10 三類來源接續檢查點

既有 35 條 verified（影片 12、台灣規格 23）、3 條字幕 candidate、S01–S06、三頁與 KB 錨點均保留。已取得完整影音檔，僅核對 12 個單一畫格，音訊工具不支援輸入；不可宣稱整場完成。check/build/links/debug 最近皆 exit 0，完整 E2E 尚有目錄定位問題待修。本目錄仍未初始化 Git，沒有 remote；未 reset 或覆寫外部工作。

使用者明確授權擴充為 event_video / product_specs / developer_documentation / developer_session。沿用 event-manifest 作來源登錄，不新增 KB 或 registry；將同步 schema、跨檔 validator、renderer、fixture、反例、AGENTS、README 與契約。有限 Developer 研究先沿 KB-033 已核對 Touch ID 功能，實際取得具體 API 文件後才入庫；一般 API 文件不構成 iPhone Duo 相容測試。私有檢查點保留於 research/.private/three-source-checkpoint。
