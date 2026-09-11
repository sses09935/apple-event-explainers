# 官方來源資料契約 v3 · 三受眾增補

## 2026-09-12 時序與 Developer 延伸

原始證據與完整覆蓋承諾保留 S01 固定 Apple YouTube 版本；目前官方播放器已裁切，閱讀時間軸及回連依已核對映射換算，另提供官方描述中的章節。兩種時間明確標示，超出映射範圍只提供影片入口。映射綁定來源／分析版本、範圍、偏移、目前長度、章節及一次審查摘要；變更必須重審，且不啟用未驗證嵌入。訊號比對及跳轉核對都不等於原音語意審查。

新增 S30–S51 的 Developer 文件各自保存身分核對、原文版本、page review 與精確 locator；新主張仍只作已核對產品前提的技術對照。文件的主型別 SDK 版本不冒充所有子成員的個別版本，無平台 metadata 時保持未知，沒有新增 session 來源或真機相容結論。

## 2026-09-12 影片幣別確認


## 2026-09-10 台灣官網價格增補

使用者在本輪提供台灣 Apple 首頁，追加核對本次產品的台灣價格。現有 v3 schema 增加 `apple_tw_storefront`，只涵蓋逐一核對的五份購買頁（S24–S28）與指定首頁（S29）的價格、配置及預訂／發售資訊。這是以下三類來源規則的明確例外；五個固定規格頁與既有 Developer 准入規則不變。

六個來源採程式中明列的 source ID／exact URL 配對，要求 zh-TW、實際取得的 SHA-256／revision／時間、identity_review、同 revision 的 page_reviews 與精確 locator；HTML 的 content_resource_url 必須 null。未登錄、相似網址、其他市場或僅同為 Apple 網域皆不放行。來源元資料仍僅存 manifest，不另設價格 registry。商店來源不能作為 Developer 技術研究的產品支援前提；本次未審的 FAQ 與其他功能文案不因准入而成為正式主張。

Reading、Audit 與首頁計數將「台灣官網價格與上市」獨立標示。價格／日期另存 KB，不覆寫影片原卡；數值表格仍由 KB 生成。台灣正文保留起價／總價、配置及未確認的稅額、年份或時區，不從月付、換購或其他市場計算售價。event 摘要與時間軸繼續只使用 S01。已核對台灣頁面不會自動補完 S01 市場語境或完成全片影音查核；原 required_scope 與實際 coverage 進度保留。

本版依使用者 2026-09-10 追加授權取代「只有 S01 才合法」的舊規則。2026-09-10 三受眾增補同時取代舊三頁及單篇逐 claim 卡片限制。既有 KB ID、S01 的秒數與 revision、event.html 錨點均保留。v1 與前次交接保存在 `docs/history/`，不是現行要求。

## v3 來源分流與最小遷移

不增加第二份 registry 或 KB。`event-manifest.json` 現為 schema_version **3**；coverage 保持 **2**；其他 schema 版本仍為 1。S01 另必填 `source_type:"event_video"`、`language`（未確認可 null）。

`manifest.supplemental_sources[]` 每項固定以下欄位，禁止額外欄位：

| 欄位 | 契約 |
| --- | --- |
| source_id / canonical_url / title | 唯一 SNN、實際 HTTPS 原文入口及已取得標題 |
| source_type | product_specs / developer_documentation / developer_session |
| acquired_at / artifact_revision / sha256 | 實際取得時間及已保存快照 SHA-256；不得以取得日當發布日 |
| publisher / language / scope / notes | Apple、實際語系、適用範圍、存取與限制紀錄 |
| content_resource_url | 同一內容的官方資料 URL；產品 HTML 為 null；DocC 為對應的同源 JSON |
| related_claim_ids | 規格頁可空；Developer 須指向已 verified 的影片或產品功能 |
| identity_review | Developer 必填 reviewer／reviewed_at／notes，記錄實際取得原文與可讀頁、資料接口的同內容身分核對；不可只拼接 URL |

只有實際取得並核准的補充來源入登錄；未取得的 URL 留在接手紀錄，不能填假 hash 建立條目。S02–S06 固定為本次五個台灣頁；S07 起為逐一登錄的 Developer 文件，不再以三個 LocalAuthentication exact paths 限縮研究。

