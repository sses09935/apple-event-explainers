# Apple Event Explainers 視覺契約

工程參考 commit 記在 docs/REFERENCE.json。此文件只定義呈現，不建立事件事實。

- 沿用原 CJK 優先字體堆疊、self-hosted Noto Sans TC、16px 預設正文與 1.72 行高。主文上限 780px；≥1500px 的閱讀頁上限 800px。
- 主要斷點：≤760px 折疊搜尋與目錄、單欄卡片；≥1180px 為 260px 側欄；≥1500px 側欄 280px。字級 90／100／110／120%，只縮放 main。
- 延續原技術藍（#0b5fd4）／石墨灰、暗色 #101318／#171b22、明確背景、標題階層、低干擾卡片與留白。主要 h1 2.05em、h2 1.48em；行動 h1 1.62em、h2 1.28em。
- `.reader-route-card` 是首頁閱讀入口；`.table-wrap` 對寬表做局部橫向捲動，保持可讀字級。不得用頁面層 overflow:hidden 掩蓋版面錯誤。
- `.source-ref` 在 reading/audit 都可見，指向該 claim 的證據卡；`.status-pill` 不混合查核、類型與推出狀態。
- `.callout-boundary` 和 qualifiers 在兩模式皆可見。Audit 展開 `.audit-details`，而不是移除 reading 的必要限制。
- `data-reader-mode`、`data-color-scheme`、`data-font-scale` 為唯一 DOM 狀態；新 storage prefix 見 project config。
- `.timeline` 由已選主張的證據時間生成；主題入口由 KB.topic 生成。`.evidence-card` 一個 claim 一卡，提供所有引用回連。
- 無資料時明示等待影片與未知，不用裝飾數字、產品佔位或巨幅 hero。
- 所有主要操作至少 44px，焦點外框清楚；鍵盤可用搜尋、目錄、原生 details、表格捲動、回頂。reduced-motion 關閉平滑捲動。
- 不宣稱已完成完整 WCAG／螢幕閱讀器審查；實際測試範圍記在 docs/QA.md。
