# 歷史工程階段：提示詞逐項需求覆核

> 先前階段紀錄；數量與測試是當時快照，最新狀態請見 [HANDOFF](HANDOFF.md) 與 [QA](QA.md)。

> 本表保存前階段 scaffold 驗收，單一影片／零內容敘述已被使用者追加需求取代。現行來源契約與內容狀態請讀 [DATA_CONTRACT](DATA_CONTRACT.md)、[HANDOFF](HANDOFF.md) 與 [QA](QA.md)。

覆核日期：2026-09-10（Asia/Taipei）。工作位置：`<project-root>`。目前狀態：**scaffold-ready**。本階段可執行的工程要求已完成；未提供影片，因此影片研究、真實片段定位與事件語意核對仍不適用，正式 release 必須阻擋。

這份表對照使用者本次貼上的完整提示詞；不是只用測試通過推論需求完成。機器輸出、實際瀏覽器操作、代表截圖視覺檢查及工程 Agent 的內容界線審查分別記錄。

## 邊界、來源與工程移植

| 提示詞要求 | 狀態 | 實作／驗證證據 |
| --- | --- | --- |
| 指定專案、新名稱僅工程名稱、zh-TW、單一影片 | 完成 | project.config.json；固定三頁角色；來源 S01；README 與首頁非官方／草稿說明 |
| 無影片保持 null／零主張，不帶入產品、日期、假規格或傳聞 | 完成 | 正式 event-manifest／KB／draft／coverage／gaps；輸出檢查（本機紀錄：`qa/output-boundary-results.json`，不納入公開匯出）、呈現審查（本機紀錄：`qa/scaffold-semantic-review.json`，不納入公開匯出） |
| 原 repo 只讀；隔離原歷史、remote、dist、設定與憑證 | 完成 | 新專案沒有 .git／remote，亦非父 repo 子目錄；沒有複製原 Firebase 設定；215 個原追蹤檔 SHA-256 比對，見 隔離結果（本機紀錄：`qa/isolation-results.json`，不納入公開匯出） |
| 開始前記錄來源／新路徑、解析 main SHA | 完成 | docs/REFERENCE.json 保留初始 SHA 與搬移紀錄；再次唯讀解析（本機紀錄：`qa/reference-review.json`，不納入公開匯出） 仍為 da932859edf5ffc9c00f3c1431db355432d1c3b9 |
| 檢查全部指定參考入口與必要直接依賴 | 完成 | HANDOFF 的逐檔工程參考表；20 個指定入口均存在，路徑／雜湊清單（本機紀錄：`qa/reference-inputs.json`，不納入公開匯出）；build／renderer 直接依賴亦已讀取 |
| 檢查六份草稿、雙語受眾、S-code／KB／status、AFM 專用規則 | 完成 | HANDOFF 記錄原耦合與排除理由；本專案只有一份 draft，JSON Schema／跨檔驗證取代產品專用正則 |
| 檢查並排除舊 PDF、殘留輸出、首頁／footer／metadata／storage 耦合 | 完成 | build/build.mjs 清理精確 dist/web；三頁 web-only；版本與三種日期分開；新 storage prefix；反例測試舊輸出外洩 |
| 檢查部署指令、Firebase 設定與 workflow；禁止預設／原目標 | 完成 | 原設定只讀；新 build/deploy.mjs 永遠拒絕；無 Firebase CLI／設定；unset、原目標及任意目標均有反例 |
| 無遠端 repo 建立、push、release 或部署 | 完成 | 僅 git ls-remote 與 HTTP GET 讀取；gate 紀錄（本機紀錄：`qa/gate-results.json`，不納入公開匯出）、本次操作範圍（本機紀錄：`qa/isolation-results.json`，不納入公開匯出）；未執行遠端 CI |
| 保留 ESM + Markdown → HTML → dist/web，不換框架、不升級 CMS | 完成 | package.json、build/*.mjs；不產出英文版、PDF、三受眾、登入、資料庫或 CMS |
| 保留授權與作者、不把原媒體當成專案授權 | 完成 | LICENSE、NOTICE、docs/THIRD_PARTY.md、self-hosted 字型 OFL 與生成頁腳 |

## 三頁介面及資料契約

| 提示詞要求 | 狀態 | 實作／驗證證據 |
| --- | --- | --- |
| 首頁／閱讀頁／證據頁各自角色與必要區塊 | 完成 | page manifest 共用於 build／靜態檢查／E2E；按角色驗證，不對首頁強加整套閱讀工具 |
| 沿用原字體、寬度、字級、行高、留白、標題與低干擾元件 | 完成 | design/base.css、DESIGN；參考 dev 實際 16px／27.52px／780px；兩張參考截圖已開啟對照；排除原封面與產品專用內容 |
| reading/audit、深淺色、四檔字級、側欄 TOC／scrollspy | 完成 | early.js／reader.js；實測模式、字級上限下限與重載、系統主題、來源／限制可见、scrollspy 最後一節 |
| 行動折疊、搜尋、回頂、焦點、鍵盤、reduced-motion、表格局部捲動 | 完成 | 390／768／1280px E2E；主題標題搜尋新增回歸；窄版 ArrowRight 捲動，寬版容納；computed reduced-motion 檢查 |
| 中性空狀態、禁止假統計／預建產品頁 | 完成 | 正式 dist/web 僅 index／event／sources 三頁；fixture HTML 只在 OS 暫存目錄 |
| A：project config／page manifest／三種日期與部署 null | 完成 | schemas/project.schema.json、build/data.mjs；site_built_at 設定固定 null，生成時間由 build 記錄 |
| B：S01 影片 metadata、身份、revision、時間基準與實際模態 | 完成 | schemas/event-manifest.schema.json、DATA_CONTRACT B；正式未知欄位 null；已填 URL 待核對狀態亦有反例 |
| C：KB 全欄位、三個獨立狀態維度、evidence 與 review | 完成 | schemas/claim.schema.json、parseKB／validateData；verified 需要證據及音訊／畫面覆蓋，效能主張另示非獨立實測 |
| D：取得／讀字幕／核對音訊／畫面分開記錄 | 完成 | coverage schema、區間聯集驗證；sources 頁顯示承諾範圍、各模態處理與查核紀錄 |
| E：四種 gap、缺席連 coverage、不造單點證據 | 完成 | gaps schema、validateData；explicit-not-disclosed 要實際片段；reviewed-not-found 要完整範圍；尚未核對不改寫成未公開 |
| F：單一 KB 權威、draft 機器 reference、一次 build 更新 | 完成 | 嚴格 :::claim KB-NNN；禁止游離事實區塊、未知／未驗證引用、手寫時間／來源；衍生 source-map 與時間軸 |
| 精確語法、欄位、enum、範例與機器驗證一致 | 完成 | DATA_CONTRACT A–G、schemas/*、parser／跨資料驗證；本次修正區塊內 HTML 註解形式原文不被誤刪 |
| 每個正式 claim 專屬證據卡／時間／回連／來源入口 | 完成 | md2html.mjs、player.mjs；selected claims 一卡多回連；小數秒起訖保留；候選主張不公開 |
| 播放器實際驗證才開放按鈕；無自動／捲動播放；失敗／no-JS fallback | 完成工程部分 | 預設 official-link；匹配 identity／revision 的 QA record 才啟用支援 adapter；mock 實測同意後載入與失敗退回；沒有宣稱真實影片定位已驗證 |

## 驗收、隱私與交接

| 提示詞要求 | 狀態 | 實作／驗證證據 |
| --- | --- | --- |
| 全部九個指定 npm 指令可執行 | 完成 | package.json；preview／check／build:web／check:links／debug:web／test／test:e2e／verify:scaffold／verify:release；精確命令見 HANDOFF |
| scaffold 與 release 分離，空骨架 release 必須失敗 | 完成 | 正式 scaffold 完整輸出（本機紀錄：`qa/scaffold-output.txt`，不納入公開匯出）、預期拒絕（本機紀錄：`qa/gate-results.json`，不納入公開匯出）；47 項單元／反例通過 |
| 下一階段有資料時也能通過整套 release 工程流程 | 本次補齊 | 正式測試不再強制零資料；暫存副本完整正向結果（本機紀錄：`qa/release-fixture-results.json`，不納入公開匯出） 含安裝與 verify:release exit 0；合成內容未寫入正式專案 |
| 缺頁／零頁、來源、KB、時間、revision、未核對、部署、未知值反例 | 完成 | tests/unit.test.mjs；缺 manifest 頁或生成頁直接失敗，不 filter；unknown spec 不能用 0 |
| 清理只限自身生成目錄，排除 fixture、PDF、私有工作資料 | 完成 | safeClean 精確路徑與 symlink 拒絕；checkPublic 118 檔白名單；fixture／舊產物與清理邊界反例 |
| 真實瀏覽器三種寬度及代表截圖／視覺檢查 | 完成 | 11 組 E2E（本機紀錄：`qa/browser-results.json`，不納入公開匯出）、15 張本地 PNG；本輪重新產生並開啟代表圖；另有 2 張參考站圖 |
| 私有目錄 ignore／build／公開報告／CI 排除，含已追蹤檢查 | 完成 | research/.private 空、.gitignore、顯式 build 白名單；CI artifact 僅 dist/web；一般 private 檔與 private symlink 進 Git 的反例；無 repo 與 Git 檢查錯誤區分 |
| 外部字串不可信、escape、不執行 HTML 或指令 | 完成 | Markdown html:false、停用任意 link／image／autolink；JSON metadata escape；parser 原文字串完整性與腳本反例 |
| 草稿／noindex／非官方、noindex 非保密措施 | 完成 | 所有頁面 metadata／頁腳、robots.txt、本地 server header；README、HANDOFF 明示限制 |
| 交接需能無聊天記憶接續 | 完成 | HANDOFF 提供角色／資料流／schema／精確命令／權威邊界／URL 填入位置／匯入順序／已知限制／release gate |

## 尚未驗證與不授權事項

- 沒有指定影片：不執行事件研究、實際發布者身份核對、真實片段定位或事件語意批准。`sources/semantic-review.json` 仍 pending。結構與合成測試不能代替這些工作。
- 未執行 Safari/WebKit、Firefox、全套輔助科技或完整 WCAG 稽核；沒有把它們標成通過。
- 未執行遠端 CI 或部署。新資料夾尚未初始化 Git，不把「沒有已追蹤檔案」誤記成已建立新 repo。
- 以上屬提示詞允許或要求保留的階段界線，沒有剩餘的本階段工程 blocker。