准入由多項條件共同決定：S07 起的唯一來源 ID 與 canonical URL、`https://developer.apple.com/documentation/…` 的具體文件路徑（不接受 query/hash/帳密）、與該可讀頁相符的 `/tutorials/data/documentation/….json`、實際快照 SHA-256/revision/取得時間、非空 `identity_review`、已 verified 的影片或產品前提，以及同 revision 的 `coverage.page_reviews`。頁面 review 必須有非空 locators；每條 verified claim 仍須匹配自己的 locator。一般 Apple hostname、登錄欄位或 hash 本身都不是語意已核對的證明。新增來源沿既有 registry 登錄，不新增另一份需同步的名冊。

Developer session 類型已區分，但本輪沒有實際取得或登錄 session，因此 **目前採 fail-closed，不接受 session 主張**。不能將 session 當網頁、附 S01 秒數或只靠 enum 放行。日後實際納入時，須同步獨立 duration/revision/時間基準、逐模態 coverage、renderer 及反例，再開放該具體來源；不假裝本輪已驗收這條路徑。

網頁 evidence 固定 `{source_id, artifact_revision, modality:"webpage", locator, context}`，沒有 start/end。locator 為真實章節、錨點或精確 API symbol；context 是支持內容的短轉述，不能只是首頁網址。`coverage.page_reviews[]` 固定 `{id,source_id,artifact_revision,locators,review_record}`，review_record 是 reviewer/reviewed_at/notes；verified 網頁 evidence 必須與其中一筆 locator 和 revision 精確相符。

影片 evidence 仍依下方時間與模態契約驗證。`subtitles` 僅供 candidate 定位，不能使影片 claim verified。保留全部必要 evidence；source 為主要來源，至少一筆 evidence 必須相符。S01 主要來源不得混入補充頁 evidence，防止倒灌發表會摘要。其他跨來源 evidence 仍需每筆各自核對；不接受無標示的 API/產品推論。

Developer claim 另須 `technical_context`：`related_claim_ids` 非空、`relationship:"context-only"`、`sdk_availability:[{platform,introduced,beta}]`、`runtime_tested:false`、`notes`。前提必須已 verified 且在來源准入範圍內。這是研究脈絡，**不宣稱特定產品相容或本次新增 API**；本輪不提供跨來源推論或實機支援結論的正式資料類型。SDK availability 來自該 symbol 文件的 metadata，與 verification、availability_status 分開；無原文就空陣列，不猜版本。

Reading 必須顯示三類內容標籤與技術限制；Audit 加上版本、完整 locator、查核紀錄。首頁分列全部／影片／規格／Developer 計數；event-only 摘要與時間軸只收 S01。候選／爭議不進正式摘要或規格表。三份正式文章使用有穩定 ID 與 claim_ids 的敘事、編輯摘要、FAQ、技術註記及整合表格。KB 是唯一事實權威，並不要求文章逐句複製；轉述與跨主張解釋由語意審查確認，涉及新因果、相容性或效果仍需額外證據。

網頁尚未核對的範圍以進度說明保留，不偽造網頁時間。不同來源若有矛盾，保留各自 evidence，不默默覆蓋，交由語意審查確認。

本契約由 `schemas/*.schema.json`（JSON Schema draft-07、Ajv）及 `build/data.mjs` 的跨檔驗證共同執行。所有 JSON 物件禁止未知欄位；必要欄位不能省略。未取得或未知資訊使用 `null`，不能填造假的 URL、雜湊、日期或 0。驗證僅證明資料結構與關係合法，不能自動證明語意或來源真實。

## 可編輯來源與生成邊界

| 檔案 | 權威與用途 | Schema／parser |
| --- | --- | --- |
| `project.config.json` | 網站身份、頁面清單、日期與部署界線 | `schemas/project.schema.json` |
| `sources/event-manifest.json` | S01 影片與 supplemental_sources 來源登錄 | `schemas/event-manifest.schema.json` |
| `content/knowledge-base.md` | 唯一可編輯事件事實庫 | `parseKB()`、`schemas/claim.schema.json` |
| `content/drafts/event.md` | 影片總覽、時間軸與歷史引用 | `parseDraft()` |
| `content/drafts/dev.md`／`ai-user.md`／`general.md` | 三受眾的獨立文章、選材、排序與轉述 | `parseDraft()` |
| `content/audiences/dev.md`／`ai-user.md`／`general.md` | 各受眾目的、必要主題、選材及避免事項；不是另一份事實庫 | 必讀非空 Markdown；納入 digest |
| `sources/coverage.json` | 取得／字幕／音訊／畫面各自的檢視紀錄 | `schemas/coverage.schema.json` |
| `sources/semantic-review.json` | 內容語意審查與摘要綁定 | `schemas/semantic-review.schema.json` |
| `dist/web/*` | 一次 build 生成，禁止手改 | `build/build.mjs`、`build/inspect.mjs` |

