# 本機驗證與語意邊界

## 2026-09-10 本次驗證範圍

本次重新綁定目前工作區，補做deployment wrapper修改後的乾淨公開副本重建。先前部署與QA資料均已保全，舊scaffold不視為當前驗證。實際命令、退出碼、公開清單與產物摘要集中本機dist/delivery.json與docs/qa；四種交付狀態另見 [發布清單](RELEASE_CHECKLIST.md)。

新增F11的15個單幀僅增加0.5005秒畫面覆蓋；原音仍受工具限制，沒有重跑ASR或失敗的音訊傳入。KB-181證據說明已直接回看原圖修正A19 Pro／A18 Pro誤植及負載字形。部署wrapper的所有preview禁止Auth網域同步，計畫明列並比對實際version與source_revision，保留篡改反例與全部原gate。

以下數字與「未部署／未CI」為明列歷史階段，不作為本次驗收結果。

## 先前內容整合與部署驗證歷史

2026-09-10（Asia/Taipei）。本輪接續非音訊研究，並依使用者追加的台灣官網入口核對價格。原始材料與整合前狀態保留；歷史數字見 [整合前 QA](history/QA-before-non-audio-integration.md)，目前狀態見 [發布清單](RELEASE_CHECKLIST.md)。本輪沒有環境重設、登入變更、push、公開 repository、Release 或 Hosting 部署。

## 內容與來源

正式資料共167條 KB、164 verified／3 candidate：影片36、規格91、Developer27、台灣商店10。四稿共161節點（event45、dev43、AI使用者41、大眾32），27表133列；三份選材重新審查。原154條ID與verification、全部舊精確evidence定位保留，23條既有主張有修正，新增13條。S01–S23的身份／版本不變，S24–S29為新取得的六個台灣價格／日期來源。原event順序與claim引用前綴保留，價格追加前後event全文不變。

五份規格的140個註腳直接重讀並核對原hash。五段新連續視覺區間共40.303秒，與原79單幀取聯集約42.6053秒；音訊0秒、字幕30秒。Calendar中途3個與最後9個候選、捷徑既有卡、單機Handoff、不同照片與手持花枝、合照預覽變暗再恢復均只描述已見內容。區間見 [功能索引](FEATURE_COVERAGE.md)。

核對指定台灣首頁及其實際連出的五份購買頁HTML；對照40個手機顏色／容量配置、12組容量總價及原文約稅額、9組手錶起價索引與2種耳機價格。含稅／運送註記與手機約略稅額直接讀原文，未套稅率或拿月付／換購當總價。日期保留來源月日；未明列的年份／時區、手錶起價的具體錶帶及手錶／耳機個別稅額維持未知。購買頁尺寸選項與規格的實際高度分開。商店其他功能FAQ留私人待審。

全四稿與選材逐節比較主體、數字、條件、強度及claim_ids；164個verified皆有正文引用，candidate引用0。Reading DOM排除Audit後仍能讀到所選數值及重要條件。新semantic digest綁定本輪全部內容，decision仍pending，沒有沿用舊審查。完整原音與全片語意核准不因文章一致性或工程通過而完成。

## 已執行檢查

| 檢查 | 本輪結果與界線 |
| --- | --- |
| check | 167條KB、161節點、六頁，來源／版本／定位與名稱用語檢查通過 |
| npm test | 168項通過，0失敗、0跳過；含台灣商店准入正反例及不換行空白的完整名稱反例 |
| build:web、check:links、debug:web | 六頁、3459個內部引用；DOM、錨點與公開產物白名單通過 |
| verify:scaffold | 通過；包含上述檢查及實際完整E2E，不等於內容發布核准 |
| 完整Chromium E2E | 27組通過，390／768／1280px、120%字級，93張本機截圖 |
| 非音訊Reading增補 | 83項通過，6張實際目視，字級／充電條件／Handoff／來源回連與正常捲動檢查通過 |
| 台灣價格Reading增補 | 20項通過，逐列核對三版7價行與3日期行、重要條件、四類首頁計數、同主題／證據往返；所產生截圖已逐張目視 |
| 公開清單／乾淨重建 | 192檔；新暫存副本、獨立npm cache、空白設定、公開registry與lockfile安裝成功，scaffold及合成release／production皆通過 |
| 真實release／production／計畫 | verify:release、verify:production、build:production與deploy:plan皆exit 1，確認覆蓋／blocking gaps／pending review阻擋，原網站輸出未改 |

