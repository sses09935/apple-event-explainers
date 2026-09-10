# 歷史紀錄：功能與發布收尾前

以下是先前輪次的狀態，不作當前驗收依據。最新結果見 ../HANDOFF.md。

# 工程與內容交接

2026-09-10（Asia/Taipei）。本輪三受眾改版完成於既有專案；**三版工程完成、選定來源的三版編輯完成、全片證據未完成**。整場 semantic decision 仍 pending，verify:release 必須拒絕。舊狀態完整保留在 [上輪交接](HANDOFF-before-three-audience.md)。

## 已完成的里程碑

1. 重新計算工作區 baseline：43 unique KB、40 verified／3 candidate；只有 event 40 個空文字 claim blocks，三份 LocalAuthentication 文件。沒有退回更早的 scaffold。
2. 以 AirPods 5 完成原規格 DOM／註腳閱讀、KB110–120、三份不同文章、多主張段落、整合表格、引用回連與第一輪三版 E2E，再擴大到所有主題。
3. 擴讀其餘四份規格，新增 KB121–173；五份原 HTML hash 與已登錄快照一致。盤點 133 DOM 列、99 選定／34 排除，型號與註腳逐列保留。環境宣稱、購物導覽等不擴成無方法前提的結論。
4. 逐一取得並核對 S10–S21 十二份 Developer HTML／DocC 原文，新增18條技術主張 KB200–217。整合者親讀原文及 symbol，agent 的建議不當來源。原 S07–09 補 identity_review。技術方向涵蓋影音、版面、健康／運動、音訊、AI 可用性與近距離互動。
5. 再看固定 S01 的 947、1211、1263 秒畫格，新增 KB180–182；分別只採可讀語言／地區卡、比較圖、播放時間卡。原候選090–092仍candidate：未確認口述、完整效能前提與eSIM配置，不用部分畫面批准整條候選。既有12畫格另行回看，沒有增報連續覆蓋。
6. 完成三版六主題長文、117個reader nodes、跨版topic與來源回連；人工語意複查收窄 Apple Watch Ultra 4 量測措辭、修補段落引用及價格符號，移除無基準比較標題。三版共用KB但分別寫作。
7. 完成六頁工程、102單元與新版三尺寸／長表格／120%字級瀏覽器驗收；最終命令與範圍見 [QA](../QA.md)。

## 當前資料與入口

[完整交付報告](../THREE_AUDIENCE_REPORT.md) 記錄 before／after、三版選材與正文計數。final-metrics.json（本機紀錄：`../qa/three-audience/final-metrics.json`，未納入公開匯出） 為計算結果，不是第二份事實庫。

- 128 unique KB，125 verified（影片15、規格87、Developer23），3 candidate、0 disputed。
- S01固定指定影片；S02–06五份指定台灣規格；S07–21十五份Developer文件。來源版本／URL／取得時間唯一登錄在manifest。
- dev.html、ai-user.html、general.html 各有獨立draft及簡短audience規格。所有版本覆蓋 iphone-pro、iphone-duo、watch-series、watch-ultra、airpods、intelligence。
- index.html為三路入口；event.html保留原40個引用順序／舊錨點，追加兩個編輯後S01摘要節點；sources.html逐KB列所有版引用與精確證據。

## 工程與寫作契約

保留 Node.js ESM、Markdown、字型與閱讀工具。schema／loader要求完整六頁，不允許漏頁filter。draft支援穩定node ID、多claim敘事／摘要／FAQ／note、editorial與逐列KB表格，數值由KB插值。source-map含page、node與row引用；所有draft、audience規格和相關來源資料納入digest。

Developer准入改為逐份登錄、研究前提為verified、實取原文與identity_review、精確content_resource映射及page-review locator；未登錄／無關／缺原文證據拒絕。文件只能context-only；SDK availability與runtime／產品可用性分開。session尚未登錄，仍拒絕未實作session路徑。

`node build/migrate-audiences.mjs` 可重跑：六頁已完成時no-op；舊三頁先檢查缺檔，`--create-stubs`僅補無事實editorial，保留既有draft／KB並private備份原config；未知topology及symlink拒絕。另保留來源v2→v3遷移工具與測試。不得用stub當交付文章。

## 審查與待續邊界

本輪 語意子集紀錄（本機紀錄：`../qa/three-audience/semantic-review.json`，未納入公開匯出） 涵蓋125正式主張與三份草稿；sources/semantic-review.json對目前digest保持pending，並非沿用舊單篇核准。未實測裝置、未編譯SDK、未測Safari／Firefox或完整輔助科技。

S01原始版本與 required_scope 維持0–4860.06秒、audio+visual。實際視覺聯集0.5005秒（15單一畫格），音訊0秒、字幕30秒。沒有可靠完整章節資料，只有已核對畫格時間軸。GAP001–003仍blocking，GAP004保留未確認技術關係，不聲稱沒找到即不存在。

下一步應以可實際聽取的同版本音訊與連續畫面逐段擴coverage，確認語言地區／效能／配置／價格日期前提，再重新語意審查。不要縮小required_scope、移除blocking gap或換版本後搬用舊時間來取得release-ready。

## 本機、安全與原專案

`npm run preview` → http://127.0.0.1:4173；build後重新整理。當前只使用本機既有預覽服務，沒有部署。

research/.private不入Git／dist／CI artifacts；測試fixture僅在暫存目錄。原AFM路徑只讀，HEAD `da932859edf5ffc9c00f3c1431db355432d1c3b9`，工作樹乾淨。本工作區未初始化Git，不宣稱已做提交稽核。未設定Firebase預設專案、未遠端CI、push、release或部署；deploy固定拒絕。未擴做英文、PDF或新框架。