不把完整字幕或逐字稿當作第二份可編輯事實庫。原素材、字幕及工作檔放 `research/.private/`，只供本機研究，不進 Git、網站與公開 QA 報告。

## A. 專案設定

固定 `schema_version: 1`、`slug: "apple-event-explainers"`、`language: "zh-TW"`、`storage_prefix: "apple-event-explainers:"`。`name` 為非空顯示名稱，不代表活動正式名稱。

`publication_status` 為 `draft`、`published` 或 `release-ready`。published 表示網站正式版，獨立於完整內容認證；release-ready 仍須通過內容門檻。preview／production profile 控制輸出與索引策略，不直接決定是否標示草稿。

`pages` 必須包含且只能包含六個唯一項目，各有非空 `title`：

| file | role | audience | draft |
| --- | --- | --- | --- |
| `index.html` | `home` | 不提供 | 不提供 |
| `event.html` | `reader` | 不提供 | `content/drafts/event.md` |
| `sources.html` | `evidence` | 不提供 | 不提供 |
| `dev.html` | `reader` | `dev` | `content/drafts/dev.md` |
| `ai-user.html` | `reader` | `ai-user` | `content/drafts/ai-user.md` |
| `general.html` | `reader` | `general` | `content/drafts/general.md` |

`audience` 與 Reading／Audit 分開；三個版本都有完整閱讀工具。loader 讀取所有 manifest draft 與受眾設定，不跳過缺失檔。`data.blocks` 保留 event 相容 alias；`data.drafts[page.file]` 保存各篇 blocks，`allBlocks()` 供全站引用計算。
Build、連結、靜態 DOM 與瀏覽器測試共用此清單；缺頁或零頁必敗。

- `content_scope_date`：`YYYY-MM-DD` 或 null，本輪採來源快照 UTC 日期，不能當成發表會日期。
- `content_checked_at`：UTC ISO 時間或 null，內容最後查核時間。
- `site_built_at`：設定檔固定 null；build-info 的 built_at 每次由建置產生，六頁共用。version 讀取該 checkout 的 package.json，source_revision、source_committed_at 取自其 Git HEAD；commit_url 為設定 GitHub repository 的完整 SHA 永久連結。沒有 Git 的副本保持 null，頁面以台灣時間及機器可讀 UTC datetime 呈現。
- `deployment.target_firebase_project`：null 或非空新目標；任何含 `apple-afm3-explainers` 的值均拒絕。
- `deployment.allow_remote_write`、`allow_deploy`：本階段固定 false。

localStorage 僅使用 `apple-event-explainers:reader-mode`（reading/audit）、`apple-event-explainers:font-scale`（90/100/110/120）、`apple-event-explainers:color-scheme`（light/dark）。儲存失敗時仍可使用介面。

## B. 影片 manifest

`source_id` 永遠 S01；無影片時除 schema/source_id 與 adapter 預設值外，其餘中繼資料及可用模態維持 null。不可先填產品、活動標題、長度、修訂或取得紀錄。

| 欄位 | 格式與規則 |
| --- | --- |
| `canonical_url` | 無帳密的 HTTPS URL 或 null，唯一影片入口 |
| `title` | 實際影片標題，非空字串或 null |
| `publisher_verification` | null 或下述身分核對物件 |
| `artifact_revision` | 對實際取得版本的非空修訂識別，未取得為 null；不必偽裝成檔案雜湊 |
| `duration_seconds` | 有限且大於 0 的影片長度，未知為 null |
| `timeline_basis` | null 或 `{kind:"canonical-video-start", offset_seconds:0, notes:"實際時間基準說明"}` |
| `acquired_at` | 實際取得時間，UTC ISO 或 null |
| `subtitle_type` | null、none、manual、automatic、translated、provider-unspecified |
| `available_modalities` | `{subtitles, audio, visual}`；各值為 true（可用）、false（不可用）、null（尚未確認） |
| `access_record` | null 或來源存取觀察物件；與影片取得及內容核對分開，詳見下節 |
| `player_adapter` | `{kind:"official-link", verification:null}` 預設；另支援 youtube、youtube-link |

