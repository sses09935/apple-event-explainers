# 作者歸屬與第三方資產

- 工程參考：[sses09935/apple-afm3-explainers](https://github.com/sses09935/apple-afm3-explainers/tree/da932859edf5ffc9c00f3c1431db355432d1c3b9)，Copyright 2026 Nick Lian (github.com/sses09935)，Apache-2.0。LICENSE 保留全文，NOTICE 保留作者與衍生變更說明。
- `design/base.css`：由原 base.css 與 theme-dev.css 的字體、token、版面與元件規則改編，移除不適用的 PDF 規則，新增本專案三受眾閱讀版面；保留作者註記。
- `design/early.js`、`design/reader.js`、`build/md2html.mjs`：沿用狀態契約、閱讀互動和元件命名，為三受眾、發表會總覽與共用證據架構改寫。Apache-2.0。
- `assets/fonts/noto-sans-tc/`：105 個 Noto Sans TC woff2 子集、原 CSS 與 SIL OFL 1.1 全文；只從同一參考 checkout 選取字型資料夾。build 將完整 OFL 複製至 `dist/web/fonts/noto-sans-tc/OFL.txt`。不使用外部字型 CDN。
- 不使用原 diagrams、illustrations、產品敘述、PDF、字幕或影片。來源媒體／引用不因專案開源而取得本專案授權。
- npm 依賴依 lockfile 鎖定：markdown-it（MIT）、Ajv（MIT）、parse5（MIT）、Playwright（Apache-2.0）；其相依授權隨各套件散布。node_modules 不進 Git／網站。

這是獨立的非官方教育工程，與 Apple 無隸屬或背書關係。
