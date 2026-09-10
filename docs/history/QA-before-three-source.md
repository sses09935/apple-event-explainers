# 本機工程 QA

驗收日期：2026-09-10（Asia/Taipei）。狀態：**scaffold-ready**。沒有影片、事件主張或內容發布許可。

## 實際執行結果

| 檢查 | 結果與證據 |
| --- | --- |
| `npm run verify:scaffold` | exit 0；完整輸出（本機紀錄：`qa/scaffold-output.txt`，不納入公開匯出） |
| schema／資料關係 | 0 KB claim、0 正式區塊，未知影片欄位維持 null |
| `npm run test` | 47/47 通過，無跳過；包含非法來源、KB reference、時間／revision、coverage、未知值、來源 escape、部署拒絕、私有追蹤與清理邊界反例 |
| 建置、連結、靜態 DOM | 三頁均存在，49 個本地連結／fragment 通過；外部網址未逐一探測 |
| 真實 Chromium E2E | Chromium 145.0.7632.6、Playwright 1.58.2；11 組通過；機器結果（本機紀錄：`qa/browser-results.json`，不納入公開匯出） |
| 空骨架 `verify:release` | exit 1，預期拒絕：缺影片與發布者核對、完整 metadata、內容、覆蓋、日期及新鮮語意審查；紀錄（本機紀錄：`qa/gate-results.json`，不納入公開匯出） |
| `npm run deploy` | exit 1，預期拒絕：目標 null、本階段未授權；沒有部署實作；同上 |
| 原 repo 完整性 | 215 個 tracked regular files 與起始 SHA-256 相同；無新增追蹤檔，status 乾淨，HEAD 與 remote 不變；隔離紀錄（本機紀錄：`qa/isolation-results.json`，不納入公開匯出） |
| 公開／私有輸出 | 118 個白名單檔案，恰好三個 HTML；0 claim、0 source-map entry；private 空且有 ignore 規則；輸出紀錄（本機紀錄：`qa/output-boundary-results.json`，不納入公開匯出） |

本專案尚未初始化 Git，且不位於父層 Git repo，因此目前無可檢查的已追蹤檔案。私有檔被追蹤時必須失敗的反例已在 OS 暫存 repo 實測。未建立遠端 repo、push、release 或部署；這是本次操作範圍紀錄，不是帳號層級的遠端稽核。

## 瀏覽器範圍

每個 viewport 高度為 900px，寬度分別為 390、768、1280px。正式首頁、閱讀頁、證據頁均實際開啟；測試頁面角色、空狀態、深淺色、skip link 與正文焦點。閱讀頁另測：reading/audit、90/100/110/120% 字級與重載保存、行動版搜尋／目錄折疊、搜尋 Enter／Escape、TOC 焦點／scrollspy、回頂可點擊與焦點、儲存鍵前綴。三種寬度的正式頁面均無 page error、console error、必要資源失敗或頁面級橫向溢出，沒有向外部發出請求。

隔離 fixture 在 OS 暫存目錄建置、提供服務及清除。測試每 claim 證據與返回引用、複製時間、鍵盤展開證據、深色稽核及局部表格捲動。390/768px 實測 ArrowRight 水平捲動；1280px 表格已容納，無需捲動。來源頁亦顯示承諾範圍、實際模態覆蓋、查核紀錄及相關錨點。

另實測停用 JavaScript 的正文、限制、來源入口及原生 details；無 localStorage 時仍能切換模式；系統色彩改變時更新主題。YouTube embed 完全 mock：只有按下按鈕後才載入、autoplay=0、不隨捲動再載入；失敗案例實際中止 embed 請求並驗證影片連結與正文保留。**未取得真實影片，以上不代表片段定位、影片身份或內容語意已驗證。**

## 截圖與視覺檢查

共保存 15 張全頁 PNG，清單在 browser-results.json。擷取前回到頁首，避免全頁截圖把 sticky 導覽誤置於中段。`fixture-*` 明確是中性測試畫面，沒有進入正式 dist/web。

代表畫面已由工程 Agent 實際開啟檢視：手機首頁與閱讀頁、中型閱讀頁、桌面閱讀頁，以及手機／桌面的 fixture 正文與深色證據頁。檢查標題階層、正文行距、工具排列、來源與限制可見性、表格局部捲動與頁尾；未見文字或控制項被裁切。這是代表畫面視覺 QA，不是完整人工無障礙稽核。

