# 本機內容與工程驗收

驗收：2026-09-10（Asia/Taipei）。**partial-evidence-ready，未部署。** 已核對子集可讀；沒有完整音訊／連續畫面覆蓋，因此不屬於 release-ready。前階段結果保存在 [歷史 QA](QA-before-three-source.md)。

## 實際命令與退出結果

最新完整結果：final-command-results.json（本機紀錄：`qa/final-command-results.json`，不納入公開匯出）。

| 命令 | 實際結果 |
| --- | --- |
| `npm run check` | exit 0；43 KB／40 正式區塊；log（本機紀錄：`qa/final-check.log`，不納入公開匯出） |
| `npm run build:web` | exit 0；三頁產生；log（本機紀錄：`qa/final-build-web.log`，不納入公開匯出） |
| `npm run check:links` | exit 0；三頁、306 個連結／資源引用，含本地 fragment 檢查；外部 URL 不由此命令驗證；log（本機紀錄：`qa/final-check-links.log`，不納入公開匯出） |
| `npm run debug:web` | exit 0；三頁 DOM／產物白名單／私有資料檢查；Git 未初始化；log（本機紀錄：`qa/final-debug-web.log`，不納入公開匯出） |
| `npm run test` | exit 0；65 項通過、零跳過；log（本機紀錄：`qa/final-test.log`，不納入公開匯出） |
| `npm run test:e2e` | 修正跨頁等待後 exit 0；15 組 Chromium 檢查；log（本機紀錄：`qa/final-test-e2e.log`，不納入公開匯出） |
| `npm run verify:release` | **exit 1，符合預期**：承諾覆蓋不足、阻擋缺口與整場語意審查 pending；log（本機紀錄：`qa/final-verify-release.log`，不納入公開匯出） |
| `npm run test:release-fixture` | 修正等待後 exit 0；隔離副本真正跑過 verify:release，65 單元／15 瀏覽器組；副本移除、正式資料與輸出 digest 不變；report（本機紀錄：`qa/release-fixture-results.json`，不納入公開匯出） |
| `node build/migrate-source-contract.mjs` | exit 0；本資料已是 v3，不寫檔 |

初始 baseline `verify:scaffold` 為 exit 0，47 單元／11 Chromium 組。第一次 sandbox 下啟動 loopback 被拒（EPERM），改用獲准的本機執行環境後通過；沒有移除測試。此基準只證明工程骨架。

## 真實瀏覽器範圍

機器可讀紀錄（本機紀錄：`qa/browser-results.json`，不納入公開匯出）：Chromium 145.0.7632.6、390／768／1280px，各測三頁；正式資料 40 blocks，input_digest 與目前內容一致。每組檢查 console error、失敗資源、HTTP error、頁面水平溢出與載入前外部請求。

實測模式／深淺色切換、字級上下限與保存、搜尋／Escape／Enter、目錄焦點與 scrollspy、回頂、skip-link、表格鍵盤水平捲動。正式內容代表引用 KB-001、KB-007、KB-012、KB-020、KB-100 測證據卡與回連；影片證據精確時間複製成功，網頁 locator／原文 URL 與 Developer 限制可見。390px no-JS 另測正式影片／規格／Developer 的標籤、限制、引用與證據卡。

原骨架 fixture 的 no-JS、mock consent 播放、失敗 fallback、系統色彩與 localStorage 不可用測試保留。這些 mock 不是真實影片嵌入測試。15 張自動截圖保存在本目錄 `qa/`；只含本站與明示 fixture，沒有公開原始影片畫格。

另外以 Codex 內建瀏覽器實際檢視深色首頁、Developer 閱讀段與證據卡，KB-100 深連結到達約 viewport top 180px，來源類別與重要限制在 Reading 可見。沒有測 Safari、Firefox、所有輔助科技或宣稱完整 WCAG。

## 實測 YouTube 定位

指定影片原站的 `t=1014s`、`2190s`、`4636s` 分別顯示 16:54、36:30、1:17:16，畫面對應已保存的 CPU、AirPods 5 價格、iPhone Duo 價格卡。0／4859 秒邊界顯示對應控制時間。記錄與固定 revision 綁定於 manifest.player_adapter。

站內採 **youtube-link**：外部官方整秒定位、完整精確時間可複製，沒有 iframe 或自動播放。未實測嵌入、子秒 seek 或 end 自動停止，頁面明示限制。YouTube 線上標題在研究期間改變，未據此替換固定影片版本。

## 語意與來源檢查

獨立於排版的原始證據覆核紀錄（本機紀錄：`qa/semantic-subset-review.json`，不納入公開匯出） 明列 40 條主張與 hash 確認。審查者為同一位 Codex，另一次回到原始畫格／官方 HTML 文字／DocC JSON，沒有捏造人類或第二 Agent 複核。

S01 固定檔案為 4860.06 秒，12 個單一畫格 verified；3 個字幕候選範圍已讀，音訊實際核對 **0**，全片連續畫面未完成。五個規格頁的頁名、主體、語系、原文章節和註記另核對；路由紀錄（本機紀錄：`qa/source-routing.json`，不納入公開匯出） 證實指定入口不是首頁重新導向。三份 Developer 原文與同源資料已取得；沒有 SDK／真機測試。

未經支持的聊天 API 關聯沒有匯入確定事實。3 candidate 不進摘要、正文或表格；4 gap 均 not-yet-reviewed（3 blocking、1 可選研究範圍），沒有以「沒找到」冒充「不存在」。語意審查 pending 是整場未完成的真實結果；已核對子集不是獨立產品實測或 Apple 認證。

## 本輪發現與修正

- 初次來源存取測試把 heading `#source-S01` 當含連結的容器；改測實際 section，保留存取阻礙驗收。
- 目錄點擊後 scrollspy 不一致：原閾值 120px，實際 scroll-padding + scroll-margin 為 180px。改用實際 CSS 值並保留頁底規則。
- 新增逐類快速引用測試時，回連後立即 goto 會中止尚在載入的 `reader.js`；加明確 load 等待，沒有吞掉 requestfailed。第一次失敗與後續成功均保存，見 `qa/first-final-*`、最終 logs。
- 交付前再次檢查時發現生成目錄的 `.DS_Store`，白名單正確拒絕；透過既有 build:web 乾淨建置移除，重新執行 build／links／debug 均 exit 0，未放寬規則。
- KB-024 移除未由該註記明確支持的市場泛化；KB-063/064 補齊電池試驗前提。發表會摘要只保留 S01，規格與 Developer 標籤在 Reading 顯示。

## 保護與未做項目

白名單 dist 無原媒體、完整字幕、逐字稿、大量畫格、PDF、fixture 或私有路徑。Git 未初始化，沒有 tracked 私有檔；不能把這說成已存在的 Git repo 通過提交稽核。ignore、私有追蹤反例與 CI 僅上傳 dist/web 的規則保留；本輪沒有遠端 CI execution。

原 AFM checkout 的 HEAD／remote 與前階段相同、status 乾淨，本輪未改寫原檔。未設定新 Firebase 目標；deployment flags false，deploy 固定拒絕的反例仍通過。沒有 push、建立遠端 repo、release 或部署。

未做英文、PDF、多受眾、CMS、進階動畫、SEO 擴充或無影片證據的產品圖片。Developer session 尚未納入，不能宣稱其時間驗證路徑已完成。
