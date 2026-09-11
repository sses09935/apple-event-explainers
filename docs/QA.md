# 驗證與驗收

## 版本及建置資料

每次 build 讀取實際 checkout 的 package 版本與 Git 身分。六頁共用建置時間、提交時間及完整 SHA permalink；沒有 Git 的匯出副本保留 null，不能借用 CI 環境值。測試涵蓋不同 checkout 版本、父 repository 誤認、同檔案不同 HEAD、危險 repository URL 與所有頁面的時間一致性。

## 發布狀態

published 表示網站正式版，與 semantic decision 分開。測試保留 pending／approved／rejected 的顯示差異；published 的工程計畫可通過，但 coverage 或語意尚未完成時，完整內容認證仍拒絕。已移除的網站登錄區塊及資料不能再輸出。

## 工程與公開副本

npm run verify:scaffold 依序執行來源檢查、單元測試、build、連結、DOM／公開檔案與 Chromium E2E。npm run verify:public-tree 從公開白名單建立乾淨副本，重新安裝及執行相同工程驗證與隔離的合成認證測試。測試數量與實際成功紀錄保存於本機當次交付，避免文件手填過期數字。

## 線上驗收

部署只使用已測產物，完成後比對所有遠端檔案的解壓位元組、build-info 及來源 SHA。六頁以 390／1280px 檢查版本、時間、字型、搜尋、目錄、Reading／Audit、同主題切換與證據往返。另查 HTTPS、CSP、noindex、robots 及真實 404，再實際目視所列截圖。

結果僅涵蓋記錄的 Chromium 視窗、操作與 HTTPS origin，不宣稱所有裝置、瀏覽器、地區或完整影音審查。當次精確結果見本機 dist/delivery.json。