所有 UTC 時間使用 `YYYY-MM-DDTHH:mm:ss[.sss]Z`。

發布者核對物件包含：`status`（pending/verified）、`publisher`、`canonical_url`、`verified_at`、`reviewer`、`method`、`evidence_url`。pending 時後四欄可為 null；verified 時都要有值，publisher 必須 Apple，canonical_url 必須與 manifest 相同。`evidence_url` 是證明指定影片由 Apple 發布的出處，不能藉此擴大事件事實來源。

修訂代表一個固定影片版本。更換影片、剪輯、長度或時間基準時，必須更新 revision 並重核所有 evidence、coverage、player verification 與語意審查。時間基準不支援以某章起點當影片零點。

### 來源存取觀察（2026-09-10 契約 v1 增補）

manifest 必填 `access_record`，未嘗試／未指定影片時為 null。此欄集中保存來源存取中繼資料，沒有新增另一份事件事實庫。物件禁止額外欄位：

- `checked_at`：UTC ISO，這次存取檢查時間；不代替 `acquired_at`（媒體取得時間）或內容查核時間。
- `reviewer`、`notes`：非空字串；說明取得哪些資料及未取得模態，區分頁面標示與實際媒體。
- `status`：`blocked` 或 `accessible`；後者只表示存取可用，不代表已核對影片或完成覆蓋。blocked 獨立阻擋 release。
- `attempts`：非空陣列，每筆僅含非空 `method`、`result`；記錄實際路徑與結果，不包含憑證、私有檔案或完整回應。

`available_modalities=false` 表示本次存取不可用，不推論影片永久沒有該模態。僅取得頁面/API 不填媒體 `artifact_revision`、`acquired_at`、`timeline_basis`；不同或取整後的 metadata 時長寫進觀察 notes，尚未固定媒體時間軸時保持 `duration_seconds=null`。SDH 標記不能判定字幕為人工或自動，也不能當成字幕已讀。

正式資料與 empty/rich fixture 同步補入此欄；Ajv、跨檔驗證、renderer、單元反例與 E2E 均涵蓋。來源頁 Reading 顯示阻礙及時間，Audit 展開實際嘗試。首頁、閱讀頁及頁首亦顯示 blocked。原素材回應及實際檔案 SHA-256 只保存在本機私有研究目錄，不以 HTML/API 的 hash 冒充影片版本。

### 播放器驗證

目前只實作 canonical URL 為 `https://www.youtube.com/watch?v=<11字元ID>`、`https://youtube.com/watch?v=...` 或 `https://youtu.be/<ID>` 的 adapter。其他 URL 使用 official-link。

`youtube-link` 與 `youtube` 分開驗證：前者只啟用官方原站的 `t=整秒s` 連結，不產生 iframe、不自動在 end 停止；仍保留精確可複製時間。只有 kind 為 youtube，且 verification 完整匹配 canonical URL／artifact_revision 才能顯示「播放此片段」。verification 包含 `canonical_url`、`artifact_revision`、`verified_at`、`reviewer`、`notes`、`tested_start_seconds`、`tested_end_seconds`、`seek_works:true`。紀錄必須來自下一階段實際瀏覽器定位檢查，不能因 URL 算得出來就填 true。

來源顯示與複製的時間保留小數秒，避免把同一秒內的起訖片段顯示成相同時間。Adapter 產生 `youtube-nocookie.com/embed/...` 的 start/end 與 `autoplay=0`，只在使用者按按鈕後建立 iframe。不追蹤、不捲動跳播；時間是原影片秒數，start 向下、end 向上取整。子秒定位精度及在區段末尾停止的實際行為仍受播放器限制。缺驗證時只提供影片入口與可複製時間；iframe 失敗／JS 停用仍保留可用來源入口。No-cookie 網域不代表外部播放器完全不收集資料。

## C. KB Markdown 精確語法

第一行固定 `# 事件事實庫`。允許空白及獨立的區塊外 HTML 註解（不渲染）；註解必須完整結束。JSON fenced block 內的字串原文不會被當成註解刪除。每條主張只能由 `### KB-NNN` 加一個 `json` fenced block 構成；heading ID 與 JSON id 相同且唯一。禁止 JSON fence 之外的游離事實段落。

以下是**語法範例，不能直接當作影片事實**：

````markdown
# 事件事實庫

### KB-001