三版各自測搜尋Enter／Escape、目錄與焦點、字級保存、深淺色、Reading／Audit、鍵盤橫捲、同主題切版、證據與返回、重新整理、無JS與localStorage失敗降級。角色不同的首頁與來源頁也按六頁清單測試，未因缺頁而跳過。一般讀者未選Developer正文，分類按實際選材檢查；首頁及來源中心仍區分四類。

隔離合成資料驗證production metadata、self-canonical、robots／sitemap、404、Hosting headers及mock部署參數；沒有真實Firebase寫入。新商店來源只接受六個精確ID／URL配對與已取得的版本／身分／locator，拒絕其他網域／市場／URL變體、假S01時間、混來源單claim與Developer產品前提。完整規則見 [資料契約](DATA_CONTRACT.md)。

## 實際發現與修正

- 整合前交接文件移入history後的相對連結曾使測試失敗；修正導向後重跑通過，失敗紀錄保留。
- 一般沙盒曾拒絕loopback listen（EPERM）；改在已授權的本機測試執行環境運行，沒有變更系統或登入設定。
- 官方原文的不換行空白造成完整產品名誤判；名稱檢查只正規化比較字串，原文不改。真正缺字與重複名稱仍由反例拒絕。
- 曾在生成字型目錄發現22個帶「 2」的同hash複本，公開產物檢查拒絕。原因未知，完整異常輸出已保存私有紀錄；以原作者來源正常清理重建後通過，未放寬白名單或手改dist。
- 公開副本兩次在超長Audit全頁截圖超過45秒，先後發生於並行與循序執行，不能歸因為並行。失敗log保留；現對超過16000 CSS像素的文件改擷取正常捲動的頂部／中間／底部視窗，記錄實際位置。這些圖僅代表所列視窗，不宣稱全頁目視；完整DOM與互動檢查維持，沒有提高timeout。
- 價格增補測試曾誤把Audit表算入主表、要求每版都出現Developer；修正測試定位與選材預期後重跑，未改文章來迎合測試。

## 本機量測與公開示例

本輪重新量測六頁的390／1280px，共12個樣本：Chromium 145、loopback HTTP、等待字型、無CPU或網路降速。HTML約4.5–586KB；首屏外部請求0、整頁水平溢出0。強制Noto備援測試實際載入20個本機子集，0失敗。毫秒及gzip數字僅屬本機觀察／估計，不是遠端效能或Lighthouse分數。

整合者實際看過並更新公開 [首頁示例](images/preview-home.png) 與 [AI任務示例](images/preview-ai-user-feature.png)。完整E2E、價格與條件截圖只留本機docs/qa，公開樹不含圖集、原始HTML或影音。新範圍中的每個重點表／條件與原文核對另存私有工作紀錄。

## 阻擋與紀錄

required_scope仍0–4860.06秒audio＋visual；GAP-001至003仍blocking。GAP-003只更新台灣頁面的進度，不把台灣價格回填為影片市場。既有音訊附件與資料URL多次無法送入模型，已讀嘗試紀錄，沒有重試同一失敗方法或把ASR當原音。

Safari／WebKit、Firefox、真機、完整輔助科技、SDK編譯與runtime、遠端CI、Hosting寫入權限、TLS／CDN與回復尚未驗證。前輪環境建立與只讀驗證結果保存；本輪沒有再次設定或線上重查環境。主工作區沒有Git，不能宣稱已檢查不存在的index或提交歷史。

本機完整紀錄：docs/qa/resume-content.json、browser-results.json、resume-reading-results.json、storefront-browser-results.json、performance.json、public-rebuild.json與resume-gates.json；最終dist/delivery.json核對語意輸入、源樹、產物與驗證紀錄的摘要。文件與公開示例更新後，另以最後公開樹重跑scaffold／乾淨重建並綁定最後產物；不得沿用不相符摘要。


<!-- verified-draft-preview-review-20260910-post-deployment -->

## 2026-09-10 草稿預覽已部署並完成指定線上驗收

