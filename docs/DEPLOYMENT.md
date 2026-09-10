# 發布操作

## 2026-09-10 本次操作範圍與現況

本次使用者已明確授權既有repository的正常push與Public、遠端CI，以及通過完整release／production門檻後的專用site live部署；必要的新production候選preview亦在範圍內。不需要重複索取相同授權，wrapper的新計畫確認仍作機械綁定。禁止force push、重寫歷史、tag／Release及Auth等無關服務變更，永久旗標保持false。

只讀線上核對已確認 `sses09935/apple-event-explainers` 與Firebase project／site `apple-event-explainers`，Hosting回傳的正式origin為 `https://apple-event-explainers.web.app`，與現有設定一致。原 `review-20260910` 草稿預覽已部署並驗收，舊授權、receipt及計畫已消耗。這次沒有因取得發布授權而核准完整影音或production；實際結果見 [發布清單](RELEASE_CHECKLIST.md)。

所有新preview命令均由wrapper加入 `--no-authorized-domains`，只操作Hosting。計畫明列build-info中的version與source_revision，連同完整input／source-tree／artifact摘要及一次性確認綁定；無Git的revision保持null，正式候選應從已提交checkout建置。真實gate受阻時不執行live，也不拿舊draft例外替代。

以下保留既有命令介面與歷史階段，舊「沒有授權」只適用當時；資料、模態、隱私與正式內容門檻繼續適用。

### 本次實際操作結果

GitHub已正常push與Public，匿名核對192個檔案物件一致；首次提交與CI入口見[發布清單](RELEASE_CHECKLIST.md)。新live計畫由既有wrapper產生並拒絕，真實release／production亦拒絕；沒有執行Firebase live或建立新的preview。阻礙是完整影音／blocking gaps／pending語意及缺少production產物，不是欠缺目標或對話授權。

後續內容門檻真正通過時，使用這次已明確授權的專用project／site／live範圍，重新產生當時版本與產物綁定的新計畫及確認；不能使用本輪已失效的計畫或review-20260910舊receipt。正式產物從已提交checkout建置並重新驗證，所有新preview只做Hosting、不同步Auth網域。這裡沒有預先建立可用部署授權檔或把blocked計畫標成ready。

## 先前環境建立與部署流程

本輪已依追加授權建立私人空 GitHub repository 與 Firebase 專用空環境；沒有 push、公開 repository、release 或 Hosting 部署。正式內容仍被原音／全片覆蓋、條件缺口與 pending 語意審查阻擋。GitHub 與 Firebase 的以下操作由維護者在取得明確授權後執行。

## 必要輸入

`project.config.json` 已保存經使用者確認、實際建立並唯讀回查的值：

| 欄位 | 已確認目標 |
| --- | --- |
| GitHub repository | https://github.com/sses09935/apple-event-explainers（私人、空白） |
| Firebase project | apple-event-explainers |
| Hosting site | apple-event-explainers |
| 正式 origin | https://apple-event-explainers.web.app（Hosting API 回傳；尚未部署網站） |

project 是 Firebase 專案識別碼，site 是該專案的 Hosting site；兩者可能不同，不能互相代用。正式網址必須是已確認的 HTTPS origin。

`allow_remote_write` 與 `allow_deploy` 保持 false，代表預設不操作；執行時必須另外帶入只對該次操作有效的明確旗標與確認字串。登入成功、找到環境變數或設定正式 profile 均不構成對話中的部署授權。原參考專案與 site 一律拒絕。

已驗證 GitHub 登入與 ADMIN 權限、Firebase 專案可讀與 site 所屬及預設網址；尚未執行 Hosting 寫入或部署權限實測。日後使用官方 Firebase CLI；本專案未將 CLI 或服務帳號嵌入公開套件，也沒有設定 `.firebaserc` 預設專案。

## 手機連回 Mac 的操作環境

本次選擇手機 Remote 連回同一台 Mac，指令、工作目錄與 CLI 登入都留在 Mac。沒有建立獨立雲端執行環境、服務帳號金鑰或自動部署 workflow。GitHub CLI 2.95.0、Firebase CLI 15.21.0、Git 2.54.0、Node 24.16.0 已在本機驗證。