```json
{
  "id": "KB-001",
  "source": "[S01]",
  "statement_zh": "待對照指定影片的繁中主張",
  "subject": "由影片辨識的主體",
  "topic": "由影片辨識的主題",
  "claim_type": "specification",
  "verification": "candidate",
  "availability_status": "unknown",
  "qualifiers": [],
  "structured_values": [{"name":"待核對項目","state":"unknown","value":null,"unit":null}],
  "evidence": [],
  "review_record": null
}
```
````

此範例僅能在已設定影片後新增為 candidate；candidate/disputed 不可進正式草稿。

| 欄位 | 允許值／規則 |
| --- | --- |
| `id` | KB-001 形式，三位數字，唯一且不可因排序任意重編 |
| `source` | 主要來源 `[SNN]`，必須已登錄 |
| `statement_zh`、`subject`、`topic` | 非空字串；所有來自外部的文字都 escape |
| `claim_type` | announcement / specification / performance-claim / availability / limitation |
| `verification` | candidate / verified / disputed |
| `availability_status` | unknown / announced / preview / available / not-applicable |
| `qualifiers` | 非空字串陣列，可為空；包含地區、條件、比較基準等必要限制 |
| `structured_values` | `{name,state,value,unit}` 陣列，state=unknown 必須 value=null；known 必須非空字串或有限數字，unit 為非空字串或 null |
| `evidence` | 下述片段物件陣列；verified 至少一筆 |
| `review_record` | candidate/disputed 可 null；verified 要 reviewer、reviewed_at、notes 與非空 coverage_ids |

`verified` 只表示已對照所標示官方來源，不能宣稱獨立實測通過。performance-claim 在摘要與正文會自動附上「官方效能宣稱，非獨立實測」限制。availability_status 的 unknown 會顯示「尚未核對」，不轉成影片未公開。

每個 evidence 包含：

```json
{"source_id":"S01","artifact_revision":"實際影片修訂識別","start_seconds":12,"end_seconds":18,"modality":"both","context":"描述前後文、畫面位置或發言定位"}
```

秒數僅為語法示範。正式 evidence 的 start/end 必須有限，且 `0 <= start < end <= duration_seconds`；revision 必須符合影片。modality = spoken / on-screen / both（字幕定位另用 subtitles），分別要求實際核對 audio / visual / 兩者。字幕閱讀不能代替音訊核對。context 必填。

review_record 的 coverage_ids 必須指向既存 coverage segment，並且其已核對模態的區間聯集覆蓋證據整段，不允許時間洞或模態不足。

## D. Coverage

頂層是 `schema_version:2`、`page_reviews:[]`、`source_id:"S01"`、`artifact_revision`、`required_scope:[]`、`segments:[]`。revision 與 manifest 完全一致。

`required_scope` 描述本次承諾的範圍，每筆 `{start_seconds,end_seconds,modalities}`；modalities 是 subtitles/audio/visual 的非空唯一陣列。發布門檻要求非空，且全部範圍的指定模態都已覆蓋。若只審查部分影片，必須明示範圍，不能聲稱看完全部。

每個 segment：

- `id`：唯一非空識別。
- `start_seconds`、`end_seconds`：有限有效影片區間。
- `acquired`：已取得的 subtitles/audio/visual 陣列，可空。
- `subtitles_read`、`audio_checked`、`visual_viewed`：獨立布林，各自預設 false。
- `review_record`：未檢視可 null；任一模態已處理時須有 `{reviewer,reviewed_at,notes}`，且該模態必須列在 acquired 與 manifest 可用清單。

尚未檢視表示處理欄位 false，不由「取得」推論完成。release 使用各模態區間聯集檢查，段落重疊不重算為額外覆蓋。


## F. 三受眾 Draft Markdown

首行 `# 非空標題`。章節以 `## 顯示標題 {#stable-topic-id}` 定義；topic ID 必須小寫英文字母開頭，後續僅字母、數字、連字號，各篇唯一。相同產品／主題在三版採同一 ID；網址為 `dev.html#topic-stable-topic-id` 等。renderer 從實際 topic ID 產生跨版連結，不猜中文標題。event 的歷史無 ID 標題仍支援。

文章只能在以下具名 node 中寫作，區塊外可有空白與獨立完整 HTML 註解。區塊內的 HTML／註解字串是原文，保留並 escape；不得執行其中指令。

