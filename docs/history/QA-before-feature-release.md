# 歷史紀錄：功能與發布收尾前

以下是先前輪次的狀態，不作當前驗收依據。最新結果見 ../QA.md。

# 三受眾網站最終 QA

2026-09-10（Asia/Taipei）。**三版工程通過；本輪編輯子集已複查；全片證據仍partial，release被正確阻擋，未部署。** 上輪測試保留於 [歷史QA](QA-before-three-audience.md)，不作新版通過依據。

## 實際命令

機器可讀命令結果（本機紀錄：`../qa/three-audience/command-results.json`，未納入公開匯出） 綁定最新版input_digest。`verify:scaffold`逐一執行下列六個現存腳本，任一失敗即中止；本輪完整exit 0，未刪反例或跳過測試。

| 命令 | 結果 |
| --- | --- |
| check | exit 0；128 KB、117 reader nodes |
| test | exit 0；102測試全過、零跳過 |
| build:web | exit 0；六頁與共用資源 |
| check:links | exit 0；六頁2154個內部連結／資源引用，含fragment；不是外站可用性測試 |
| debug:web | exit 0；DOM、輸出白名單與私有檔保護；工作區未初始化Git |
| test:e2e | exit 0；27組Chromium檢查、39張截圖 |
| verify:scaffold | exit 0，僅工程通過；完整log（本機紀錄：`qa/three-audience-scaffold.log`，不納入公開匯出） |
| verify:release | **exit 1，符合預期**；coverage不足、blocking gaps、完整semantic pending；log（本機紀錄：`qa/three-audience-release.log`，不納入公開匯出） |
| test:release-fixture | exit 0；隔離暫存副本實跑完整verify:release（102單元／27瀏覽器組），副本已移除，正式內容與輸出digest不變；report（本機紀錄：`qa/release-fixture-results.json`，不納入公開匯出）、log（本機紀錄：`qa/three-audience-release-fixture.log`，不納入公開匯出） |
| migrate-audiences.mjs | 正式六頁資料no-op實跑；保留／重跑／未知topology與缺檔反例在單元測試中 |

正向fixture只是合成工程場景，不批准真實來源或發布。正式release拒絕不因fixture通過改變。

## 瀏覽器與截圖

最新版browser-results.json（本機紀錄：`qa/browser-results.json`，不納入公開匯出）：Chromium 145.0.7632.6，390／768／1280px，全部六頁。每個reader（含三audience）分別測Reading／Audit、目錄與焦點、搜尋／Enter／Escape、字級上下限與保存、深淺色、skip-link、回頂、鍵盤、跨版同topic、引用到證據及回原版。來源類別／限制在Reading可見；影片精確時間複製與網頁locator使用各自型別。

額外完整檢查三版390px／120%：dev6表、AI7表、general5表都以鍵盤測橫捲，25個API symbol換行；無頁面水平溢出。六頁各尺寸console errors與失敗資源為零。所有reader no-JS保有內容／限制／引用；原mock consent、播放失敗fallback、系統配色和localStorage不可用反例保留。mock不代表真實YouTube iframe播放。

| 實際截圖 | 窄螢幕／120% | 中尺寸 | 桌面 |
| --- | --- | --- | --- |
| 開發者版 | 390px（本機紀錄：`qa/dev-390-font120.png`，不納入公開匯出） | 768px（本機紀錄：`qa/dev-768-light.png`，不納入公開匯出） | 1280px（本機紀錄：`qa/dev-1280-light.png`，不納入公開匯出） |
| AI使用者版 | 390px（本機紀錄：`qa/ai-user-390-font120.png`，不納入公開匯出） | 768px（本機紀錄：`qa/ai-user-768-light.png`，不納入公開匯出） | 1280px（本機紀錄：`qa/ai-user-1280-light.png`，不納入公開匯出） |
| 普羅大眾版 | 390px（本機紀錄：`qa/general-390-font120.png`，不納入公開匯出） | 768px（本機紀錄：`qa/general-768-light.png`，不納入公開匯出） | 1280px（本機紀錄：`qa/general-1280-light.png`，不納入公開匯出） |

深色Audit、首頁、event、sources及明示fixture截圖亦列於browser-results。工程agent實際觀看三版窄螢幕截圖；整合者另以Codex內建瀏覽器閱讀首頁、general的iPhone Duo、AI的AirPods 5、dev的Intelligence段落，確認正文、來源pill、跨版入口及必要限定可讀。不是只驗檔案存在。

本輪修正窄表首欄寬度、長API換行、表格條件按唯一KB顯示、相同來源版本SDK與通用免責去重、開場假目錄標題；截圖在鍵盤捲動動畫停止後復位，保留完整欄名。未吞console／requestfailed或移除原安全反例。

## 語意與來源

本輪子集語意審查（本機紀錄：`../qa/three-audience/semantic-review.json`，未納入公開匯出） 明列125 verified與三版節點、檢查範圍和實際修正。整合者直接讀原始規格DOM與註腳、Developer HTML／DocC、原始影片畫格；agent的編輯複查問題清單不是外部證據。三版同一事實的數值、主體、條件、availability與語氣另行檢查，不以引用ID或測試綠燈代替。

sources/semantic-review.json已重建為最新版digest，**decision仍pending**。新增畫格僅支持KB180–182的可讀子集；KB090–092仍candidate。S01 required_scope保留0–4860.06秒audio+visual；實際15單一畫格聯集0.5005秒、audio0秒、字幕30秒。沒有聲稱全片看完或完整時間軸。4個gap仍保留，其中3個blocking。

規格已讀133個DOM列、99列選材／34排除，詳 [覆蓋盤點](../CONTENT_COVERAGE.md)。Developer共15份，HTML／DocC身分與locator核對；一般文件context-only，沒有把SDK availability當特定產品支援。未納入session。

## 保護與未測範圍

dist白名單無原媒體、完整字幕／逐字稿、大量畫格、完整原頁、PDF、fixture或私有路徑。research/.private不入Git／CI artifacts；本工作區未初始化Git，不冒充已存在repo的提交稽核。原AFM HEAD及乾淨status再次唯讀確認，未改動原專案。未遠端CI／push／release／部署或設定Firebase目標；deploy固定拒絕的測試持續通過。

未測Safari、Firefox、真機、SDK編譯、實際API runtime及完整輔助科技；沒有宣稱Apple認證、產品實測或完整WCAG。來源快照時間、內容查核時間與建置時間分開，不代表即時產品上市／地區可用性。