```sh
npm run check:environment
npm run check:environment -- --online
```

第一個指令只檢查本機工具與目標格式；第二個另唯讀查驗 GitHub 身分、repository 權限與可見性，以及 Firebase project／site 的實際存在與所屬。不建立、推送、部署或設定預設 project。安全摘要保存在 ignored 的 `docs/qa/environment.json`；錯誤只回報類別，不輸出 CLI 原始回應。無網路、Keychain 或沙盒拒絕時會失敗，不能直接推定登入過期。CI 不執行這些需要私人帳號的線上檢查。

日後從手機開啟本任務，先請代理執行線上環境檢查；內容完成後，再明確指定要 push、改公開、建立 release 或部署哪個 channel。環境檢查通過不替代內容／產物 gate 或那次操作授權。Mac 必須保持清醒、上網，且手機已完成 Remote 配對；本輪沒有冒稱實測手機連線。配對方式見 [官方 Remote 說明](https://learn.chatgpt.com/docs/remote)。

若 CLI 需要重新登入，使用 `gh auth login` 或 `firebase login --reauth` 的官方瀏覽器流程。不要把 token 貼到對話、專案或 CI；不要輸出原始 `firebase login:list --json`，其中可能含完整登入憑證。手機操作過程若 Google 要求驗證，仍需由帳號持有人完成。

## 公開原始碼

```sh
npm run check:public-tree
npm run verify:public-tree
node build/public-tree.mjs --export NEW_EMPTY_DIRECTORY
```

匯出目的地必須不存在。明確清單包含必要程式、lockfile、設定、KB、草稿、來源中繼資料、文件與測試產生器；不含私有素材或已生成的 fixture。`dist/public-tree.json` 記錄實際清單與檔案摘要。此工作區未初始化 Git，因此只有候選清單與乾淨匯出檢查，沒有不存在的 commit／staged／歷史稽核。

已另建 ignored 的 `work/github` 作為本機空 Git 工作目錄，分支 main、origin 指向上述私人 repository，使用本機 gh 認證助手；尚無 commit 或 staged 檔案，已通過唯讀 ls-remote。主工作區仍不是 Git repository。取得後續 push 授權後，將重新檢查的公開匯出檔案複製到此目錄（保留 .git），檢查精確待提交清單，再提交與 push。不要直接對整個原工作區執行 `git add .`，也不要打包原 ZIP／研究目錄。已存在 Git 時，本機檢查會檢視追蹤清單、index 與可達歷史；不重寫歷史。

## 預覽與正式輸出

```sh
npm run verify:scaffold
npm run verify:release
npm run verify:production
```

`verify:production` 以正式 profile 執行完整來源、單元、build、連結、DOM 與 Chromium 檢查。`build:production` 可單獨建置，但不足以取得部署資格。產物核對紀錄寫入本機 `dist/verification.json`，綁定 profile、來源清單、內容與實際測過的位元組；部署前缺少或失效均拒絕。

production 只在內容為 release-ready、完整 gate 通過、正式網址有效時建置。失敗發生在清理既有 dist 之前，不能把舊 preview 認作正式包。preview 保留草稿、noindex／robots；production 為六頁各產生不同 metadata、self-canonical、Open Graph 與 sitemap。沒有分享圖便不產生假圖片連結。404 保持非索引，沒有 SPA rewrite。使用原 `.html` 連結，沒有啟用 cleanUrls。

根 `firebase.json` 是經核對的 preview 安全模板，公開目錄限定 `dist/web`，並使用未綁定的 target 以避免帳號預設站。build 另產生 `dist/hosting.json`，依輸出 profile 決定 robots header。部署 wrapper 在私有暫存副本產生有明確 site 的設定與相同靜態檔案；不執行 `firebase init`、不改預設專案。

本機 `npm run preview` 會建置 config 指定的 profile 並使用相同 header 策略；它是本專案的 HTTP 模擬，不是 Firebase Emulator／CDN 驗證。所有固定檔名使用重新驗證快取；未採 fingerprint，沒有長期 immutable。CSP 允許自有 script、style、font，以及按鈕觸發的 youtube-nocookie iframe。

## Preview → 核對 → Live

本專案選擇**先驗證最終 production 產物**的策略：content gate 通過後，建置 production，做完整本機 QA，再將同一 production 包部署至預覽 channel。這個最終包有正式 metadata，因此公開預覽也可能被索引；noindex 不是存取控制。若需要 noindex 草稿預覽，請使用 preview profile，之後另建 production 並重跑驗證，不能直接把草稿 channel 提升為正式。

```sh
npm run deploy:plan -- --channel REVIEW_CHANNEL --project VERIFIED_PROJECT --site VERIFIED_SITE
```

這是 wrapper 的本機計畫模式，沒有呼叫 Firebase。不是 `firebase deploy --dry-run`。計畫包含 profile、project、site、channel、檔案清單、摘要、阻礙與一次性確認字串，存於 `dist/deploy-plan.json`；有任一阻礙即非零退出。內容未核准時也不發布遠端 preview。

只在已獲得對該目標與 channel 的部署授權後，由維護者執行：

```sh
npm run deploy -- --execute --project VERIFIED_PROJECT --site VERIFIED_SITE --allow-remote-write --allow-deploy --confirm 'EXACT_CONFIRMATION_FROM_READY_PLAN'
```

執行時若另帶 `--channel`，必須與計畫相同，不符立即拒絕。確認字串綁定目標、channel、nonce 與整份計畫摘要，30 分鐘到期；每次嘗試均消耗一次，失敗／不確定結果不自動重試。永久旗標不能替代確認。執行前重新比對內容、公開來源樹與產物，再複製同一批位元組到隔離暫存區。沒有 predeploy 自動重建、下載或轉錄。CLI 以 argument array 執行並指定 project／config；預覽指令為 `hosting:channel:deploy`，live 指令為 `deploy --only hosting`。

取得真實 preview URL 後，核對六頁、深連結、搜尋／目錄、跨版位置、來源往返、404 狀態、CSP、字型、robots、canonical 與 build-info 摘要。這一步尚未執行。核對後，為相同產物另建 `--channel live` 計畫，取得另外的 live 授權與一次性確認，再執行。不能把 preview 授權沿用到 live，也不使用 channel clone 掩蓋 profile 差異。

## 線上檢查與回復

live 操作後，從真實正式網址檢查上述項目、TLS、CDN header 與 build-info；只有實際通過才記 live-verified。CLI 成功只代表 CLI 回報成功，wrapper 不會宣稱線上驗證完成。

若需回復，先確認先前穩定的 Hosting release、版本與站址，取得回復授權，再由 Firebase Console 的 Hosting release history 執行 rollback；不要猜 version ID。或回到已保存且通過 gate 的前一份來源／產物，重新計畫與確認後部署。回復後重跑正式網址 smoke test；本輪未實測遠端回復。

## 官方工程依據

以下只用於部署工程，未納入產品事實庫：

- [Hosting 設定、404、header 與路由](https://firebase.google.com/docs/hosting/full-config)
- [本機、預覽 channel 與正式部署](https://firebase.google.com/docs/hosting/test-preview-deploy)
- [管理 Hosting release 與 channel](https://firebase.google.com/docs/hosting/manage-hosting-resources)
- [Firebase CLI](https://firebase.google.com/docs/cli)

指令與設定於本輪對照官方文件及本機 mock；遠端帳號權限、預覽 URL、線上 TLS／CDN、回復均未驗證。

<a id="draft-preview-20260910"></a>

## 2026-09-10 單次草稿預覽例外：歷史契約，現已執行並消耗

使用者已明確核准本次 draft-preview，不必再次詢問同一操作的確認。本節是前述「內容未核准時也不發布遠端 preview」一般策略的單次窄例外；原條文保留為正式發布流程。本節撰寫時尚未部署，也沒有真實預覽 URL 或線上驗證成功的結論。

| 項目 | 本次唯一授權範圍 |
| --- | --- |
| Firebase project | `apple-event-explainers` |
| Hosting site | `apple-event-explainers` |
| Channel | `review-20260910` |
| Profile／內容狀態 | preview／draft；semantic pending |
| 預覽期限 | 7 天，不自動續期 |
| 閱覽與索引 | 持有連結者可公開閱覽；保留 noindex，無登入存取控制 |
| 授權紀錄／計畫有效期 | 私有單次授權紀錄最長 24 小時；計畫 30 分鐘 |

完整影音 `required_scope` 與全部 blocking gaps 保留；`verify:release`／`verify:production` 仍可因證據不足而拒絕，須原樣記錄。這個例外只允許展示目前草稿，不產生 production 包，不把語意改 approved，也不改寫內容發布狀態。GitHub push、repository 公開、Release、live、其他 channel 或預覽續期都沒有取得授權。既有環境沿用，永久部署旗標保持 false；不得重新設定登入、預設 project 或重建環境。

### 執行前必須完成

沿用既有 Mac CLI，以只讀檢查核對明確 project／site 及登入；不輸出原始帳號 JSON 或憑證。對最終 preview 產物完成 `verify:scaffold`，包含來源、單元、build、連結、DOM／公開輸出與完整 Chromium 檢查，另核對私有資料排除。檢查紀錄須綁定當前 input、source-tree 與實際 artifact；相關內容或位元組改變後不能沿用舊驗證。

在上述最終狀態建立私有單次授權紀錄，綁定本次 input／source-tree／artifact 摘要、project、site、channel 與有效期。紀錄是已取得對話授權的具體化，不是用 JSON 自行擴大授權。它與 authorization receipt 均留在私有本機，不進公開來源樹、`dist/web`、Git 或 CI artifacts；`research/.private`、原始 HTML／影音及憑證也不得上傳。

### 本次 wrapper 命令

下列 `PRIVATE_JSON_PATH` 替換為核對後的私有授權紀錄路徑；不得把授權 JSON 內容貼入公開文件。plan 與 execute 必須指定同一份紀錄。

```sh
npm run deploy:plan -- --project apple-event-explainers --site apple-event-explainers --channel review-20260910 --draft-preview-authorization PRIVATE_JSON_PATH
```

plan 只做本機計畫。僅在目標、摘要、工程與隱私檢查全部通過且計畫 ready 時，使用其中的精確一次性確認字串執行：

```sh
npm run deploy -- --execute --project apple-event-explainers --site apple-event-explainers --channel review-20260910 --draft-preview-authorization PRIVATE_JSON_PATH --allow-remote-write --allow-deploy --confirm 'EXACT_CONFIRMATION_FROM_READY_PLAN'
```

確認字串是 wrapper 對計畫與產物的機械綁定；本次已獲使用者授權，代理不必為同一操作再提確認問題。執行前再驗全部摘要、有效期及授權未使用狀態；授權紀錄最長 24 小時、計畫 30 分鐘，任一過期或綁定改變都拒絕。wrapper 以 authorization receipt 防止已嘗試授權再用；失敗或結果不確定不自動重試，也不換 channel 或重新產生紀錄規避消耗狀態。僅由 wrapper 呼叫明確 project／site 的預覽部署並設定 7 天期限，不直接呼叫 Firebase 或使用 channel clone。 本次 CLI 同時指定 `--no-authorized-domains`，避免同步或變更 Firebase Auth 的網域設定；只上傳經核對的靜態 Hosting 內容。

### 執行後的結果界線

只有實際取得的 CLI 結果才能記為該次部署結果。成功取得預覽 URL 後，再核對六頁、深連結、搜尋／目錄、跨版同主題、證據回連、404、CSP、字型、noindex／robots 與 build-info 摘要，並確認 channel 的到期資訊。尚未實測的項目保持待驗證；CLI 成功不等於線上驗收完成。預覽期限為本次 7 天，不授權續期或提升至 live；即使草稿預覽全部檢查通過，正式 release／production 門檻仍保留。實際部署、線上檢查與失敗紀錄由後續 QA／交接文件據實更新，本節不預先宣稱完成。


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

本次單次授權已執行並消耗，前文命令示例不構成再次執行授權。失敗／不確定結果不自動重試的規則及其他 channel／live／續期須另有授權的界線維持。往後只讀查看既存預覽不等於可重部署。