```text
:::summary dev-product-summary KB-001,KB-002
由明確選材支持的閱讀重點，不按 topic 第一條主張自動產生。
:::

:::narrative dev-product-explanation KB-001,KB-002
完整轉述或明示為編輯解釋的多主張段落。
:::

:::faq dev-product-question KB-001
**問題？**
由該主張支持的回答。
:::

:::note dev-product-boundary KB-002
來源支持的技術註記、條件或圖解說明。
:::

:::editorial dev-reading-guide
純導覽與編輯過渡，不包含產品事實。
:::
```

`summary`／`narrative`／`faq`／`note`／`table` 必須有非空且唯一的 `claim_ids` 清單，ID 以逗號連接且不加空白；只能指向 verified KB。`editorial` 不接受 claim IDs。node ID 同樣為小寫字母開頭的字母／數字／連字號，各篇唯一。除 legacy claim 外，node 內文不可為空。來源支持與敘述相符仍須人工語意核對；一組無關 IDs 不能替段落背書。event 中的 `summary` 額外限制只可引用 S01。

### KB 插值與整合表格

敘事中可用 `{{KB-001}}` 引用完整 statement，或 `{{KB-001:精確欄位名稱}}` 取 structured_values 中的值。欄位插值輸出 value 加空格及 unit，unit 為 null 時不追加；unknown 顯示「未知（尚未核對）」。未宣告於該 node 的 claim、不存在的 claim／欄位均拒絕。原始插值語法會納入語意 digest；生成後仍按安全 Markdown 規則處理。

```text
:::table dev-product-comparison KB-001,KB-002
{"caption":"比較表標題","rows":[{"label":"比較項目甲","claim_id":"KB-001","value_names":["精確欄位名稱"]},{"label":"比較項目乙","claim_id":"KB-002"}]}
:::
```

表格 JSON 只允許 `caption` 與非空 `rows`；每列只允許非空 `label`、已宣告的 `claim_id` 與可選非空 `value_names`。省略 value_names 使用該 claim 全部 structured_values；沒有值則用 statement。不得在表格新增手填 value/cell 欄位。每個 declared claim 都至少被一列使用；同一 claim 可用多列。數字／單位來自 KB，每列有來源 pill、`data-row-claim` 及 `row-node-id-N` 錨點；每列保留來源；同一 KB 的 qualifiers 在緊接表格的條件區只列一次，逐 KB 標識且 Reading 可見。一般 Markdown 表格不應代替來源可追溯的產品規格表。

一般 Markdown 支援段落、強調、清單、表格、引用與程式 fence；raw HTML 一律 escape，images、任意 links/autolinks 停用。draft 不自行寫 `[SNN]`、來源 URL 或影片時間。程式片段仍必須核對官方 symbol 並標示編譯狀態；renderer 不會將合法語法當成已編譯。

### 相容與回連

舊的 `:::claim KB-001` 空／非空區塊繼續接受。`event.html#ref-KB-NNN-原區塊序號` 不改，舊 `event.html#summary-KB-NNN` 亦保留作導向；這些歷史錨點不代表仍按第一條主張生成摘要。不要重排或移除 event 既有 block 造成引用漂移。

新 node 的文章位置為 `page.html#node-node-id`；每個 claim 在 node 中另有 `page.html#ref-KB-NNN-區塊序號`。所有來源入口指向 `sources.html#claim-KB-NNN`，證據卡自動回連每一版和 event 的引用。證據中心列出全部 verified KB；尚未選入正文者明示無正文引用。candidate／disputed 仍在隔離 Audit 區，不能成為正式摘要、時間軸或表格。

`dist/web/source-map.json` 為生成陣列，每筆含 `kb,page,node_id,topic_id,kind,reference,evidence,rows`，`rows` 是逐列錨點。verified 但未選入正文者的 reference/page/node/topic/kind 為 null，仍有 evidence。inspect 比較全部預期引用、表格列與頁面，不 filter 掉缺頁。

正文不再為每條 structured_values 生成獨立小表格；原始細項保留在 Audit。Reading 保留來源類別及必要限制；通用 context-only 說明每頁一次，文件 SDK availability 依來源／revision／完整版本內容去重，不同 symbol 或版本不合併；Audit 展開原子 statement、詳細值、版本與 review。正文影片時間以整秒 mm:ss/hh:mm:ss 顯示；精確子秒及可複製時間仍留 sources。來源精度未變。

## G. 語意審查與發布門檻

