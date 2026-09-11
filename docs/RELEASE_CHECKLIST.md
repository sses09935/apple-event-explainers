# 發布檢查清單

## 網站正式發布

- package.json 與 package-lock.json 版本一致；publication_status 為 published。
- 六頁不顯示草稿，版本、時間與 commit 都符合 build-info，GitHub 連結指向完整 SHA。
- 完整 scaffold、公開來源／產物安全、乾淨副本重建及同提交 CI 通過。
- 從實際已提交的乾淨 checkout 建置；計畫與執行均核對 SHA、版本、來源及產物摘要。
- 明確 Firebase project/site/channel，使用新的單次計畫及 confirmation/receipt。
- CLI 成功後驗收 HTTPS、全部公開檔案、六頁互動與桌面／手機畫面。

## 內容查核

網站發布與完整內容認證分開。coverage 的實際音訊／畫面檢視、來源身分與 semantic decision 保留實況。verify:release／verify:production 只在宣稱完整內容認證時使用。

## 私有資料

原始影片、研究、私人授權與部署收據不得公開。永久部署旗標為 false；僅限已授權的 Hosting，不改其他 Firebase 服務。

精確結果由本機 dist/delivery.json 保存；歷史部署不能代替目前版本驗收。
