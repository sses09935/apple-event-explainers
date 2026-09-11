# 發布操作

## Hosting 與內容認證分開

使用者於 2026-09-12 明確批准草稿上正式網址，並要求修正原本把所有部署綁定完整影音審查的規則。現在一般草稿部署以工程、公開檔案安全與明確目標為門檻；未完成的影音與語意審查保留在內容中，不再需要每次建立內容例外。

| 操作 | 必要驗證 | 內容與索引 |
| --- | --- | --- |
| draft／preview 產物至 preview 或 live | 完整 `verify:scaffold`，或同 preview 產物已通過的較嚴格 release 紀錄；來源與產物隱私檢查 | 保留 draft、實際審查狀態、缺口提示及 noindex |
| release-ready／preview 內容 | `verify:release` | 完整內容認證，preview 索引策略 |
| production 產物至 preview 或 live | `verify:production` | 完整內容認證與正式 metadata |

preview 在此是草稿產物的建置 profile，與 Firebase 的臨時 preview channel 是兩個概念；preview profile 可正常部署至 live。已核准語意的草稿不必改回 pending，顯示文字依實際影音覆蓋及審查結果生成。

內容前檢失敗不會刪除既有且仍匹配的工程驗證；只有真正開始新一輪工程驗證時才使舊紀錄失效。相同 preview 產物的較嚴格 release 驗證可滿足草稿 Hosting，計畫綁定實際使用的 gate，不要求再重跑較低門檻。

`verify:release`／`verify:production` 仍可因全片覆蓋、blocking gaps 或未核准語意而拒絕；這不等於草稿 Hosting 無法部署。`npm run check:status` 同時列出 Hosting 的本機前檢與內容認證，且不推定遠端登入、部署授權或線上成功。

目前正式網址目標為 <https://apple-event-explainers.web.app/>。草稿可公開閱覽，noindex 不是登入保護。live 持續至替換或移除，沒有 7 天期限；preview channel 為 7 天。是否已上線及精確驗收結果以當次本機 `dist/delivery.json` 和 receipt 判讀。

## 專用目標與授權

- GitHub：`sses09935/apple-event-explainers`，正常 main 提交／push；不 force push、改寫歷史、建立 tag 或 Release。
- Firebase project／site：均為 `apple-event-explainers`。CLI 必須明確指定，不依賴 `.firebaserc` 或帳號預設值。
- 永久 `allow_remote_write`／`allow_deploy` 維持 false；執行時使用單次旗標、計畫與精確確認。對話中已明確授權的同一操作不用重複詢問。
- 僅 Hosting；不改 Auth、資料庫、Functions、計費或其他服務。所有 preview CLI 帶 `--no-authorized-domains`，不做 Auth 網域同步。

## 驗證與計畫

從通過公開檢查的已提交 checkout 建置，保留 version／source_revision。私有影片、原始研究、授權檔及執行紀錄均排除於 Git、Hosting 與 CI artifacts。

```sh
npm run check:environment -- --online
npm run verify:scaffold
npm run check:public-tree
npm run check:status
npm run deploy:plan -- --project apple-event-explainers --site apple-event-explainers --channel live
```

本機計畫只建立 `dist/deploy-plan.json`，不呼叫 Firebase。它綁定 project／site／channel、profile、verification gate、version／source_revision、input／公開來源樹／artifact 摘要與完整內容限制，30 分鐘到期。當時通過的驗證必須符合現在的來源與實際產物；不接受自行重簽舊驗證。

同一提交的 CI 與公開來源核對完成後，以計畫中的精確確認字串執行：

```sh
npm run deploy -- --execute --project apple-event-explainers --site apple-event-explainers --channel live --allow-remote-write --allow-deploy --confirm 'EXACT_CONFIRMATION_FROM_READY_PLAN'
```

預覽使用明確 preview channel 取代 live。草稿無需 `--draft-preview-authorization` 或 `--draft-live-authorization`。這兩個舊參數僅保留相容性；若提供，原綁定、期限、互斥及消耗檢查仍適用，不能增加任何權限或繞過目前安全檢查。

執行前重新比對所有摘要、目標、驗證及完整內容限制，將同一批檔案複製至隔離暫存區；不在 predeploy 重建或下載。CLI 只跑明確 site 的 `deploy --only hosting` 或預覽的 `hosting:channel:deploy`。每次嘗試消耗 nonce receipt；失敗或結果不確定時先查遠端，不盲目重試、不換工具規避。

## 線上驗收與紀錄

CLI 成功後，從正式 HTTPS 網址比對所有公開檔案的解壓位元組、build-info 與產物摘要，再核對六頁、深連結、搜尋／目錄、跨版位置、證據往返、404、CSP、字型與 robots。CLI 成功、Hosting 線上驗收、完整內容認證是三個獨立結果；未測項目保持未知。

來源、已測產物、計畫、receipt 與驗收資料保留在私有本機，部署後的文件修改不能被宣稱為已部署產物。需要修正時建立新的候選與計畫；不要重用消耗過的 nonce 或舊 preview 授權。

先前 `review-20260910` 預覽授權已消耗，期限為 2026-09-17 09:30:56（Asia/Taipei），不含後續 Developer／USD／時間映射修改。先前要求每次內容例外的流程及歷史驗收保留在 [舊版部署紀錄](https://github.com/sses09935/apple-event-explainers/blob/ac4b462112243973ecb1e07ee8c4d601e159048e/docs/DEPLOYMENT.md)，不再作為一般草稿 Hosting 的門檻。

工程依據：[Firebase Hosting 部署](https://firebase.google.com/docs/hosting/test-preview-deploy)、[channel 與版本管理](https://firebase.google.com/docs/hosting/manage-hosting-resources)、[Hosting 設定](https://firebase.google.com/docs/hosting/full-config)。
