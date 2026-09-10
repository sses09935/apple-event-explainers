# 發布檢查清單

## 2026-09-10 本次發布收尾

GitHub公開原始碼與Firebase live分別驗證。本次已具明確操作授權，仍保留全部證據、隱私與production門檻；授權不是內容核准。先前草稿預覽已部署且完成指定驗收，舊授權已消耗，不能再解讀為待執行。

目前KB仍167條、164 verified／3 candidate，四稿161節點、27表133列；F11新增15個單幀後視覺聯集約43.1058秒、原音0秒、字幕30秒。required_scope維持0–4860.06秒audio＋visual，GAP-001至003仍blocking，GAP-004仍非blocking。下一個內容續接點仍是F11的2050–2170秒原音及完整對話流程。

本次公開、CI與摘要對應的最終狀態追加於本節後方；本機完整精確紀錄為dist/delivery.json。下列舊狀態表保留其歷史，不能代替當前檔案與實際結果。

| 本次狀態 | 真實範圍 |
| --- | --- |
| repository-ready | 是；公開清單、授權／隱私、乾淨重建與正常push完成，Public且匿名可讀。最後提交的CI須對應其SHA。 |
| content-release-ready | 否；全片影音、GAP-001至003及semantic pending仍阻擋。 |
| deployment-prepared | 本機工程是；專用目標、wrapper、一次性計畫與mock已驗證，真實live計畫仍被內容／production門檻拒絕。 |
| live-verified | 否；沒有本次live部署版本或正式站驗收。歷史草稿preview成功另行保留。 |

### 本次已核實的公開與門檻結果

