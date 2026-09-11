# 工程與內容交接

2026-09-10（Asia/Taipei）。本輪完成三受眾功能解說、全名與繁中修正、公開匯出及可明確操作的發布工程；正式內容仍受全片證據與語意門檻阻擋。最新驗收見 [QA](QA-before-non-audio-integration.md)，四種狀態見 [發布清單](RELEASE_CHECKLIST-before-non-audio-integration.md)。上一輪狀態保留於 [歷史交接](HANDOFF-before-feature-release.md)。

## 最新優先工作：手機連回 Mac 的發布環境

依使用者追加授權，已建立私人空 GitHub repository `sses09935/apple-event-explainers`，Firebase project／site `apple-event-explainers`。官方 Hosting API 回傳 origin 已寫入 project.config.json；目前未部署網站。GitHub ADMIN、私人／空白狀態及 Firebase 專案／site 存取經唯讀回查。Node、Git、gh、firebase 均已安裝，新增 `npm run check:environment -- --online` 安全檢查；ignored 的 work/github 已初始化 main、設定專用 origin 與 gh 認證助手，ls-remote 通過，沒有 commit／push。Firebase 舊 CLI 授權已依使用者同意撤銷並重新登入，不保存或公開憑證。

使用方式是手機 Remote 連回同一台 Mac，沒有另設雲端 runtime、自動部署或付費方案。本次環境建立是唯一新增的遠端寫入授權；尚未授權推送、公開 repository、release 或 Hosting 部署。兩項預設外部旗標仍 false。操作見 [部署文件](../DEPLOYMENT.md)。

## 本次續接目標

使用者要求完成非音訊待辦：補核可見操作與結果、查清授權規格頁的適用條件、逐節審查三版敘事，重新驗證真實本機輸出與公開匯出。正式內容仍保留全片 audio+visual 要求；來源未提供的步驟或條件必須清楚記為未知，不能猜測。真實站址已在後續環境工作核實；內容與單次部署授權仍未完成，本輪不部署。目標工具拒絕覆寫未完成的舊目標，因此以此交接紀錄保存使用者更新的工作目標，不將舊目標誤標完成。

## 內容與證據

154 條唯一 KB：151 verified（S01 35、規格 89、Developer 27）、3 candidate。本輪新增26條，沒有更換原128條 ID、verification、數值／單位或精確 evidence 定位。全名、繁中及必要結構欄位在作者來源修正後重新建置；沒有直接修 dist。

S01 仍為指定影片的固定版本；S02–S06 為五份原台灣規格，已重新計算 hash 並核對名稱與相關列。S07–S23 為逐一登錄的 Developer 文件；本輪新增 App Intents 與 Foundation Models 指南的實取 HTML／DocC，核對內容身分、版本與 locator。沒有納入 session 或借用其他產品事實。

本機 ASR 的3353段已用來整理全場結構，並查看全場每分鐘畫格定位。正式覆蓋只計79個有紀錄的單一畫格，視覺聯集約2.635967秒；audio_checked 仍0秒、字幕已讀30秒。ASR 與抽樣不算全片聲畫核對。required_scope 保持0–4860.06秒 audio+visual，GAP001–003仍 blocking，三條候選未進正文。

## 三版閱讀

六頁完整保留，event 為44節點，dev 39、AI 使用者37、普羅大眾28。原 event 引用順序與舊錨點保留；新段落使用穩定 node／topic ID、多 claim 敘事及 KB 生成的表格。

- 開發者版：從功能示例對照 App 動作／資料、影音權限與路由、版面及模型 session 流程；API 文件保持 context-only，未編譯或驗證新品 runtime。
- AI 使用者版：先讀個人線索、相機提問、清單、海報、捷徑、聲音與照片任務，再進入產品主題。官方示例與說明性情境分開。
- 普羅大眾版：以功能用途與日常意義建立全貌，保留關鍵規格、健康限制、價格市場語境。

螢幕使用設定、拍攝控制、混音、參考影像、健康摘要、談話文字／摘要、多工與雙面拍攝均增加用途解說。加入由 KB 生成的精簡適用條件表，未知系統、地區及推出條件不轉成確定支援。完整選材與待核對問題見 [功能索引](../FEATURE_COVERAGE.md)。

## 工程與公開邊界

維持 Node ESM、靜態六頁、既有 CSS 與字型，Node 24.16.0。公開 source tree 由 `build/public-tree.mjs` 列明必要檔案；只匯出程式、設定、內容、公開來源中繼資料、精簡文件及測試。原媒體、原文快照、ASR、大量 QA 與工作 log 留在 ignored 私有位置。完整清單及摘要在本機 dist/public-tree.json，沒有假稱 Git clone。

preview／production 與內容狀態、外部授權分開。production 需要內容 gate 與正式 origin；六頁 self-canonical、Open Graph、sitemap、robots、favicon、404 及 Hosting headers 均有正反例。`verify:production` 對同一產物跑完整檢查並保存本機驗證紀錄；部署計畫重新比對內容、source tree、產物與紀錄，不默默重建。

`npm run deploy` 預設拒絕；本機 plan 可列出阻礙。日後執行須 project／site／channel 一致、明確授權、精確的一次性確認、未過期 nonce 與不變的檔案摘要。CLI 使用 argument array；失敗或不確定結果不自動重試。指令見 [發布操作](../DEPLOYMENT.md)。

## 續接與權限

sources/semantic-review.json 已綁定本輪四份草稿與三版選材的摘要，decision 保持 pending。下一步是同版本原音與連續畫面的必要核對、功能推出條件及整場語意審查；不能縮小 scope 或移除  取得綠燈。

四項真實目標現已設定並核實；兩個預設外部授權仍 false。本工作區未初始化 Git，沒有 staged／commit／歷史可供稽核。未修改參考專案；只建立追加授權的私人空 repo 與專用 Firebase 環境，沒有 push、release、部署或設定帳號預設專案。沒有 live-verified 結論。

## 內容工作保存點

使用者改為優先架設環境時，非音訊審核已取得新的原畫格、兩段連續畫格核對、照片完整片段核對、五份規格全部140個註腳報告與四篇148節點全文審稿。尚未整合這批內容修正到正式 KB／草稿／coverage；因此本文件前述154KB、79個單一畫格仍是正式資料數量，不能把私人報告直接算進 coverage。

下一步整合重點：海報清單由中途3個增加為9個（不是加入成功）；照片示例的花枝描述；捷徑及 iPhone Handoff 的片段操作邊界；耳機原註腳主體範圍；手機充電配件條件，以及三版姿態、模型可用原因與禁止措辭。私人報告位於 research/.private/non-audio-20260910，主整合者須回看證據再改唯一 KB，更新三版、來源回連與語意摘要。新的發現代表內容仍有需修正項目，不能因環境完成就宣稱正式發布就緒。
