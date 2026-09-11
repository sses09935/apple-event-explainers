# Apple Event Explainers

以繁體中文整理指定 Apple 發表會、五份台灣產品規格快照，以及直接相關的 Apple Developer 文件。這是獨立、非官方的教育專案；所有文章共用一份可追溯的事實庫。

[網站正式網址（內容草稿）](https://apple-event-explainers.web.app/)使用正常草稿 Hosting 流程，保留 noindex 與未完成審查提示；上線結果依部署後驗收記錄確認。全片影音與整體語意審查尚未完成，正式內容 release／production 核准仍被阻擋，詳見[發布清單](docs/RELEASE_CHECKLIST.md)。noindex 不是存取限制；請勿把網站可閱覽或工程測試通過理解為完整影片核對或產品實測。[GitHub 原始碼](https://github.com/sses09935/apple-event-explainers)已公開並確認匿名可讀。

先前的[7 天草稿預覽](https://apple-event-explainers--review-20260910-fa40aajd.web.app/)到期紀錄為 2026-09-17 09:30:56（Asia/Taipei），是舊版內容；正式網址使用新的單次部署計畫，不沿用舊預覽的授權或驗收。

| 閱讀入口 | 重點 |
| --- | --- |
| `dev.html` 開發者版 | 功能示例、App 動作／資料、影音與文字模型工作流程 |
| `ai-user.html` AI 使用者版 | 個人線索、畫面提問、清單與照片等任務，再看設定條件 |
| `general.html` 普羅大眾版 | 功能用途、產品差異、日常意義與簡明解說 |
| `event.html` 發表會總覽 | 僅由 S01 產生的摘要、時間軸與舊引用 |
| `sources.html` 來源與證據 | 來源版本、定位、各版回連、覆蓋與缺口 |

目前原始碼已增補 22 份 Developer 文件，並依使用者確認將影片價格標示為 USD；上方草稿預覽仍屬先前部署版本，尚未包含這批更新。

首頁 `index.html` 提供三條路線。每版均有頁內搜尋、目錄、字級、配色、Reading／Audit、同主題切換及證據回連；停用 JavaScript 仍可閱讀正文與原生連結。

## 本機使用

驗證環境是 Node.js **24.16.0** 與 npm；版本記在 `.nvmrc`。安裝依賴需要套件網路，日常 build 不下載產品來源，也不需要雲端憑證。

```sh
npm ci
npx playwright install chromium
npm run build:web
npm run preview
```

預覽僅監聽 loopback，開啟 [本機首頁](http://127.0.0.1:4173)。這個網址不是線上成果。修改後重新執行 build 或重啟 preview；沒有自動監看。

```sh
npm run check
npm test
npm run verify:scaffold
npm run test:release-fixture
npm run check:public-tree
npm run verify:public-tree
npm run check:status
npm run verify:release
```

- `verify:scaffold`：來源結構、名稱／用語、單元反例、build、連結、公開輸出與 Chromium 互動。
- `test:release-fixture`：在 OS 暫存副本用合成資料測試正向 release 流程；不核准正式資料。
- `verify:public-tree`：只複製公開清單，重新安裝並執行工程驗證和合成 release 流程；不帶原 node_modules、研究素材或登入檔。
- `check:status`：產生本機 `dist/status.json`，重算各模態覆蓋，核對目前來源／產物與驗證紀錄，列出正式內容阻擋。成功只表示報告已產生；不連線、不部署，也不將歷史預覽視為目前驗收。
- `verify:release`：另要求完整承諾覆蓋、無阻擋缺口與新的語意核准。目前預期非零退出。

實際命令結果與未測範圍見 [QA](docs/QA.md)，發布狀態見 [RELEASE_CHECKLIST](docs/RELEASE_CHECKLIST.md)。

## 內容與來源

事實只修改 `content/knowledge-base.md`；來源與名稱核定只在 `sources/event-manifest.json`。S01 為指定發表會，S02–S06 為五份台灣規格，S07–S23 為已登錄的 Developer 原文；依追加範圍，S24–S29 獨立收錄台灣購買頁與首頁的價格／上市資訊。未取得資訊保持未知；影片摘要只使用 S01。其他來源不等於舞台公告或特定新品相容，新來源須逐一核對准入。

草稿位於 `content/drafts/`，三版選材位於 `content/audiences/`。內容、來源版本、名稱、覆蓋與各版選材都會改變語意摘要；修改後重新審查。ASR 是定位材料，不能當原音核對。詳見 [資料契約](docs/DATA_CONTRACT.md)、[功能覆蓋](docs/FEATURE_COVERAGE.md) 和 [貢獻方式](CONTRIBUTING.md)。

## 公開與部署邊界

公開原始碼、`dist/web` 靜態網站與私有研究各自分開。`research/.private` 保存原影音、完整原文、ASR 和中間工作檔，永不進 Git、Hosting 或 CI artifact；大量 QA 圖片／log 也不在公開清單。公開匯出由 `build/public-tree.mjs` 的明確清單生成，結果記在本機 `dist/public-tree.json`。

`output.profile` 區分 preview／production。正式包要求內容 gate、有效正式 HTTPS 站址及公開輸出驗證；單改 profile 不核准內容。Firebase project、Hosting site、GitHub repository 與正式 origin 已完成專用目標設定，仍不能使用帳號預設專案或參考站代替。

手機遠端連回同一台 Mac 後，可先執行 `npm run check:environment -- --online` 唯讀確認工具、登入與專用目標；不會自動公開或部署。

`npm run deploy` 預設拒絕；`npm run deploy:plan -- --channel CHANNEL` 只做本機 preflight。日後執行需要目標一致、同一份檔案摘要、未過期計畫與一次性明確確認，詳見 [部署操作](docs/DEPLOYMENT.md)。先前草稿預覽已部署且完成指定線上驗收；正式live仍須通過完整內容門檻。`package.json` 的 `private: true` 保留，避免 npm 誤發布；它不決定 GitHub 可見性。

## 授權與限制

程式與本專案原創解說採 [Apache-2.0](LICENSE)，保留 Nick Lian 的原始介面作者歸屬。字型採 SIL OFL 1.1。第三方原文、畫面、商標與媒體權利不因程式開源而改變，見 [NOTICE](NOTICE) 及 [第三方說明](docs/THIRD_PARTY.md)。

尚未驗證 Safari、Firefox、真機、完整輔助科技或 SDK 編譯。網站是固定官方資料快照，不是即時價格／可用性資料庫。