[GitHub原始碼](https://github.com/sses09935/apple-event-explainers)已正常push並設為Public；首次提交為[e8cd7a2f111cfbf31ae8ed8751dfa7a203beabf5](https://github.com/sses09935/apple-event-explainers/commit/e8cd7a2f111cfbf31ae8ed8751dfa7a203beabf5)，匿名核對192個Git檔案物件一致。主工作區仍非Git，work/github沿用main與原origin；沒有force push、tag或GitHub Release。每個提交的遠端CI以相同e8cd7a2f111cfbf31ae8ed8751dfa7a203beabf5的[Actions紀錄](https://github.com/sses09935/apple-event-explainers/actions)判讀。

本次內容版本已通過193項單元、27組完整Chromium E2E、3459個內部連結與12張代表圖目視；僅含公開清單的新副本依lockfile安裝、scaffold與合成release／production通過。文件收尾後的最終source-tree、產物、提交與CI對應由本機dist/delivery.json保存；完整範圍和限制見 [QA](QA.md)。

真實release、production及新live計畫均拒絕；沒有可發布的production產物或本次live版本。阻礙仍是全片audio＋visual、GAP-001至003與semantic pending。舊草稿preview的來源、產物、計畫與已消耗receipt已比對保存資料全部相符；那是舊版本驗收，不能當作本次修正版的線上驗收。

## 先前內容整合與部署歷史

本輪完成本機內容續接與價格增補，沒有push、公開repository、Release或Firebase部署。前輪歷史見 [整合前清單](history/RELEASE_CHECKLIST-before-non-audio-integration.md)，詳細結果與未測環境見 [QA](QA.md)。

| 狀態 | 目前結論 |
| --- | --- |
| repository-ready | **本機是**。192個公開檔案通過敏感資訊／私有路徑／型別／名稱／文件連結檢查，新副本依lockfile安裝與完整scaffold、合成release／production通過。最後交付須核對相同source-tree digest；沒有推送。 |
| content-release-ready | **否**。全片audio＋visual承諾未完成；音訊0秒、視覺聯集約42.6053秒、字幕30秒，GAP-001至003仍blocking，semantic pending。 |
| deployment-prepared | **本機是**。明確project／site／channel、profile、完整gate、產物／來源摘要、一次性確認及mock正反例已驗證。前輪專用目標保存，仍需內容完成及該次發布／部署授權。 |
| live-verified | **否**。沒有preview／live部署、真實Hosting寫入或線上網站驗證。 |

## 可接手交付

- 167條KB／164 verified／3 candidate；四稿161節點與三份選材重審，27表133列。event在價格增補前後不變；摘要／時間軸只引S01，保留既有規格及Developer引用。三受眾各有功能路線與台灣價格／日期表。
- 非音訊修正、五份規格條件及台灣價格新增範圍見 [HANDOFF](HANDOFF.md) 和 [FEATURE_COVERAGE](FEATURE_COVERAGE.md)。事實只在KB，來源元資料只在manifest；既有ID／來源版本／精確定位及修正前材料保留。
- 168單元測試、27組完整Chromium、六頁三尺寸與120%字級、非音訊／價格Reading增補通過；完整數據與截圖保存在本機QA。未測Safari、Firefox、真機、完整輔助科技、SDK編譯／runtime及遠端CI。
- 公開檔案只包含程式、設定／lockfile、KB、四稿、三選材、來源元資料、文件、兩張已檢視示例及測試。原始HTML、影音、ASR、私有研究、登入檔與大量QA不進公開樹或dist/web。

## 門檻實際結果

真實verify:release、verify:production、build:production與deploy:plan -- --channel review皆exit 1。已確認原因包含完整覆蓋、blocking gaps及fresh complete semantic review；正式建置另要求release-ready。現有preview輸出未被這些拒絕改寫。沒有縮短required_scope、刪gap、改approved或借合成資料核准真實內容。

四種狀態不能互相代替。台灣官網已提供部分原先未知的價格／日期，S01市場語境仍獨立未核；商店日期年份／時區、具體起價錶帶及部分個別稅額保留未知。

## 精確公開清單與乾淨重建

check:public-tree寫出dist/public-tree.json；export使用新的不存在目錄，最終位置記在dist/delivery.json。verify:public-tree用新OS暫存副本、獨立npm cache、空白使用者設定及公開registry安裝，再跑scaffold與合成release／production；副本清除，結果保存在docs/qa/public-rebuild.json。主工作區無Git，不宣稱已檢查不存在的提交歷史。

最終文件與示例更新後，須再驗證最後公開樹與網站產物；交付紀錄同時比對semantic input、source-tree、output、verification及乾淨重建摘要。合成production通過只驗工程，不代表真實內容可發布。

## 版本、目標與後續操作

版本0.1.0、preview、來源範圍日期2026-09-10。內容核對與建置時間分開，實際值見dist/web/build-info.json；沒有新tag或Release。GitHub私人空repository、Firebase專用project／site與origin在前輪已核實，未要求重填；本輪沒有再次設定或線上環境檢查，預設兩個外部旗標false。

下一步先完成 [F11及全片證據](FEATURE_COVERAGE.md)，重審四稿／選材與digest；若日後取得明確發布授權，才依序只讀重查既有專用目標與登入、verify:production、具體preview計畫及一次性確認、preview核對、新live計畫及確認、正式smoke test。詳細命令與回復方法見 [DEPLOYMENT](DEPLOYMENT.md)。手機連回同一台Mac沿用現有CLI，環境建立的歷史授權不等於網站發布授權。


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

| 最新狀態 | 結論 |
| --- | --- |
| preview-deployed | 是；僅本次已授權的 7 天 channel |
| preview-verified | 是；僅上述六頁、位元組、HTTPS 與 Chromium 驗收範圍 |
| content-release-ready | 否；完整影音、blocking gaps 與 semantic pending 保留 |
| live-verified | 否；沒有 live 部署或正式站驗收 |
| 目前 workspace 的 scaffold 驗證 | 部署後四份文件已追加；原驗證保持綁定部署來源快照，不冒稱目前 source-tree 已重驗 |