完成影片研究、證據核對及草稿後，先填好所有可編輯內容（包含 publication_status 若需設 release-ready）。執行 `npm run review:digest`，將輸出的 SHA-256 填入 `sources/semantic-review.json.input_digest`。

摘要綁定 project config 的內容設定（排除純 deployment 與 output 設定）、event manifest、coverage、KB、manifest 中全部四份 draft 及三份 audience 選材設定的精確原始內容（包含空白）；config 內容投影依 JSON 序列化。純目標與 profile 另由部署計畫綁定，不構成語意批准。不包括 semantic-review 本身，避免循環。`reviewer`、`reviewed_at`、`notes` 必填，`decision` 由 pending 改 approved 只能在真正完成審查後；`scope` 必須含 claims、drafts、coverage。任何來源修改都要求重新審查與更新摘要。

`npm run verify:scaffold` 執行 schema、單元反例、乾淨 build、連結、靜態 DOM／輸出隱私檢查、實際 Chromium E2E。允許零內容；成功僅 scaffold-ready。

`npm run verify:release` 先要求指定影片與 Apple 發布者身份已核對、完整影片 metadata、每個 reader 非空正式內容、三受眾各有編輯 summary 與穩定 topic、三篇不是相同全文、有效 verified 證據、承諾覆蓋、來源存取可用、日期與新鮮語意審查，再執行同一工程測試。空骨架預期失敗。對話中的授權、影片真實性與研究能力不能由 JSON 旗標代替。

部署預設拒絕；本輪新增只做本機檢查的計畫模式，以及需一次性確認才可執行的 Firebase CLI wrapper。此句原屬遠端執行前階段；實際授權與執行結果依 [發布操作](DEPLOYMENT.md) 的最新紀錄判讀，不改變本契約gate。每次執行重新比對內容、公開清單、產物、project／site／channel；失敗或不確定結果不自動重試。完整介面見 [發布操作](DEPLOYMENT.md)。gate 成功不是部署授權。

額外工程檢查 `npm run test:release-fixture` 在 OS 暫存副本執行依賴安裝與完整 `verify:release` 正向流程；合成身份、主張與審查僅測程式，不是實際影片驗證。它不會修改正式資料，結束後清除副本，且不遞迴加入 release 命令。正式 E2E 按當前資料狀態測試，空狀態反例獨立使用 fixture，取得影片後無需刪除空骨架測試。

遷移工具：`node build/migrate-source-contract.mjs`，只接受已知 v2 manifest；保留原檔於私有目錄，再補入 v3 來源分類。已是 v3 則不寫檔。KB、coverage、秒數與 revision 不改；單元測試確認輸入不變及重跑等價。

## H. 三版驗收的工程與語意界線

單元反例涵蓋六頁各自缺失、每份 draft 與 audience digest、未知多 claim／插值／表格欄位、逐列引用、未取得／不相關／無 locator 的 Developer、來源類別、精確時間、candidate 隔離與私有輸出。E2E 對 manifest 所有預期頁面跑窄螢幕、中尺寸、桌面；每一受眾分別檢查 Reading／Audit、搜尋、目錄、字級、配色、鍵盤、同主題切版、證據往返及無 JavaScript 降級。整合表格在需要橫捲時測鍵盤捲動，完整頁面不得溢出。

`docs/qa/browser-results.json` 綁定當次 input_digest 並列實際截圖；舊報告不代表改稿後已驗證。合成 fixture 只在 OS 暫存副本驗證，不當作正式來源或內容覆蓋。Chromium 測試不代表 Safari、真機、輔助科技或程式碼編譯已驗收。

三版工程完成、三版編輯完成度、全片證據覆蓋必須分開報告。`verify:scaffold` 允許空內容，僅表示工程骨架可運作；`verify:release` 保留全片 required_scope／模態、source access、fresh semantic review 等門檻。不得縮小承諾範圍或把未核對模態填為完成以通過門檻；兩種 gate 均不是遠端寫入／部署授權。

### 三頁設定的可重跑遷移

`node build/migrate-audiences.mjs` 只接受已知舊三頁或完整六頁 topology。舊設定逐位元組備份至 `research/.private/migrations/project-three-pages-<sha256>.json`，再追加三個 audience page；既有前三頁、draft、audience、KB、manifest、coverage 均不覆寫。預設只回報缺少而需撰寫的 audience/draft 檔，避免假裝內容完成。可加 `--create-stubs`，只為缺少檔案建立無產品事實的 editorial／選材待寫提示；存在檔案保持原樣。

