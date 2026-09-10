# Apple Event Explainers

繁體中文、獨立且非官方的 Apple 發表會與官方補充整理。**目前為 partial-evidence-ready：已核對子集可閱讀，整場影片查核未完成，尚未部署。**

保留既有三頁、Node.js ESM、Markdown、字型與閱讀工具。沒有重新初始化專案或加入新框架。本目錄 `<project-root>` 尚未初始化 Git，沒有 remote；原 AFM 專案維持唯讀。

目前收錄 **40 條已核對主張**：影片 12、台灣規格頁 23、Developer 文件 5；另有 3 條字幕候選、0 條爭議、4 項缺口（3 項阻擋整場發布）。候選不進摘要、正文或規格表。

- `index.html`：來源邊界、分開計數與主題入口。
- `event.html`：只採 S01 的發表會摘要／時間軸，以及標示來源類別的規格、Developer 補充。
- `sources.html`：來源版本、逐條證據、模態覆蓋與缺口。

```sh
cd <project-root>
npm run preview
```

開啟 [本機預覽](http://127.0.0.1:4173)。修改後執行 `npm run build:web` 並重新整理；沒有自動檔案監看。初次安裝使用 `npm ci` 與 `npx playwright install chromium`。preview 僅監聽 loopback。

產品／技術事實只來自三類核准來源，各自引用，**補充資料不一定出現在發表會**：

| 類別 | 目前實際登錄 |
| --- | --- |
| 發表會 | S01：[使用者指定 YouTube 影片](https://www.youtube.com/watch?v=39BalPDuTo0)，Apple 發布者已核對 |
| 台灣技術規格 | S02–S06：使用者指定的五個 Apple 台灣規格頁，均已取得正文及相關註記 |
| Developer 技術補充 | S07：[Local Authentication](https://developer.apple.com/documentation/localauthentication)、S08：[canEvaluatePolicy(_:error:)](https://developer.apple.com/documentation/localauthentication/lacontext/canevaluatepolicy(_:error:))、S09：[biometryType](https://developer.apple.com/documentation/localauthentication/lacontext/biometrytype) |

Developer 研究由已核對的 Touch ID 規格引入，只解釋既有 API、能力檢查與資料存取限制。沒有據此證明特定新品相容、台灣可用、SDK 編譯或 runtime 行為；沒有納入 Developer session。本輪未逐項研究的其他 API 線索列為缺口，不表示不存在。

S01 已下載畫面與音訊，固定媒體長度 **1:21:00.06**，以原始媒體 0 秒為起點。正式影片證據只核對 12 個單一畫格；音訊工具無法接收輸入，音訊核對為零。字幕為平台提供、實際產製類型未確認，僅供部分候選定位。實際檔案 hash、取得時間、版本與來源語系集中在 [event-manifest](../../sources/event-manifest.json)。原 Apple TV 路徑曾受阻，歷史紀錄已保存，沒有混用時間。

「已核對」表示轉述符合所列官方來源，**不表示 Apple 認證、第三方產品實測或完整影片覆核**。來源快照日期（UTC）、內容查核時間及 build 產生的建置時間分開；取得日不推定發表會日期，也不換算未確認的相對上市日期。

```sh
npm run check
npm run build:web
npm run check:links
npm run debug:web
npm run test
npm run test:e2e
npm run verify:release
```

實際結果與失敗修正見 [docs/QA.md](../QA.md)。`verify:release` 因未完成承諾覆蓋、阻擋缺口與整場語意審查而拒絕；不填假資料解除門檻。`test:release-fixture` 只驗證隔離合成案例，不能批准實際內容。

唯一可編輯事實權威為 [knowledge-base.md](../../content/knowledge-base.md)；來源登錄沿用 event-manifest，不另建 Developer KB。見 [資料契約](../DATA_CONTRACT.md)、[接續紀錄](../HANDOFF.md) 與 [授權](../THIRD_PARTY.md)。前階段歷史保留於 `docs/history/` 和 `docs/qa/scaffold-before-video/`。

`research/.private/` 的原媒體、完整頁面、字幕與工作檔不進 Git、dist 或公開 CI artifacts。公開輸出採白名單，無影片／大量畫格／逐字稿。noindex 不作隱私保護。遠端寫入、push、release、部署均未授權；`npm run deploy` 固定拒絕，未設定 Firebase 目標。
