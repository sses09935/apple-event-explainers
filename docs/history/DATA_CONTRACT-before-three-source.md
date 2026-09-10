# 單一影片資料契約 v1

本契約由 `schemas/*.schema.json`（JSON Schema draft-07、Ajv）及 `build/data.mjs` 的跨檔驗證共同執行。所有 JSON 物件禁止未知欄位；必要欄位不能省略。未取得或未知資訊使用 `null`，不能填造假的 URL、雜湊、日期或 0。驗證僅證明資料結構與關係合法，不能自動證明語意或來源真實。

## 可編輯來源與生成邊界

| 檔案 | 權威與用途 | Schema／parser |
| --- | --- | --- |
| `project.config.json` | 網站身份、頁面清單、日期與部署界線 | `schemas/project.schema.json` |
| `sources/event-manifest.json` | S01 單一影片中繼資料 | `schemas/event-manifest.schema.json` |
| `content/knowledge-base.md` | 唯一可編輯事件事實庫 | `parseKB()`、`schemas/claim.schema.json` |
| `content/drafts/event.md` | 選材、排序、可選的轉述 | `parseDraft()` |
| `sources/coverage.json` | 取得／字幕／音訊／畫面各自的檢視紀錄 | `schemas/coverage.schema.json` |
| `sources/gaps.json` | 四種資訊缺口 | `schemas/gaps.schema.json` |
| `sources/semantic-review.json` | 內容語意審查與摘要綁定 | `schemas/semantic-review.schema.json` |
| `dist/web/*` | 一次 build 生成，禁止手改 | `build/build.mjs`、`build/inspect.mjs` |

不把完整字幕或逐字稿當作第二份可編輯事實庫。原素材、字幕及工作檔放 `research/.private/`，只供本機研究，不進 Git、網站與公開 QA 報告。

## A. 專案設定

固定 `schema_version: 1`、`slug: "apple-event-explainers"`、`language: "zh-TW"`、`storage_prefix: "apple-event-explainers:"`。`name` 為非空顯示名稱，不代表活動正式名稱。

`publication_status` 是 `draft` 或 `release-ready`。後者在 check/build 時亦須通過內容門檻；不代表已授權部署。所有目前生成頁面仍標示草稿與 noindex。

`pages` 必须包含且只能包含三個唯一項目，各有非空 `title`：

| file | role | draft |
| --- | --- | --- |
| `index.html` | `home` | 不得提供 |
| `event.html` | `reader` | `content/drafts/event.md` |
| `sources.html` | `evidence` | 不得提供 |

Build、連結、靜態 DOM 與瀏覽器測試共用此清單；缺頁或零頁必敗。

- `content_scope_date`：`YYYY-MM-DD` 或 null，事件內容適用日期。
- `content_checked_at`：UTC ISO 時間或 null，内容最後查核時間。
- `site_built_at`：設定檔固定 null，避免手動維護建置時間；實際值由 build 寫入 `dist/web/build-info.json` 的 `built_at` 與所有頁尾。
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
| `subtitle_type` | null、none、manual、automatic、translated |
| `available_modalities` | `{subtitles, audio, visual}`；各值為 true（可用）、false（不可用）、null（尚未確認） |
| `access_record` | null 或來源存取觀察物件；與影片取得及內容核對分開，詳見下節 |
| `player_adapter` | `{kind:"official-link", verification:null}` 預設；另支援 youtube |

所有 UTC 時間使用 `YYYY-MM-DDTHH:mm:ss[.sss]Z`。

發布者核對物件包含：`status`（pending/verified）、`publisher`、`canonical_url`、`verified_at`、`reviewer`、`method`、`evidence_url`。pending 時後四欄可為 null；verified 時都要有值，publisher 必須 Apple，canonical_url 必須與 manifest 相同。`evidence_url` 是證明指定影片由 Apple 發布的出處，不能藉此擴大事件事實來源。

修订代表一個固定影片版本。更換影片、剪輯、長度或時間基準時，必須更新 revision 並重核所有 evidence、coverage、player verification 與語意審查。時間基準不支援以某章起點當影片零點。

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

