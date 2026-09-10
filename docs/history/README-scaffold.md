# Apple Event Explainers

繁體中文、單一指定影片的非官方整理網站工程。**尚未提供影片，沒有事件事實或產品資料。**

**工程狀態：scaffold-ready（2026-09-10）**。47 項單元／反例與 11 組 Chromium QA 通過；空骨架 release 與 deploy 按預期拒絕。已逐項覆核提示詞並補齊缺口，見 [需求覆核表](../REQUIREMENTS_AUDIT.md)。完整證據及未驗證項目見 [docs/QA.md](../QA.md)。

實際專案目錄：`<project-root>`。沿用 Node.js ESM + Markdown → 靜態 HTML → `dist/web`。只有首頁、閱讀頁、證據頁三頁。

```sh
cd <project-root>
npm ci
npx playwright install chromium
npm run preview
```

本機預覽：`http://127.0.0.1:4173`。使用 `PORT=另一個埠 npm run preview` 可換埠；不對區域網路開放。修改內容後執行一次 `npm run build:web`，重新整理預覽即可。

```sh
npm run check
npm run build:web
npm run check:links
npm run debug:web
npm run test
npm run test:e2e
npm run verify:scaffold
npm run verify:release
```

`verify:release` 在目前空骨架必須失敗，不能填假資料讓它通過。`npm run deploy` 固定拒絕；本次沒有遠端 repo、Firebase 目標或部署授權。

接手從 [docs/HANDOFF.md](../HANDOFF.md) 開始，精確資料語法見 [docs/DATA_CONTRACT.md](../DATA_CONTRACT.md)。瀏覽器 QA 結果與截圖在 `docs/qa/`。參考來源與授權見 [docs/THIRD_PARTY.md](../THIRD_PARTY.md)。

`research/.private/` 只放本機媒體、完整字幕、逐字稿與工作檔，永不入 Git／網站／CI artifacts。noindex 只是索引提示，並非隱私或存取控制。