本節追加最新結果；前文「尚未部署／尚未線上驗證」及原測試數量保留為當時紀錄，以本節判讀這次 preview 狀態。Firebase project／site 均為 `apple-event-explainers`，唯一 channel 為 `review-20260910`；[本次草稿預覽](https://apple-event-explainers--review-20260910-fa40aajd.web.app/) 已由 CLI 回報部署成功，CLI 顯示到期時間 `2026-09-17 09:30:56`（Asia/Taipei；已核對此 Mac 的 Intl 時區，保留 CLI 原值）。這是使用者核准的單次 7 天 preview，持有連結者可閱覽。

CLI 部署結果與線上驗收分開記錄：`docs/qa/draft-preview-deployment.json` 為 `cli-succeeded`；`docs/qa/draft-preview-remote.json` 在 `2026-09-10T01:36:35.141Z` 記錄 `status: passed`、`preview_verified: true`。本次以 Chromium 對六頁的 390／1280px 執行 40 項檢查，12 張所列視窗截圖完成目視；123 個遠端檔案解壓後的位元組摘要與部署 artifact 相符。此結果涵蓋指定 HTTPS 預覽與所列操作／視窗，不是全頁目視、所有瀏覽器或跨地區 CDN 的驗收。

本次 HTTP `X-Robots-Tag` 實際觀察為 `noindex`；經遠端位元組核對的六頁 HTML robots meta 為 `noindex,nofollow`。兩者分別記錄，不宣稱 header 與 HTML meta 或計畫值完全相同。noindex 是索引指示，不是登入或存取控制。HTTPS 憑證及本次回應、來源回連、字型、robots 與真實 404 均依線上報告核對；未測試環境仍見該報告的 limits。

部署前 scaffold 實際完成 189 項單元測試、27 組完整本機 E2E。單次授權 receipt 已消耗，後續本機重用檢查實際拒絕；正式 release／production 與一般 preview 門檻仍因完整影音、blocking gaps 及 pending 語意審查而阻擋。內容、來源、coverage、gaps、semantic 與設定的 13 份基準檔案 SHA-256 保持不變；`draft`、`pending`、0–4860.06 秒 audio＋visual 承諾及 GAP-001 至 GAP-003 均保留。

只有本次 Hosting preview 已部署；live 未部署、`live_verified` 仍為 false。沒有 GitHub push、repository 公開、Release 或 Firebase Auth 網域同步；本次 CLI 使用 `--no-authorized-domains`。本紀錄不授權續期、重部署、其他 channel 或提升至 live，也不表示影片缺口已關閉。

### 部署快照與部署後文件追加

實際部署所用的公開來源快照保存於 `dist/deployment-source-review-20260910`；原 scaffold／artifact 綁定紀錄保存於本機私有 `research/.private/deployment-preview-20260910/verified-artifact.json`，部署計畫與遠端位元組核對記錄另保存精確 artifact 清單。這輪 deployment wrapper 實作完成後未重跑乾淨 public rebuild；先前的 clean-rebuild 紀錄只屬內容整合階段，不能用來宣稱本次部署來源快照已通過乾淨重建。凍結 source-tree digest 為 `f12f7c20d5df47a765d4849dcd719440923e3ed3b358b264a53368f79876e6e0`，部署 artifact digest 為 `de9a3aa651df2579df21de9b1f921beade870ff1f152c63a1ae6ad3d42280a0a`，output digest 為 `455f22ef0b5c6da9851948b7dde170df4a1618746d89ddfb022a87e284a93bb7`。

本次只在部署後追加 HANDOFF、QA、RELEASE_CHECKLIST、DEPLOYMENT 四份文件，因此目前 workspace source-tree digest 會與上述部署快照不同。舊 scaffold／交付驗證只適用凍結快照，沒有重新簽署成目前來源的驗證，也沒有因文件追加重建產物或重部署。四份原文件的私有備份、追加前後摘要及檢查結果記於 `research/.private/deployment-preview-20260910/post-deployment-doc-update.json`；既有 `dist/verification.json`、部署快照與線上 artifact 均保留不改。後續若修改產品內容或工程，須另行驗證，不能沿用已消耗授權。

首次遠端 header 檢查曾錯誤要求與計畫字串完全相等，失敗紀錄保留於 `docs/qa/draft-preview-remote-attempt-1-header-failed.json`；最後依實際 noindex header 與獨立 HTML meta 檢查記錄結果，沒有為迎合檢查重部署或改 Hosting 設定。其他保留的嘗試與工具限制依最終線上報告判讀。
