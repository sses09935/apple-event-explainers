# 貢獻方式

先閱讀 `docs/DATA_CONTRACT.md` 與 `docs/HANDOFF.md`。修改事實先更新唯一 KB 與相應原始來源 evidence，再修改三版草稿；保留穩定 KB、topic 與 node ID。新來源必須實際取得並有來源型別、版本、定位與核對紀錄。

新的能力需要用途、輸入、展示結果與重要條件；不能用名稱數、字數或限制清單當作完成。Developer 原文只作已核對功能的相關脈絡，不能由一般 API 推定特定產品已支援。ASR 不等於原音核對。

每次內容修改後執行 `npm run check`、相關測試、`npm run review:digest`，再比較三版的主體、數值、條件與主張強度。語意 decision 只在實際完成完整範圍審查時改成 approved；不要縮小承諾範圍或刪除阻擋缺口來通過 gate。

作者中文採台灣繁體用語；特定產品寫完整核定名稱。官方功能名、API、ID、URL 與直接引用不做無差別替換。公開清單不含原媒體、逐字稿、完整來源快照與大量 QA 圖。

專用 repository 已建立為私人空環境，尚無公開 issue 入口。請向提供此專案的維護者回報：頁面、章節或 KB ID、build-info 的版本／摘要，以及可重現步驟。不要附原素材、個資、私有路徑或憑證；敏感問題見 SECURITY.md。