已是六頁時完全 no-op，不建立備份或補檔；未知／部分 topology、錯誤 role/draft 與 symlink 輸出拒絕。單元測試確認原內容與備份逐位元組相同、重跑不改內容及空 stub 不含 claim 引用。遷移不批准內容或語意審查，未完成文章仍會被 release gate 阻擋。

## I. 命名與輸出 profile 增補

manifest 的 `entities` 只管理 entity ID、canonical_name、必要配置、aliases，以及核定來源的 source_id／artifact_revision／locator，不存規格。全名與繁中檢查涵蓋作者資料、三版、來源說明、公開文件及生成的 title／description／alt／aria／搜尋標籤。精確官方原名豁免及原因列於 build/quality.mjs；API、URL、ID 不作整包轉字。重複產品名稱同樣拒絕。

`output.profile` 為 preview／production；`output.public_base_url` 未取得時為 null。production 需要內容 release-ready、新鮮且 approved 的語意審查、原承諾 coverage、有效正式 HTTPS origin、公開來源清單及生成 DOM／產物檢查。實際內容仍 pending 時不產出正式包；合成正向測試只在暫存副本執行。六頁各自 canonical，404 非索引；profile 不改變資料的 verification 或部署授權。

`deployment.target_firebase_site`、`github_repository` 與既有 project 欄位未設定時為 null。無真實 Git commit 時 build-info 的 commit／dirty 為 null；有 commit 時分開記錄 dirty，不把未提交內容說成 HEAD。套件仍 private，避免意外 npm 發布；與日後 GitHub 公開狀態無關。

發表會日期與台灣觀看日期尚未在影片原音／畫面中核定；manifest 的日期說明只保存已取得 metadata 的原文與邊界。content_scope_date 是專案來源範圍日期，content_checked_at 是本輪內容檢查時間，built_at 是實際建置時間，彼此不能代用。

## J. 2026-09-10 單次 draft-preview 授權例外

本次使用者明確核准將目前草稿以 7 天預覽提供連結閱覽，限定 Firebase project／Hosting site `apple-event-explainers`、channel `review-20260910`。這項追加授權只取代前述一般部署規則中對本次草稿預覽的禁止；不是來源核准、語意 approved、content-release-ready 或 production 資格。此段保留執行前契約；該草稿預覽現已部署並完成指定線上驗收，舊授權已消耗。最新發布授權與結果見 [發布操作](DEPLOYMENT.md)，不得重用本次歷史授權。

preview profile 與 `publication_status: draft`、semantic `pending`、原完整 `required_scope` 均保留，頁面與回應保留 noindex。持有預覽連結者可公開閱覽；noindex 只控制索引意圖，不提供存取控制。此例外不允許縮短承諾範圍、將語意改 approved 或把 scaffold 通過寫成全片影音核對完成。`verify:release` 與 production 的全部內容／工程門檻照舊適用，且須如實記錄其阻擋。

草稿預覽另以完整 scaffold 驗證、公開來源樹與生成 DOM／產物檢查、私有資料排除作為必要工程前提；所有結果須對應實際將上傳的同一份內容與產物，失效紀錄不能沿用。永久 `allow_remote_write`／`allow_deploy` 仍維持 false；僅本次 wrapper 執行得到有範圍的授權。

授權以私有 JSON 紀錄承載，plan 與 execute 均須帶 `--draft-preview-authorization PRIVATE_JSON_PATH`。紀錄必須綁定本次語意輸入、公開 source-tree、實際 artifact 摘要與明確 project／site／channel；最長有效 24 小時，計畫最長有效 30 分鐘，channel 預覽期限為 7 天。失效、綁定不符或已使用的授權必須拒絕；嘗試以 authorization receipt 防止重用，失敗或結果不確定不得自動重試。授權紀錄與 receipt 只留私有本機，不進 KB、manifest、公開原始碼、站台或 CI artifacts。

本次對話已提供具體操作授權，不再要求使用者重複確認；計畫的一次性確認字串仍用於機械綁定，不代表第二次使用者批准。此例外不延伸至其他 channel、預覽續期、live、GitHub push、repository 公開、Release、登入重設或環境重建。後續執行與線上驗證須分開記錄實際結果；操作介面見 [本次草稿預覽例外](DEPLOYMENT.md#draft-preview-20260910)。