只有 kind 為 youtube，且 verification 完整匹配 canonical URL／artifact_revision 才能顯示「播放此片段」。verification 包含 `canonical_url`、`artifact_revision`、`verified_at`、`reviewer`、`notes`、`tested_start_seconds`、`tested_end_seconds`、`seek_works:true`。紀錄必須來自下一階段實際瀏覽器定位檢查，不能因 URL 算得出來就填 true。

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
| `source` | 固定字串 `[S01]` |
| `statement_zh`、`subject`、`topic` | 非空字串；所有來自外部的文字都 escape |
| `claim_type` | announcement / specification / performance-claim / availability / limitation |
| `verification` | candidate / verified / disputed |
| `availability_status` | unknown / announced / preview / available / not-applicable |
| `qualifiers` | 非空字串陣列，可為空；包含地區、條件、比較基準等必要限制 |
| `structured_values` | `{name,state,value,unit}` 陣列，state=unknown 必須 value=null；known 必須非空字串或有限數字，unit 為非空字串或 null |
| `evidence` | 下述片段物件陣列；verified 至少一筆 |
| `review_record` | candidate/disputed 可 null；verified 要 reviewer、reviewed_at、notes 與非空 coverage_ids |

`verified` 只表示已對照影片，不能宣稱獨立實測通過。performance-claim 在摘要與正文會自動附上「官方效能宣稱，非獨立實測」限制。availability_status 的 unknown 會顯示「尚未核對」，不轉成影片未公開。

每個 evidence 包含：

```json
{"source_id":"S01","artifact_revision":"實際影片修訂識別","start_seconds":12,"end_seconds":18,"modality":"both","context":"描述前後文、畫面位置或發言定位"}
```

秒數僅為語法示範。正式 evidence 的 start/end 必須有限，且 `0 <= start < end <= duration_seconds`；revision 必須符合影片。modality = spoken / on-screen / both，分別要求實際核對 audio / visual / 兩者。字幕閱讀不能代替音訊核對。context 必填。

review_record 的 coverage_ids 必須指向既存 coverage segment，並且其已核對模態的區間聯集覆蓋證據整段，不允許時間洞或模態不足。

## D. Coverage

頂層是 `schema_version:1`、`source_id:"S01"`、`artifact_revision`、`required_scope:[]`、`segments:[]`。revision 與 manifest 完全一致。

`required_scope` 描述本次承諾的範圍，每筆 `{start_seconds,end_seconds,modalities}`；modalities 是 subtitles/audio/visual 的非空唯一陣列。發布門檻要求非空，且全部範圍的指定模態都已覆蓋。若只審查部分影片，必須明示範圍，不能聲稱看完全部。

每個 segment：

- `id`：唯一非空識別。
- `start_seconds`、`end_seconds`：有限有效影片區間。
- `acquired`：已取得的 subtitles/audio/visual 陣列，可空。
- `subtitles_read`、`audio_checked`、`visual_viewed`：獨立布林，各自預設 false。
- `review_record`：未檢視可 null；任一模態已處理時須有 `{reviewer,reviewed_at,notes}`，且该模態必須列在 acquired 與 manifest 可用清單。

尚未檢視表示處理欄位 false，不由「取得」推論完成。release 使用各模態區間聯集檢查，段落重疊不重算為額外覆蓋。

## E. Gaps

頂層 `{schema_version:1,items:[]}`。每項固定欄位：`id`（GAP-NNN）、`subject`、`question_zh`、`kind`、`blocking`、`evidence`、`coverage_ids`、`reviewed_scope`、`review_record`。

| kind | 證據／審查條件 | 顯示意義 |
| --- | --- | --- |
| explicit-not-disclosed | 非空 evidence + review_record | 影片明確表示尚未公開 |
| reviewed-not-found | evidence 必須空；非空 coverage_ids + reviewed_scope + review_record；指定模態區間須完整覆蓋 | 在該檢視範圍內未找到 |
| not-yet-reviewed | evidence、coverage_ids 都空；reviewed_scope、review_record 都 null | 尚未核對，無法推論有無公開 |
| conflict | 至少兩筆 evidence + review_record | 證據衝突，尚未解決 |