- 390px 首頁（本機紀錄：`qa/home-390-light.png`，不納入公開匯出）
- 390px 閱讀頁（本機紀錄：`qa/reader-390-light.png`，不納入公開匯出）
- 768px 閱讀頁（本機紀錄：`qa/reader-768-light.png`，不納入公開匯出）
- 1280px 閱讀頁（本機紀錄：`qa/reader-1280-light.png`，不納入公開匯出）
- 390px 測試證據頁／深色（本機紀錄：`qa/fixture-evidence-390-dark.png`，不納入公開匯出）
- 1280px 測試正文（本機紀錄：`qa/fixture-reader-1280-light.png`，不納入公開匯出）

參考站首頁與開發者閱讀頁已於前段工程工作在瀏覽器開啟（首頁 commit da93285），原 CSS 的字型、色彩、760/1180/1500px 斷點與字級檔位有工程對照，見 HANDOFF。本次再訪首頁與 dev 頁並保存 首頁截圖（本機紀錄：`qa/reference-home-1280.png`，不納入公開匯出）、閱讀頁截圖（本機紀錄：`qa/reference-reader-1280.png`，不納入公開匯出）；實際樣式與 main SHA（本機紀錄：`qa/reference-review.json`，不納入公開匯出） 已核對。兩張參考截圖與 15 張本地 QA 圖分開，不進入正式 dist/web；不宣稱像素一致性或跨瀏覽器比對。

## 提示詞覆核補齊

47 項單元／反例及正式 E2E 的最新輸出已重新產生。完整需求對照見 [REQUIREMENTS_AUDIT.md](../REQUIREMENTS_AUDIT.md)。

- 正式測試依資料是否存在而分支；空狀態測試改用獨立 fixture。已透過 `npm run test:release-fixture` 在暫存副本執行整個 `verify:release` 正向流程，包含依賴安裝與 2 個合成正式區塊的瀏覽器檢查；結果（本機紀錄：`qa/release-fixture-results.json`，不納入公開匯出）、完整輸出（本機紀錄：`qa/release-fixture-output.txt`，不納入公開匯出）。這不是實際內容批准。
- 主題標題納入搜尋，三種寬度測試 Enter 後的 section-2 焦點；亦檢查 reduced-motion 的實際 computed scroll behavior。
- JSON／claim 區塊內的 HTML 註解形式原文不被 parser 靜默刪除，仍以 escape 保護。加入回歸測試。
- 小數秒證據時間保持起訖差異；私有目錄 symlink 若被 Git 追蹤會失敗，Git 檢查錯誤不再一概当成未初始化。
- 證據頁補齊發布者核對方法、核對者、時間、出處及時間軸基準；保留來源 metadata 的稽核入口。
- 已有影片待查核、已完成覆蓋但沒有 gap 清單，不再沿用未取得影片／未開始查核的空狀態文案。
- 空骨架呈現語意另外由工程 Agent 逐句核對並記在 scaffold 審查（本機紀錄：`qa/scaffold-semantic-review.json`，不納入公開匯出）；正式事件 semantic-review 保持 pending。

## 本次修正及環境處理

- 最後一節太短、無法到達 scrollspy 啟動線時，頁底仍正確選中最後一節。
- 回頂顯示門檻依可捲動長度調整，較短的桌面空骨架也能使用。
- 寬版表格正常容納不再被測試誤判；系統主題測試等待實際 media-query 事件；播放器失敗測試等待請求確實中止。
- 瀏覽器測試有明確 timeout，擷取前等待字型／畫面完成。來源頁補齊覆蓋與缺口的查核紀錄、承諾範圍及模態說明。
- Playwright 指定 v1208 headless shell 原本缺失。官方安裝器下載 100% 後卡在解壓，改用 macOS `unzip` 解開同一份已完整下載的官方 ZIP；成功執行後安裝至標準 `~/Library/Caches/ms-playwright/chromium_headless_shell-1208`。最終驗收直接執行 `npm run verify:scaffold`，沒有依賴暫存 browser path 或更換 Playwright 版本。
- Node.js v24.16.0／macOS arm64。本機執行環境禁止沙箱內 listen，完整 QA 經執行權限審查後啟動 127.0.0.1 臨時 server；未開放 LAN。

未執行 Safari/WebKit、Firefox、所有輔助科技、完整 WCAG、遠端 CI。未執行影片研究、真實播放器定位或事件語意審查；`sources/semantic-review.json` 仍 pending。上述工程通過不能取代下一階段研究與 release gate。
