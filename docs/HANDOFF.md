# 工程與內容交接

## v1.0.0 正式網站與版本資訊

使用者要求網站結束草稿標示、更新版本、自動建置時間與 GitHub commit 串接，並移除獨立的未完成事項登錄部分。publication_status 現為 published；這是網站發布狀態，不代替內容原音或語意審查。

版本由實際 checkout 的 package.json 取得，每次建置自動寫入建置時間、commit SHA、提交時間及 GitHub permalink，六頁共用同一 build-info。台灣顯示時間與 UTC datetime 同時保留。非 Git 副本明示無提交資訊，不使用 GITHUB_SHA 或遠端 latest 代填。計畫及執行均重核本機 Git 身分，防止同檔案但不同提交時誤用舊產物。

只保留正常來源、coverage 與 semantic 資料。已移除的登錄機制不再載入、渲染、檢查或保存副本。使用者提供的私人影片仍留本機，不進公開原始碼、網站或 CI。

## 目前內容

51 份來源、205 條 KB（202 verified、3 candidate），四份文章共 186 個節點。22 份 Developer 文件及 38 條技術對照已整合；影片價格按使用者確認標示 USD，台灣價格另列。YouTube 導覽使用已核對的裁切映射及官方章節，原始證據時間不變。

影音檢視與整體語意狀態依實際紀錄呈現，不因版本發布而改成已完成。網站工程驗證、同提交 CI、部署成功和線上驗收分別記錄。

## 操作與交付

主工作區不是 Git；公開 checkout 為本機 work/github。先核對專用遠端目標，使用正常公開匯出、提交與 CI，再於乾淨已提交 checkout 建置、驗證及部署。不得在部署計畫之後重建，或重用舊 nonce。

當次精確 commit、版本、建置時間、CI、Hosting version 及逐檔驗收，以本機 dist/delivery.json 為準。其時間戳只代表該次觀察。操作契約見 [部署流程](DEPLOYMENT.md) 與 [QA](QA.md)。