reviewed_scope 與 required_scope 的區間／模態語法相同。review_record 與 coverage 的三欄相同。blocking 是是否阻碍本次發布，true 一律阻擋。未解決 conflict 即使 blocking=false 仍阻擋。足夠範圍的選擇、缺口語意及解除阻擋理由必須由實際人工／研究審查判斷；工具不自動推斷。

## F. Draft Markdown

第一行固定 `# 發表會整理`；只允許 `## 非空段落標題`、空行、獨立的區塊外 HTML 註解與以下 claim 區塊：

```text
:::claim KB-001
可選的繁中 Markdown 轉述。
:::
```

引用行和結束行必須各自一行且完全相符。claim 區塊內的 `<!-- ... -->` 是原文，會保留並 escape，不當作編輯註解刪除。空區塊會直接使用 KB.statement_zh。每個區塊只能引用一條 KB；同一 KB 可出現多次。段落標題用於組織，不可放未經 KB 支持的事實。多主張表格要逐條拆成有 KB 參照的區塊。

正文不另寫 `[S01]`、影片 URL 或 `mm:ss` 時間。證據連結、時間軸、主題入口、引用回連、規格表及來源索引由 KB/manifest 產生。不可用轉述新增規格；數值結構放 structured_values，轉述的語意一致性需審查。

Markdown 支援基本段落、強調、清單、表格與引用；raw HTML 一律 escape，images、任意 links/autolinks 停用。來源連結由 renderer 產生。這防止外部 metadata／轉錄中的 HTML 或指令變成可執行介面。

每條 claim 的證據錨點為 `sources.html#claim-KB-NNN`；每次正文引用是 `event.html#ref-KB-NNN-<全篇區塊序號>`；摘要為 `event.html#summary-KB-NNN`。證據卡回連全部正文位置及摘要。`dist/web/source-map.json` 只含自動衍生的 KB/reference/evidence 對照。

## G. 語意審查與發布門檻

完成影片研究、證據核對及草稿後，先填好所有可編輯內容（包含 publication_status 若需設 release-ready）。執行 `npm run review:digest`，將輸出的 SHA-256 填入 `sources/semantic-review.json.input_digest`。

摘要綁定 project config、event manifest、coverage、gaps、KB 與 draft 的精確原始內容（包含空白）。不包括 semantic-review 本身，避免循環。`reviewer`、`reviewed_at`、`notes` 必填，`decision` 由 pending 改 approved 只能在真正完成審查後；`scope` 必須含 claims、drafts、coverage、gaps。任何來源修改都要求重新審查與更新摘要。

`npm run verify:scaffold` 執行 schema、單元反例、乾淨 build、連結、靜態 DOM／輸出隱私檢查、實際 Chromium E2E。允許零內容；成功僅 scaffold-ready。

`npm run verify:release` 先要求指定影片與 Apple 發布者身份已核對、完整影片 metadata、非空正式草稿、有效 verified 證據、承諾覆蓋、無阻擋／衝突、日期與新鮮語意審查，再執行同一工程測試。空骨架預期失敗。對話中的授權、影片真實性與研究能力不能由 JSON 旗標代替。

本次部署命令永遠拒絕，包括有人填上新目標時；沒有 Firebase SDK、預設專案、部署 workflow 或任何遠端寫入呼叫。下一階段發布也必須另外獲得明確授權，不能把 gate 成功當作部署許可。

額外工程檢查 `npm run test:release-fixture` 在 OS 暫存副本執行依賴安裝與完整 `verify:release` 正向流程；合成身份、主張與審查僅測程式，不是實際影片驗證。它不會修改正式資料，結束後清除副本，且不遞迴加入 release 命令。正式 E2E 按當前資料狀態測試，空狀態反例獨立使用 fixture，取得影片後無需刪除空骨架測試。
