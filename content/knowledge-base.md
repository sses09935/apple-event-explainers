# 事件事實庫

### KB-001

```json
{
  "id": "KB-001",
  "source": "[S01]",
  "subject": "A20 Pro",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "specification",
  "statement_zh": "影片的 A20 Pro 晶片圖將 CPU 標示為 6 核心。",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "依影片畫面轉述；未進行晶片實測。"
  ],
  "structured_values": [
    {
      "name": "CPU 核心數",
      "state": "known",
      "value": 6,
      "unit": "核心"
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 1014.013,
      "end_seconds": 1014.046367,
      "modality": "on-screen",
      "context": "A20 PRO 晶片圖左側可讀到 6-core CPU；以完整下載檔的該畫格核對。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:40:30.126Z",
    "notes": "已直接檢視 e1014.png 及包含同畫格的 contact sheet；字幕僅用於定位，正式依據是圖中標示。",
    "coverage_ids": [
      "FRAME-1014"
    ]
  }
}
```

### KB-002

```json
{
  "id": "KB-002",
  "source": "[S01]",
  "subject": "A20 Pro",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "statement_zh": "影片的 A20 Pro 晶片圖將 GPU 標示為 7 核心。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [],
  "structured_values": [
    {
      "name": "GPU 核心數",
      "state": "known",
      "value": 7,
      "unit": "核心"
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 1044.009633,
      "end_seconds": 1044.043,
      "modality": "on-screen",
      "context": "A20 PRO 圖右方直接標示 7-core GPU。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "回到本機影片 PTS 對應畫格核對文字、主體與限定詞。僅畫面已核對；音訊未核對。",
    "coverage_ids": [
      "FRAME-1044"
    ]
  }
}
```

### KB-003

```json
{
  "id": "KB-003",
  "source": "[S01]",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max主相機",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "statement_zh": "影片在主相機畫面標示 4800 萬像素融合主相機具備可變光圈。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [],
  "structured_values": [
    {
      "name": "主相機像素",
      "state": "known",
      "value": 4800,
      "unit": "萬像素"
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 1395.026967,
      "end_seconds": 1395.060333,
      "modality": "on-screen",
      "context": "原始畫面在主相機上方標示 48MP Fusion Main camera with variable aperture；字幕用於確認所在主題，正式轉述限畫面標示。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "回到本機影片 PTS 對應畫格核對文字、主體與限定詞。僅畫面已核對；音訊未核對。",
    "coverage_ids": [
      "FRAME-1395"
    ]
  }
}
```

### KB-004

```json
{
  "id": "KB-004",
  "source": "[S01]",
  "subject": "iPhone 18 Pro",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "statement_zh": "影片價格卡將 iPhone 18 Pro 256GB 標示為 $1,199 起。 本文幣別按使用者確認標示為美元（USD）。",
  "claim_type": "availability",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "影片價格的幣別依使用者於 2026-09-12 明確確認為美元（USD）；原畫面保留「$」，這項確認不代表已完成原音核對。",
    "影片價格仍不直接視為台灣售價；適用市場範圍、稅額與其他條件分別核對。"
  ],
  "structured_values": [
    {
      "name": "起價",
      "state": "known",
      "value": 1199,
      "unit": "USD"
    },
    {
      "name": "起價容量",
      "state": "known",
      "value": 256,
      "unit": "GB"
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 1897.028467,
      "end_seconds": 1897.061833,
      "modality": "on-screen",
      "context": "同一卡可讀 iPhone 18 Pro、From、$1199、256GB。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "回到本機影片 PTS 對應畫格核對文字、主體與限定詞。僅畫面已核對；音訊未核對。 2026-09-12 使用者明確確認影片所列價格均為美元；僅追加幣別標示及其出處，原畫面證據與音訊未核對狀態保留。",
    "coverage_ids": [
      "FRAME-1897"
    ]
  }
}
```

### KB-005

```json
{
  "id": "KB-005",
  "source": "[S01]",
  "subject": "iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "statement_zh": "影片價格卡將 iPhone 18 Pro Max 256GB 標示為 $1,299 起。 本文幣別按使用者確認標示為美元（USD）。",
  "claim_type": "availability",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "影片價格的幣別依使用者於 2026-09-12 明確確認為美元（USD）；原畫面保留「$」，這項確認不代表已完成原音核對。",
    "影片價格仍不直接視為台灣售價；適用市場範圍、稅額與其他條件分別核對。"
  ],
  "structured_values": [
    {
      "name": "起價",
      "state": "known",
      "value": 1299,
      "unit": "USD"
    },
    {
      "name": "起價容量",
      "state": "known",
      "value": 256,
      "unit": "GB"
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 1900.031467,
      "end_seconds": 1900.064833,
      "modality": "on-screen",
      "context": "同一卡下半部可讀 iPhone 18 Pro Max、From、$1299、256GB；上半部為 iPhone 18 Pro，未混用。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "回到本機影片 PTS 對應畫格核對文字、主體與限定詞。僅畫面已核對；音訊未核對。 2026-09-12 使用者明確確認影片所列價格均為美元；僅追加幣別標示及其出處，原畫面證據與音訊未核對狀態保留。",
    "coverage_ids": [
      "FRAME-1900"
    ]
  }
}
```

### KB-006

```json
{
  "id": "KB-006",
  "source": "[S01]",
  "subject": "AirPods 5",
  "topic": "AirPods 5",
  "statement_zh": "影片價格卡將 AirPods 5 標示為 $129。 本文幣別按使用者確認標示為美元（USD）。",
  "claim_type": "availability",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "影片價格的幣別依使用者於 2026-09-12 明確確認為美元（USD）；原畫面保留「$」，這項確認不代表已完成原音核對。",
    "影片價格仍不直接視為台灣售價；適用市場範圍、稅額與其他條件分別核對。"
  ],
  "structured_values": [
    {
      "name": "價格",
      "state": "known",
      "value": 129,
      "unit": "USD"
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2190.021167,
      "end_seconds": 2190.054533,
      "modality": "on-screen",
      "context": "AirPods 5 價格卡，只有 $129，未使用 From。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "回到本機影片 PTS 對應畫格核對文字、主體與限定詞。僅畫面已核對；音訊未核對。 2026-09-12 使用者明確確認影片所列價格均為美元；僅追加幣別標示及其出處，原畫面證據與音訊未核對狀態保留。",
    "coverage_ids": [
      "FRAME-2190"
    ]
  }
}
```

### KB-007

```json
{
  "id": "KB-007",
  "source": "[S01]",
  "subject": "Apple Watch Series 12",
  "topic": "Apple Watch Series 12",
  "statement_zh": "影片價格卡將 Apple Watch Series 12 標示為 $399 起。 本文幣別按使用者確認標示為美元（USD）。",
  "claim_type": "availability",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "影片價格的幣別依使用者於 2026-09-12 明確確認為美元（USD）；原畫面保留「$」，這項確認不代表已完成原音核對。",
    "影片價格仍不直接視為台灣售價；適用市場範圍、稅額與其他條件分別核對。"
  ],
  "structured_values": [
    {
      "name": "起價",
      "state": "known",
      "value": 399,
      "unit": "USD"
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 3161.024533,
      "end_seconds": 3161.0579,
      "modality": "on-screen",
      "context": "畫面顯示 Apple Watch SERIES 12、From、$399。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "回到本機影片 PTS 對應畫格核對文字、主體與限定詞。僅畫面已核對；音訊未核對。 2026-09-12 使用者明確確認影片所列價格均為美元；僅追加幣別標示及其出處，原畫面證據與音訊未核對狀態保留。",
    "coverage_ids": [
      "FRAME-3161"
    ]
  }
}
```

### KB-008

```json
{
  "id": "KB-008",
  "source": "[S01]",
  "subject": "iPhone Duo 內螢幕",
  "topic": "iPhone Duo",
  "statement_zh": "影片以對角線圖示將 iPhone Duo 內螢幕標示為 7.6 吋。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "此處保留影片的標稱尺寸；精確矩形量測與可視區限制另見規格頁主張。"
  ],
  "structured_values": [
    {
      "name": "標稱對角線",
      "state": "known",
      "value": 7.6,
      "unit": "吋"
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 3713.0093,
      "end_seconds": 3713.042667,
      "modality": "on-screen",
      "context": "展開螢幕上的對角線與 7.6 吋標記。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "回到本機影片 PTS 對應畫格核對文字、主體與限定詞。僅畫面已核對；音訊未核對。",
    "coverage_ids": [
      "FRAME-3713"
    ]
  }
}
```

### KB-009

```json
{
  "id": "KB-009",
  "source": "[S01]",
  "subject": "iPhone Duo 外螢幕",
  "topic": "iPhone Duo",
  "statement_zh": "影片將 iPhone Duo 外螢幕標示為 5.4 吋。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "此處保留影片的標稱尺寸；精確矩形量測與可視區限制另見規格頁主張。"
  ],
  "structured_values": [
    {
      "name": "標稱對角線",
      "state": "known",
      "value": 5.4,
      "unit": "吋"
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 3735.0313,
      "end_seconds": 3735.064667,
      "modality": "on-screen",
      "context": "闔起外螢幕上的 5.4 吋標記。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "回到本機影片 PTS 對應畫格核對文字、主體與限定詞。僅畫面已核對；音訊未核對。",
    "coverage_ids": [
      "FRAME-3735"
    ]
  }
}
```

### KB-010

```json
{
  "id": "KB-010",
  "source": "[S01]",
  "subject": "iPhone Duo",
  "topic": "iPhone Duo",
  "statement_zh": "影片價格卡將 iPhone Duo 256GB 標示為 $1,999 起。 本文幣別按使用者確認標示為美元（USD）。",
  "claim_type": "availability",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "影片價格的幣別依使用者於 2026-09-12 明確確認為美元（USD）；原畫面保留「$」，這項確認不代表已完成原音核對。",
    "影片價格仍不直接視為台灣售價；適用市場範圍、稅額與其他條件分別核對。"
  ],
  "structured_values": [
    {
      "name": "起價",
      "state": "known",
      "value": 1999,
      "unit": "USD"
    },
    {
      "name": "起價容量",
      "state": "known",
      "value": 256,
      "unit": "GB"
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4636.0314,
      "end_seconds": 4636.064767,
      "modality": "on-screen",
      "context": "同一卡可讀 iPhone Duo、From、$1999、256GB。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "回到本機影片 PTS 對應畫格核對文字、主體與限定詞。僅畫面已核對；音訊未核對。 2026-09-12 使用者明確確認影片所列價格均為美元；僅追加幣別標示及其出處，原畫面證據與音訊未核對狀態保留。",
    "coverage_ids": [
      "FRAME-4636"
    ]
  }
}
```

### KB-011

```json
{
  "id": "KB-011",
  "source": "[S01]",
  "subject": "iPhone Duo 預購",
  "topic": "iPhone Duo",
  "statement_zh": "影片將 iPhone Duo 預購日期標示為 10 月 16 日。",
  "claim_type": "availability",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "卡片未列地區、時區或年份；保留月日，不推定台灣預購日。"
  ],
  "structured_values": [
    {
      "name": "原始日期",
      "state": "known",
      "value": "October 16",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4647.009033,
      "end_seconds": 4647.0424,
      "modality": "on-screen",
      "context": "iPhone Duo 章節的文字卡顯示 Pre-order October 16。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "回到本機影片 PTS 對應畫格核對文字、主體與限定詞。僅畫面已核對；音訊未核對。",
    "coverage_ids": [
      "FRAME-4647"
    ]
  }
}
```

### KB-012

```json
{
  "id": "KB-012",
  "source": "[S01]",
  "subject": "iPhone Duo 上市",
  "topic": "iPhone Duo",
  "statement_zh": "影片將 iPhone Duo 上市日期標示為 10 月 23 日。",
  "claim_type": "availability",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "卡片未列地區、時區或年份；不與預購日混用，不推定台灣上市日。"
  ],
  "structured_values": [
    {
      "name": "原始日期",
      "state": "known",
      "value": "October 23",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4650.012033,
      "end_seconds": 4650.0454,
      "modality": "on-screen",
      "context": "緊接預購卡的畫面顯示 Available October 23。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "回到本機影片 PTS 對應畫格核對文字、主體與限定詞。僅畫面已核對；音訊未核對。",
    "coverage_ids": [
      "FRAME-4650"
    ]
  }
}
```

### KB-020

```json
{
  "id": "KB-020",
  "source": "[S02]",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "statement_zh": "台灣規格頁列示 iPhone 18 Pro 與 iPhone 18 Pro Max 搭載 A20 Pro 晶片。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [],
  "structured_values": [
    {
      "name": "晶片",
      "state": "known",
      "value": "A20 Pro",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "晶片 → A20 Pro 晶片",
      "context": "核對指定規格頁快照中的「晶片 → A20 Pro 晶片」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S02"
    ]
  }
}
```

### KB-021

```json
{
  "id": "KB-021",
  "source": "[S02]",
  "subject": "iPhone 18 Pro 顯示器",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "statement_zh": "iPhone 18 Pro 規格頁列示 6.3 吋 OLED 顯示器。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "以標準矩形量測為 6.27 吋；實際可視區較小。"
  ],
  "structured_values": [
    {
      "name": "標稱對角線",
      "state": "known",
      "value": 6.3,
      "unit": "吋"
    },
    {
      "name": "矩形量測",
      "state": "known",
      "value": 6.27,
      "unit": "吋"
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "顯示器 → iPhone 18 Pro → 螢幕尺寸與圓角說明",
      "context": "核對指定規格頁快照中的「顯示器 → iPhone 18 Pro → 螢幕尺寸與圓角說明」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S02"
    ]
  }
}
```

### KB-022

```json
{
  "id": "KB-022",
  "source": "[S02]",
  "subject": "iPhone 18 Pro Max 顯示器",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "statement_zh": "iPhone 18 Pro Max 規格頁列示 6.9 吋 OLED 顯示器。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "以標準矩形量測為 6.86 吋；實際可視區較小。"
  ],
  "structured_values": [
    {
      "name": "標稱對角線",
      "state": "known",
      "value": 6.9,
      "unit": "吋"
    },
    {
      "name": "矩形量測",
      "state": "known",
      "value": 6.86,
      "unit": "吋"
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "顯示器 → iPhone 18 Pro Max → 螢幕尺寸與圓角說明",
      "context": "核對指定規格頁快照中的「顯示器 → iPhone 18 Pro Max → 螢幕尺寸與圓角說明」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S02"
    ]
  }
}
```

### KB-023

```json
{
  "id": "KB-023",
  "source": "[S02]",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max融合主相機",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "statement_zh": "規格頁將融合主相機的可變光圈列為 ƒ/1.48、ƒ/1.8、ƒ/2.8 與 ƒ/4.0。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [],
  "structured_values": [
    {
      "name": "光圈檔位",
      "state": "known",
      "value": "ƒ/1.48、ƒ/1.8、ƒ/2.8、ƒ/4.0",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "相機 → 4800 萬像素融合主相機",
      "context": "核對指定規格頁快照中的「相機 → 4800 萬像素融合主相機」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S02"
    ]
  }
}
```

### KB-024

```json
{
  "id": "KB-024",
  "source": "[S02]",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max SIM 卡",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "statement_zh": "台灣規格頁列示此系列支援 nano-SIM 與 eSIM 的雙 SIM 卡配置。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "此項限定台灣規格頁；不據此把影片中 eSIM-only 機型的電池數據套用到台灣機型。",
    "使用 eSIM 須選擇支援 eSIM 的電信業者與無線網路服務方案；詳情洽詢電信業者。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "SIM 卡 → 雙 SIM 卡 (nano-SIM 與 eSIM) 與相關註記",
      "context": "核對指定規格頁快照中的「SIM 卡 → 雙 SIM 卡 (nano-SIM 與 eSIM) 與相關註記」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S02"
    ]
  }
}
```

### KB-030

```json
{
  "id": "KB-030",
  "source": "[S03]",
  "subject": "iPhone Duo 設計",
  "topic": "iPhone Duo",
  "statement_zh": "台灣規格頁將 iPhone Duo 列為鈦金屬可摺疊設計。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "外觀 → 鈦金屬可摺疊設計",
      "context": "核對指定規格頁快照中的「外觀 → 鈦金屬可摺疊設計」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S03"
    ]
  }
}
```

### KB-031

```json
{
  "id": "KB-031",
  "source": "[S03]",
  "subject": "iPhone Duo 內螢幕",
  "topic": "iPhone Duo",
  "statement_zh": "規格頁列示 iPhone Duo 內螢幕為 7.6 吋可摺疊 OLED。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "以標準矩形量測為 7.58 吋；實際可視區較小。"
  ],
  "structured_values": [
    {
      "name": "標稱對角線",
      "state": "known",
      "value": 7.6,
      "unit": "吋"
    },
    {
      "name": "矩形量測",
      "state": "known",
      "value": 7.58,
      "unit": "吋"
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "顯示器 → 內螢幕與圓角說明",
      "context": "核對指定規格頁快照中的「顯示器 → 內螢幕與圓角說明」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S03"
    ]
  }
}
```

### KB-032

```json
{
  "id": "KB-032",
  "source": "[S03]",
  "subject": "iPhone Duo 外螢幕",
  "topic": "iPhone Duo",
  "statement_zh": "規格頁列示 iPhone Duo 外螢幕為 5.4 吋 OLED。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "以標準矩形量測為 5.36 吋；實際可視區較小。"
  ],
  "structured_values": [
    {
      "name": "標稱對角線",
      "state": "known",
      "value": 5.4,
      "unit": "吋"
    },
    {
      "name": "矩形量測",
      "state": "known",
      "value": 5.36,
      "unit": "吋"
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "顯示器 → 外螢幕與圓角說明",
      "context": "核對指定規格頁快照中的「顯示器 → 外螢幕與圓角說明」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S03"
    ]
  }
}
```

### KB-033

```json
{
  "id": "KB-033",
  "source": "[S03]",
  "subject": "iPhone Duo Touch ID",
  "topic": "iPhone Duo",
  "statement_zh": "iPhone Duo 規格頁將 Touch ID 指紋感測器列在側邊按鈕內。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "Touch ID → 側邊按鈕內建指紋感測器",
      "context": "核對指定規格頁快照中的「Touch ID → 側邊按鈕內建指紋感測器」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S03"
    ]
  }
}
```

### KB-034

```json
{
  "id": "KB-034",
  "source": "[S03]",
  "subject": "iPhone Duo 與 Apple Pencil",
  "topic": "iPhone Duo",
  "statement_zh": "規格頁列出支援 Apple Pencil（USB-C），並註明此功能於今年稍晚推出。",
  "claim_type": "availability",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "尚未推出的功能；保留頁面「今年稍晚」原文，不推算日期。"
  ],
  "structured_values": [
    {
      "name": "相容配件",
      "state": "known",
      "value": "Apple Pencil（USB-C）",
      "unit": null
    },
    {
      "name": "功能推出時間",
      "state": "known",
      "value": "今年稍晚",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "顯示器 → 支援 Apple Pencil (USB-C)；註記連結 #footnote-4",
      "context": "核對指定規格頁快照中的「顯示器 → 支援 Apple Pencil (USB-C)；註記連結 #footnote-4」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S03"
    ]
  }
}
```

### KB-040

```json
{
  "id": "KB-040",
  "source": "[S04]",
  "subject": "Apple Watch Series 12 晶片",
  "topic": "Apple Watch Series 12",
  "statement_zh": "Apple Watch Series 12 規格頁列示 S11 晶片，配備 64 位元雙核心處理器。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [],
  "structured_values": [
    {
      "name": "晶片",
      "state": "known",
      "value": "S11",
      "unit": null
    },
    {
      "name": "CPU 核心數",
      "state": "known",
      "value": 2,
      "unit": "核心"
    },
    {
      "name": "處理器位元數",
      "state": "known",
      "value": 64,
      "unit": "位元"
    }
  ],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "晶片 → S11 晶片",
      "context": "核對指定規格頁快照中的「晶片 → S11 晶片」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S04"
    ]
  }
}
```

### KB-041

```json
{
  "id": "KB-041",
  "source": "[S04]",
  "subject": "Apple Watch Series 12 錶殼",
  "topic": "Apple Watch Series 12",
  "statement_zh": "Apple Watch Series 12 規格頁列出鋁金屬、鈦金屬與精密陶瓷三種錶殼材質。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "材質與外觀 → 鋁金屬、鈦金屬、精密陶瓷",
      "context": "核對指定規格頁快照中的「材質與外觀 → 鋁金屬、鈦金屬、精密陶瓷」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S04"
    ]
  }
}
```

### KB-042

```json
{
  "id": "KB-042",
  "source": "[S04]",
  "subject": "Apple Watch Series 12 尺寸",
  "topic": "Apple Watch Series 12",
  "statement_zh": "Apple Watch Series 12 的精密陶瓷款高度列為 43 或 47 公釐。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "同頁鋁金屬與鈦金屬款高度為 42 或 46 公釐；不同材質不能共用相同尺寸。"
  ],
  "structured_values": [
    {
      "name": "精密陶瓷較小款高度",
      "state": "known",
      "value": 43,
      "unit": "公釐"
    },
    {
      "name": "精密陶瓷較大款高度",
      "state": "known",
      "value": 47,
      "unit": "公釐"
    }
  ],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "尺寸與重量 → 高度（精密陶瓷）",
      "context": "核對指定規格頁快照中的「尺寸與重量 → 高度（精密陶瓷）」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S04"
    ]
  }
}
```

### KB-043

```json
{
  "id": "KB-043",
  "source": "[S04]",
  "subject": "Apple Watch Series 12 錶面",
  "topic": "Apple Watch Series 12",
  "statement_zh": "Apple Watch Series 12 鈦金屬與精密陶瓷款的規格頁列示藍寶石玻璃錶面。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "鋁金屬款另列超瓷晶盾 2；不套用藍寶石玻璃規格。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "顯示器 → 藍寶石玻璃錶面",
      "context": "核對指定規格頁快照中的「顯示器 → 藍寶石玻璃錶面」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S04"
    ]
  }
}
```

### KB-050

```json
{
  "id": "KB-050",
  "source": "[S05]",
  "subject": "Apple Watch Ultra 4 錶殼",
  "topic": "Apple Watch Ultra 4",
  "statement_zh": "Apple Watch Ultra 4 規格頁列示 5 級鈦金屬錶殼。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [],
  "structured_values": [
    {
      "name": "錶殼材質",
      "state": "known",
      "value": "5 級鈦金屬",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "材質與外觀 → 5 級鈦金屬錶殼",
      "context": "核對指定規格頁快照中的「材質與外觀 → 5 級鈦金屬錶殼」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S05"
    ]
  }
}
```

### KB-051

```json
{
  "id": "KB-051",
  "source": "[S05]",
  "subject": "Apple Watch Ultra 4 尺寸",
  "topic": "Apple Watch Ultra 4",
  "statement_zh": "Apple Watch Ultra 4 的規格頁高度為 49 公釐。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [],
  "structured_values": [
    {
      "name": "高度",
      "state": "known",
      "value": 49,
      "unit": "公釐"
    }
  ],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "尺寸與重量 → 高度",
      "context": "核對指定規格頁快照中的「尺寸與重量 → 高度」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S05"
    ]
  }
}
```

### KB-052

```json
{
  "id": "KB-052",
  "source": "[S05]",
  "subject": "Apple Watch Ultra 4 晶片",
  "topic": "Apple Watch Ultra 4",
  "statement_zh": "Apple Watch Ultra 4 規格頁列示 S11 晶片，配備 64 位元雙核心處理器。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [],
  "structured_values": [
    {
      "name": "晶片",
      "state": "known",
      "value": "S11",
      "unit": null
    },
    {
      "name": "CPU 核心數",
      "state": "known",
      "value": 2,
      "unit": "核心"
    },
    {
      "name": "處理器位元數",
      "state": "known",
      "value": 64,
      "unit": "位元"
    }
  ],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "晶片 → S11 晶片",
      "context": "核對指定規格頁快照中的「晶片 → S11 晶片」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S05"
    ]
  }
}
```

### KB-053

```json
{
  "id": "KB-053",
  "source": "[S05]",
  "subject": "Apple Watch Ultra 4 顯示器",
  "topic": "Apple Watch Ultra 4",
  "statement_zh": "Apple 在 Apple Watch Ultra 4 規格頁列示 3000 尼特峰值亮度。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "此為 Apple 規格標示，並非本專案亮度實測。"
  ],
  "structured_values": [
    {
      "name": "峰值亮度",
      "state": "known",
      "value": 3000,
      "unit": "尼特"
    }
  ],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "顯示器 → 峰值亮度",
      "context": "核對指定規格頁快照中的「顯示器 → 峰值亮度」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S05"
    ]
  }
}
```

### KB-060

```json
{
  "id": "KB-060",
  "source": "[S06]",
  "subject": "AirPods 5 晶片",
  "topic": "AirPods 5",
  "statement_zh": "AirPods 5 規格頁列示 H2 耳機晶片。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [],
  "structured_values": [
    {
      "name": "耳機晶片",
      "state": "known",
      "value": "H2",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "晶片 → H2 耳機晶片",
      "context": "核對指定規格頁快照中的「晶片 → H2 耳機晶片」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S06"
    ]
  }
}
```

### KB-061

```json
{
  "id": "KB-061",
  "source": "[S06]",
  "subject": "AirPods 5 配備無線充電盒",
  "topic": "AirPods 5",
  "statement_zh": "規格頁列示配備無線充電盒版本可滑動調整音量。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "此項限定 AirPods 5 配備無線充電盒版本，不套用至另一版本。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "感測器／控制項目 → 滑動調整音量",
      "context": "核對指定規格頁快照中的「感測器／控制項目 → 滑動調整音量」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S06"
    ]
  }
}
```

### KB-062

```json
{
  "id": "KB-062",
  "source": "[S06]",
  "subject": "AirPods 5 配備無線充電盒",
  "topic": "AirPods 5",
  "statement_zh": "無線充電盒版本列示可使用 USB-C、Apple Watch 充電器或 Qi 認證充電器充電。",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "規格頁另一版本的充電盒僅列 USB-C。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "充電盒 → AirPods 5 配備無線充電盒",
      "context": "核對指定規格頁快照中的「充電盒 → AirPods 5 配備無線充電盒」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S06"
    ]
  }
}
```

### KB-063

```json
{
  "id": "KB-063",
  "source": "[S06]",
  "subject": "AirPods 5 電池",
  "topic": "AirPods 5",
  "statement_zh": "Apple 宣稱 AirPods 5 在啟用主動式降噪時，充電一次電池使用時間最長可達 4 小時。",
  "claim_type": "performance-claim",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "Apple 使用預量產 AirPods 5 搭配預量產 iPhone 18 Pro、均搭載測試版軟體測試；音量 50%，空間音訊與對話感知關閉，主動式降噪開啟。",
    "電池使用時間受裝置設定、環境與使用情況等因素影響；並非本專案實測。",
    "測試播放 358 首 iTunes Store 曲目（256-Kbps AAC），連續放電至其中一邊耳機停止播放。"
  ],
  "structured_values": [
    {
      "name": "啟用 ANC 最長使用時間",
      "state": "known",
      "value": 4,
      "unit": "小時"
    }
  ],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "電池 → AirPods 5；#footnote-12",
      "context": "核對指定規格頁快照中的「電池 → AirPods 5；#footnote-12」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S06"
    ]
  }
}
```

### KB-064

```json
{
  "id": "KB-064",
  "source": "[S06]",
  "subject": "AirPods 5 配備無線充電盒電池",
  "topic": "AirPods 5",
  "statement_zh": "Apple 宣稱配備無線充電盒的 AirPods 5，在啟用主動式降噪時充電一次最長可達 5 小時。",
  "claim_type": "performance-claim",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "Apple 使用預量產 AirPods 5 搭配預量產 iPhone 18 Pro、均搭載測試版軟體測試；音量 50%，空間音訊與對話感知關閉，主動式降噪開啟。",
    "電池使用時間受裝置設定、環境與使用情況等因素影響；並非本專案實測。",
    "測試播放 358 首 iTunes Store 曲目（256-Kbps AAC），連續放電至其中一邊耳機停止播放。"
  ],
  "structured_values": [
    {
      "name": "啟用 ANC 最長使用時間",
      "state": "known",
      "value": 5,
      "unit": "小時"
    }
  ],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "電池 → AirPods 5 配備無線充電盒；#footnote-15",
      "context": "核對指定規格頁快照中的「電池 → AirPods 5 配備無線充電盒；#footnote-15」，此為規格頁補充，未用來證明影片曾宣布。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:43:49.002Z",
    "notes": "已對照原始 HTML 與包含註腳的文字擷取，核對適用型號及欄位原文；轉述未新增比較或可用性結論。",
    "coverage_ids": [
      "PAGE-S06"
    ]
  }
}
```

### KB-090

```json
{
  "id": "KB-090",
  "source": "[S01]",
  "subject": "Siri AI",
  "topic": "Apple Intelligence",
  "statement_zh": "字幕候選：Siri AI 初期以英文 Beta 推出，法文、日文、韓文、葡萄牙文與西班牙文預計於 10 月支援。",
  "claim_type": "specification",
  "verification": "candidate",
  "availability_status": "unknown",
  "qualifiers": [
    "原音與對應畫面尚未逐項核對，不能據此宣稱繁體中文 Siri AI 已可用。",
    "本輪已另以 KB-180 收錄畫面可支持的收窄觀察；原字幕候選與其原音／全部條件尚未完成，仍不升級為 verified。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 941,
      "end_seconds": 950,
      "modality": "subtitles",
      "context": "實際讀取同影片轉錄稿 UI 對應時間行；產製方式未確認，僅作候選定位。"
    }
  ],
  "review_record": null
}
```

### KB-091

```json
{
  "id": "KB-091",
  "source": "[S01]",
  "subject": "iPhone 18 Pro 持續效能",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "statement_zh": "字幕候選：Apple 宣稱持續效能相較 iPhone 17 Pro 最高提升 40%。",
  "claim_type": "specification",
  "verification": "candidate",
  "availability_status": "unknown",
  "qualifiers": [
    "尚未核對效能畫面、比較條件與註記；不得作為獨立效能結論。",
    "本輪已另以 KB-181 收錄畫面可支持的收窄觀察；原字幕候選與其原音／全部條件尚未完成，仍不升級為 verified。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 1202,
      "end_seconds": 1212,
      "modality": "subtitles",
      "context": "實際讀取同影片轉錄稿 UI 對應時間行；產製方式未確認，僅作候選定位。"
    }
  ],
  "review_record": null
}
```

### KB-092

```json
{
  "id": "KB-092",
  "source": "[S01]",
  "subject": "iPhone 18 Pro eSIM-only 電池",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "statement_zh": "字幕候選：eSIM-only iPhone 18 Pro 的影片播放時間為 36 小時。",
  "claim_type": "specification",
  "verification": "candidate",
  "availability_status": "unknown",
  "qualifiers": [
    "尚未核對音訊與原畫面；不可直接對應台灣 nano-SIM 機型。",
    "本輪已另以 KB-182 收錄畫面可支持的收窄觀察；原字幕候選與其原音／全部條件尚未完成，仍不升級為 verified。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 1255,
      "end_seconds": 1266,
      "modality": "subtitles",
      "context": "實際讀取同影片轉錄稿 UI 對應時間行；產製方式未確認，僅作候選定位。"
    }
  ],
  "review_record": null
}
```

### KB-100

```json
{
  "id": "KB-100",
  "source": "[S07]",
  "statement_zh": "LocalAuthentication 可讓 App 使用 Touch ID 等生物辨識或使用者已知的密碼，延伸既有身分驗證流程。",
  "subject": "LocalAuthentication",
  "topic": "Touch ID 與 App 身分驗證",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "本段是既有公開 API 的技術補充，不是本次發表會首次公布的 API。",
    "以 KB-033 的 Touch ID 規格作為研究入口；文件沒有逐一列出 iPhone Duo 支援，本次也沒有 SDK 編譯、真機或地區可用性測試。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S07",
      "artifact_revision": "sha256:4855b760fdfa629831b96f40f1d933a3ca709799b0afc1e2817f0da5bb99ccd2",
      "modality": "webpage",
      "locator": "Local Authentication / Overview",
      "context": "文件說明 App 可使用這些驗證機制；這是通用 framework 能力，不是新品支援清單。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:51:10.238Z",
    "notes": "直接讀取官方同源 DocC JSON 的 identifier、metadata.platforms 及所列原文章節；與主張、限定詞及 symbol 逐項比對，未用搜尋摘要當證據。",
    "coverage_ids": [
      "PAGE-S07"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-033"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "8.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "文件的 iOS availability 是 API 最低適用版本，不表示產品推出日期或台灣目前可用。未由一般 framework 文件推定特定產品相容性。"
  }
}
```

### KB-101

```json
{
  "id": "KB-101",
  "source": "[S07]",
  "statement_zh": "LocalAuthentication 不讓 App 存取底層生物辨識資料，例如指紋影像；App 取得的是驗證成功或失敗的結果。",
  "subject": "LocalAuthentication",
  "topic": "Touch ID 與 App 身分驗證",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "本段是既有公開 API 的技術補充，不是本次發表會首次公布的 API。",
    "以 KB-033 的 Touch ID 規格作為研究入口；文件沒有逐一列出 iPhone Duo 支援，本次也沒有 SDK 編譯、真機或地區可用性測試。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S07",
      "artifact_revision": "sha256:4855b760fdfa629831b96f40f1d933a3ca709799b0afc1e2817f0da5bb99ccd2",
      "modality": "webpage",
      "locator": "Local Authentication / Overview / authentication data",
      "context": "Overview 說明 Secure Enclave 管理底層驗證資料，App 收到布林驗證結果。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:51:10.238Z",
    "notes": "直接讀取官方同源 DocC JSON 的 identifier、metadata.platforms 及所列原文章節；與主張、限定詞及 symbol 逐項比對，未用搜尋摘要當證據。",
    "coverage_ids": [
      "PAGE-S07"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-033"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "8.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "文件的 iOS availability 是 API 最低適用版本，不表示產品推出日期或台灣目前可用。未由一般 framework 文件推定特定產品相容性。"
  }
}
```

### KB-102

```json
{
  "id": "KB-102",
  "source": "[S08]",
  "statement_zh": "LAContext.canEvaluatePolicy(_:error:) 檢查指定驗證政策的先決條件；Apple 提醒不要儲存回傳值，因為系統設定可能改變。",
  "subject": "LAContext.canEvaluatePolicy(_:error:)",
  "topic": "Touch ID 與 App 身分驗證",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "本段是既有公開 API 的技術補充，不是本次發表會首次公布的 API。",
    "以 KB-033 的 Touch ID 規格作為研究入口；文件沒有逐一列出 iPhone Duo 支援，本次也沒有 SDK 編譯、真機或地區可用性測試。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S08",
      "artifact_revision": "sha256:a391adadaf19372d348cf867c4875ab8780973818b657d381bf65bde6c28fefe",
      "modality": "webpage",
      "locator": "LAContext.canEvaluatePolicy(_:error:) / Discussion",
      "context": "例如 Touch ID 被停用會影響要求生物辨識的政策；此檢查結果不是長期的硬體支援保證。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:51:10.238Z",
    "notes": "直接讀取官方同源 DocC JSON 的 identifier、metadata.platforms 及所列原文章節；與主張、限定詞及 symbol 逐項比對，未用搜尋摘要當證據。",
    "coverage_ids": [
      "PAGE-S08"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-033"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "8.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "文件的 iOS availability 是 API 最低適用版本，不表示產品推出日期或台灣目前可用。未由一般 framework 文件推定特定產品相容性。"
  }
}
```

### KB-103

```json
{
  "id": "KB-103",
  "source": "[S08]",
  "statement_zh": "Apple 提醒不要在 evaluatePolicy(_:localizedReason:reply:) 的 reply 區塊中呼叫 canEvaluatePolicy(_:error:)，以免可能發生 deadlock。",
  "subject": "LAContext.canEvaluatePolicy(_:error:)",
  "topic": "Touch ID 與 App 身分驗證",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "本段是既有公開 API 的技術補充，不是本次發表會首次公布的 API。",
    "以 KB-033 的 Touch ID 規格作為研究入口；文件沒有逐一列出 iPhone Duo 支援，本次也沒有 SDK 編譯、真機或地區可用性測試。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S08",
      "artifact_revision": "sha256:a391adadaf19372d348cf867c4875ab8780973818b657d381bf65bde6c28fefe",
      "modality": "webpage",
      "locator": "LAContext.canEvaluatePolicy(_:error:) / Discussion / Important",
      "context": "此為官方列出的呼叫限制；未實際執行或重現 deadlock。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:51:10.238Z",
    "notes": "直接讀取官方同源 DocC JSON 的 identifier、metadata.platforms 及所列原文章節；與主張、限定詞及 symbol 逐項比對，未用搜尋摘要當證據。",
    "coverage_ids": [
      "PAGE-S08"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-033"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "8.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "文件的 iOS availability 是 API 最低適用版本，不表示產品推出日期或台灣目前可用。未由一般 framework 文件推定特定產品相容性。"
  }
}
```

### KB-104

```json
{
  "id": "KB-104",
  "source": "[S09]",
  "statement_zh": "LAContext.biometryType 要在呼叫 canEvaluatePolicy(_:error:) 之後才會被設定，與該方法回傳成功或失敗無關；預設值是 none。",
  "subject": "LAContext.biometryType",
  "topic": "Touch ID 與 App 身分驗證",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "本段是既有公開 API 的技術補充，不是本次發表會首次公布的 API。",
    "以 KB-033 的 Touch ID 規格作為研究入口；文件沒有逐一列出 iPhone Duo 支援，本次也沒有 SDK 編譯、真機或地區可用性測試。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S09",
      "artifact_revision": "sha256:5088b680c32da0c0248384e1afd54fcb39748ef83e05b3cc2a8e638325ba9438",
      "modality": "webpage",
      "locator": "LAContext.biometryType / Discussion",
      "context": "文件以此屬性協助 App 的驗證提示文字符合裝置生物辨識類型；不是授權成功或某一政策目前可用的結果。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T18:51:10.238Z",
    "notes": "直接讀取官方同源 DocC JSON 的 identifier、metadata.platforms 及所列原文章節；與主張、限定詞及 symbol 逐項比對，未用搜尋摘要當證據。",
    "coverage_ids": [
      "PAGE-S09"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-033"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "11.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "文件的 iOS availability 是 API 最低適用版本，不表示產品推出日期或台灣目前可用。未由一般 framework 文件推定特定產品相容性。"
  }
}
```

### KB-110

```json
{
  "id": "KB-110",
  "source": "[S06]",
  "statement_zh": "AirPods 5 規格頁的共用音訊技術列包含主動式降噪、適應性音訊、通透模式、對話感知、語音隔離與錄音室等級音訊錄製。",
  "subject": "AirPods 5",
  "topic": "AirPods 5",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "適應性音訊、對話感知與語音隔離須使用執行最新系統軟體的相容 Apple 裝置。",
    "噪音控制功能可能受碎屑或耳垢堆積影響；規格列沒有提供獨立降噪實測。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "#audio-headline；#footnote-1；#footnote-2",
      "context": "AirPods 5 規格頁的共用音訊技術列包含主動式降噪、適應性音訊、通透模式、對話感知、語音隔離與錄音室等級音訊錄製。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:38:39Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S06-EXPANDED"
    ]
  }
}
```

### KB-111

```json
{
  "id": "KB-111",
  "source": "[S06]",
  "statement_zh": "AirPods 5 規格頁列有即時翻譯；註腳將其標為 Beta，須在相容 Apple 裝置開啟 Apple Intelligence，搭配最新系統軟體及配備最新韌體的相容 AirPods。",
  "subject": "AirPods 5",
  "topic": "AirPods 5",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "preview",
  "qualifiers": [
    "部分功能未在所有地區或語言提供；這份規格頁未列完整語言清單，不能推定繁中即時翻譯已可用。",
    "原註腳的耳機主體是「相容 AirPods」，沒有在此條件句限定為 AirPods 5，也沒有列出完整相容型號。"
  ],
  "structured_values": [
    {
      "name": "功能",
      "state": "known",
      "value": "即時翻譯",
      "unit": null
    },
    {
      "name": "產品",
      "state": "known",
      "value": "AirPods 5；需搭配相容 Apple 裝置，完整型號清單尚未核對",
      "unit": null
    },
    {
      "name": "必要系統",
      "state": "known",
      "value": "最新系統軟體與耳機韌體；最低版本號尚未核對",
      "unit": null
    },
    {
      "name": "語言與地區",
      "state": "unknown",
      "value": null,
      "unit": null
    },
    {
      "name": "來源中的推出狀態",
      "state": "known",
      "value": "Beta",
      "unit": null
    },
    {
      "name": "其他條件",
      "state": "known",
      "value": "相容 Apple 裝置開啟 Apple Intelligence；完整網路與費用條件尚未核對",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "#live-translation-headline；#footnote-4",
      "context": "AirPods 5 規格頁列有即時翻譯；註腳將其標為 Beta，須在相容 Apple 裝置開啟 Apple Intelligence，搭配最新系統軟體及配備最新韌體的相容 AirPods。"
    },
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "#footnote-4",
      "context": "即時翻譯 Beta 須相容 Apple 裝置的最新系統、啟用 Apple Intelligence，並配對具最新韌體的相容 AirPods；原文未將相容範圍收窄為 AirPods 5。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S06-EXPANDED",
      "PAGE-S06-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-112

```json
{
  "id": "KB-112",
  "source": "[S06]",
  "statement_zh": "AirPods 5 規格頁說明可免持使用 iPhone 上的 Siri AI；註腳指 Siri AI Beta 隨 iOS 27、macOS 27 和 watchOS 27 推出，初期先支援英文，且須啟用 Apple Intelligence。",
  "subject": "AirPods 5",
  "topic": "AirPods 5",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "preview",
  "qualifiers": [
    "Apple Intelligence 的語言前提同時涉及 Siri 與裝置語言：兩者均須設為來源列出的支援語言，其中包含繁體中文；這不是 Siri AI、即時翻譯或每項功能的逐項語言清單，也不另推定兩者必須設為相同語言。",
    "部分仰賴伺服器端模型的功能有每日使用限制；原文例子包含 Siri AI、智慧照片編輯工具、影像樂園及捷徑中的 AFM 3 雲端模型，不能說所有操作共用同一額度。額度依功能、需求複雜度、系統需求、系統政策及其他因素而異；未來可付費取得額外使用權限，並須遵守 Apple Intelligence 條款與約定。",
    "註腳說明免持使用 Siri AI 適用於所有 AirPods，仍須符合 Apple Intelligence、系統與支援語言條件；不能描述成 AirPods 5 獨有，也不能延伸為所有 AirPods 都支援即時翻譯或 AirPods 5 的全部功能。",
    "Siri 另須相容且支援最新作業系統的裝置、最新系統軟體與網際網路連線，功能依語言／地區而異，行動數據可能須付費；這是 Siri 條件，不是所有耳機按鍵都須連網。",
    "部分功能、語言或裝置可能未在所有地區提供；固定快照沒有逐項完整資格、固定每日額度或加購費率，不把 Beta 及未來付費寫成正式全面提供或現在必須訂閱。"
  ],
  "structured_values": [
    {
      "name": "初期語言",
      "state": "known",
      "value": "英文",
      "unit": null
    },
    {
      "name": "推出狀態",
      "state": "known",
      "value": "Beta",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "#siri-ai-headline；#footnote-5",
      "context": "AirPods 5 規格頁說明可免持使用 iPhone 上的 Siri AI；註腳指 Siri AI Beta 隨 iOS 27、macOS 27 和 watchOS 27 推出，初期先支援英文，且須啟用 Apple Intelligence。"
    },
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "#footnote-5",
      "context": "原文要求 Siri 與裝置語言均為支援語言；列 Siri AI 初期英文、跨系統 Beta、部分雲端功能每日限制與未來加購，最後一句為所有 AirPods 可免持使用 Siri AI。"
    },
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "#control-headline；#footnote-8",
      "context": "控制列的「嘿 Siri」連到註腳 8，要求相容裝置、最新作業系統與網際網路，保留語言／地區差異及可能行動數據費。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S06-EXPANDED",
      "PAGE-S06-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-113

```json
{
  "id": "KB-113",
  "source": "[S06]",
  "statement_zh": "AirPods 5 的控制項目包括按一下播放或暫停、接聽電話與通話靜音，以及相機遙控器；Siri 互動可用點頭或搖頭回應。",
  "subject": "AirPods 5",
  "topic": "AirPods 5",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "通話靜音適用於相容 app 並須最新韌體；相機遙控須最新韌體及執行最新系統的相容 Apple 裝置。",
    "Siri 互動須執行最新作業系統的相容 Apple 裝置；此規格不證明任意第三方 App 可攔截所有耳機手勢。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "#control-headline；#footnote-2；#footnote-6；#footnote-7",
      "context": "AirPods 5 的控制項目包括按一下播放或暫停、接聽電話與通話靜音，以及相機遙控器；Siri 互動可用點頭或搖頭回應。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:38:39Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S06-EXPANDED"
    ]
  }
}
```

### KB-114

```json
{
  "id": "KB-114",
  "source": "[S06]",
  "statement_zh": "AirPods 5 與充電盒的防塵與抗汗抗水等級為 IP57，註腳定位於非水上運動與活動。",
  "subject": "AirPods 5",
  "topic": "AirPods 5",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "此為受控實驗室測試；防護不是永久狀態，可能因耗損下降，請勿在潮濕時充電。"
  ],
  "structured_values": [
    {
      "name": "防護等級",
      "state": "known",
      "value": "IP57",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "#water-headline；#footnote-9",
      "context": "AirPods 5 與充電盒的防塵與抗汗抗水等級為 IP57，註腳定位於非水上運動與活動。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:38:39Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S06-EXPANDED"
    ]
  }
}
```

### KB-115

```json
{
  "id": "KB-115",
  "source": "[S06]",
  "statement_zh": "AirPods 5 規格頁列示藍牙 5.3；單個耳機重量為 4.3 公克。",
  "subject": "AirPods 5",
  "topic": "AirPods 5",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "尺寸與重量可能因配置及製程不同而異。"
  ],
  "structured_values": [
    {
      "name": "藍牙版本",
      "state": "known",
      "value": "5.3",
      "unit": null
    },
    {
      "name": "單耳重量",
      "state": "known",
      "value": 4.3,
      "unit": "公克"
    }
  ],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "#wireless-headline；#dimensions-headline-content；#footnote-10",
      "context": "AirPods 5 規格頁列示藍牙 5.3；單個耳機重量為 4.3 公克。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:38:39Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S06-EXPANDED"
    ]
  }
}
```

### KB-116

```json
{
  "id": "KB-116",
  "source": "[S06]",
  "statement_zh": "AirPods 5 系統需求列有搭載最新 iOS、iPadOS、watchOS、macOS、tvOS 或 visionOS 的相應 Apple 裝置；較舊 Apple 系統與非 Apple 裝置可作無線藍牙耳機使用，但功能可能受限。",
  "subject": "AirPods 5",
  "topic": "AirPods 5",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "可連接藍牙不代表所有智慧功能、控制或個人化功能均可使用。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "#requirements-headline",
      "context": "AirPods 5 系統需求列有搭載最新 iOS、iPadOS、watchOS、macOS、tvOS 或 visionOS 的相應 Apple 裝置；較舊 Apple 系統與非 Apple 裝置可作無線藍牙耳機使用，但功能可能受限。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:38:39Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S06-EXPANDED"
    ]
  }
}
```

### KB-117

```json
{
  "id": "KB-117",
  "source": "[S06]",
  "statement_zh": "AirPods 5 無線充電盒版的盒內揚聲器支援「尋找」，註腳要求 iOS 27 或以上版本。",
  "subject": "AirPods 5",
  "topic": "AirPods 5",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "此項限定配備無線充電盒的版本。"
  ],
  "structured_values": [
    {
      "name": "尋找系統條件",
      "state": "known",
      "value": "iOS 27 或以上",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "#charging-headline；#footnote-11",
      "context": "AirPods 5 無線充電盒版的盒內揚聲器支援「尋找」，註腳要求 iOS 27 或以上版本。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:38:39Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S06-EXPANDED"
    ]
  }
}
```

### KB-118

```json
{
  "id": "KB-118",
  "source": "[S06]",
  "statement_zh": "Apple 列示開啟主動式降噪並搭配充電盒時，AirPods 5 最長可達 20 小時，無線充電盒版最長可達 22 小時。",
  "subject": "AirPods 5",
  "topic": "AirPods 5",
  "claim_type": "performance-claim",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "累計包含反覆把耳機充滿再播放，直到耳機與盒完全放電，不是單次連續聆聽。",
    "Apple 於 2026 年 7、8 月以預量產耳機與 iPhone 18 Pro、測試版軟體測試；358 首 256-Kbps AAC 曲目，音量 50%，空間音訊與對話感知關閉、主動式降噪開啟。",
    "實際時間依裝置設定、環境及使用情況而異。"
  ],
  "structured_values": [
    {
      "name": "標準盒累計最長",
      "state": "known",
      "value": 20,
      "unit": "小時"
    },
    {
      "name": "無線盒累計最長",
      "state": "known",
      "value": 22,
      "unit": "小時"
    }
  ],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "#battery-headline；#footnote-13；#footnote-16",
      "context": "Apple 列示開啟主動式降噪並搭配充電盒時，AirPods 5 最長可達 20 小時，無線充電盒版最長可達 22 小時。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:38:39Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S06-EXPANDED"
    ]
  }
}
```

### KB-119

```json
{
  "id": "KB-119",
  "source": "[S06]",
  "statement_zh": "AirPods 5 的個人化空間音訊含動態頭部追蹤；建立個人檔案須使用具原深感測相機的 iPhone，播放則須相容硬體、軟體、app 與內容。",
  "subject": "AirPods 5",
  "topic": "AirPods 5",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "並非所有內容都是杜比全景聲；檔案可同步至執行最新系統的相容 Apple 裝置，其他裝置不支援個人化空間音訊。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "#audio-headline；#footnote-3",
      "context": "AirPods 5 的個人化空間音訊含動態頭部追蹤；建立個人檔案須使用具原深感測相機的 iPhone，播放則須相容硬體、軟體、app 與內容。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:38:39Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S06-EXPANDED"
    ]
  }
}
```

### KB-120

```json
{
  "id": "KB-120",
  "source": "[S06]",
  "statement_zh": "AirPods 5 的輔助使用列有即時聆聽音訊、耳機音量調控與耳機調節。",
  "subject": "AirPods 5",
  "topic": "AirPods 5",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "即時聆聽須使用最新 iOS 或 iPadOS；此清單不等同醫療或聽力改善效果的驗證。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S06",
      "artifact_revision": "sha256:64307578f52182b1b59804c196e734d6d2fb5f3d1ff5de1564c0f14084b4a466",
      "modality": "webpage",
      "locator": "#accessibility-headline；#footnote-18",
      "context": "AirPods 5 的輔助使用列有即時聆聽音訊、耳機音量調控與耳機調節。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:38:39Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S06-EXPANDED"
    ]
  }
}
```

### KB-121

```json
{
  "id": "KB-121",
  "source": "[S02]",
  "statement_zh": "iPhone 18 Pro 與 iPhone 18 Pro Max採用鋁金屬一體成型設計、超瓷晶盾 2 正面與超瓷晶盾背板，兩款容量均列 256GB、512GB、1TB 與 2TB。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "可用容量會少於標示容量並依系統、設定與機型而變；規格註腳列標準配置約用 12GB 至 24GB，Apple Intelligence 裝置端模型約佔 7GB。",
    "Apple Intelligence 關閉時可刪除其裝置端模型，重新開啟會重新下載；約 7GB 是此快照列示的模型空間估計，不是所有 AI 模型的固定總容量或持續連網要求。"
  ],
  "structured_values": [
    {
      "name": "容量選項",
      "state": "known",
      "value": "256GB、512GB、1TB、2TB",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "外觀；容量；#footnote-2",
      "context": "iPhone 18 Pro 與 iPhone 18 Pro Max採用鋁金屬一體成型設計、超瓷晶盾 2 正面與超瓷晶盾背板，兩款容量均列 256GB、512GB、1TB 與 2TB。"
    },
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "#footnote-2",
      "context": "標準配置約 12GB 至 24GB；Apple Intelligence 裝置端模型約 7GB，關閉時可刪除、開啟時重新下載；可用空間隨軟體、設定、機型而異。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S02-EXPANDED",
      "PAGE-S02-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-122

```json
{
  "id": "KB-122",
  "source": "[S02]",
  "statement_zh": "iPhone 18 Pro 的重量為 211 公克，iPhone 18 Pro Max 為 249 公克；兩款厚度均為 8.75 公釐。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "尺寸與重量隨配置與製程而異。"
  ],
  "structured_values": [
    {
      "name": "iPhone 18 Pro 重量",
      "state": "known",
      "value": 211,
      "unit": "公克"
    },
    {
      "name": "iPhone 18 Pro Max 重量",
      "state": "known",
      "value": 249,
      "unit": "公克"
    },
    {
      "name": "厚度",
      "state": "known",
      "value": 8.75,
      "unit": "公釐"
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "尺寸與重量；#footnote-3",
      "context": "iPhone 18 Pro 的重量為 211 公克，iPhone 18 Pro Max 為 249 公克；兩款厚度均為 8.75 公釐。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S02-EXPANDED"
    ]
  }
}
```

### KB-123

```json
{
  "id": "KB-123",
  "source": "[S02]",
  "statement_zh": "iPhone 18 Pro 與 iPhone 18 Pro Max後置相機列有 4800 萬像素融合主相機、超廣角與望遠；望遠列 4 倍與光學品質 8 倍，另列最高 40 倍數位變焦。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "光學品質 8 倍望遠列為 1200 萬像素，不能與 4800 萬像素望遠或數位變焦當作同一規格。"
  ],
  "structured_values": [
    {
      "name": "後置相機",
      "state": "known",
      "value": "主相機、超廣角、望遠",
      "unit": null
    },
    {
      "name": "望遠焦段",
      "state": "known",
      "value": 4,
      "unit": "倍"
    },
    {
      "name": "光學品質望遠",
      "state": "known",
      "value": 8,
      "unit": "倍"
    },
    {
      "name": "最高數位變焦",
      "state": "known",
      "value": 40,
      "unit": "倍"
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "相機",
      "context": "iPhone 18 Pro 與 iPhone 18 Pro Max後置相機列有 4800 萬像素融合主相機、超廣角與望遠；望遠列 4 倍與光學品質 8 倍，另列最高 40 倍數位變焦。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S02-EXPANDED"
    ]
  }
}
```

### KB-124

```json
{
  "id": "KB-124",
  "source": "[S02]",
  "statement_zh": "iPhone 18 Pro 與 iPhone 18 Pro Max可錄製最高 4K 120 fps 杜比視界（融合主相機）；ProRes 最高 4K 120 fps 需外接儲存，ProRes RAW 需相容 app，Genlock 需相容第三方硬體與軟體。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "此為各模式的條件式上限，不能推論所有鏡頭、格式與配件組合都能同時達到。"
  ],
  "structured_values": [
    {
      "name": "主相機杜比視界上限",
      "state": "known",
      "value": "4K 120 fps",
      "unit": null
    },
    {
      "name": "ProRes 外接儲存上限",
      "state": "known",
      "value": "4K 120 fps",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "錄影；#footnote-6；#footnote-7",
      "context": "iPhone 18 Pro 與 iPhone 18 Pro Max可錄製最高 4K 120 fps 杜比視界（融合主相機）；ProRes 最高 4K 120 fps 需外接儲存，ProRes RAW 需相容 app，Genlock 需相容第三方硬體與軟體。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S02-EXPANDED"
    ]
  }
}
```

### KB-125

```json
{
  "id": "KB-125",
  "source": "[S02]",
  "statement_zh": "iPhone 18 Pro 與 iPhone 18 Pro Max列有 Apple N1、C2、Wi-Fi 7、藍牙 6、Thread、第 2 代超寬頻晶片與精準雙頻 GPS。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "Wi-Fi 7 僅在支援的國家或地區提供，超寬頻供應視地區而異；行動服務須數據方案、特定電信業者及網路支援。",
    "這是硬體與連線規格，沒有逐一確認第三方 framework 對該新品的支援關係。"
  ],
  "structured_values": [
    {
      "name": "Wi-Fi",
      "state": "known",
      "value": "Wi-Fi 7（2x2 MIMO）",
      "unit": null
    },
    {
      "name": "藍牙",
      "state": "known",
      "value": "6",
      "unit": null
    },
    {
      "name": "定位",
      "state": "known",
      "value": "精準雙頻 GPS",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "行動網路與無線技術；定位功能；#footnote-12；#footnote-13；#footnote-14",
      "context": "iPhone 18 Pro 與 iPhone 18 Pro Max列有 Apple N1、C2、Wi-Fi 7、藍牙 6、Thread、第 2 代超寬頻晶片與精準雙頻 GPS。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S02-EXPANDED"
    ]
  }
}
```

### KB-126

```json
{
  "id": "KB-126",
  "source": "[S02]",
  "statement_zh": "iPhone 18 Pro 規格頁列 iOS 27 與 Apple Intelligence；註腳指 Siri AI Beta 隨 iOS 27 推出，初期先支援英文，須啟用 Apple Intelligence 並使用支援的語言。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "preview",
  "qualifiers": [
    "Apple Intelligence 的語言前提同時涉及 Siri 與裝置語言：兩者均須設為來源列出的支援語言，其中包含繁體中文；這不是 Siri AI、即時翻譯或每項功能的逐項語言清單，也不另推定兩者必須設為相同語言。",
    "Siri AI Beta 隨 iOS 27 推出，須啟用 Apple Intelligence 並使用支援語言；初期英文不能由 Apple Intelligence 總語言清單改推為初期繁中。",
    "部分仰賴伺服器端模型的功能有每日使用限制；原文例子包含 Siri AI、智慧照片編輯工具、影像樂園及捷徑中的 AFM 3 雲端模型，不能說所有操作共用同一額度。額度依功能、需求複雜度、系統需求、系統政策及其他因素而異；未來可付費取得額外使用權限，並須遵守 Apple Intelligence 條款與約定。",
    "Siri 另有網際網路連線與語言／地區條件，行動數據服務可能須付費；此限制不能延伸成全部 Apple Intelligence 或裝置端模型都必須連網。",
    "部分功能、語言或裝置可能未在所有地區提供；固定快照沒有逐項完整資格、固定每日額度或加購費率，不把 Beta 及未來付費寫成正式全面提供或現在必須訂閱。"
  ],
  "structured_values": [
    {
      "name": "作業系統",
      "state": "known",
      "value": "iOS 27",
      "unit": null
    },
    {
      "name": "Siri AI 初期語言",
      "state": "known",
      "value": "英文",
      "unit": null
    },
    {
      "name": "功能",
      "state": "known",
      "value": "Siri AI",
      "unit": null
    },
    {
      "name": "產品",
      "state": "known",
      "value": "iPhone 18 Pro、iPhone 18 Pro Max",
      "unit": null
    },
    {
      "name": "必要系統",
      "state": "known",
      "value": "iOS 27",
      "unit": null
    },
    {
      "name": "語言與地區",
      "state": "known",
      "value": "初期英文；地區完整清單尚未核對",
      "unit": null
    },
    {
      "name": "來源中的推出狀態",
      "state": "known",
      "value": "Beta",
      "unit": null
    },
    {
      "name": "其他條件",
      "state": "known",
      "value": "啟用 Apple Intelligence；Siri 與裝置語言均為支援語言；Siri 需網路；部分雲端功能有每日使用限制",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "作業系統；Apple Intelligence 與 Siri AI；#footnote-5",
      "context": "iPhone 18 Pro 規格頁列 iOS 27 與 Apple Intelligence；註腳指 Siri AI Beta 隨 iOS 27 推出，初期先支援英文，須啟用 Apple Intelligence 並使用支援的語言。"
    },
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "#footnote-5",
      "context": "Apple Intelligence 要求 Siri 與裝置語言均列為支援語言；Siri AI 初期英文 Beta 與部分雲端功能每日額度、未來付費規則分別列示。"
    },
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "Siri；#footnote-20",
      "context": "Siri 可能受語言及地區限制，須網際網路，行動數據可能須付費。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S02-EXPANDED",
      "PAGE-S02-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-127

```json
{
  "id": "KB-127",
  "source": "[S02]",
  "statement_zh": "Apple 列示台灣 iPhone 18 Pro／iPhone 18 Pro Max 一般使用最長 23／29 小時、影片播放 34／43 小時、串流影片 31／38 小時。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "performance-claim",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "均為 Apple 預量產機型與軟體測試的最長時間；一般使用測試於 2026 年 8 月，依使用者使用數值中位數配置多種活動並連 LTE／5G。",
    "影片測試於 2026 年 7 月；播放循環為 2 小時 23 分鐘 HDR 電影，串流為 3 小時 1 分鐘 HDR 電影，藍牙配對耳機、Wi-Fi 連網，自動調整亮度與原彩關閉。",
    "實際時間視使用、配置、行動網路與訊號等而異；不替換成影片字幕中未核對的 eSIM-only 機型數字。"
  ],
  "structured_values": [
    {
      "name": "iPhone 18 Pro 一般使用",
      "state": "known",
      "value": 23,
      "unit": "小時"
    },
    {
      "name": "iPhone 18 Pro Max 一般使用",
      "state": "known",
      "value": 29,
      "unit": "小時"
    },
    {
      "name": "iPhone 18 Pro 影片播放",
      "state": "known",
      "value": 34,
      "unit": "小時"
    },
    {
      "name": "iPhone 18 Pro Max 影片播放",
      "state": "known",
      "value": 43,
      "unit": "小時"
    },
    {
      "name": "iPhone 18 Pro 串流",
      "state": "known",
      "value": 31,
      "unit": "小時"
    },
    {
      "name": "iPhone 18 Pro Max 串流",
      "state": "known",
      "value": 38,
      "unit": "小時"
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "電源與電池；#footnote-8；#footnote-9",
      "context": "Apple 列示台灣 iPhone 18 Pro／iPhone 18 Pro Max 一般使用最長 23／29 小時、影片播放 34／43 小時、串流影片 31／38 小時。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S02-EXPANDED"
    ]
  }
}
```

### KB-128

```json
{
  "id": "KB-128",
  "source": "[S02]",
  "statement_zh": "iPhone 18 Pro 與 iPhone 18 Pro Max USB-C 支援 DisplayPort 與最快 10Gb/s USB 3；該資料傳輸速度須配合 10Gb/s USB 3 連接線。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "不能由 USB-C 接頭外觀推定任意連接線都符合此速率。"
  ],
  "structured_values": [
    {
      "name": "USB 資料速度上限",
      "state": "known",
      "value": 10,
      "unit": "Gb/s"
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "充電與擴充；#footnote-16",
      "context": "iPhone 18 Pro 與 iPhone 18 Pro Max USB-C 支援 DisplayPort 與最快 10Gb/s USB 3；該資料傳輸速度須配合 10Gb/s USB 3 連接線。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S02-EXPANDED"
    ]
  }
}
```

### KB-129

```json
{
  "id": "KB-129",
  "source": "[S02]",
  "statement_zh": "iPhone 18 Pro 與 iPhone 18 Pro Max列示有線充電約 15 分鐘最高達 50%，須 AVS 的 60W 或更高功率轉接器及支援 60W 的 USB-C 線；MagSafe 約 30 分鐘最高達 50% 須 35W 或更高功率轉接器。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "performance-claim",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "有線約 15 分鐘最高達 50% 的條件是 60W 或更高功率且支援 AVS 的電源轉接器、支援 60W 的 USB-C 線，以及支援 AVS 的 USB PD 3.1 或以上規格。",
    "MagSafe 約 30 分鐘最高達 50% 須 35W 或更高功率轉接器與 MagSafe 充電器；電源轉接器與 MagSafe 充電器皆另售。",
    "Apple 於 2026 年 7 月以預量產機型及軟體、USB-C 線或 MagSafe A3502／A3503，搭配 A3351 40W 動態轉接器（最高輸出 60W）測試；從電力耗盡、啟動顯示 Apple 標誌起計時，實際依配件、設定、使用與環境而異。"
  ],
  "structured_values": [
    {
      "name": "有線達50%約需",
      "state": "known",
      "value": 15,
      "unit": "分鐘"
    },
    {
      "name": "MagSafe達50%約需",
      "state": "known",
      "value": 30,
      "unit": "分鐘"
    },
    {
      "name": "MagSafe或Qi2上限",
      "state": "known",
      "value": 25,
      "unit": "W"
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "電源與電池；MagSafe 與無線充電；#footnote-10",
      "context": "iPhone 18 Pro 與 iPhone 18 Pro Max列示有線充電約 15 分鐘最高達 50%，須 AVS 的 60W 或更高功率轉接器及支援 60W 的 USB-C 線；MagSafe 約 30 分鐘最高達 50% 須 35W 或更高功率轉接器。"
    },
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "電源與電池；#footnote-10",
      "context": "有線主列要求 AVS 60W 或更高功率轉接器，註腳補 60W 線與 USB PD 3.1+ AVS；MagSafe 主列要求 35W 或更高功率轉接器。型號 A3351 的 40W 為動態轉接器名稱，最高輸出 60W，不取代主列要求。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S02-EXPANDED",
      "PAGE-S02-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-130

```json
{
  "id": "KB-130",
  "source": "[S04]",
  "statement_zh": "Apple Watch Series 12 健康感測系統包含電子心率、常啟光學心率、血氧與體溫感測器；健康清單列有準備指數、生命徵象、心電圖、睡眠分數與睡眠呼吸中止症通知。",
  "subject": "Apple Watch Series 12",
  "topic": "Apple Watch Series 12",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "血氧、體溫與生命徵象僅供保健，不提供醫療用途。",
    "心電圖適用於 22 歲或以上；睡眠呼吸中止症通知針對 18 歲以上且未確診者，旨在協助偵測中度至重度跡象；不等於確診。",
    "這是 Apple 自家功能清單，並未逐一確認第三方 App 可讀取相同資料。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "感測器；健康與保健；#footnote-3；#footnote-4；#footnote-5；#footnote-6；#footnote-10",
      "context": "Apple Watch Series 12 健康感測系統包含電子心率、常啟光學心率、血氧與體溫感測器；健康清單列有準備指數、生命徵象、心電圖、睡眠分數與睡眠呼吸中止症通知。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S04-EXPANDED"
    ]
  }
}
```

### KB-131

```json
{
  "id": "KB-131",
  "source": "[S04]",
  "statement_zh": "Apple Watch Series 12 體能訓練列有跑步、自訂訓練、心率區間、配速、步頻、步幅、觸地時間與跑步功率；亦列自行車、游泳、指南針航點與回溯 GPS。",
  "subject": "Apple Watch Series 12",
  "topic": "Apple Watch Series 12",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "離線地圖註腳適用於 watchOS 26 或以上的 Apple Watch Series 6 與後續、Apple Watch SE 第 2 代與後續及所有 Apple Watch Ultra，並須搭配 iOS 26 或以上的 iPhone 11 或後續機型；未在所有國家或地區提供。",
    "Apple Watch Series 12 本身的相容性列另要求 iOS 27 或以上；不能以跨錶款功能的舊版最低要求降低新品配對門檻。",
    "來源列出的國家與地區公園地形圖僅限美國；不是所有離線地圖都只限美國。",
    "App 資料存取與活動期間的 runtime 行為須另查公開 API，不能由自家功能清單推定。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "體能訓練與活動記錄；#footnote-15",
      "context": "Apple Watch Series 12 體能訓練列有跑步、自訂訓練、心率區間、配速、步頻、步幅、觸地時間與跑步功率；亦列自行車、游泳、指南針航點與回溯 GPS。"
    },
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "#footnote-15",
      "context": "離線地圖列具體 watchOS 26／iOS 26 與錶款、iPhone 型號門檻，並保留國家地區限制。"
    },
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "相容性",
      "context": "Apple Watch Series 12 配對需要搭載 iOS 27 或以上版本的 iPhone 11 或後續、iPhone SE 第 2 代或後續；功能註腳不能降低此門檻。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S04-EXPANDED",
      "PAGE-S04-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-132

```json
{
  "id": "KB-132",
  "source": "[S04]",
  "statement_zh": "Apple Watch Series 12 的配對相容性為搭載 iOS 27 或以上的 iPhone 11 或後續機型，以及 iPhone SE 第 2 代或後續機型。",
  "subject": "Apple Watch Series 12",
  "topic": "Apple Watch Series 12",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "配對相容性不等於所有 AI、健康或網路功能都無條件可用。"
  ],
  "structured_values": [
    {
      "name": "配對系統",
      "state": "known",
      "value": "iOS 27 或以上",
      "unit": null
    },
    {
      "name": "配對手機",
      "state": "known",
      "value": "iPhone 11 或後續、iPhone SE 第 2 代或後續",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "相容性",
      "context": "Apple Watch Series 12 的配對相容性為搭載 iOS 27 或以上的 iPhone 11 或後續機型，以及 iPhone SE 第 2 代或後續機型。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S04-EXPANDED"
    ]
  }
}
```

### KB-133

```json
{
  "id": "KB-133",
  "source": "[S04]",
  "statement_zh": "Apple Watch Series 12 的 Siri AI 首先以英文 Beta 推出，須使用已啟用 Apple Intelligence 的裝置；語音智慧列有聲音辨識與 Shazam。",
  "subject": "Apple Watch Series 12",
  "topic": "Apple Watch Series 12",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "preview",
  "qualifiers": [
    "Apple Intelligence 的語言前提同時涉及 Siri 與裝置語言：兩者均須設為來源列出的支援語言，其中包含繁體中文；這不是 Siri AI、即時翻譯或每項功能的逐項語言清單，也不另推定兩者必須設為相同語言。",
    "Siri AI Beta 隨 watchOS 27 推出，須啟用 Apple Intelligence 並設為支援語言；初期英文不能由總語言清單改推為初期繁中。",
    "部分仰賴伺服器端模型的功能（包括 Siri AI）有每日使用限制，依功能、需求複雜度、系統需求、系統政策及其他因素而異；未來可付費增加使用權限，須遵守 Apple Intelligence 條款與約定。",
    "語音智慧註腳限定 Apple Watch Series 12 或 Apple Watch Ultra 4；部分功能、語言或裝置未在所有地區提供，固定快照沒有完整逐項地區資格或固定每日額度。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "操控；晶片；Apple Intelligence 與 Siri AI；#footnote-1；#footnote-2",
      "context": "Apple Watch Series 12 的 Siri AI 首先以英文 Beta 推出，須使用已啟用 Apple Intelligence 的裝置；語音智慧列有聲音辨識與 Shazam。"
    },
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "#footnote-1",
      "context": "Siri 與裝置語言均須為支援語言；Siri AI Beta 隨 watchOS 27 推出且初期英文，原文僅例舉 Siri AI 的伺服器使用限制，不引入手機頁的其他功能例子。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S04-EXPANDED",
      "PAGE-S04-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-134

```json
{
  "id": "KB-134",
  "source": "[S04]",
  "statement_zh": "Apple Watch Series 12 的經期追蹤不應作為避孕或診斷用途；心律不整通知不適用於未滿 22 歲或曾診斷為心房顫動者。",
  "subject": "Apple Watch Series 12",
  "topic": "Apple Watch Series 12",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "週期異常通知僅依據使用者記錄的週期資料；包含更年期前期的通知適用於 40 歲及以上，並非取代診斷、監測或治療。",
    "用藥功能不能替代專業醫療判斷。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "健康與保健；#footnote-7；#footnote-8；#footnote-9",
      "context": "Apple Watch Series 12 的經期追蹤不應作為避孕或診斷用途；心律不整通知不適用於未滿 22 歲或曾診斷為心房顫動者。"
    },
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "#footnote-8",
      "context": "週期異常通知的資料前提是使用者記錄的週期記錄；另保留更年期前期通知的 40 歲及以上、非診斷監測治療與不應避孕限制。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S04-EXPANDED",
      "PAGE-S04-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-140

```json
{
  "id": "KB-140",
  "source": "[S05]",
  "statement_zh": "Apple Watch Ultra 4 健康感測系統包含電子心率、常啟光學心率、血氧與體溫感測器；健康清單列有準備指數、生命徵象、心電圖、睡眠分數與睡眠呼吸中止症通知。",
  "subject": "Apple Watch Ultra 4",
  "topic": "Apple Watch Ultra 4",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "血氧、體溫與生命徵象僅供保健，不提供醫療用途。",
    "心電圖適用於 22 歲或以上；睡眠呼吸中止症通知針對 18 歲以上且未確診者，旨在協助偵測中度至重度跡象；不等於確診。",
    "這是 Apple 自家功能清單，並未逐一確認第三方 App 可讀取相同資料。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "感測器；健康與保健；#footnote-3；#footnote-4；#footnote-5；#footnote-6；#footnote-10",
      "context": "Apple Watch Ultra 4 健康感測系統包含電子心率、常啟光學心率、血氧與體溫感測器；健康清單列有準備指數、生命徵象、心電圖、睡眠分數與睡眠呼吸中止症通知。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S05-EXPANDED"
    ]
  }
}
```

### KB-141

```json
{
  "id": "KB-141",
  "source": "[S05]",
  "statement_zh": "Apple Watch Ultra 4 體能訓練列有跑步、自訂訓練、心率區間、配速、步頻、步幅、觸地時間與跑步功率；亦列自行車、游泳、指南針航點與回溯 GPS。",
  "subject": "Apple Watch Ultra 4",
  "topic": "Apple Watch Ultra 4",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "離線地圖註腳適用於 watchOS 26 或以上的 Apple Watch Series 6 與後續、Apple Watch SE 第 2 代與後續及所有 Apple Watch Ultra，並須搭配 iOS 26 或以上的 iPhone 11 或後續機型；未在所有國家或地區提供。",
    "Apple Watch Ultra 4 本身的相容性列另要求 iOS 27 或以上；不能以跨錶款功能的舊版最低要求降低新品配對門檻。",
    "來源列出的國家與地區公園地形圖僅限美國；不是所有離線地圖都只限美國。",
    "App 資料存取與活動期間的 runtime 行為須另查公開 API，不能由自家功能清單推定。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "體能訓練與活動記錄；#footnote-15",
      "context": "Apple Watch Ultra 4 體能訓練列有跑步、自訂訓練、心率區間、配速、步頻、步幅、觸地時間與跑步功率；亦列自行車、游泳、指南針航點與回溯 GPS。"
    },
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "#footnote-15",
      "context": "離線地圖列具體 watchOS 26／iOS 26 與錶款、iPhone 型號門檻，並保留國家地區限制。"
    },
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "相容性",
      "context": "Apple Watch Ultra 4 配對需要搭載 iOS 27 或以上版本的 iPhone 11 或後續、iPhone SE 第 2 代或後續；功能註腳不能降低此門檻。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S05-EXPANDED",
      "PAGE-S05-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-142

```json
{
  "id": "KB-142",
  "source": "[S05]",
  "statement_zh": "Apple Watch Ultra 4 的配對相容性為搭載 iOS 27 或以上的 iPhone 11 或後續機型，以及 iPhone SE 第 2 代或後續機型。",
  "subject": "Apple Watch Ultra 4",
  "topic": "Apple Watch Ultra 4",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "配對相容性不等於所有 AI、健康或網路功能都無條件可用。"
  ],
  "structured_values": [
    {
      "name": "配對系統",
      "state": "known",
      "value": "iOS 27 或以上",
      "unit": null
    },
    {
      "name": "配對手機",
      "state": "known",
      "value": "iPhone 11 或後續、iPhone SE 第 2 代或後續",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "相容性",
      "context": "Apple Watch Ultra 4 的配對相容性為搭載 iOS 27 或以上的 iPhone 11 或後續機型，以及 iPhone SE 第 2 代或後續機型。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S05-EXPANDED"
    ]
  }
}
```

### KB-143

```json
{
  "id": "KB-143",
  "source": "[S05]",
  "statement_zh": "Apple Watch Ultra 4 的 Siri AI 首先以英文 Beta 推出，須使用已啟用 Apple Intelligence 的裝置；語音智慧列有聲音辨識與 Shazam。",
  "subject": "Apple Watch Ultra 4",
  "topic": "Apple Watch Ultra 4",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "preview",
  "qualifiers": [
    "Apple Intelligence 的語言前提同時涉及 Siri 與裝置語言：兩者均須設為來源列出的支援語言，其中包含繁體中文；這不是 Siri AI、即時翻譯或每項功能的逐項語言清單，也不另推定兩者必須設為相同語言。",
    "Siri AI Beta 隨 watchOS 27 推出，須啟用 Apple Intelligence 並設為支援語言；初期英文不能由總語言清單改推為初期繁中。",
    "部分仰賴伺服器端模型的功能（包括 Siri AI）有每日使用限制，依功能、需求複雜度、系統需求、系統政策及其他因素而異；未來可付費增加使用權限，須遵守 Apple Intelligence 條款與約定。",
    "語音智慧註腳限定 Apple Watch Series 12 或 Apple Watch Ultra 4；部分功能、語言或裝置未在所有地區提供，固定快照沒有完整逐項地區資格或固定每日額度。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "操控；晶片；Apple Intelligence 與 Siri AI；#footnote-1；#footnote-2",
      "context": "Apple Watch Ultra 4 的 Siri AI 首先以英文 Beta 推出，須使用已啟用 Apple Intelligence 的裝置；語音智慧列有聲音辨識與 Shazam。"
    },
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "#footnote-1",
      "context": "Siri 與裝置語言均須為支援語言；Siri AI Beta 隨 watchOS 27 推出且初期英文，原文僅例舉 Siri AI 的伺服器使用限制，不引入手機頁的其他功能例子。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S05-EXPANDED",
      "PAGE-S05-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-144

```json
{
  "id": "KB-144",
  "source": "[S05]",
  "statement_zh": "Apple Watch Ultra 4 的經期追蹤不應作為避孕或診斷用途；心律不整通知不適用於未滿 22 歲或曾診斷為心房顫動者。",
  "subject": "Apple Watch Ultra 4",
  "topic": "Apple Watch Ultra 4",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "週期異常通知僅依據使用者記錄的週期資料；包含更年期前期的通知適用於 40 歲及以上，並非取代診斷、監測或治療。",
    "用藥功能不能替代專業醫療判斷。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "健康與保健；#footnote-7；#footnote-8；#footnote-9",
      "context": "Apple Watch Ultra 4 的經期追蹤不應作為避孕或診斷用途；心律不整通知不適用於未滿 22 歲或曾診斷為心房顫動者。"
    },
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "#footnote-8",
      "context": "週期異常通知的資料前提是使用者記錄的週期記錄；另保留更年期前期通知的 40 歲及以上、非診斷監測治療與不應避孕限制。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S05-EXPANDED",
      "PAGE-S05-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-135

```json
{
  "id": "KB-135",
  "source": "[S04]",
  "statement_zh": "Apple Watch Series 12 顯示器列廣視角 OLED、LTPO3、1Hz 更新頻率、2000 尼特峰值亮度及最低 1 尼特。",
  "subject": "Apple Watch Series 12",
  "topic": "Apple Watch Series 12",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "為官方規格，未進行亮度或顯示實測。"
  ],
  "structured_values": [
    {
      "name": "峰值亮度",
      "state": "known",
      "value": 2000,
      "unit": "尼特"
    },
    {
      "name": "最低亮度",
      "state": "known",
      "value": 1,
      "unit": "尼特"
    },
    {
      "name": "更新頻率",
      "state": "known",
      "value": 1,
      "unit": "Hz"
    }
  ],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "顯示器",
      "context": "Apple Watch Series 12 顯示器列廣視角 OLED、LTPO3、1Hz 更新頻率、2000 尼特峰值亮度及最低 1 尼特。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S04-EXPANDED"
    ]
  }
}
```

### KB-136

```json
{
  "id": "KB-136",
  "source": "[S04]",
  "statement_zh": "Apple 列示 Apple Watch Series 12 正常使用最長 24 小時、低耗電模式 38 小時、室外體能訓練 10 小時。",
  "subject": "Apple Watch Series 12",
  "topic": "Apple Watch Series 12",
  "claim_type": "performance-claim",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "Apple 於 2026 年 7、8 月以預量產錶款與測試版軟體測試；正常模式含 300 次看時間、90 次通知、15 分鐘 app、60 分鐘運動播音樂及 6 小時睡眠。",
    "GPS 款全程藍牙連 iPhone；行動網路款正常測試含 4 小時行動網路、20 小時藍牙。低耗電測試採不同活動次數與連線時數。",
    "室外訓練以啟用心率且不連 iPhone 的室外跑步測試；實際結果依使用、配置、網路、訊號而異。"
  ],
  "structured_values": [
    {
      "name": "正常使用最長",
      "state": "known",
      "value": 24,
      "unit": "小時"
    },
    {
      "name": "低耗電最長",
      "state": "known",
      "value": 38,
      "unit": "小時"
    },
    {
      "name": "室外訓練最長",
      "state": "known",
      "value": 10,
      "unit": "小時"
    }
  ],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "電源與電池使用時間；#footnote-11；#footnote-12",
      "context": "Apple 列示 Apple Watch Series 12 正常使用最長 24 小時、低耗電模式 38 小時、室外體能訓練 10 小時。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S04-EXPANDED"
    ]
  }
}
```

### KB-137

```json
{
  "id": "KB-137",
  "source": "[S04]",
  "statement_zh": "Apple Watch Series 12 防水 50 公尺等級可用於淺水游泳及深度達 6 公尺的浮潛，不該用於水肺潛水、滑水或其他高速水上運動；另列 IP6X 防塵。",
  "subject": "Apple Watch Series 12",
  "topic": "Apple Watch Series 12",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "防水非永久狀態，可能隨時間下降；等級數字不是可用潛水深度。"
  ],
  "structured_values": [
    {
      "name": "防水等級",
      "state": "known",
      "value": 50,
      "unit": "公尺"
    },
    {
      "name": "浮潛深度上限",
      "state": "known",
      "value": 6,
      "unit": "公尺"
    },
    {
      "name": "防塵等級",
      "state": "known",
      "value": "IP6X",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "經久耐用；#footnote-18；#footnote-19",
      "context": "Apple Watch Series 12 防水 50 公尺等級可用於淺水游泳及深度達 6 公尺的浮潛，不該用於水肺潛水、滑水或其他高速水上運動；另列 IP6X 防塵。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S04-EXPANDED"
    ]
  }
}
```

### KB-138

```json
{
  "id": "KB-138",
  "source": "[S04]",
  "statement_zh": "Apple Watch Series 12 列 L1 GPS、Wi-Fi 4（2.4GHz／5GHz）、藍牙 5.3 與第 2 代超寬頻晶片；LTE 僅在指定型號列示。",
  "subject": "Apple Watch Series 12",
  "topic": "Apple Watch Series 12",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "超寬頻供應視地區；LTE 須方案與電信支援，漫遊視業者；親子設定並非所有功能都提供。",
    "SOS 需手錶行動連線、透過網際網路的 Wi-Fi 通話或附近 iPhone。部分行動網路可能拒接尚未啟用、不相容或未設定於該網路、未設定行動服務，或網路不支援 IMS 緊急服務的手錶來電。"
  ],
  "structured_values": [
    {
      "name": "GPS",
      "state": "known",
      "value": "L1 GPS",
      "unit": null
    },
    {
      "name": "LTE型號",
      "state": "known",
      "value": "A3582、A3587",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "連接能力；安全功能；#footnote-16；#footnote-20；#footnote-22；#footnote-23；#footnote-24",
      "context": "Apple Watch Series 12 列 L1 GPS、Wi-Fi 4（2.4GHz／5GHz）、藍牙 5.3 與第 2 代超寬頻晶片；LTE 僅在指定型號列示。"
    },
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "#footnote-16",
      "context": "SOS 註腳列所需連線及可能拒絕緊急電話的四種裝置或網路狀態；未保證所有事故偵測或所有求救均接通。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S04-EXPANDED",
      "PAGE-S04-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-139

```json
{
  "id": "KB-139",
  "source": "[S04]",
  "statement_zh": "Apple Watch Series 12 可快速充電，Apple 列充電約 30 分鐘最高達 80%。",
  "subject": "Apple Watch Series 12",
  "topic": "Apple Watch Series 12",
  "claim_type": "performance-claim",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "Apple 於 2026 年 7、8 月以預量產錶款、測試版軟體、A3277 磁性快速充電線與 A2305 20W 轉接器測試，從耗盡電力至啟動顯示 Apple 標誌起計時。",
    "結果依轉接器、地區、設定、初始電量、使用及環境而異。"
  ],
  "structured_values": [
    {
      "name": "達80%約需",
      "state": "known",
      "value": 30,
      "unit": "分鐘"
    }
  ],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "電源與電池使用時間；#footnote-13",
      "context": "Apple Watch Series 12 可快速充電，Apple 列充電約 30 分鐘最高達 80%。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S04-EXPANDED"
    ]
  }
}
```

### KB-145

```json
{
  "id": "KB-145",
  "source": "[S05]",
  "statement_zh": "Apple Watch Ultra 4 列精準雙頻 GPS、Wi-Fi 4、藍牙 5.3 與第 2 代超寬頻晶片；配備可自訂動作按鈕、三麥克風陣列、雙揚聲器與警笛。",
  "subject": "Apple Watch Ultra 4",
  "topic": "Apple Watch Ultra 4",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "超寬頻供應視地區，行動服務須方案與網路支援；此頁沒有提供與 Apple Watch Series 12 的定位精度實測比較。",
    "型號 A3579 列支援 Apple Watch 親子設定與國際漫遊；親子設定不提供所有功能。行動服務須無線網路服務方案與適用電信業者，漫遊覆蓋依電信業者而定；固定快照未列逐項缺少的功能或費率。"
  ],
  "structured_values": [
    {
      "name": "定位",
      "state": "known",
      "value": "精準雙頻 GPS",
      "unit": null
    },
    {
      "name": "麥克風",
      "state": "known",
      "value": 3,
      "unit": "個"
    },
    {
      "name": "揚聲器",
      "state": "known",
      "value": 2,
      "unit": "個"
    }
  ],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "連接能力；操控；音訊；#footnote-21；#footnote-23",
      "context": "Apple Watch Ultra 4 列精準雙頻 GPS、Wi-Fi 4、藍牙 5.3 與第 2 代超寬頻晶片；配備可自訂動作按鈕、三麥克風陣列、雙揚聲器與警笛。"
    },
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "連接能力；#footnote-23；#footnote-24；#footnote-25",
      "context": "A3579 群組列親子設定、LTE、國際漫遊；註腳分別限制方案／適用電信業者、非所有功能與依業者而異的漫遊覆蓋。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S05-EXPANDED",
      "PAGE-S05-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-146

```json
{
  "id": "KB-146",
  "source": "[S05]",
  "statement_zh": "Apple 列示 Apple Watch Ultra 4 正常使用最長 50 小時、低耗電模式 84 小時；室外體能訓練 18 小時、長時間模式 25 小時、長時間上限模式 45 小時。",
  "subject": "Apple Watch Ultra 4",
  "topic": "Apple Watch Ultra 4",
  "claim_type": "performance-claim",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "長時間模式會開低耗電，跑姿測量指標無法使用；上限模式另關閉提示與分段，某些測量指標無法使用。",
    "Apple 於 2026 年 7、8 月以預量產錶、測試版軟體測試；正常模式含 630 次看時間、190 通知、30 分鐘 app、兩次 60 分鐘運動播音樂、12 小時睡眠，以及 10 小時行動／40 小時藍牙連線。低耗電採另一組活動與連線配置。",
    "室外訓練以開啟心率、不連 iPhone 的室外跑步測試；結果依使用、配置、網路與訊號等而異。"
  ],
  "structured_values": [
    {
      "name": "正常使用最長",
      "state": "known",
      "value": 50,
      "unit": "小時"
    },
    {
      "name": "低耗電最長",
      "state": "known",
      "value": 84,
      "unit": "小時"
    },
    {
      "name": "室外訓練最長",
      "state": "known",
      "value": 18,
      "unit": "小時"
    },
    {
      "name": "長時間模式最長",
      "state": "known",
      "value": 25,
      "unit": "小時"
    },
    {
      "name": "長時間上限模式最長",
      "state": "known",
      "value": 45,
      "unit": "小時"
    }
  ],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "電源與電池使用時間；#footnote-11；#footnote-12",
      "context": "Apple 列示 Apple Watch Ultra 4 正常使用最長 50 小時、低耗電模式 84 小時；室外體能訓練 18 小時、長時間模式 25 小時、長時間上限模式 45 小時。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S05-EXPANDED"
    ]
  }
}
```

### KB-147

```json
{
  "id": "KB-147",
  "source": "[S05]",
  "statement_zh": "Apple Watch Ultra 4 防水 100 公尺等級與休閒水肺潛水深度上限 40 公尺分開列示；潛水須搭配相容第三方 app，Oceanic+ 須訂閱。",
  "subject": "Apple Watch Ultra 4",
  "topic": "Apple Watch Ultra 4",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "不該用於深度超過 40 公尺的活動；防水非永久狀態。",
    "官方註腳要求遵守潛水守則、與潛伴同行並攜帶備用裝置；不是本專案的潛水安全測試。"
  ],
  "structured_values": [
    {
      "name": "防水等級",
      "state": "known",
      "value": 100,
      "unit": "公尺"
    },
    {
      "name": "休閒水肺潛水上限",
      "state": "known",
      "value": 40,
      "unit": "公尺"
    }
  ],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "體能訓練與活動記錄／潛水；經久耐用；#footnote-16；#footnote-19",
      "context": "Apple Watch Ultra 4 防水 100 公尺等級與休閒水肺潛水深度上限 40 公尺分開列示；潛水須搭配相容第三方 app，Oceanic+ 須訂閱。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S05-EXPANDED"
    ]
  }
}
```

### KB-148

```json
{
  "id": "KB-148",
  "source": "[S05]",
  "statement_zh": "Apple Watch Ultra 4 厚度為 12 公釐，原色重量 63.0 公克、黑色 63.1 公克；腕上作業溫度與一般作業溫度分別列示。",
  "subject": "Apple Watch Ultra 4",
  "topic": "Apple Watch Ultra 4",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "不同操作情境不能共用同一溫度範圍；潛水作業另列 0 至 40°C。"
  ],
  "structured_values": [
    {
      "name": "厚度",
      "state": "known",
      "value": 12,
      "unit": "公釐"
    },
    {
      "name": "原色重量",
      "state": "known",
      "value": 63,
      "unit": "公克"
    },
    {
      "name": "黑色重量",
      "state": "known",
      "value": 63.1,
      "unit": "公克"
    },
    {
      "name": "腕上作業溫度",
      "state": "known",
      "value": "−20 至 55",
      "unit": "°C"
    },
    {
      "name": "一般作業溫度",
      "state": "known",
      "value": "0 至 35",
      "unit": "°C"
    }
  ],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "尺寸與重量；環境需求",
      "context": "Apple Watch Ultra 4 厚度為 12 公釐，原色重量 63.0 公克、黑色 63.1 公克；腕上作業溫度與一般作業溫度分別列示。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S05-EXPANDED"
    ]
  }
}
```

### KB-149

```json
{
  "id": "KB-149",
  "source": "[S05]",
  "statement_zh": "Apple Watch Ultra 4 支援快速充電，Apple 列充電約 45 分鐘最高達 80%；SOS 仍需要可用連線條件。",
  "subject": "Apple Watch Ultra 4",
  "topic": "Apple Watch Ultra 4",
  "claim_type": "performance-claim",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "Apple 於 2026 年 7、8 月以預量產錶、測試版軟體、A3277 磁性快速充電線與 A2305 20W 轉接器測試；實際充電依電源、地區、設定、電量、使用與環境而異。",
    "SOS 需手錶行動連線、透過網際網路的 Wi-Fi 通話或附近 iPhone。部分行動網路可能拒接尚未啟用、不相容或未設定於該網路、未設定行動服務，或網路不支援 IMS 緊急服務的手錶來電。"
  ],
  "structured_values": [
    {
      "name": "達80%約需",
      "state": "known",
      "value": 45,
      "unit": "分鐘"
    }
  ],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "電源與電池使用時間；安全功能；#footnote-13；#footnote-17",
      "context": "Apple Watch Ultra 4 支援快速充電，Apple 列充電約 45 分鐘最高達 80%；SOS 仍需要可用連線條件。"
    },
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "#footnote-17",
      "context": "SOS 註腳列所需連線及可能拒絕緊急電話的四種裝置或網路狀態；未保證所有事故偵測或所有求救均接通。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S05-EXPANDED",
      "PAGE-S05-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-150

```json
{
  "id": "KB-150",
  "source": "[S02]",
  "statement_zh": "iPhone 18 Pro 與 iPhone 18 Pro Max列 Face ID、光學雷達掃描儀、氣壓計、陀螺儀、加速度計及環境光度感測器；輔助使用包含旁白、眼球追蹤、個人聲音與即時字幕。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "規格中的功能清單不證明第三方 App 能取得每一種內部感測資料，也不是所有語言與地區可用性的逐項確認。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "Face ID；感測器；輔助使用",
      "context": "iPhone 18 Pro 與 iPhone 18 Pro Max列 Face ID、光學雷達掃描儀、氣壓計、陀螺儀、加速度計及環境光度感測器；輔助使用包含旁白、眼球追蹤、個人聲音與即時字幕。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S02-EXPANDED"
    ]
  }
}
```

### KB-151

```json
{
  "id": "KB-151",
  "source": "[S02]",
  "statement_zh": "iPhone 18 Pro 與 iPhone 18 Pro Max IP68 是受控實驗室中最深 6 公尺、最長 30 分鐘的防潑抗水防塵等級。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "防護非永久並可能因日常耗損下降，不可為潮濕 iPhone 充電；液體損壞不在保固範圍內。"
  ],
  "structured_values": [
    {
      "name": "等級",
      "state": "known",
      "value": "IP68",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "防潑、抗水與防塵；#footnote-4",
      "context": "iPhone 18 Pro 與 iPhone 18 Pro Max IP68 是受控實驗室中最深 6 公尺、最長 30 分鐘的防潑抗水防塵等級。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S02-EXPANDED"
    ]
  }
}
```

### KB-152

```json
{
  "id": "KB-152",
  "source": "[S02]",
  "statement_zh": "iPhone 18 Pro 與 iPhone 18 Pro Max顯示器共用 ProMotion 最高 120Hz、1000 尼特標準最大亮度、1600 尼特 HDR 峰值及 3000 尼特室外峰值。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "不同亮度情境不是同一固定輸出；為 Apple 規格而非實測。"
  ],
  "structured_values": [
    {
      "name": "自適應更新率上限",
      "state": "known",
      "value": 120,
      "unit": "Hz"
    },
    {
      "name": "標準最大亮度",
      "state": "known",
      "value": 1000,
      "unit": "尼特"
    },
    {
      "name": "HDR峰值",
      "state": "known",
      "value": 1600,
      "unit": "尼特"
    },
    {
      "name": "室外峰值",
      "state": "known",
      "value": 3000,
      "unit": "尼特"
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "顯示器",
      "context": "iPhone 18 Pro 與 iPhone 18 Pro Max顯示器共用 ProMotion 最高 120Hz、1000 尼特標準最大亮度、1600 尼特 HDR 峰值及 3000 尼特室外峰值。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S02-EXPANDED"
    ]
  }
}
```

### KB-160

```json
{
  "id": "KB-160",
  "source": "[S03]",
  "statement_zh": "iPhone Duo 容量列 256GB、512GB、1TB、2TB；重量 254 公克，打開厚 5.2 公釐、闔起厚 11.3 公釐。",
  "subject": "iPhone Duo",
  "topic": "iPhone Duo",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "容量為標稱而非可用空間；尺寸重量隨配置及製程不同而異。",
    "標準配置約佔 12GB 至 24GB，包含 iOS 27、最新功能及可刪除的 Apple app；Apple Intelligence 裝置端模型約佔 7GB。",
    "Apple Intelligence 關閉時可刪除其裝置端模型，重新開啟會重新下載；約 7GB 是此快照列示的模型空間估計，不是所有 AI 模型的固定總容量或持續連網要求。"
  ],
  "structured_values": [
    {
      "name": "容量選項",
      "state": "known",
      "value": "256GB、512GB、1TB、2TB",
      "unit": null
    },
    {
      "name": "重量",
      "state": "known",
      "value": 254,
      "unit": "公克"
    },
    {
      "name": "打開厚度",
      "state": "known",
      "value": 5.2,
      "unit": "公釐"
    },
    {
      "name": "闔起厚度",
      "state": "known",
      "value": 11.3,
      "unit": "公釐"
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "容量；尺寸與重量；#footnote-2；#footnote-3",
      "context": "iPhone Duo 容量列 256GB、512GB、1TB、2TB；重量 254 公克，打開厚 5.2 公釐、闔起厚 11.3 公釐。"
    },
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "#footnote-2",
      "context": "標準配置約 12GB 至 24GB；Apple Intelligence 裝置端模型約 7GB，關閉時可刪除、開啟時重新下載；可用空間隨軟體、設定、機型而異。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S03-EXPANDED",
      "PAGE-S03-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-161

```json
{
  "id": "KB-161",
  "source": "[S03]",
  "statement_zh": "iPhone Duo 內螢幕列 1878 × 2670 像素、奈米紋理表面；外螢幕列 1398 × 2034 像素，兩者均列最高 120Hz ProMotion。",
  "subject": "iPhone Duo",
  "topic": "iPhone Duo",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "內螢幕的奈米紋理表面不能套到外螢幕；標稱尺寸、矩形量測與實際可視區分開。"
  ],
  "structured_values": [
    {
      "name": "內螢幕解析度",
      "state": "known",
      "value": "1878 × 2670",
      "unit": "像素"
    },
    {
      "name": "外螢幕解析度",
      "state": "known",
      "value": "1398 × 2034",
      "unit": "像素"
    },
    {
      "name": "自適應更新率上限",
      "state": "known",
      "value": 120,
      "unit": "Hz"
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "顯示器",
      "context": "iPhone Duo 內螢幕列 1878 × 2670 像素、奈米紋理表面；外螢幕列 1398 × 2034 像素，兩者均列最高 120Hz ProMotion。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S03-EXPANDED"
    ]
  }
}
```

### KB-162

```json
{
  "id": "KB-162",
  "source": "[S03]",
  "statement_zh": "iPhone Duo 搭載 A20 Pro，列 6 核心 CPU、7 核心 GPU、雙 16 核心神經網路引擎與硬體加速光線追蹤。",
  "subject": "iPhone Duo",
  "topic": "iPhone Duo",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "相同晶片名稱不能推論與 iPhone 18 Pro 與 iPhone 18 Pro Max的持續效能或散熱表現相同，尚無本專案實測。"
  ],
  "structured_values": [
    {
      "name": "晶片",
      "state": "known",
      "value": "A20 Pro",
      "unit": null
    },
    {
      "name": "CPU",
      "state": "known",
      "value": 6,
      "unit": "核心"
    },
    {
      "name": "GPU",
      "state": "known",
      "value": 7,
      "unit": "核心"
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "晶片",
      "context": "iPhone Duo 搭載 A20 Pro，列 6 核心 CPU、7 核心 GPU、雙 16 核心神經網路引擎與硬體加速光線追蹤。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S03-EXPANDED"
    ]
  }
}
```

### KB-163

```json
{
  "id": "KB-163",
  "source": "[S03]",
  "statement_zh": "iPhone Duo 後置為 4800 萬像素融合主相機及超廣角，主相機光圈 ƒ/1.6，另列光學品質 2 倍望遠與 iPhone Duo 雙面預覽。",
  "subject": "iPhone Duo",
  "topic": "iPhone Duo",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "光學品質 2 倍望遠列為 1200 萬像素；不等於 iPhone 18 Pro 與 iPhone 18 Pro Max的獨立望遠配置。"
  ],
  "structured_values": [
    {
      "name": "後置相機",
      "state": "known",
      "value": "主相機、超廣角",
      "unit": null
    },
    {
      "name": "主相機光圈",
      "state": "known",
      "value": "ƒ/1.6",
      "unit": null
    },
    {
      "name": "光學品質望遠",
      "state": "known",
      "value": 2,
      "unit": "倍"
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "相機",
      "context": "iPhone Duo 後置為 4800 萬像素融合主相機及超廣角，主相機光圈 ƒ/1.6，另列光學品質 2 倍望遠與 iPhone Duo 雙面預覽。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S03-EXPANDED"
    ]
  }
}
```

### KB-164

```json
{
  "id": "KB-164",
  "source": "[S03]",
  "statement_zh": "iPhone Duo 外螢幕前置為 1200 萬像素 Center Stage 相機，可錄最高 4K 60 fps；內螢幕為螢幕下 FaceTime 相機，列 1080p 30 或 60 fps。",
  "subject": "iPhone Duo",
  "topic": "iPhone Duo",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "內外前置相機不可共用同一錄影上限。"
  ],
  "structured_values": [
    {
      "name": "外螢幕前置錄影上限",
      "state": "known",
      "value": "4K 60 fps",
      "unit": null
    },
    {
      "name": "內螢幕前置錄影",
      "state": "known",
      "value": "1080p 30／60 fps",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "前置相機",
      "context": "iPhone Duo 外螢幕前置為 1200 萬像素 Center Stage 相機，可錄最高 4K 60 fps；內螢幕為螢幕下 FaceTime 相機，列 1080p 30 或 60 fps。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S03-EXPANDED"
    ]
  }
}
```

### KB-165

```json
{
  "id": "KB-165",
  "source": "[S03]",
  "statement_zh": "iPhone Duo 後置錄影列最高 4K 120 fps 杜比視界（融合主相機），格式列 HEVC 與 H.264，並列雙面預覽與雙向同拍。",
  "subject": "iPhone Duo",
  "topic": "iPhone Duo",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "本頁此列未列 ProRes，不能因此宣稱任何方式都不可能使用該格式；只能維持本規格範圍未確認。"
  ],
  "structured_values": [
    {
      "name": "主相機杜比視界上限",
      "state": "known",
      "value": "4K 120 fps",
      "unit": null
    },
    {
      "name": "錄製格式",
      "state": "known",
      "value": "HEVC、H.264",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "錄影",
      "context": "iPhone Duo 後置錄影列最高 4K 120 fps 杜比視界（融合主相機），格式列 HEVC 與 H.264，並列雙面預覽與雙向同拍。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S03-EXPANDED"
    ]
  }
}
```

### KB-166

```json
{
  "id": "KB-166",
  "source": "[S03]",
  "statement_zh": "Apple 列示 iPhone Duo 一般使用最長 24 小時；影片播放外螢幕最長 44 小時、內螢幕 31 小時，串流分別為 37 與 26 小時。",
  "subject": "iPhone Duo",
  "topic": "iPhone Duo",
  "claim_type": "performance-claim",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "一般使用為 2026 年 8 月預量產機與軟體，依使用者使用數值中位數，平均使用內外螢幕並連 LTE／5G 測試。",
    "影片播放／串流為 2026 年 7 月預量產測試，循環影片分別為 2 小時 23 分鐘及 3 小時 1 分鐘 HDR 內容；藍牙配耳機、Wi-Fi 連網，自動亮度與原彩關閉。",
    "均為 Apple 最長宣稱，實際依配置、使用、網路與訊號而異，不能以外螢幕數字當作整天混合使用時間。"
  ],
  "structured_values": [
    {
      "name": "一般使用",
      "state": "known",
      "value": 24,
      "unit": "小時"
    },
    {
      "name": "外螢幕影片",
      "state": "known",
      "value": 44,
      "unit": "小時"
    },
    {
      "name": "內螢幕影片",
      "state": "known",
      "value": 31,
      "unit": "小時"
    },
    {
      "name": "外螢幕串流",
      "state": "known",
      "value": 37,
      "unit": "小時"
    },
    {
      "name": "內螢幕串流",
      "state": "known",
      "value": 26,
      "unit": "小時"
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "電源與電池；#footnote-7；#footnote-8",
      "context": "Apple 列示 iPhone Duo 一般使用最長 24 小時；影片播放外螢幕最長 44 小時、內螢幕 31 小時，串流分別為 37 與 26 小時。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S03-EXPANDED"
    ]
  }
}
```

### KB-167

```json
{
  "id": "KB-167",
  "source": "[S03]",
  "statement_zh": "iPhone Duo 有線充電約 20 分鐘最高達 50%，須 60W 或更高功率的 USB PD 轉接器與 USB-C 線；MagSafe 約 30 分鐘最高達 50%，須 35W 或更高功率轉接器。",
  "subject": "iPhone Duo",
  "topic": "iPhone Duo",
  "claim_type": "performance-claim",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "有線約 20 分鐘最高達 50% 須 60W 或更高功率電源轉接器；註腳要求 60W 或更高功率的 USB-C 連接線與 USB PD 轉接器，不自行補入 iPhone 18 Pro 與 iPhone 18 Pro Max 規格頁的 AVS／USB PD 3.1 條件。",
    "MagSafe 約 30 分鐘最高達 50% 須 35W 或更高功率轉接器與 MagSafe 充電器；轉接器與 MagSafe 充電器皆另售。",
    "Apple 於 2026 年 7 月以預量產 iPhone Duo 與軟體、USB-C 線或 MagSafe A3502／A3503、A3351 40W 動態轉接器（最高輸出 60W）測試；機身為打開配置，從電力耗盡開始，並自啟動顯示 Apple 標誌起計時；實際依配件、設定、使用與環境而異。"
  ],
  "structured_values": [
    {
      "name": "有線達50%約需",
      "state": "known",
      "value": 20,
      "unit": "分鐘"
    },
    {
      "name": "MagSafe達50%約需",
      "state": "known",
      "value": 30,
      "unit": "分鐘"
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "電源與電池；#footnote-9",
      "context": "iPhone Duo 有線充電約 20 分鐘最高達 50%，須 60W 或更高功率的 USB PD 轉接器與 USB-C 線；MagSafe 約 30 分鐘最高達 50%，須 35W 或更高功率轉接器。"
    },
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "電源與電池；#footnote-9",
      "context": "主列分開寫有線 60W 或更高功率與 MagSafe 35W 或更高功率；註腳要求 USB PD、60W 線、打開配置及耗盡電量。沒有指明半開角度，不能換成桌立半開姿態。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S03-EXPANDED",
      "PAGE-S03-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-168

```json
{
  "id": "KB-168",
  "source": "[S03]",
  "statement_zh": "iPhone Duo 台灣規格列雙 eSIM，可同時啟用兩個、儲存八個或以上，不支援實體 SIM 卡。",
  "subject": "iPhone Duo",
  "topic": "iPhone Duo",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "須支援 eSIM 的電信業者與無線網路方案；不要套用 iPhone 18 Pro 台灣版的 nano-SIM 配置。"
  ],
  "structured_values": [
    {
      "name": "同時啟用eSIM",
      "state": "known",
      "value": 2,
      "unit": "個"
    },
    {
      "name": "可儲存eSIM",
      "state": "known",
      "value": "8 或以上",
      "unit": "個"
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "SIM 卡；#footnote-15",
      "context": "iPhone Duo 台灣規格列雙 eSIM，可同時啟用兩個、儲存八個或以上，不支援實體 SIM 卡。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S03-EXPANDED"
    ]
  }
}
```

### KB-169

```json
{
  "id": "KB-169",
  "source": "[S03]",
  "statement_zh": "iPhone Duo 列 Wi-Fi 7、藍牙 6、Thread、第 2 代超寬頻晶片、精準雙頻 GPS，以及 USB-C 的 DisplayPort 與最快 10Gb/s USB 3。",
  "subject": "iPhone Duo",
  "topic": "iPhone Duo",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "Wi-Fi 7 與超寬頻有地區限制，行動服務視方案與業者；USB 3 速率須 10Gb/s 連接線。"
  ],
  "structured_values": [
    {
      "name": "Wi-Fi",
      "state": "known",
      "value": "Wi-Fi 7",
      "unit": null
    },
    {
      "name": "藍牙",
      "state": "known",
      "value": "6",
      "unit": null
    },
    {
      "name": "USB速度上限",
      "state": "known",
      "value": 10,
      "unit": "Gb/s"
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "行動網路與無線技術；定位功能；充電與擴充；#footnote-11；#footnote-12；#footnote-13；#footnote-14",
      "context": "iPhone Duo 列 Wi-Fi 7、藍牙 6、Thread、第 2 代超寬頻晶片、精準雙頻 GPS，以及 USB-C 的 DisplayPort 與最快 10Gb/s USB 3。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S03-EXPANDED"
    ]
  }
}
```

### KB-170

```json
{
  "id": "KB-170",
  "source": "[S03]",
  "statement_zh": "iPhone Duo 列 iOS 27；Siri AI Beta 初期先支援英文，須啟用 Apple Intelligence；總語言清單含繁中並不代表每項功能都支援繁中。",
  "subject": "iPhone Duo",
  "topic": "iPhone Duo",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "preview",
  "qualifiers": [
    "Apple Intelligence 的語言前提同時涉及 Siri 與裝置語言：兩者均須設為來源列出的支援語言，其中包含繁體中文；這不是 Siri AI、即時翻譯或每項功能的逐項語言清單，也不另推定兩者必須設為相同語言。",
    "Siri AI Beta 隨 iOS 27 推出，須啟用 Apple Intelligence 並使用支援語言；初期英文不能由 Apple Intelligence 總語言清單改推為初期繁中。",
    "部分仰賴伺服器端模型的功能有每日使用限制；原文例子包含 Siri AI、智慧照片編輯工具、影像樂園及捷徑中的 AFM 3 雲端模型，不能說所有操作共用同一額度。額度依功能、需求複雜度、系統需求、系統政策及其他因素而異；未來可付費取得額外使用權限，並須遵守 Apple Intelligence 條款與約定。",
    "Siri 另有網際網路連線與語言／地區條件，行動數據服務可能須付費；此限制不能延伸成全部 Apple Intelligence 或裝置端模型都必須連網。",
    "部分功能、語言或裝置可能未在所有地區提供；固定快照沒有逐項完整資格、固定每日額度或加購費率，不把 Beta 及未來付費寫成正式全面提供或現在必須訂閱。",
    "系統需求列部分功能需要 Apple 帳號及網際網路連線，建議無線寬頻網路且可能須付費；不能推成所有離線硬體功能或拍照動作都須帳號。"
  ],
  "structured_values": [
    {
      "name": "作業系統",
      "state": "known",
      "value": "iOS 27",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "作業系統；Apple Intelligence 與 Siri AI；#footnote-6",
      "context": "iPhone Duo 列 iOS 27；Siri AI Beta 初期先支援英文，須啟用 Apple Intelligence；總語言清單含繁中並不代表每項功能都支援繁中。"
    },
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "#footnote-6",
      "context": "Apple Intelligence 要求 Siri 與裝置語言均列為支援語言；Siri AI 初期英文 Beta 與部分雲端功能每日額度、未來付費規則分別列示。"
    },
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "Siri；#footnote-18",
      "context": "Siri 可能受語言及地區限制，須網際網路，行動數據可能須付費。"
    },
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "系統需求；#footnote-19",
      "context": "系統需求主列為 Apple 帳號（部分功能需要）、網際網路連線；註腳 19 建議無線寬頻並提示可能費用。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。 本次再直接核對固定 HTML 主列與註腳，修正或補足必要條件；既有證據定位保留。",
    "coverage_ids": [
      "PAGE-S03-EXPANDED",
      "PAGE-S03-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-171

```json
{
  "id": "KB-171",
  "source": "[S03]",
  "statement_zh": "iPhone Duo 的 IP68 防護測試為最深 6 公尺、最長 30 分鐘，防護非永久；輔助使用清單含旁白、眼球追蹤、語音控制、個人聲音與即時字幕。",
  "subject": "iPhone Duo",
  "topic": "iPhone Duo",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "日常耗損可能降低防護；不可為潮濕手機充電，液體損壞不在保固範圍。",
    "輔助使用清單不等於所有語言與地區逐項可用性的確認。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "防潑、抗水與防塵；輔助使用；#footnote-5",
      "context": "iPhone Duo 的 IP68 防護測試為最深 6 公尺、最長 30 分鐘，防護非永久；輔助使用清單含旁白、眼球追蹤、語音控制、個人聲音與即時字幕。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:44:14Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S03-EXPANDED"
    ]
  }
}
```

### KB-200

```json
{
  "id": "KB-200",
  "source": "[S10]",
  "statement_zh": "AVFoundation 的拍攝架構由 session、input 與 output 組成：session 連接輸入與輸出；相機或麥克風可作為媒體輸入，輸出可產生影片檔或供即時處理的像素資料。",
  "subject": "AVFoundation 拍攝架構",
  "topic": "相機與影音開發",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以已核對的相機規格作研究入口；這些文件未確認 iPhone 18 Pro 可變光圈能由第三方直接控制，也未逐一確認新品錄影格式。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S10",
      "artifact_revision": "sha256:078c8289c67c6a8c500ab107c5d04376d805abc40d1356660b31372a0513ba70",
      "modality": "webpage",
      "locator": "Capture setup / Overview",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S10"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-023"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-201

```json
{
  "id": "KB-201",
  "source": "[S15]",
  "statement_zh": "建立拍攝 session 前，應先用 AVCaptureDevice.authorizationStatus(for:) 檢查權限；尚未決定時，再於適合的使用時機呼叫 requestAccess(for:completionHandler:) 讓系統詢問。",
  "subject": "相機與麥克風授權",
  "topic": "相機與影音開發",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以已核對的相機規格作研究入口；這些文件未確認 iPhone 18 Pro 可變光圈能由第三方直接控制，也未逐一確認新品錄影格式。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S15",
      "artifact_revision": "sha256:aaf7f86bdf4c3e3ee828db70df8724a30b8138aa1563c207314fb12e03233e50",
      "modality": "webpage",
      "locator": "Requesting authorization to capture and save media / Verify and request authorization for capture",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S15"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-023"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-202

```json
{
  "id": "KB-202",
  "source": "[S15]",
  "statement_zh": "使用相機或麥克風的 App，需在 Info.plist 分別提供 NSCameraUsageDescription 或 NSMicrophoneUsageDescription，向使用者說明存取原因。",
  "subject": "相機與麥克風權限說明",
  "topic": "相機與影音開發",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以已核對的相機規格作研究入口；這些文件未確認 iPhone 18 Pro 可變光圈能由第三方直接控制，也未逐一確認新品錄影格式。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S15",
      "artifact_revision": "sha256:aaf7f86bdf4c3e3ee828db70df8724a30b8138aa1563c207314fb12e03233e50",
      "modality": "webpage",
      "locator": "Requesting authorization to capture and save media / Configure access alerts",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S15"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-023"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-203

```json
{
  "id": "KB-203",
  "source": "[S16]",
  "statement_zh": "AVCaptureDevice.formats 列出該拍攝裝置支援的格式；需要超出 session preset 的設定時，可從這個陣列選擇格式設定 activeFormat。",
  "subject": "AVCaptureDevice.formats",
  "topic": "相機與影音開發",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以已核對的相機規格作研究入口；這些文件未確認 iPhone 18 Pro 可變光圈能由第三方直接控制，也未逐一確認新品錄影格式。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S16",
      "artifact_revision": "sha256:cb88996d698110de378343704a05fd931f3c0fcde90ea87afd7d8ae22e73d736",
      "modality": "webpage",
      "locator": "AVCaptureDevice.formats / Discussion",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S16"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-023"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "7.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-204

```json
{
  "id": "KB-204",
  "source": "[S11]",
  "statement_zh": "SwiftUI 的 ViewThatFits 會依提供順序評估子視圖，選用第一個理想尺寸能放進建議空間的視圖；預設同時檢查水平與垂直方向，也可限定要檢查的軸。",
  "subject": "SwiftUI.ViewThatFits",
  "topic": "iPhone Duo 版面適應",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以 iPhone Duo 內外螢幕尺寸作版面研究入口；文件描述依可用空間選擇視圖，未確認摺疊狀態事件、內外螢幕切換或特定新品支援。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S11",
      "artifact_revision": "sha256:e30c105f8337bdad1dd53ab96cd8ca3bd86889de528c9235c94136babf702048",
      "modality": "webpage",
      "locator": "ViewThatFits / Overview",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S11"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-031",
      "KB-032"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "9.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-205

```json
{
  "id": "KB-205",
  "source": "[S12]",
  "statement_zh": "HealthKit 要求 App 在讀取或分享每種健康資料前，分別取得該資料類型的授權；不必一次請求所有類型，可到需要資料時再詢問。",
  "subject": "HealthKit 資料授權",
  "topic": "健康與運動開發",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以已核對的 Apple Watch 健康／運動功能作研究入口；Apple 自家 App 顯示的所有指標是否都有第三方讀取介面，仍未確認。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S12",
      "artifact_revision": "sha256:9fef3b2ede52ac415ee77e27c8ea5664cc8cac10de3952e2d28c1d3b45eef953",
      "modality": "webpage",
      "locator": "Authorizing access to health data / Overview",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S12"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-130",
      "KB-140"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-206

```json
{
  "id": "KB-206",
  "source": "[S12]",
  "statement_zh": "接入 HealthKit 前，App 需加入 HealthKit capability，提供讀取與寫入用途說明；呼叫其他 HealthKit 方法前，應先以 HKHealthStore.isHealthDataAvailable() 檢查目前裝置能否提供健康資料。",
  "subject": "HealthKit 接入前提",
  "topic": "健康與運動開發",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以已核對的 Apple Watch 健康／運動功能作研究入口；Apple 自家 App 顯示的所有指標是否都有第三方讀取介面，仍未確認。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S12",
      "artifact_revision": "sha256:9fef3b2ede52ac415ee77e27c8ea5664cc8cac10de3952e2d28c1d3b45eef953",
      "modality": "webpage",
      "locator": "Authorizing access to health data / Enable HealthKit",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S12"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-130",
      "KB-140"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-207

```json
{
  "id": "KB-207",
  "source": "[S12]",
  "statement_zh": "HealthKit 為保護隱私，不讓 App 直接區分某類資料的完整讀取授權與拒絕；使用者也可能只授權近期時間範圍，因此缺少較舊樣本不能直接推論資料不存在。",
  "subject": "HealthKit 讀取限制",
  "topic": "健康與運動開發",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以已核對的 Apple Watch 健康／運動功能作研究入口；Apple 自家 App 顯示的所有指標是否都有第三方讀取介面，仍未確認。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S12",
      "artifact_revision": "sha256:9fef3b2ede52ac415ee77e27c8ea5664cc8cac10de3952e2d28c1d3b45eef953",
      "modality": "webpage",
      "locator": "Authorizing access to health data / Respond to limited authorization",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S12"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-130",
      "KB-140"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-208

```json
{
  "id": "KB-208",
  "source": "[S13]",
  "statement_zh": "HKWorkoutSession 依指定活動調整 Apple Watch 感測器的運作；文件指出 workout session 會產生高頻率心率樣本，而室外與室內自行車活動取得的定位資料不同。",
  "subject": "HKWorkoutSession",
  "topic": "健康與運動開發",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以已核對的 Apple Watch 健康／運動功能作研究入口；Apple 自家 App 顯示的所有指標是否都有第三方讀取介面，仍未確認。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S13",
      "artifact_revision": "sha256:cbe1e95c3d58e2da90ff0be9da2e96f29a5097b40d0f42c16d4516aa3fda5177",
      "modality": "webpage",
      "locator": "HKWorkoutSession / Overview / activity and sensors",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S13"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-131",
      "KB-141"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "17.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "2.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-209

```json
{
  "id": "KB-209",
  "source": "[S13]",
  "statement_zh": "Apple Watch 同一時間只執行一個 workout session；若另一個體能訓練開始，原 session 的 delegate 會收到 errorAnotherWorkoutSessionStarted，原 session 隨之結束。",
  "subject": "HKWorkoutSession 工作階段限制",
  "topic": "健康與運動開發",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以已核對的 Apple Watch 健康／運動功能作研究入口；Apple 自家 App 顯示的所有指標是否都有第三方讀取介面，仍未確認。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S13",
      "artifact_revision": "sha256:cbe1e95c3d58e2da90ff0be9da2e96f29a5097b40d0f42c16d4516aa3fda5177",
      "modality": "webpage",
      "locator": "HKWorkoutSession / Overview / one workout session",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S13"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-131",
      "KB-141"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "17.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "2.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-210

```json
{
  "id": "KB-210",
  "source": "[S14]",
  "statement_zh": "AVAudioSession.currentRoute 提供目前音訊路由的輸入與輸出連接埠描述，可作為 App 檢視當下音訊傳送路徑的入口。",
  "subject": "AVAudioSession.currentRoute",
  "topic": "音訊與耳機整合",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以 AirPods 5 音訊與連線功能作研究入口；通用路由文件不證明第三方可控制 AirPods 5 降噪、翻譯或耳機手勢。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S14",
      "artifact_revision": "sha256:779d06c9dc76b7887e99321704edbdf263ea38c7fcc52b904e4f9677ce2d539f",
      "modality": "webpage",
      "locator": "AVAudioSession.currentRoute / abstract and Discussion",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S14"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-110",
      "KB-115"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "6.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "2.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-211

```json
{
  "id": "KB-211",
  "source": "[S17]",
  "statement_zh": "音訊輸入或輸出裝置加入或移除時，AVAudioSession 會重新路由並通知觀察者；App 可觀察 routeChangeNotification，透過通知原因與目前或先前路由辨識變更。",
  "subject": "音訊路由變更",
  "topic": "音訊與耳機整合",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以 AirPods 5 音訊與連線功能作研究入口；通用路由文件不證明第三方可控制 AirPods 5 降噪、翻譯或耳機手勢。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S17",
      "artifact_revision": "sha256:80ea3340f42b6db446b025c9eabaab09f4278d50f280a13a6fed323140c946cc",
      "modality": "webpage",
      "locator": "Responding to audio route changes / Observe route changes; Respond to route changes",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S17"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-110",
      "KB-115"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-212

```json
{
  "id": "KB-212",
  "source": "[S17]",
  "statement_zh": "Apple 的音訊路由指引要求尊重耳機斷線時的隱私預期並暫停播放；文件也說明 AVPlayer 在耳機移除時會自動暫停，介面可觀察其 rate 變化。",
  "subject": "耳機斷線與播放",
  "topic": "音訊與耳機整合",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以 AirPods 5 音訊與連線功能作研究入口；通用路由文件不證明第三方可控制 AirPods 5 降噪、翻譯或耳機手勢。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S17",
      "artifact_revision": "sha256:80ea3340f42b6db446b025c9eabaab09f4278d50f280a13a6fed323140c946cc",
      "modality": "webpage",
      "locator": "Responding to audio route changes / Overview",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S17"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-110",
      "KB-115"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-213

```json
{
  "id": "KB-213",
  "source": "[S19]",
  "statement_zh": "Foundation Models 的 SystemLanguageModel 是可執行文字生成任務的裝置端 Apple 模型；文件以 default 存取基礎版本，並說明模型會隨例行 OS 更新而調整。",
  "subject": "SystemLanguageModel",
  "topic": "Apple Intelligence 與 App 開發",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以 Apple Intelligence 規格作研究入口；此文件不等同 Siri AI 全部功能的公開 API，也不能單憑 SDK availability 保證台灣、語言與目前裝置可用。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S19",
      "artifact_revision": "sha256:1f0ea4d8552e47a2e713273637b0e4d29db9cb06dd1a1cb33786fd425bb0d23d",
      "modality": "webpage",
      "locator": "SystemLanguageModel / Overview",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S19"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "26.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-214

```json
{
  "id": "KB-214",
  "source": "[S19]",
  "statement_zh": "使用 SystemLanguageModel 前需先確認模型可用性；文件指出可用性取決於裝置與地區是否支援 Apple Intelligence，範例也分別處理裝置不符資格與模型尚未就緒的情況。",
  "subject": "Foundation Models 可用性",
  "topic": "Apple Intelligence 與 App 開發",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以 Apple Intelligence 規格作研究入口；此文件不等同 Siri AI 全部功能的公開 API，也不能單憑 SDK availability 保證台灣、語言與目前裝置可用。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S19",
      "artifact_revision": "sha256:1f0ea4d8552e47a2e713273637b0e4d29db9cb06dd1a1cb33786fd425bb0d23d",
      "modality": "webpage",
      "locator": "SystemLanguageModel / Overview / availability example",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S19"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "26.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-215

```json
{
  "id": "KB-215",
  "source": "[S20]",
  "statement_zh": "SystemLanguageModel.availability 是唯讀屬性，回傳 SystemLanguageModel.Availability，用來查詢語言模型的可用狀態。",
  "subject": "SystemLanguageModel.availability",
  "topic": "Apple Intelligence 與 App 開發",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以 Apple Intelligence 規格作研究入口；此文件不等同 Siri AI 全部功能的公開 API，也不能單憑 SDK availability 保證台灣、語言與目前裝置可用。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S20",
      "artifact_revision": "sha256:38806cc5171a4665517e32254a35bf0cf447cabd362e6b006be71d0855073e53",
      "modality": "webpage",
      "locator": "SystemLanguageModel.availability / declaration and abstract",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S20"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "26.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-216

```json
{
  "id": "KB-216",
  "source": "[S18]",
  "statement_zh": "NISession.deviceCapabilities 提供表示目前裝置支援哪些 Nearby Interaction 功能的能力物件；文件要求利用該物件的屬性判斷可用功能。",
  "subject": "NISession.deviceCapabilities",
  "topic": "無線與近距離互動",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以產品第2代超寬頻晶片規格作研究入口；未實機測試，不由晶片世代推定所有 Nearby Interaction 能力、距離範圍或配件相容性。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S18",
      "artifact_revision": "sha256:3834acce554a4688d26934214c6e4bcb57bb4d4c9667b5c4d5b6723e941dd9e8",
      "modality": "webpage",
      "locator": "NISession.deviceCapabilities / Discussion",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S18"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-125"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "9.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-217

```json
{
  "id": "KB-217",
  "source": "[S21]",
  "statement_zh": "NIDeviceCapability 以布林值表達互動 session 的功能支援；應在 runtime 檢查 NISession.deviceCapabilities，分別辨識精確距離與方向量測等能力。",
  "subject": "NIDeviceCapability",
  "topic": "無線與近距離互動",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。",
    "以產品第2代超寬頻晶片規格作研究入口；未實機測試，不由晶片世代推定所有 Nearby Interaction 能力、距離範圍或配件相容性。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S21",
      "artifact_revision": "sha256:fe5149ff1aa5fc9d750ed5f4a7681d6e78296c7d427e32034c29861ea946260d",
      "modality": "webpage",
      "locator": "NIDeviceCapability / Overview; Checking session features",
      "context": "已直接核對同源 DocC 所列章節及符號，轉述僅涵蓋該文件公開行為；不推論特定新品實機支援。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:45:36Z",
    "notes": "已回到官方 DocC 原文章節、reference symbol 與平台 metadata 核對；整合者再次核對來源版本與正式產品前提。沒有 SDK 編譯或實機測試。",
    "coverage_ids": [
      "PAGE-S21"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-125"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "9.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 僅取目前 DocC symbol 的 iOS/watchOS introducedAt；文章無平台 metadata 時留空，不能借其他 symbol 版本。API 可用版本不等於特定產品可用狀態。"
  }
}
```

### KB-153

```json
{
  "id": "KB-153",
  "source": "[S02]",
  "statement_zh": "iPhone 18 Pro 與 iPhone 18 Pro Max前置為 1800 萬像素 Center Stage 相機，列自動對焦、人物居中、最高 4K 60 fps 杜比視界錄影與外接儲存的 ProRes 4K 60 fps。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "前置 ProRes RAW 須相容 app；前置與後置最高模式不能混用。"
  ],
  "structured_values": [
    {
      "name": "前置像素",
      "state": "known",
      "value": 1800,
      "unit": "萬像素"
    },
    {
      "name": "前置杜比視界上限",
      "state": "known",
      "value": "4K 60 fps",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "前置相機；#footnote-6",
      "context": "iPhone 18 Pro 與 iPhone 18 Pro Max前置為 1800 萬像素 Center Stage 相機，列自動對焦、人物居中、最高 4K 60 fps 杜比視界錄影與外接儲存的 ProRes 4K 60 fps。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:53:53Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S02-EXPANDED"
    ]
  }
}
```

### KB-154

```json
{
  "id": "KB-154",
  "source": "[S02]",
  "statement_zh": "iPhone 18 Pro 與 iPhone 18 Pro Max列 SOS 緊急服務與車禍偵測；車禍偵測的求救電話須透過行動網路或 Wi-Fi 通話使用。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "功能清單不保證任何事故、環境或連線條件都會偵測成功並完成求救。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "安全功能；#footnote-11",
      "context": "iPhone 18 Pro 與 iPhone 18 Pro Max列 SOS 緊急服務與車禍偵測；車禍偵測的求救電話須透過行動網路或 Wi-Fi 通話使用。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:53:53Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S02-EXPANDED"
    ]
  }
}
```

### KB-155

```json
{
  "id": "KB-155",
  "source": "[S04]",
  "statement_zh": "手錶輔助使用清單包含旁白、文字大小、增加對比、輔助觸控、音訊逐字稿、即時語音、個人聲音、即時聆聽與聲音辨識。",
  "subject": "Apple Watch Series 12",
  "topic": "Apple Watch Series 12",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "此為該規格頁列示，不是本專案完整輔助科技測試或所有地區、語言的逐項可用確認。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "輔助使用",
      "context": "手錶輔助使用清單包含旁白、文字大小、增加對比、輔助觸控、音訊逐字稿、即時語音、個人聲音、即時聆聽與聲音辨識。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:53:53Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S04-EXPANDED"
    ]
  }
}
```

### KB-156

```json
{
  "id": "KB-156",
  "source": "[S05]",
  "statement_zh": "手錶輔助使用清單包含旁白、文字大小、增加對比、輔助觸控、音訊逐字稿、即時語音、個人聲音、即時聆聽與聲音辨識。",
  "subject": "Apple Watch Ultra 4",
  "topic": "Apple Watch Ultra 4",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "此為該規格頁列示，不是本專案完整輔助科技測試或所有地區、語言的逐項可用確認。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "輔助使用",
      "context": "手錶輔助使用清單包含旁白、文字大小、增加對比、輔助觸控、音訊逐字稿、即時語音、個人聲音、即時聆聽與聲音辨識。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:53:53Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S05-EXPANDED"
    ]
  }
}
```

### KB-157

```json
{
  "id": "KB-157",
  "source": "[S04]",
  "statement_zh": "手錶規格列 64GB 容量與 4 核心神經網路引擎，操控列雙指互點一下、雙指互點兩下及翻轉手腕。",
  "subject": "Apple Watch Series 12",
  "topic": "Apple Watch Series 12",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "手勢功能清單不自動證明第三方 App 可攔截所有手勢。"
  ],
  "structured_values": [
    {
      "name": "容量",
      "state": "known",
      "value": 64,
      "unit": "GB"
    },
    {
      "name": "神經網路引擎",
      "state": "known",
      "value": 4,
      "unit": "核心"
    }
  ],
  "evidence": [
    {
      "source_id": "S04",
      "artifact_revision": "sha256:c1548983349a5f67ace1c5f52cd85a39b0d95984a77f1c6b3c490d6b6cd7e4e8",
      "modality": "webpage",
      "locator": "晶片；操控",
      "context": "手錶規格列 64GB 容量與 4 核心神經網路引擎，操控列雙指互點一下、雙指互點兩下及翻轉手腕。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:53:53Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S04-EXPANDED"
    ]
  }
}
```

### KB-158

```json
{
  "id": "KB-158",
  "source": "[S05]",
  "statement_zh": "手錶規格列 64GB 容量與 4 核心神經網路引擎，操控列雙指互點一下、雙指互點兩下及翻轉手腕。",
  "subject": "Apple Watch Ultra 4",
  "topic": "Apple Watch Ultra 4",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "手勢功能清單不自動證明第三方 App 可攔截所有手勢。"
  ],
  "structured_values": [
    {
      "name": "容量",
      "state": "known",
      "value": 64,
      "unit": "GB"
    },
    {
      "name": "神經網路引擎",
      "state": "known",
      "value": 4,
      "unit": "核心"
    }
  ],
  "evidence": [
    {
      "source_id": "S05",
      "artifact_revision": "sha256:2a6ad5d2b6e9cf8eb3f3a3e4f4815c959f3b3fa6b4f99edfbf095f02a5213467",
      "modality": "webpage",
      "locator": "晶片；操控",
      "context": "手錶規格列 64GB 容量與 4 核心神經網路引擎，操控列雙指互點一下、雙指互點兩下及翻轉手腕。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:53:53Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S05-EXPANDED"
    ]
  }
}
```

### KB-159

```json
{
  "id": "KB-159",
  "source": "[S02]",
  "statement_zh": "iPhone 18 Pro 與 iPhone 18 Pro Max的部分功能須 Apple 帳號與網際網路連線；包裝列 iPhone、1 公尺 USB-C 充電線與說明文件。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "建議無線寬頻網路，可能須付費；此清單未把快充轉接器列為隨附內容。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "系統需求；包裝盒內容；#footnote-21",
      "context": "iPhone 18 Pro 與 iPhone 18 Pro Max的部分功能須 Apple 帳號與網際網路連線；包裝列 iPhone、1 公尺 USB-C 充電線與說明文件。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:53:53Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S02-EXPANDED"
    ]
  }
}
```

### KB-172

```json
{
  "id": "KB-172",
  "source": "[S03]",
  "statement_zh": "iPhone Duo 列 Touch ID、氣壓計、陀螺儀、加速度計、接近與四個環境光度感測器；車禍偵測求救須行動網路或 Wi-Fi 通話。",
  "subject": "iPhone Duo",
  "topic": "iPhone Duo",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "不推定每個感測器都有第三方資料介面，或任何事故都會成功偵測。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "感測器；安全功能；#footnote-10",
      "context": "iPhone Duo 列 Touch ID、氣壓計、陀螺儀、加速度計、接近與四個環境光度感測器；車禍偵測求救須行動網路或 Wi-Fi 通話。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:53:53Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S03-EXPANDED"
    ]
  }
}
```

### KB-173

```json
{
  "id": "KB-173",
  "source": "[S03]",
  "statement_zh": "iPhone Duo 規格列 MagSafe 與 Qi2 無線充電最高 25W；包裝列 iPhone、1 公尺 USB-C 充電線與說明文件。",
  "subject": "iPhone Duo",
  "topic": "iPhone Duo",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "轉接器與 MagSafe 充電器另售；充電結果依配件、設定、使用與環境而異。"
  ],
  "structured_values": [
    {
      "name": "MagSafe或Qi2上限",
      "state": "known",
      "value": 25,
      "unit": "W"
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "MagSafe 與無線充電；包裝盒內容；#footnote-9",
      "context": "iPhone Duo 規格列 MagSafe 與 Qi2 無線充電最高 25W；包裝列 iPhone、1 公尺 USB-C 充電線與說明文件。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:53:53Z",
    "notes": "重新核對既有官方 HTML 快照、techspecs-row 型號欄位與所列註腳；雜湊與 manifest 相符。此為規格頁支持，不擴張 S01 影片覆蓋，也不代表獨立實測。",
    "coverage_ids": [
      "PAGE-S03-EXPANDED"
    ]
  }
}
```

### KB-180

```json
{
  "id": "KB-180",
  "source": "[S01]",
  "statement_zh": "Siri AI 語言卡將英文標為 Beta，法文、日文、韓文、葡萄牙文與西班牙文標為 10 月推出。",
  "subject": "Siri AI",
  "topic": "Apple Intelligence",
  "claim_type": "availability",
  "verification": "verified",
  "availability_status": "preview",
  "qualifiers": [
    "同一畫格註明 Siri AI 不會在歐盟與中國提供。",
    "這是固定影片畫面公告；未核對目前實際推出或各地可用性，不證明繁體中文可用，亦不自行推定年份。"
  ],
  "structured_values": [
    {
      "name": "初期語言",
      "state": "known",
      "value": "英文",
      "unit": null
    },
    {
      "name": "後續語言",
      "state": "known",
      "value": "法文、日文、韓文、葡萄牙文、西班牙文",
      "unit": null
    },
    {
      "name": "後續月份",
      "state": "known",
      "value": 10,
      "unit": "月"
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 947.0127333333334,
      "end_seconds": 947.0461,
      "modality": "on-screen",
      "context": "同一語言卡：English available in beta；French、Japanese、Korean、Portuguese、Spanish coming in October；右下可讀 Siri AI will not be available in the EU and China。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:58:01Z",
    "notes": "整合者實際查看同版本精確 PTS 單一畫格，核對可讀文字與註腳；不是連續觀看，未聽取原音。",
    "coverage_ids": [
      "VISUAL-EXP-947"
    ]
  }
}
```

### KB-181

```json
{
  "id": "KB-181",
  "source": "[S01]",
  "statement_zh": "影片的持續效能圖以 iPhone 18 Pro 為比較對象，在 iPhone 17 Pro 列旁標示「40% more」。",
  "subject": "iPhone 18 Pro 持續效能圖",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "performance-claim",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "僅核對圖中文字與比較型號；本畫格未列完整測試工作負載、設定及條件，不自行加上「最高」或一般效能保證。"
  ],
  "structured_values": [
    {
      "name": "比較圖標示",
      "state": "known",
      "value": "40% more",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 1211.0098,
      "end_seconds": 1211.0431666666666,
      "modality": "on-screen",
      "context": "比較圖動畫完成：Sustained performance；iPhone 18 Pro (A20 Pro)最長條；iPhone 17 Pro (A19 Pro)旁標示40% more；iPhone 16 Pro (A18 Pro)旁標示2x more。畫面未提供測試工作負載等前提。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-10T02:51:44.954342Z",
    "notes": "整合者實際查看同版本精確 PTS 單一畫格，核對可讀文字與註腳；不是連續觀看，未聽取原音。 2026-09-10 再直接回看相同畫格，修正證據說明中 A19 Pro 與 A18 Pro 被誤展開為手機名稱的文字及負載字形；主張、數值、模態與原精確定位不變。",
    "coverage_ids": [
      "VISUAL-EXP-1211"
    ]
  }
}
```

### KB-182

```json
{
  "id": "KB-182",
  "source": "[S01]",
  "statement_zh": "影片畫面將 iPhone 18 Pro 的影片播放時間標示為 36 小時。",
  "subject": "iPhone 18 Pro 影片播放卡",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "claim_type": "performance-claim",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "這個畫格沒有標示 eSIM-only、地區或完整測試條件；不得套到台灣 nano-SIM 型號，也不取代台灣規格的 34 小時。"
  ],
  "structured_values": [
    {
      "name": "畫面影片播放時間",
      "state": "known",
      "value": 36,
      "unit": "小時"
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 1263.0284333333334,
      "end_seconds": 1263.0618,
      "modality": "on-screen",
      "context": "畫面文字36 hours / Video playback on iPhone 18 Pro。未見eSIM-only或測試條件。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T19:58:01Z",
    "notes": "整合者實際查看同版本精確 PTS 單一畫格，核對可讀文字與註腳；不是連續觀看，未聽取原音。",
    "coverage_ids": [
      "VISUAL-EXP-1263"
    ]
  }
}
```

### KB-220

```json
{
  "id": "KB-220",
  "source": "[S01]",
  "statement_zh": "影片的 Siri 回答畫面整理母親想一起製作的派，並列來自郵件與訊息的線索卡。",
  "subject": "Siri AI：個人情境查找",
  "topic": "Siri AI：個人情境查找",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "只核對示例畫面；未驗證個人資料的實際存取權限、完整檢索範圍或正確率。"
  ],
  "structured_values": [
    {
      "name": "用途",
      "state": "known",
      "value": "整合郵件與訊息中的個人線索",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 723.0223,
      "end_seconds": 723.0556666666666,
      "modality": "on-screen",
      "context": "Siri AI：個人情境查找：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "逐一對照列出的原始畫格；主張限於可讀介面與示例。各步驟使用各自畫格，沒有把首尾跨度當作連續檢視或產品實測。",
    "coverage_ids": [
      "VIS-FEATURE-723"
    ]
  }
}
```

### KB-221

```json
{
  "id": "KB-221",
  "source": "[S01]",
  "statement_zh": "影片示例先以水果攤畫面搭配文字問題，接著顯示針對桃子派選擇桃子的回答。",
  "subject": "Siri AI：相機畫面提問",
  "topic": "Siri AI：相機畫面提問",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "畫格顯示問題、相機內容及回答；不證明對任何物體都能正確辨識。"
  ],
  "structured_values": [
    {
      "name": "輸入",
      "state": "known",
      "value": "相機畫面與文字問題",
      "unit": null
    },
    {
      "name": "輸出",
      "state": "known",
      "value": "針對畫面內容的文字回答",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 735.0009333333334,
      "end_seconds": 735.0343,
      "modality": "on-screen",
      "context": "Siri AI：相機畫面提問：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 738.0039333333333,
      "end_seconds": 738.0373,
      "modality": "on-screen",
      "context": "Siri AI：相機畫面提問：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "逐一對照列出的原始畫格；主張限於可讀介面與示例。各步驟使用各自畫格，沒有把首尾跨度當作連續檢視或產品實測。",
    "coverage_ids": [
      "VIS-FEATURE-735",
      "VIS-FEATURE-738"
    ]
  }
}
```

### KB-222

```json
{
  "id": "KB-222",
  "source": "[S01]",
  "statement_zh": "影片示例顯示加入其餘食材的請求、搜尋清單中的處理狀態，最後回覆已加入食材並顯示 Stuff 清單卡。",
  "subject": "Siri AI：加入食材清單",
  "topic": "Siri AI：加入食材清單",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "僅核對這組示例狀態；未看到所有授權步驟，也沒有驗證其他 App 或帳號。"
  ],
  "structured_values": [
    {
      "name": "用途",
      "state": "known",
      "value": "把食譜需求轉成購物清單",
      "unit": null
    },
    {
      "name": "示例 App",
      "state": "known",
      "value": "Stuff",
      "unit": null
    },
    {
      "name": "輸出",
      "state": "known",
      "value": "已加入食材的回覆與清單卡",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 743.0089333333333,
      "end_seconds": 743.0423,
      "modality": "on-screen",
      "context": "Siri AI：加入食材清單：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 746.0119333333333,
      "end_seconds": 746.0453,
      "modality": "on-screen",
      "context": "Siri AI：加入食材清單：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 749.0149333333334,
      "end_seconds": 749.0483,
      "modality": "on-screen",
      "context": "Siri AI：加入食材清單：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "逐一對照列出的原始畫格；主張限於可讀介面與示例。各步驟使用各自畫格，沒有把首尾跨度當作連續檢視或產品實測。",
    "coverage_ids": [
      "VIS-FEATURE-743",
      "VIS-FEATURE-746",
      "VIS-FEATURE-749"
    ]
  }
}
```

### KB-223

```json
{
  "id": "KB-223",
  "source": "[S01]",
  "statement_zh": "影片示例先對準活動海報；Calendar 候選清單中途顯示找到3個事件，之後增加到9個，並保留逐項 Add 與 Add All 9 Events 按鈕。",
  "subject": "Siri AI：海報轉成行事曆候選",
  "topic": "Siri AI：海報轉成行事曆候選",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "3個事件是已核對的中間狀態；最後顯示9個候選，不表示9項名稱與時間均已逐項核對。",
    "在本次連續核對的807.807–810.0092秒，候選清單直接切到下一個 Write with Siri 示例，沒有顯示按下 Add All 或加入後的行事曆紀錄；不宣稱已成功建立活動。"
  ],
  "structured_values": [
    {
      "name": "輸入",
      "state": "known",
      "value": "活動海報",
      "unit": null
    },
    {
      "name": "輸出",
      "state": "known",
      "value": "中途3個、最後9個事件候選與加入按鈕",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 805.0042,
      "end_seconds": 805.0375666666666,
      "modality": "on-screen",
      "context": "Siri AI：海報轉成行事曆候選：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 808.0072,
      "end_seconds": 808.0405666666667,
      "modality": "on-screen",
      "context": "Siri AI：海報轉成行事曆候選：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 807.807,
      "end_seconds": 810.0092,
      "modality": "on-screen",
      "context": "連續66格：候選數逐步增加，保留3個中間狀態，後顯示9 Events Found與Add All 9 Events，直接切到下一示例；未見加入操作或加入後結果。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T23:46:41.314Z",
    "notes": "保留原805及808秒精確單幀證據與覆蓋；本輪追加連續原片核對，修正將中間候選數當成最終數的敘述。",
    "coverage_ids": [
      "VIS-FEATURE-805",
      "VIS-FEATURE-808",
      "VIS-CONTINUOUS-CALENDAR-20260910"
    ]
  }
}
```

### KB-224

```json
{
  "id": "KB-224",
  "source": "[S01]",
  "statement_zh": "影片的 Describe a Shortcut 畫面展示一張 School Events 流程卡：卡上以收到學校郵件為條件，列出取得活動資訊、建立行事曆活動與提醒事項的步驟，並顯示播放圖示及描述變更的輸入欄。",
  "subject": "捷徑：以文字描述流程",
  "topic": "捷徑：以文字描述流程",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "在連續核對的 865–871.3 秒內，影片直接切到既有流程卡；沒有呈現輸入、生成、權限核准、播放點擊或執行後結果。卡上列出的步驟不等於已建立活動或提醒事項；此觀察不能延伸為全片未展示，也不能據此說不需要權限。"
  ],
  "structured_values": [
    {
      "name": "觸發",
      "state": "known",
      "value": "收到學校郵件",
      "unit": null
    },
    {
      "name": "流程",
      "state": "known",
      "value": "取得活動資訊、建立活動與提醒事項",
      "unit": null
    },
    {
      "name": "功能",
      "state": "known",
      "value": "Describe a Shortcut",
      "unit": null
    },
    {
      "name": "產品",
      "state": "unknown",
      "value": null,
      "unit": null
    },
    {
      "name": "必要系統",
      "state": "unknown",
      "value": null,
      "unit": null
    },
    {
      "name": "語言與地區",
      "state": "unknown",
      "value": null,
      "unit": null
    },
    {
      "name": "來源中的推出狀態",
      "state": "unknown",
      "value": null,
      "unit": null
    },
    {
      "name": "其他條件",
      "state": "known",
      "value": "865–871.3 秒只見既有流程卡、播放圖示和變更輸入欄；生成、權限核准、點擊執行與實際結果未呈現。產品與適用條件仍未知。",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 866.0318333333333,
      "end_seconds": 866.0652,
      "modality": "on-screen",
      "context": "捷徑：以文字描述流程：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 865.2644,
      "end_seconds": 870.0358333333334,
      "modality": "on-screen",
      "context": "Describe a Shortcut 標題、School Events 卡、收到學校郵件的條件與三個步驟、播放圖示及空白 Describe a change… 欄；切入時卡片已存在，之後切回講者。 精確 PTS：[25957932/30000,26101075/30000)；完整視覺區間核對，未核對音訊。"
    }
  ],
  "review_record": {
    "reviewer": "Codex（本輪視覺審查與整合）",
    "reviewed_at": "2026-09-09T23:55:26Z",
    "notes": "保留原單幀證據與 coverage，新增 865–871.3 秒全畫格視覺核對；此處只核准可見流程卡內容與限定區間內未呈現的操作，不核准口述生成能力或執行成功。",
    "coverage_ids": [
      "VIS-FEATURE-866",
      "VIS-CONT-SHORTCUTS-865-8713"
    ]
  }
}
```

### KB-225

```json
{
  "id": "KB-225",
  "source": "[S01]",
  "statement_zh": "影片的 Expressive voices 畫面提供聲音選項，以及 Pace、Expressivity 兩個調整滑桿。",
  "subject": "Siri AI：聲音調整",
  "topic": "Siri AI：聲音調整",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "只核對聲音設定介面；音色與聲音品質尚未直接聽取。"
  ],
  "structured_values": [
    {
      "name": "可調項目",
      "state": "known",
      "value": "Pace、Expressivity",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 836.0018333333334,
      "end_seconds": 836.0352,
      "modality": "on-screen",
      "context": "Siri AI：聲音調整：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "逐一對照列出的原始畫格；主張限於可讀介面與示例。各步驟使用各自畫格，沒有把首尾跨度當作連續檢視或產品實測。",
    "coverage_ids": [
      "VIS-FEATURE-836"
    ]
  }
}
```

### KB-226

```json
{
  "id": "KB-226",
  "source": "[S01]",
  "statement_zh": "在 903–927 秒的照片效果展示中，影片以三張不同照片依序呈現街道人像背景的路牌與自行車消失、手持花枝人像擴為較寬構圖，以及泳圈人像的觀看角度改變。",
  "subject": "照片編輯：畫面前後差異",
  "topic": "照片編輯：畫面前後差異",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "本段可見物件高亮、光暈、模糊、光帶與格線等過渡，沒有展示可辨識的工具按鍵、觸控／拖曳輸入或存檔確認。此觀察僅限連續核對的 903–927 秒，不能延伸為全片未展示相關操作。",
    "這是三張不同照片的接續示例，不是同一張照片依次進行三項處理；過渡時間不等於實機處理速度，畫面差異也不代表獨立實測效果或所有照片均可得到相同結果。"
  ],
  "structured_values": [
    {
      "name": "用途",
      "state": "known",
      "value": "路牌與自行車消失；持花人像構圖變寬；泳圈人像觀看角度改變",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 906.0051,
      "end_seconds": 906.0384666666666,
      "modality": "on-screen",
      "context": "照片編輯：畫面前後差異：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 908.0071,
      "end_seconds": 908.0404666666667,
      "modality": "on-screen",
      "context": "照片編輯：畫面前後差異：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 910.0091,
      "end_seconds": 910.0424666666667,
      "modality": "on-screen",
      "context": "照片編輯：畫面前後差異：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 912.0111,
      "end_seconds": 912.0444666666667,
      "modality": "on-screen",
      "context": "照片編輯：畫面前後差異：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 916.0151,
      "end_seconds": 916.0484666666666,
      "modality": "on-screen",
      "context": "照片編輯：畫面前後差異：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 918.0171,
      "end_seconds": 918.0504666666667,
      "modality": "on-screen",
      "context": "照片編輯：畫面前後差異：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 921.0201,
      "end_seconds": 921.0534666666666,
      "modality": "on-screen",
      "context": "照片編輯：畫面前後差異：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 925.0241,
      "end_seconds": 925.0574666666666,
      "modality": "on-screen",
      "context": "照片編輯：畫面前後差異：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 903.8029,
      "end_seconds": 908.908,
      "modality": "on-screen",
      "context": "第一張街道人像：背景路牌與自行車高亮，隨後兩者不再出現在影像，主要人物保留。907.1062 秒起的淡圓殘影是轉場，不能判為觸控輸入。 精確 PTS：[27114087/30000,27267240/30000)；完整視覺區間核對，未核對音訊。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 908.908,
      "end_seconds": 915.3811333333333,
      "modality": "on-screen",
      "context": "第二張不同人像：近景與較寬構圖均可見手握花枝；花朵位於頭部上方，應寫手持花枝，不是戴花頭飾。經邊緣光暈／模糊和主體縮小過渡，最後呈現更多花枝、手部及背景空間。 精確 PTS：[27267240/30000,27461434/30000)；完整視覺區間核對，未核對音訊。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 915.3811333333333,
      "end_seconds": 926.2920333333333,
      "modality": "on-screen",
      "context": "第三張海灘泳圈人像：光帶由下往上移動，其後有模糊周邊、格線與觀看角度變化，最後呈現較清晰影像；未見方向控制、拖曳、滑桿或存檔確認。 精確 PTS：[27461434/30000,27788761/30000)；完整視覺區間核對，未核對音訊。"
    }
  ],
  "review_record": {
    "reviewer": "Codex（本輪視覺審查與整合）",
    "reviewed_at": "2026-09-09T23:55:26Z",
    "notes": "保留原八筆單幀證據與 coverage，新增 903–927 秒全畫格視覺核對與三個示例的各自 evidence。以手握花枝的近景及較寬構圖訂正原戴花頭飾用詞；音訊與適用條件仍未核對。",
    "coverage_ids": [
      "VIS-FEATURE-906",
      "VIS-FEATURE-908",
      "VIS-FEATURE-910",
      "VIS-FEATURE-912",
      "VIS-FEATURE-916",
      "VIS-FEATURE-918",
      "VIS-FEATURE-921",
      "VIS-FEATURE-925",
      "VIS-CONT-PHOTO-903-927"
    ]
  }
}
```

### KB-227

```json
{
  "id": "KB-227",
  "source": "[S01]",
  "statement_zh": "影片的相機介面顯示色階分佈圖及手動控制面板，另一畫格顯示快門速度調整與拍攝預覽。",
  "subject": "相機：手動控制介面",
  "topic": "相機：手動控制介面",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "畫面中的曝光效果是示例，不以此保證不同場景的成像品質。"
  ],
  "structured_values": [
    {
      "name": "用途",
      "state": "known",
      "value": "在拍攝時查看分佈圖及調整快門",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 1548.0131333333334,
      "end_seconds": 1548.0465000000002,
      "modality": "on-screen",
      "context": "相機：手動控制介面：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 1560.0251333333333,
      "end_seconds": 1560.0585,
      "modality": "on-screen",
      "context": "相機：手動控制介面：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "逐一對照列出的原始畫格；主張限於可讀介面與示例。各步驟使用各自畫格，沒有把首尾跨度當作連續檢視或產品實測。",
    "coverage_ids": [
      "VIS-FEATURE-1548",
      "VIS-FEATURE-1560"
    ]
  }
}
```

### KB-228

```json
{
  "id": "KB-228",
  "source": "[S01]",
  "statement_zh": "影片的 Audio Mix 編輯介面在影片預覽旁列出 Standard、In-Frame、Studio 與 Cinematic 選項。",
  "subject": "混音：錄影後的音訊選項",
  "topic": "混音：錄影後的音訊選項",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "只核對介面選項；未直接聽取各模式的聲音差異。"
  ],
  "structured_values": [
    {
      "name": "用途",
      "state": "known",
      "value": "選擇影片音訊的混音模式",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 1518.0165,
      "end_seconds": 1518.0498666666667,
      "modality": "on-screen",
      "context": "混音：錄影後的音訊選項：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "逐一對照列出的原始畫格；主張限於可讀介面與示例。各步驟使用各自畫格，沒有把首尾跨度當作連續檢視或產品實測。",
    "coverage_ids": [
      "VIS-FEATURE-1518"
    ]
  }
}
```

### KB-229

```json
{
  "id": "KB-229",
  "source": "[S01]",
  "statement_zh": "影片在照片介面中展示 View Reference Image 選單入口，並標示 Apple Reference Image 不在歐盟與中國提供。",
  "subject": "Apple 參考影像：照片內的對照入口",
  "topic": "Apple 參考影像：照片內的對照入口",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "只核對查看入口與畫面地區註腳；簽章、感光元件到雲端的處理及真實性保證仍待原音或直接文件核對。"
  ],
  "structured_values": [
    {
      "name": "操作入口",
      "state": "known",
      "value": "View Reference Image",
      "unit": null
    },
    {
      "name": "地區限制",
      "state": "known",
      "value": "不在歐盟與中國提供",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 1710.0083,
      "end_seconds": 1710.0416666666667,
      "modality": "on-screen",
      "context": "Apple 參考影像：照片內的對照入口：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "逐一對照列出的原始畫格；主張限於可讀介面與示例。各步驟使用各自畫格，沒有把首尾跨度當作連續檢視或產品實測。",
    "coverage_ids": [
      "VIS-FEATURE-1710"
    ]
  }
}
```

### KB-230

```json
{
  "id": "KB-230",
  "source": "[S01]",
  "statement_zh": "影片展示生命徵象的夜間與日間檢視，並以 Readiness 畫面呈現活動、生命徵象與睡眠圖示及 Recover、Go For It 等狀態。",
  "subject": "健康：生命徵象與準備指數畫面",
  "topic": "健康：生命徵象與準備指數畫面",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "畫面是健康資訊示例，不構成診斷或個人運動建議；計算方法、更新頻率與全套資格仍待核對。"
  ],
  "structured_values": [
    {
      "name": "用途",
      "state": "known",
      "value": "查看日夜狀態與準備指數提示",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2530.0275,
      "end_seconds": 2530.0608666666667,
      "modality": "on-screen",
      "context": "健康：生命徵象與準備指數畫面：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2536.0001333333335,
      "end_seconds": 2536.0335,
      "modality": "on-screen",
      "context": "健康：生命徵象與準備指數畫面：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2546.010133333333,
      "end_seconds": 2546.0434999999998,
      "modality": "on-screen",
      "context": "健康：生命徵象與準備指數畫面：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2562.0261333333333,
      "end_seconds": 2562.0595,
      "modality": "on-screen",
      "context": "健康：生命徵象與準備指數畫面：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2565.0291333333334,
      "end_seconds": 2565.0625,
      "modality": "on-screen",
      "context": "健康：生命徵象與準備指數畫面：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2569.0331333333334,
      "end_seconds": 2569.0665,
      "modality": "on-screen",
      "context": "健康：生命徵象與準備指數畫面：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "逐一對照列出的原始畫格；主張限於可讀介面與示例。各步驟使用各自畫格，沒有把首尾跨度當作連續檢視或產品實測。",
    "coverage_ids": [
      "VIS-FEATURE-2530",
      "VIS-FEATURE-2536",
      "VIS-FEATURE-2546",
      "VIS-FEATURE-2562",
      "VIS-FEATURE-2565",
      "VIS-FEATURE-2569"
    ]
  }
}
```

### KB-231

```json
{
  "id": "KB-231",
  "source": "[S01]",
  "statement_zh": "影片展示含睡眠摘要的健康介面；動作評估示例則依序把手機擺好、在鏡頭內定位、看示範動作、原地踏步並查看結果畫面。",
  "subject": "健康：摘要與動作評估示例",
  "topic": "健康：摘要與動作評估示例",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "示例與臨床效力分開；新健康介面的推出時間、語言、地區、費用及適用資格尚未完成原音核對，不能列為台灣目前可用。"
  ],
  "structured_values": [
    {
      "name": "用途",
      "state": "known",
      "value": "閱讀健康摘要與跟隨動作評估示例",
      "unit": null
    },
    {
      "name": "推出與資格",
      "state": "unknown",
      "value": null,
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2600.0307666666668,
      "end_seconds": 2600.0641333333333,
      "modality": "on-screen",
      "context": "健康：摘要與動作評估示例：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2606.0034,
      "end_seconds": 2606.0367666666666,
      "modality": "on-screen",
      "context": "健康：摘要與動作評估示例：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2720.0173,
      "end_seconds": 2720.0506666666665,
      "modality": "on-screen",
      "context": "健康：摘要與動作評估示例：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2726.0233,
      "end_seconds": 2726.0566666666664,
      "modality": "on-screen",
      "context": "健康：摘要與動作評估示例：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2734.0313,
      "end_seconds": 2734.0646666666667,
      "modality": "on-screen",
      "context": "健康：摘要與動作評估示例：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2740.0039333333334,
      "end_seconds": 2740.0373,
      "modality": "on-screen",
      "context": "健康：摘要與動作評估示例：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2750.013933333333,
      "end_seconds": 2750.0472999999997,
      "modality": "on-screen",
      "context": "健康：摘要與動作評估示例：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "逐一對照列出的原始畫格；主張限於可讀介面與示例。各步驟使用各自畫格，沒有把首尾跨度當作連續檢視或產品實測。",
    "coverage_ids": [
      "VIS-FEATURE-2600",
      "VIS-FEATURE-2606",
      "VIS-FEATURE-2720",
      "VIS-FEATURE-2726",
      "VIS-FEATURE-2734",
      "VIS-FEATURE-2740",
      "VIS-FEATURE-2750"
    ]
  }
}
```

### KB-232

```json
{
  "id": "KB-232",
  "source": "[S01]",
  "statement_zh": "影片餐廳示例中，手錶在交談後顯示 Rewind 文字內容，向下查看時出現 Ask Siri 按鈕。",
  "subject": "Live Rewind：回看談話文字",
  "topic": "Live Rewind：回看談話文字",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "觸發手勢、回溯秒數、推出時間與語言僅有 ASR 定位，尚未以原音核對；不能當作完整操作教學。"
  ],
  "structured_values": [
    {
      "name": "用途",
      "state": "known",
      "value": "回看剛才談話的文字並找到詢問入口",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2854.0178333333333,
      "end_seconds": 2854.0512,
      "modality": "on-screen",
      "context": "Live Rewind：回看談話文字：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2867.0308333333332,
      "end_seconds": 2867.0642,
      "modality": "on-screen",
      "context": "Live Rewind：回看談話文字：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2869.032833333333,
      "end_seconds": 2869.0661999999998,
      "modality": "on-screen",
      "context": "Live Rewind：回看談話文字：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2871.0014666666666,
      "end_seconds": 2871.034833333333,
      "modality": "on-screen",
      "context": "Live Rewind：回看談話文字：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "逐一對照列出的原始畫格；主張限於可讀介面與示例。各步驟使用各自畫格，沒有把首尾跨度當作連續檢視或產品實測。",
    "coverage_ids": [
      "VIS-FEATURE-2854",
      "VIS-FEATURE-2867",
      "VIS-FEATURE-2869",
      "VIS-FEATURE-2871"
    ]
  }
}
```

### KB-233

```json
{
  "id": "KB-233",
  "source": "[S01]",
  "statement_zh": "影片的 Recaps 畫面展示 Personal Training Routine 標題、摘要與重點清單，手錶控制中心另顯示 Siri Recap: Start。",
  "subject": "Siri Recap：重點與開啟入口",
  "topic": "Siri Recap：重點與開啟入口",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "只核對回顧內容與開啟入口；背景聆聽、儲存、加密與排程細節，以及推出與語言條件仍待原音核對。"
  ],
  "structured_values": [
    {
      "name": "用途",
      "state": "known",
      "value": "查看談話摘要及重點",
      "unit": null
    },
    {
      "name": "介面入口",
      "state": "known",
      "value": "Siri Recap: Start",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2904.0011,
      "end_seconds": 2904.0344666666665,
      "modality": "on-screen",
      "context": "Siri Recap：重點與開啟入口：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2908.0051,
      "end_seconds": 2908.0384666666664,
      "modality": "on-screen",
      "context": "Siri Recap：重點與開啟入口：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 2922.0191,
      "end_seconds": 2922.0524666666665,
      "modality": "on-screen",
      "context": "Siri Recap：重點與開啟入口：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "逐一對照列出的原始畫格；主張限於可讀介面與示例。各步驟使用各自畫格，沒有把首尾跨度當作連續檢視或產品實測。",
    "coverage_ids": [
      "VIS-FEATURE-2904",
      "VIS-FEATURE-2908",
      "VIS-FEATURE-2922"
    ]
  }
}
```

### KB-234

```json
{
  "id": "KB-234",
  "source": "[S01]",
  "statement_zh": "影片在 iPhone Duo 展示訊息與照片並排、兩個網頁並排，接著展示兩側網頁換邊。",
  "subject": "iPhone Duo：雙 App 與視窗換邊",
  "topic": "iPhone Duo：雙 App 與視窗換邊",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "只支持展示的 App 與畫面狀態；未驗證所有第三方 App、完整手勢或視窗生命週期。"
  ],
  "structured_values": [
    {
      "name": "產品",
      "state": "known",
      "value": "iPhone Duo",
      "unit": null
    },
    {
      "name": "用途",
      "state": "known",
      "value": "並排閱讀、參照與切換兩側內容",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 3888.0174666666667,
      "end_seconds": 3888.0508333333332,
      "modality": "on-screen",
      "context": "iPhone Duo：雙 App 與視窗換邊：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 3892.0214666666666,
      "end_seconds": 3892.054833333333,
      "modality": "on-screen",
      "context": "iPhone Duo：雙 App 與視窗換邊：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 3896.0254666666665,
      "end_seconds": 3896.058833333333,
      "modality": "on-screen",
      "context": "iPhone Duo：雙 App 與視窗換邊：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 3904.0001,
      "end_seconds": 3904.0334666666668,
      "modality": "on-screen",
      "context": "iPhone Duo：雙 App 與視窗換邊：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 3908.0041,
      "end_seconds": 3908.0374666666667,
      "modality": "on-screen",
      "context": "iPhone Duo：雙 App 與視窗換邊：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 3912.0081,
      "end_seconds": 3912.0414666666666,
      "modality": "on-screen",
      "context": "iPhone Duo：雙 App 與視窗換邊：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "逐一對照列出的原始畫格；主張限於可讀介面與示例。各步驟使用各自畫格，沒有把首尾跨度當作連續檢視或產品實測。",
    "coverage_ids": [
      "VIS-FEATURE-3888",
      "VIS-FEATURE-3892",
      "VIS-FEATURE-3896",
      "VIS-FEATURE-3904",
      "VIS-FEATURE-3908",
      "VIS-FEATURE-3912"
    ]
  }
}
```

### KB-235

```json
{
  "id": "KB-235",
  "source": "[S01]",
  "statement_zh": "影片展示 iPhone Duo 半摺疊擺放觀看內容，並展示直立擺放時的行事曆及床邊時鐘畫面。",
  "subject": "iPhone Duo：擺放與待機畫面",
  "topic": "iPhone Duo：擺放與待機畫面",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "未憑畫面推定待機自動啟動條件、是否正在充電或鬧鐘漸亮設定。"
  ],
  "structured_values": [
    {
      "name": "產品",
      "state": "known",
      "value": "iPhone Duo",
      "unit": null
    },
    {
      "name": "用途",
      "state": "known",
      "value": "擺放觀看內容、查看行事曆與時鐘",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 3952.0147333333334,
      "end_seconds": 3952.0481,
      "modality": "on-screen",
      "context": "iPhone Duo：擺放與待機畫面：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 3990.019366666667,
      "end_seconds": 3990.0527333333334,
      "modality": "on-screen",
      "context": "iPhone Duo：擺放與待機畫面：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4000.0293666666666,
      "end_seconds": 4000.062733333333,
      "modality": "on-screen",
      "context": "iPhone Duo：擺放與待機畫面：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "逐一對照列出的原始畫格；主張限於可讀介面與示例。各步驟使用各自畫格，沒有把首尾跨度當作連續檢視或產品實測。",
    "coverage_ids": [
      "VIS-FEATURE-3952",
      "VIS-FEATURE-3990",
      "VIS-FEATURE-4000"
    ]
  }
}
```

### KB-236

```json
{
  "id": "KB-236",
  "source": "[S01]",
  "statement_zh": "影片的 iPhone Duo 通話示例先在內螢幕顯示遠端參與者，再展示另一人在外螢幕查看同一通話。",
  "subject": "iPhone Duo：視訊通話的兩面畫面",
  "topic": "iPhone Duo：視訊通話的兩面畫面",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "示例只確認兩面的通話呈現；第三方 App 相容性，以及影片示例的完整連線設定與啟用步驟尚未核對。"
  ],
  "structured_values": [
    {
      "name": "產品",
      "state": "known",
      "value": "iPhone Duo",
      "unit": null
    },
    {
      "name": "用途",
      "state": "known",
      "value": "讓裝置兩側的人查看視訊通話",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4500.0288666666665,
      "end_seconds": 4500.062233333333,
      "modality": "on-screen",
      "context": "iPhone Duo：視訊通話的兩面畫面：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4508.0035,
      "end_seconds": 4508.036866666666,
      "modality": "on-screen",
      "context": "iPhone Duo：視訊通話的兩面畫面：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4514.0095,
      "end_seconds": 4514.042866666667,
      "modality": "on-screen",
      "context": "iPhone Duo：視訊通話的兩面畫面：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4522.0175,
      "end_seconds": 4522.0508666666665,
      "modality": "on-screen",
      "context": "iPhone Duo：視訊通話的兩面畫面：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "逐一對照列出的原始畫格；主張限於可讀介面與示例。各步驟使用各自畫格，沒有把首尾跨度當作連續檢視或產品實測。",
    "coverage_ids": [
      "VIS-FEATURE-4500",
      "VIS-FEATURE-4508",
      "VIS-FEATURE-4514",
      "VIS-FEATURE-4522"
    ]
  }
}
```

### KB-237

```json
{
  "id": "KB-237",
  "source": "[S01]",
  "statement_zh": "影片展示 iPhone Duo 外螢幕供被攝者看見取景內容，之後外螢幕改顯示動畫，拍攝者一側仍呈現兒童的相機預覽。",
  "subject": "iPhone Duo：拍攝預覽與兒童動畫",
  "topic": "iPhone Duo：拍攝預覽與兒童動畫",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "動畫與預覽是展示結果，不能保證每位兒童都會看鏡頭或第三方 App 可控制此功能。"
  ],
  "structured_values": [
    {
      "name": "產品",
      "state": "known",
      "value": "iPhone Duo",
      "unit": null
    },
    {
      "name": "用途",
      "state": "known",
      "value": "讓被攝者查看構圖，並以動畫吸引注意",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4538.000133333333,
      "end_seconds": 4538.0335,
      "modality": "on-screen",
      "context": "iPhone Duo：拍攝預覽與兒童動畫：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4544.006133333333,
      "end_seconds": 4544.0395,
      "modality": "on-screen",
      "context": "iPhone Duo：拍攝預覽與兒童動畫：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4550.012133333334,
      "end_seconds": 4550.0455,
      "modality": "on-screen",
      "context": "iPhone Duo：拍攝預覽與兒童動畫：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4554.0161333333335,
      "end_seconds": 4554.0495,
      "modality": "on-screen",
      "context": "iPhone Duo：拍攝預覽與兒童動畫：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "逐一對照列出的原始畫格；主張限於可讀介面與示例。各步驟使用各自畫格，沒有把首尾跨度當作連續檢視或產品實測。",
    "coverage_ids": [
      "VIS-FEATURE-4538",
      "VIS-FEATURE-4544",
      "VIS-FEATURE-4550",
      "VIS-FEATURE-4554"
    ]
  }
}
```

### KB-238

```json
{
  "id": "KB-238",
  "source": "[S01]",
  "statement_zh": "影片示例依序展示把 iPhone Duo 擺在平台上、人物走入鏡頭範圍，以及裝置畫面中的合照構圖。 在另行連續檢視的片段中，人物站定後，手機預覽短暫變暗再恢復合照構圖。",
  "subject": "iPhone Duo：擺放後一起入鏡",
  "topic": "iPhone Duo：擺放後一起入鏡",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "原有擺放、入鏡與構圖證據是分別核對的單一畫格；只有4568.730833–4569.531633秒的預覽變暗及恢復已作連續視覺核對。",
    "預覽變暗與恢復不足以證明自動觸發條件、辨識到就緒、快門機制或照片已儲存；原音與完整自動拍攝流程仍未核對。"
  ],
  "structured_values": [
    {
      "name": "產品",
      "state": "known",
      "value": "iPhone Duo",
      "unit": null
    },
    {
      "name": "用途",
      "state": "known",
      "value": "擺放裝置後一起入鏡",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4560.022133333333,
      "end_seconds": 4560.0554999999995,
      "modality": "on-screen",
      "context": "iPhone Duo：擺放後一起入鏡：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4564.026133333334,
      "end_seconds": 4564.0595,
      "modality": "on-screen",
      "context": "iPhone Duo：擺放後一起入鏡：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4568.030133333334,
      "end_seconds": 4568.0635,
      "modality": "on-screen",
      "context": "iPhone Duo：擺放後一起入鏡：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4574.0027666666665,
      "end_seconds": 4574.036133333333,
      "modality": "on-screen",
      "context": "iPhone Duo：擺放後一起入鏡：檢視此畫格的介面、文字或示例，與同組按時間排序的畫格對照；不以 ASR 核准口述。"
    },
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 4568.730833333333,
      "end_seconds": 4569.531633333333,
      "modality": "on-screen",
      "context": "連續24格可見合照預覽短暫變暗再恢復；不從畫面推論觸發、辨識或儲存機制。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T23:46:41.314Z",
    "notes": "保留原四筆單幀證據，追加24個連續畫格的可見狀態；未以ASR核准口述。",
    "coverage_ids": [
      "VIS-FEATURE-4560",
      "VIS-FEATURE-4564",
      "VIS-FEATURE-4568",
      "VIS-FEATURE-4574",
      "VIS-CONTINUOUS-SHUTTER-20260910"
    ]
  }
}
```

### KB-240

```json
{
  "id": "KB-240",
  "source": "[S02]",
  "statement_zh": "台灣規格頁列 Pro 控制項目，可調整鏡頭光圈、快門速度、白平衡與檢視色階分佈圖；亦列智慧對焦追蹤、為影片加入電影級模式效果，以及混音功能。",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max：拍攝軟體",
  "topic": "iPhone 18 Pro 與 iPhone 18 Pro Max：拍攝軟體",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "Pro 控制項目是來源功能名稱，不是省略型號；第三方控制接口與各模式組合仍須另行核對。"
  ],
  "structured_values": [
    {
      "name": "產品",
      "state": "known",
      "value": "iPhone 18 Pro、iPhone 18 Pro Max",
      "unit": null
    },
    {
      "name": "控制項目",
      "state": "known",
      "value": "鏡頭光圈、快門速度、白平衡、色階分佈圖",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "相機／錄影：Pro 控制項目、智慧對焦追蹤、電影級模式效果、混音功能",
      "context": "台灣規格頁列 Pro 控制項目，可調整鏡頭光圈、快門速度、白平衡與檢視色階分佈圖；亦列智慧對焦追蹤、為影片加入電影級模式效果，以及混音功能。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "讀取固定台灣規格頁原文相機與錄影欄位。",
    "coverage_ids": [
      "PAGE-FEATURE-240"
    ]
  }
}
```

### KB-241

```json
{
  "id": "KB-241",
  "source": "[S03]",
  "statement_zh": "iPhone Duo 台灣規格頁的相機欄列有智慧拍攝、Duo 雙面預覽、攝影風格 3 與智慧對焦追蹤。",
  "subject": "iPhone Duo：智慧拍攝與雙面預覽",
  "topic": "iPhone Duo：智慧拍攝與雙面預覽",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "這一列確認功能名稱，沒有完整說明自動觸發流程。Duo 雙面預覽是來源所列功能名稱。"
  ],
  "structured_values": [
    {
      "name": "產品",
      "state": "known",
      "value": "iPhone Duo",
      "unit": null
    },
    {
      "name": "功能名稱",
      "state": "known",
      "value": "智慧拍攝、Duo 雙面預覽",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "相機：智慧拍攝、Duo 雙面預覽、攝影風格 3、智慧對焦追蹤",
      "context": "iPhone Duo 台灣規格頁的相機欄列有智慧拍攝、Duo 雙面預覽、攝影風格 3 與智慧對焦追蹤。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "讀取固定台灣規格頁原文相機與錄影欄位。",
    "coverage_ids": [
      "PAGE-FEATURE-241"
    ]
  }
}
```

### KB-242

```json
{
  "id": "KB-242",
  "source": "[S22]",
  "statement_zh": "App Intents 以 app intents 表達動作，並以 app entities、app enums 表達資料型別；編譯器產生系統用來發現這些能力的資訊，可供 Siri、捷徑、Spotlight 等系統體驗整合。",
  "subject": "App Intents：把 App 動作與資料交給系統發現",
  "topic": "App Intents：把 App 動作與資料交給系統發現",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S22",
      "artifact_revision": "sha256:8799685e266ce516fd2835303d08c388f3ea633a76490e548d4dce592153aee0",
      "modality": "webpage",
      "locator": "Overview",
      "context": "App Intents 以 app intents 表達動作，並以 app entities、app enums 表達資料型別；編譯器產生系統用來發現這些能力的資訊，可供 Siri、捷徑、Spotlight 等系統體驗整合。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "對照該版本官方文件原文。",
    "coverage_ids": [
      "PAGE-FEATURE-242"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-222",
      "KB-224"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "1.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "9.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "文件平台資訊只指向本來源；無平台 metadata 的文章保持空陣列，不借其他 symbol 版本補入。"
  }
}
```

### KB-243

```json
{
  "id": "KB-243",
  "source": "[S23]",
  "statement_zh": "官方指南列出摘要、擷取實體、理解或改寫文字、分類與生成標籤等用途，並提醒裝置端模型未必適合基本數學、寫程式或邏輯推理等請求。",
  "subject": "Foundation Models：先選適合的文字任務",
  "topic": "Foundation Models：先選適合的文字任務",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S23",
      "artifact_revision": "sha256:6478c7a1f3b361ff7b4f2ed73059b56cec79dba2bd8d7eef79320fa1c5dca92f",
      "modality": "webpage",
      "locator": "Understand model capabilities",
      "context": "官方指南列出摘要、擷取實體、理解或改寫文字、分類與生成標籤等用途，並提醒裝置端模型未必適合基本數學、寫程式或邏輯推理等請求。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "對照該版本官方文件原文。",
    "coverage_ids": [
      "PAGE-FEATURE-243"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "文件平台資訊只指向本來源；無平台 metadata 的文章保持空陣列，不借其他 symbol 版本補入。"
  }
}
```

### KB-244

```json
{
  "id": "KB-244",
  "source": "[S23]",
  "statement_zh": "確認模型可用後建立 LanguageModelSession；單輪互動每次建立新 session，多輪互動重用 session。respond(to:) 為非同步呼叫，同一 session 一次只能處理一個請求，前一請求未結束又呼叫會造成 runtime error。",
  "subject": "Foundation Models：session 與請求生命週期",
  "topic": "Foundation Models：session 與請求生命週期",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S23",
      "artifact_revision": "sha256:6478c7a1f3b361ff7b4f2ed73059b56cec79dba2bd8d7eef79320fa1c5dca92f",
      "modality": "webpage",
      "locator": "Create a session / Generate a response",
      "context": "確認模型可用後建立 LanguageModelSession；單輪互動每次建立新 session，多輪互動重用 session。respond(to:) 為非同步呼叫，同一 session 一次只能處理一個請求，前一請求未結束又呼叫會造成 runtime error。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "對照該版本官方文件原文。",
    "coverage_ids": [
      "PAGE-FEATURE-244"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "文件平台資訊只指向本來源；無平台 metadata 的文章保持空陣列，不借其他 symbol 版本補入。"
  }
}
```

### KB-245

```json
{
  "id": "KB-245",
  "source": "[S23]",
  "statement_zh": "官方建議把複雜任務拆成具體提示，將可信指示放在 instructions；guided generation 可產生自訂 Swift 資料結構，工具呼叫則能執行像讀取本機資料庫的額外動作。",
  "subject": "Foundation Models：輸入、結構與工具",
  "topic": "Foundation Models：輸入、結構與工具",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或真機測試。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S23",
      "artifact_revision": "sha256:6478c7a1f3b361ff7b4f2ed73059b56cec79dba2bd8d7eef79320fa1c5dca92f",
      "modality": "webpage",
      "locator": "Provide a prompt to the model / Provide instructions to the model / Generate a response",
      "context": "官方建議把複雜任務拆成具體提示，將可信指示放在 instructions；guided generation 可產生自訂 Swift 資料結構，工具呼叫則能執行像讀取本機資料庫的額外動作。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T20:51:48Z",
    "notes": "對照該版本官方文件原文。",
    "coverage_ids": [
      "PAGE-FEATURE-245"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "文件平台資訊只指向本來源；無平台 metadata 的文章保持空陣列，不借其他 symbol 版本補入。"
  }
}
```

### KB-246

```json
{
  "id": "KB-246",
  "source": "[S01]",
  "statement_zh": "影片並列 Screen Time Schedule、用量摘要與 Time Allowances 設定介面。排程頁可見依時段選擇 App 的設定；額度頁可見分類選擇、平日／週末切換及共用時間額度；用量頁則顯示統計與暫停使用、允許不限時及變更排程的入口。",
  "subject": "螢幕使用設定：排程、分類額度與用量",
  "topic": "系統設定與家庭使用",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "並列的是介面示例，沒有驗證更改設定後的實際限制結果，亦未把不同示例視為同一帳號的連續操作。",
    "相容產品、必要系統、地區、家庭帳號角色與第三方 API 尚未由此畫面核對；不能將自家設定頁當成 App 已獲得資料或控制權的證明。"
  ],
  "structured_values": [
    {
      "name": "排程視角",
      "state": "known",
      "value": "依時段選擇 App；畫面另提示永遠允許的聯絡人與 App 仍可存取",
      "unit": null
    },
    {
      "name": "額度視角",
      "state": "known",
      "value": "分類、平日／週末、共用時間額度",
      "unit": null
    },
    {
      "name": "用量視角",
      "state": "known",
      "value": "使用統計、暫停使用、允許不限時、變更排程",
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 1806.0042,
      "end_seconds": 1806.0375666666669,
      "modality": "on-screen",
      "context": "原畫格並列設定頁：左為 Screen Time Schedule 與時段清單，中為使用量及 Pause Device Use／Allow Unlimited Use／Change Schedule，右為 Time Allowances、Manage Categories、Weekdays／Weekends 與共用額度。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-09T21:47:45Z",
    "notes": "逐一核對可讀標籤與介面欄位；僅採畫面可支持的設定用途，不以 ASR 補入帳號權限、裝置支援或實際生效結果。",
    "coverage_ids": [
      "VIS-FOLLOWUP-1806"
    ]
  }
}
```

### KB-247

```json
{
  "id": "KB-247",
  "source": "[S02]",
  "statement_zh": "iPhone 18 Pro 與 iPhone 18 Pro Max 規格頁的視覺智慧註腳，適用主體是已啟用 Apple Intelligence 的 iPhone，並保留語言與地區限制。",
  "subject": "視覺智慧",
  "topic": "Siri AI 與 Apple Intelligence",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "原文「任何已啟用」不表示任何 iPhone 都能啟用 Apple Intelligence；此註腳沒有列各款 iPhone 的完整資格、最低系統版本、逐項台灣支援、費用或操作流程。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S02",
      "artifact_revision": "sha256:d70637b47c806db53d4ead125fa32673de4b119a65a67f369e0ad6742c198da9",
      "modality": "webpage",
      "locator": "動作按鈕功能；#footnote-15",
      "context": "動作按鈕列的視覺智慧連到註腳 15；註腳要求已啟用 Apple Intelligence 的 iPhone，部分功能可能未適用於所有語言或地區。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "直接核對已登錄的固定 HTML 主列、原始註腳及 href，SHA-256 相符；只記錄規格條件，不證明 S01 操作結果、完整語言地區供應或獨立實測。",
    "coverage_ids": [
      "PAGE-S02-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-248

```json
{
  "id": "KB-248",
  "source": "[S03]",
  "statement_zh": "iPhone Duo 規格頁列可透過行動網路或 Wi-Fi 進行 FaceTime 視訊通話，並列 Duo 雙面 FaceTime；通話雙方須使用具 FaceTime 功能的裝置。",
  "subject": "iPhone Duo FaceTime 通話",
  "topic": "iPhone Duo",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "註腳要求收發雙方的 FaceTime 裝置與 Wi-Fi 連線，並另列行動網路依電信業者方案；需與主列「行動網路或 Wi-Fi」一起閱讀，不能宣稱只支援 Wi-Fi。",
    "行動數據服務可能須付費；此規格條件不證明第三方 App 的雙面通話支援、任意網路品質可用或影片已成功接續通話。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S03",
      "artifact_revision": "sha256:fd638f67e5465c7da0292df63da05b7e23656f178f509d3f05a667b98df9484a",
      "modality": "webpage",
      "locator": "視訊通話；音訊通話；#footnote-16",
      "context": "視訊主列為行動網路或 Wi-Fi、並列 Duo 雙面 FaceTime；註腳限制兩端具 FaceTime 功能、Wi-Fi 及依電信業者方案使用行動網路和可能數據費。"
    }
  ],
  "review_record": {
    "reviewer": "Codex conditions reviewer",
    "reviewed_at": "2026-09-09T23:48:10Z",
    "notes": "直接核對已登錄的固定 HTML 主列、原始註腳及 href，SHA-256 相符；只記錄規格條件，不證明 S01 操作結果、完整語言地區供應或獨立實測。",
    "coverage_ids": [
      "PAGE-S03-RESUME-CONDITIONS"
    ]
  }
}
```

### KB-249

```json
{
  "id": "KB-249",
  "source": "[S01]",
  "statement_zh": "影片在 iPhone Handoff 標題旁展示單一手機，其鎖定畫面頂端已顯示「Switched to this iPhone」，之後鏡頭放大同一手機的上半部。",
  "subject": "iPhone Handoff：畫面提示",
  "topic": "iPhone Handoff",
  "claim_type": "announcement",
  "verification": "verified",
  "availability_status": "unknown",
  "qualifiers": [
    "在連續核對的 1828–1835 秒內，切入手機畫面時提示已存在；沒有呈現另一台裝置、電話號碼、觸發切換的操作、設定或權限過程，也沒有通話、訊息或 App 接續的前後結果。這個觀察僅限本段。",
    "畫面提示只能證明展示了該文字；不能據此確認門號或 SIM 移轉、連線不中斷、產品相容性或切換成功率，也不能用一般 Handoff、Continuity 或 eSIM 知識補齊。鎖定畫面的日期與時間不能用於核定發表會日期。"
  ],
  "structured_values": [
    {
      "name": "畫面標題",
      "state": "known",
      "value": "iPhone Handoff",
      "unit": null
    },
    {
      "name": "畫面提示",
      "state": "known",
      "value": "Switched to this iPhone",
      "unit": null
    },
    {
      "name": "適用產品型號",
      "state": "unknown",
      "value": null,
      "unit": null
    },
    {
      "name": "必要系統",
      "state": "unknown",
      "value": null,
      "unit": null
    },
    {
      "name": "語言與地區",
      "state": "unknown",
      "value": null,
      "unit": null
    },
    {
      "name": "帳號與網路條件",
      "state": "unknown",
      "value": null,
      "unit": null
    },
    {
      "name": "來源中的推出狀態",
      "state": "unknown",
      "value": null,
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S01",
      "artifact_revision": "sha256:b4975ab0f6ce60b323382d7a305202cc420eb042b255da0088f0e38495628ddc",
      "start_seconds": 1828.5267,
      "end_seconds": 1834.2657666666667,
      "modality": "on-screen",
      "context": "單一手機與 iPhone Handoff 標題，鎖定畫面頂端綠色 Switched to this iPhone 提示在切入時已出現；同一手機被放大後切回講者。未見實際切換輸入或另一台裝置。 精確 PTS：[54855801/30000,55027973/30000)；完整視覺區間核對，未核對音訊。"
    }
  ],
  "review_record": {
    "reviewer": "Codex（本輪視覺審查與整合）",
    "reviewed_at": "2026-09-09T23:55:26Z",
    "notes": "本次全畫格核對 1828–1835 秒，只核准可見標題、提示及放大呈現；沒有依字幕或模型記憶核准門號移轉、App 接續或適用條件。KB-237 是兒童動畫示例，不可挪用其 ID 或證據。",
    "coverage_ids": [
      "VIS-CONT-HANDOFF-1828-1835"
    ]
  }
}
```

### KB-250

```json
{
  "id": "KB-250",
  "source": "[S24]",
  "subject": "iPhone 18 Pro",
  "topic": "台灣官網價格與上市",
  "claim_type": "availability",
  "statement_zh": "iPhone 18 Pro 台灣官網列 256GB 為 NT$44,900，並列其他容量的含稅售價；該配置約含加值型營業稅 NT$2,138。",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "本次取得的台灣官網價格已包含稅與運送費用；價格屬當次快照，不是個別訂單或配送承諾。",
    "總價與最低月付、換購折抵分開；影片價格幣別另依使用者確認標示為美元；市場適用範圍與稅額仍分開核對。",
    "各容量的約略稅額直接來自同頁 priceFeeDisclaimer，已含在總價中；原註腳說明為近似值、可能隨時間變動，沒有自行計算稅率。",
    "容量是官方標稱容量，不能當作全部可用儲存空間。"
  ],
  "structured_values": [
    {
      "name": "台灣價格",
      "state": "known",
      "value": 44900,
      "unit": "NT$ 起"
    },
    {
      "name": "價格對應配置",
      "state": "known",
      "value": "256GB",
      "unit": null
    },
    {
      "name": "幣別",
      "state": "known",
      "value": "TWD（新台幣）",
      "unit": null
    },
    {
      "name": "含稅與運送",
      "state": "known",
      "value": "已包含",
      "unit": null
    },
    {
      "name": "約含營業稅",
      "state": "known",
      "value": 2138,
      "unit": "NT$"
    },
    {
      "name": "256GB 售價",
      "state": "known",
      "value": 44900,
      "unit": "NT$"
    },
    {
      "name": "256GB 約含營業稅",
      "state": "known",
      "value": 2138,
      "unit": "NT$"
    },
    {
      "name": "512GB 售價",
      "state": "known",
      "value": 51900,
      "unit": "NT$"
    },
    {
      "name": "512GB 約含營業稅",
      "state": "known",
      "value": 2471,
      "unit": "NT$"
    },
    {
      "name": "1TB 售價",
      "state": "known",
      "value": 66900,
      "unit": "NT$"
    },
    {
      "name": "1TB 約含營業稅",
      "state": "known",
      "value": 3186,
      "unit": "NT$"
    },
    {
      "name": "2TB 售價",
      "state": "known",
      "value": 88900,
      "unit": "NT$"
    },
    {
      "name": "2TB 約含營業稅",
      "state": "known",
      "value": 4233,
      "unit": "NT$"
    }
  ],
  "evidence": [
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "a[href=\"https://www.apple.com/tw/shop/buy-iphone/iphone-18-pro/6.3-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-256gb-%E9%BB%91%E8%89%B2\"] .current_price",
      "context": "iPhone 18 Pro 台灣官網列 256GB 為 NT$44,900，並列其他容量的含稅售價；該配置約含加值型營業稅 NT$2,138。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.products[18] → displayValues.prices[\"mjrp4zp_a\"].currentPrice / priceCurrency / priceFeeDisclaimer",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": ".as-globalfooter-sosumi .pricing ul li",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "[data-footnote-id=\"c797ec623451481bcb7b6f5ad02aa26a\"]",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "a[href=\"https://www.apple.com/tw/shop/buy-iphone/iphone-18-pro/6.3-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-512gb-%E5%8B%83%E6%A0%B9%E5%9C%B0%E7%B4%85%E8%89%B2\"] .current_price",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.products[28] → displayValues.prices[\"mjrw4zp_a\"].currentPrice / priceCurrency / priceFeeDisclaimer",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "a[href=\"https://www.apple.com/tw/shop/buy-iphone/iphone-18-pro/6.3-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-1tb-%E9%BB%91%E8%89%B2\"] .current_price",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.products[16] → displayValues.prices[\"mjry4zp_a\"].currentPrice / priceCurrency / priceFeeDisclaimer",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "a[href=\"https://www.apple.com/tw/shop/buy-iphone/iphone-18-pro/6.3-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-2tb-%E9%BB%91%E8%89%B2\"] .current_price",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.products[19] → displayValues.prices[\"mjt34zp_a\"].currentPrice / priceCurrency / priceFeeDisclaimer",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    }
  ],
  "review_record": {
    "reviewer": "Codex（直接原文與資料欄位核對後整合）",
    "reviewed_at": "2026-09-10T00:16:11.067Z",
    "notes": "已直接讀取原始 HTML、核對 SHA-256，並以 JSON 解析器讀取同頁資料；未執行原文 script。主代理逐項核對產品、配置、總價與適用的原文稅額，不以研究報告或其他代理一致意見代替原文。",
    "coverage_ids": [
      "PAGE-S24-TAIWAN-COMMERCE"
    ]
  }
}
```

### KB-251

```json
{
  "id": "KB-251",
  "source": "[S24]",
  "subject": "iPhone 18 Pro Max",
  "topic": "台灣官網價格與上市",
  "claim_type": "availability",
  "statement_zh": "iPhone 18 Pro Max 台灣官網列 256GB 為 NT$49,900，並列其他容量的含稅售價；該配置約含加值型營業稅 NT$2,376。",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "本次取得的台灣官網價格已包含稅與運送費用；價格屬當次快照，不是個別訂單或配送承諾。",
    "總價與最低月付、換購折抵分開；影片價格幣別另依使用者確認標示為美元；市場適用範圍與稅額仍分開核對。",
    "各容量的約略稅額直接來自同頁 priceFeeDisclaimer，已含在總價中；原註腳說明為近似值、可能隨時間變動，沒有自行計算稅率。",
    "容量是官方標稱容量，不能當作全部可用儲存空間。"
  ],
  "structured_values": [
    {
      "name": "台灣價格",
      "state": "known",
      "value": 49900,
      "unit": "NT$ 起"
    },
    {
      "name": "價格對應配置",
      "state": "known",
      "value": "256GB",
      "unit": null
    },
    {
      "name": "幣別",
      "state": "known",
      "value": "TWD（新台幣）",
      "unit": null
    },
    {
      "name": "含稅與運送",
      "state": "known",
      "value": "已包含",
      "unit": null
    },
    {
      "name": "約含營業稅",
      "state": "known",
      "value": 2376,
      "unit": "NT$"
    },
    {
      "name": "256GB 售價",
      "state": "known",
      "value": 49900,
      "unit": "NT$"
    },
    {
      "name": "256GB 約含營業稅",
      "state": "known",
      "value": 2376,
      "unit": "NT$"
    },
    {
      "name": "512GB 售價",
      "state": "known",
      "value": 56900,
      "unit": "NT$"
    },
    {
      "name": "512GB 約含營業稅",
      "state": "known",
      "value": 2710,
      "unit": "NT$"
    },
    {
      "name": "1TB 售價",
      "state": "known",
      "value": 71900,
      "unit": "NT$"
    },
    {
      "name": "1TB 約含營業稅",
      "state": "known",
      "value": 3424,
      "unit": "NT$"
    },
    {
      "name": "2TB 售價",
      "state": "known",
      "value": 93900,
      "unit": "NT$"
    },
    {
      "name": "2TB 約含營業稅",
      "state": "known",
      "value": 4471,
      "unit": "NT$"
    }
  ],
  "evidence": [
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "a[href=\"https://www.apple.com/tw/shop/buy-iphone/iphone-18-pro/6.9-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-256gb-%E9%8A%80%E8%89%B2\"] .current_price",
      "context": "iPhone 18 Pro Max 台灣官網列 256GB 為 NT$49,900，並列其他容量的含稅售價；該配置約含加值型營業稅 NT$2,376。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.products[2] → displayValues.prices[\"mjxp4zp_a\"].currentPrice / priceCurrency / priceFeeDisclaimer",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": ".as-globalfooter-sosumi .pricing ul li",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "[data-footnote-id=\"c797ec623451481bcb7b6f5ad02aa26a\"]",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "a[href=\"https://www.apple.com/tw/shop/buy-iphone/iphone-18-pro/6.9-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-512gb-%E9%BB%91%E8%89%B2\"] .current_price",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.products[5] → displayValues.prices[\"mjxt4zp_a\"].currentPrice / priceCurrency / priceFeeDisclaimer",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "a[href=\"https://www.apple.com/tw/shop/buy-iphone/iphone-18-pro/6.9-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-1tb-%E5%8B%83%E6%A0%B9%E5%9C%B0%E7%B4%85%E8%89%B2\"] .current_price",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.products[0] → displayValues.prices[\"mjy04zp_a\"].currentPrice / priceCurrency / priceFeeDisclaimer",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "a[href=\"https://www.apple.com/tw/shop/buy-iphone/iphone-18-pro/6.9-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-2tb-%E5%86%B0%E5%B7%9D%E8%97%8D%E8%89%B2\"] .current_price",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.products[4] → displayValues.prices[\"mjy54zp_a\"].currentPrice / priceCurrency / priceFeeDisclaimer",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    }
  ],
  "review_record": {
    "reviewer": "Codex（直接原文與資料欄位核對後整合）",
    "reviewed_at": "2026-09-10T00:16:11.067Z",
    "notes": "已直接讀取原始 HTML、核對 SHA-256，並以 JSON 解析器讀取同頁資料；未執行原文 script。主代理逐項核對產品、配置、總價與適用的原文稅額，不以研究報告或其他代理一致意見代替原文。",
    "coverage_ids": [
      "PAGE-S24-TAIWAN-COMMERCE"
    ]
  }
}
```

### KB-252

```json
{
  "id": "KB-252",
  "source": "[S25]",
  "subject": "iPhone Duo",
  "topic": "台灣官網價格與上市",
  "claim_type": "availability",
  "statement_zh": "iPhone Duo 台灣官網列 256GB 為 NT$74,900，並列其他容量的含稅售價；該配置約含加值型營業稅 NT$3,567。",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "本次取得的台灣官網價格已包含稅與運送費用；價格屬當次快照，不是個別訂單或配送承諾。",
    "總價與最低月付、換購折抵分開；影片價格幣別另依使用者確認標示為美元；市場適用範圍與稅額仍分開核對。",
    "各容量的約略稅額直接來自同頁 priceFeeDisclaimer，已含在總價中；原註腳說明為近似值、可能隨時間變動，沒有自行計算稅率。",
    "容量是官方標稱容量，不能當作全部可用儲存空間。"
  ],
  "structured_values": [
    {
      "name": "台灣價格",
      "state": "known",
      "value": 74900,
      "unit": "NT$ 起"
    },
    {
      "name": "價格對應配置",
      "state": "known",
      "value": "256GB",
      "unit": null
    },
    {
      "name": "幣別",
      "state": "known",
      "value": "TWD（新台幣）",
      "unit": null
    },
    {
      "name": "含稅與運送",
      "state": "known",
      "value": "已包含",
      "unit": null
    },
    {
      "name": "約含營業稅",
      "state": "known",
      "value": 3567,
      "unit": "NT$"
    },
    {
      "name": "256GB 售價",
      "state": "known",
      "value": 74900,
      "unit": "NT$"
    },
    {
      "name": "256GB 約含營業稅",
      "state": "known",
      "value": 3567,
      "unit": "NT$"
    },
    {
      "name": "512GB 售價",
      "state": "known",
      "value": 81900,
      "unit": "NT$"
    },
    {
      "name": "512GB 約含營業稅",
      "state": "known",
      "value": 3900,
      "unit": "NT$"
    },
    {
      "name": "1TB 售價",
      "state": "known",
      "value": 96900,
      "unit": "NT$"
    },
    {
      "name": "1TB 約含營業稅",
      "state": "known",
      "value": 4614,
      "unit": "NT$"
    },
    {
      "name": "2TB 售價",
      "state": "known",
      "value": 118900,
      "unit": "NT$"
    },
    {
      "name": "2TB 約含營業稅",
      "state": "known",
      "value": 5662,
      "unit": "NT$"
    }
  ],
  "evidence": [
    {
      "source_id": "S25",
      "artifact_revision": "sha256:1ee7e9f1c9b549d0a51a7176fe64a6d0fbf5f4617a361f2d178f936f8a7ff86a",
      "modality": "webpage",
      "locator": "a[href=\"https://www.apple.com/tw/shop/buy-iphone/iphone-duo/7.6-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-256gb-%E6%98%9F%E5%85%89%E7%99%BD%E8%89%B2\"] .current_price",
      "context": "iPhone Duo 台灣官網列 256GB 為 NT$74,900，並列其他容量的含稅售價；該配置約含加值型營業稅 NT$3,567。"
    },
    {
      "source_id": "S25",
      "artifact_revision": "sha256:1ee7e9f1c9b549d0a51a7176fe64a6d0fbf5f4617a361f2d178f936f8a7ff86a",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.products[4] → displayValues.prices[\"mk2d4zp_a\"].currentPrice / priceCurrency / priceFeeDisclaimer",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S25",
      "artifact_revision": "sha256:1ee7e9f1c9b549d0a51a7176fe64a6d0fbf5f4617a361f2d178f936f8a7ff86a",
      "modality": "webpage",
      "locator": ".as-globalfooter-sosumi .pricing ul li",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S25",
      "artifact_revision": "sha256:1ee7e9f1c9b549d0a51a7176fe64a6d0fbf5f4617a361f2d178f936f8a7ff86a",
      "modality": "webpage",
      "locator": "[data-footnote-id=\"c797ec623451481bcb7b6f5ad02aa26a\"]",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S25",
      "artifact_revision": "sha256:1ee7e9f1c9b549d0a51a7176fe64a6d0fbf5f4617a361f2d178f936f8a7ff86a",
      "modality": "webpage",
      "locator": "a[href=\"https://www.apple.com/tw/shop/buy-iphone/iphone-duo/7.6-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-512gb-%E6%98%9F%E5%85%89%E7%99%BD%E8%89%B2\"] .current_price",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S25",
      "artifact_revision": "sha256:1ee7e9f1c9b549d0a51a7176fe64a6d0fbf5f4617a361f2d178f936f8a7ff86a",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.products[2] → displayValues.prices[\"mk2f4zp_a\"].currentPrice / priceCurrency / priceFeeDisclaimer",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S25",
      "artifact_revision": "sha256:1ee7e9f1c9b549d0a51a7176fe64a6d0fbf5f4617a361f2d178f936f8a7ff86a",
      "modality": "webpage",
      "locator": "a[href=\"https://www.apple.com/tw/shop/buy-iphone/iphone-duo/7.6-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-1tb-%E6%98%9F%E5%85%89%E7%99%BD%E8%89%B2\"] .current_price",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S25",
      "artifact_revision": "sha256:1ee7e9f1c9b549d0a51a7176fe64a6d0fbf5f4617a361f2d178f936f8a7ff86a",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.products[0] → displayValues.prices[\"mk2h4zp_a\"].currentPrice / priceCurrency / priceFeeDisclaimer",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S25",
      "artifact_revision": "sha256:1ee7e9f1c9b549d0a51a7176fe64a6d0fbf5f4617a361f2d178f936f8a7ff86a",
      "modality": "webpage",
      "locator": "a[href=\"https://www.apple.com/tw/shop/buy-iphone/iphone-duo/7.6-%E5%90%8B%E9%A1%AF%E7%A4%BA%E5%99%A8-2tb-%E6%98%9F%E5%85%89%E7%99%BD%E8%89%B2\"] .current_price",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S25",
      "artifact_revision": "sha256:1ee7e9f1c9b549d0a51a7176fe64a6d0fbf5f4617a361f2d178f936f8a7ff86a",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.products[6] → displayValues.prices[\"mk2k4zp_a\"].currentPrice / priceCurrency / priceFeeDisclaimer",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    }
  ],
  "review_record": {
    "reviewer": "Codex（直接原文與資料欄位核對後整合）",
    "reviewed_at": "2026-09-10T00:16:11.067Z",
    "notes": "已直接讀取原始 HTML、核對 SHA-256，並以 JSON 解析器讀取同頁資料；未執行原文 script。主代理逐項核對產品、配置、總價與適用的原文稅額，不以研究報告或其他代理一致意見代替原文。",
    "coverage_ids": [
      "PAGE-S25-TAIWAN-COMMERCE"
    ]
  }
}
```

### KB-253

```json
{
  "id": "KB-253",
  "source": "[S26]",
  "subject": "Apple Watch Series 12",
  "topic": "台灣官網價格與上市",
  "claim_type": "availability",
  "statement_zh": "Apple Watch Series 12 台灣官網列 NT$13,900 起，價格含稅與運送費用；須依錶殼配置與錶帶分辨最終價格。",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "本次取得的台灣官網價格已包含稅與運送費用；價格屬當次快照，不是個別訂單或配送承諾。",
    "總價與最低月付、換購折抵分開；影片價格幣別另依使用者確認標示為美元；市場適用範圍與稅額仍分開核對。",
    "價格索引可核對購買頁尺寸／材質／連線選項的起價；這些尺寸選項與技術規格的實際機身高度分開。未將特定錶帶連到該起價，不能當作所有錶帶或任意組合都同價。",
    "本次核對的價格欄位未取得個別稅額；不由總價倒推。"
  ],
  "structured_values": [
    {
      "name": "台灣價格",
      "state": "known",
      "value": 13900,
      "unit": "NT$ 起"
    },
    {
      "name": "價格對應配置",
      "state": "known",
      "value": "購買頁 42 公釐鋁金屬、GPS 選項；具體錶帶未核定",
      "unit": null
    },
    {
      "name": "幣別",
      "state": "known",
      "value": "TWD（新台幣）",
      "unit": null
    },
    {
      "name": "含稅與運送",
      "state": "known",
      "value": "已包含",
      "unit": null
    },
    {
      "name": "約含營業稅",
      "state": "unknown",
      "value": null,
      "unit": "NT$"
    },
    {
      "name": "起價的具體錶帶",
      "state": "unknown",
      "value": null,
      "unit": null
    },
    {
      "name": "購買頁 46 公釐 鋁金屬 GPS + 行動網路 配置起價",
      "state": "known",
      "value": 18400,
      "unit": "NT$ 起"
    },
    {
      "name": "購買頁 42 公釐 鋁金屬 GPS + 行動網路 配置起價",
      "state": "known",
      "value": 16900,
      "unit": "NT$ 起"
    },
    {
      "name": "購買頁 46 公釐 精密陶瓷 GPS + 行動網路 配置起價",
      "state": "known",
      "value": 34400,
      "unit": "NT$ 起"
    },
    {
      "name": "購買頁 42 公釐 鋁金屬 GPS 配置起價",
      "state": "known",
      "value": 13900,
      "unit": "NT$ 起"
    },
    {
      "name": "購買頁 42 公釐 鈦金屬 GPS + 行動網路 配置起價",
      "state": "known",
      "value": 24900,
      "unit": "NT$ 起"
    },
    {
      "name": "購買頁 42 公釐 精密陶瓷 GPS + 行動網路 配置起價",
      "state": "known",
      "value": 32900,
      "unit": "NT$ 起"
    },
    {
      "name": "購買頁 46 公釐 鈦金屬 GPS + 行動網路 配置起價",
      "state": "known",
      "value": 26400,
      "unit": "NT$ 起"
    },
    {
      "name": "購買頁 46 公釐 鋁金屬 GPS 配置起價",
      "state": "known",
      "value": 15400,
      "unit": "NT$ 起"
    }
  ],
  "evidence": [
    {
      "source_id": "S26",
      "artifact_revision": "sha256:525592b1a50bc6449e359ed37f960148dfd1ed5d6b122e8bbef5f98270c29d1e",
      "modality": "webpage",
      "locator": "script[type=\"application/ld+json\"] Product name=Apple Watch Series 12",
      "context": "Apple Watch Series 12 台灣官網列 NT$13,900 起，價格含稅與運送費用；須依錶殼配置與錶帶分辨最終價格。"
    },
    {
      "source_id": "S26",
      "artifact_revision": "sha256:525592b1a50bc6449e359ed37f960148dfd1ed5d6b122e8bbef5f98270c29d1e",
      "modality": "webpage",
      "locator": ".as-globalfooter-sosumi .pricing ul li",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S26",
      "artifact_revision": "sha256:525592b1a50bc6449e359ed37f960148dfd1ed5d6b122e8bbef5f98270c29d1e",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S26",
      "artifact_revision": "sha256:525592b1a50bc6449e359ed37f960148dfd1ed5d6b122e8bbef5f98270c29d1e",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.displayValues.prices[\"watch_cases-aluminum-46mm-gpscell\"] → products[*].priceKey / dimensions",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S26",
      "artifact_revision": "sha256:525592b1a50bc6449e359ed37f960148dfd1ed5d6b122e8bbef5f98270c29d1e",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.displayValues.prices[\"watch_cases-aluminum-42mm-gpscell\"] → products[*].priceKey / dimensions",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S26",
      "artifact_revision": "sha256:525592b1a50bc6449e359ed37f960148dfd1ed5d6b122e8bbef5f98270c29d1e",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.displayValues.prices[\"watch_cases-ceramic-46mm-gpscell\"] → products[*].priceKey / dimensions",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S26",
      "artifact_revision": "sha256:525592b1a50bc6449e359ed37f960148dfd1ed5d6b122e8bbef5f98270c29d1e",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.displayValues.prices[\"watch_cases-aluminum-42mm-gps\"] → products[*].priceKey / dimensions",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S26",
      "artifact_revision": "sha256:525592b1a50bc6449e359ed37f960148dfd1ed5d6b122e8bbef5f98270c29d1e",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.displayValues.prices[\"watch_cases-titanium-42mm-gpscell\"] → products[*].priceKey / dimensions",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S26",
      "artifact_revision": "sha256:525592b1a50bc6449e359ed37f960148dfd1ed5d6b122e8bbef5f98270c29d1e",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.displayValues.prices[\"watch_cases-ceramic-42mm-gpscell\"] → products[*].priceKey / dimensions",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S26",
      "artifact_revision": "sha256:525592b1a50bc6449e359ed37f960148dfd1ed5d6b122e8bbef5f98270c29d1e",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.displayValues.prices[\"watch_cases-titanium-46mm-gpscell\"] → products[*].priceKey / dimensions",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S26",
      "artifact_revision": "sha256:525592b1a50bc6449e359ed37f960148dfd1ed5d6b122e8bbef5f98270c29d1e",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.displayValues.prices[\"watch_cases-aluminum-46mm-gps\"] → products[*].priceKey / dimensions",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    }
  ],
  "review_record": {
    "reviewer": "Codex（直接原文與資料欄位核對後整合）",
    "reviewed_at": "2026-09-10T00:16:11.067Z",
    "notes": "已直接讀取原始 HTML、核對 SHA-256，並以 JSON 解析器讀取同頁資料；未執行原文 script。主代理逐項核對產品、配置、總價與適用的原文稅額，不以研究報告或其他代理一致意見代替原文。",
    "coverage_ids": [
      "PAGE-S26-TAIWAN-COMMERCE"
    ]
  }
}
```

### KB-254

```json
{
  "id": "KB-254",
  "source": "[S27]",
  "subject": "Apple Watch Ultra 4",
  "topic": "台灣官網價格與上市",
  "claim_type": "availability",
  "statement_zh": "Apple Watch Ultra 4 台灣官網列 NT$27,900 起，價格含稅與運送費用；須依錶殼配置與錶帶分辨最終價格。",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "本次取得的台灣官網價格已包含稅與運送費用；價格屬當次快照，不是個別訂單或配送承諾。",
    "總價與最低月付、換購折抵分開；影片價格幣別另依使用者確認標示為美元；市場適用範圍與稅額仍分開核對。",
    "價格索引可核對購買頁尺寸／材質／連線選項的起價；這些尺寸選項與技術規格的實際機身高度分開。未將特定錶帶連到該起價，不能當作所有錶帶或任意組合都同價。",
    "本次核對的價格欄位未取得個別稅額；不由總價倒推。"
  ],
  "structured_values": [
    {
      "name": "台灣價格",
      "state": "known",
      "value": 27900,
      "unit": "NT$ 起"
    },
    {
      "name": "價格對應配置",
      "state": "known",
      "value": "購買頁 49 公釐選項；具體錶帶未核定",
      "unit": null
    },
    {
      "name": "幣別",
      "state": "known",
      "value": "TWD（新台幣）",
      "unit": null
    },
    {
      "name": "含稅與運送",
      "state": "known",
      "value": "已包含",
      "unit": null
    },
    {
      "name": "約含營業稅",
      "state": "unknown",
      "value": null,
      "unit": "NT$"
    },
    {
      "name": "起價的具體錶帶",
      "state": "unknown",
      "value": null,
      "unit": null
    },
    {
      "name": "購買頁 49 公釐 配置起價",
      "state": "known",
      "value": 27900,
      "unit": "NT$ 起"
    }
  ],
  "evidence": [
    {
      "source_id": "S27",
      "artifact_revision": "sha256:2f536b102c22d1aeaa6192d5825a776cb8a0e916d569f19ae5ee079f211c8918",
      "modality": "webpage",
      "locator": "script[type=\"application/ld+json\"] Product name=Apple Watch Ultra 4",
      "context": "Apple Watch Ultra 4 台灣官網列 NT$27,900 起，價格含稅與運送費用；須依錶殼配置與錶帶分辨最終價格。"
    },
    {
      "source_id": "S27",
      "artifact_revision": "sha256:2f536b102c22d1aeaa6192d5825a776cb8a0e916d569f19ae5ee079f211c8918",
      "modality": "webpage",
      "locator": ".as-globalfooter-sosumi .pricing ul li",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S27",
      "artifact_revision": "sha256:2f536b102c22d1aeaa6192d5825a776cb8a0e916d569f19ae5ee079f211c8918",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S27",
      "artifact_revision": "sha256:2f536b102c22d1aeaa6192d5825a776cb8a0e916d569f19ae5ee079f211c8918",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.displayValues.prices[\"watch_cases-49mm\"] → products[*].priceKey / dimensions",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    }
  ],
  "review_record": {
    "reviewer": "Codex（直接原文與資料欄位核對後整合）",
    "reviewed_at": "2026-09-10T00:16:11.067Z",
    "notes": "已直接讀取原始 HTML、核對 SHA-256，並以 JSON 解析器讀取同頁資料；未執行原文 script。主代理逐項核對產品、配置、總價與適用的原文稅額，不以研究報告或其他代理一致意見代替原文。",
    "coverage_ids": [
      "PAGE-S27-TAIWAN-COMMERCE"
    ]
  }
}
```

### KB-255

```json
{
  "id": "KB-255",
  "source": "[S28]",
  "subject": "AirPods 5",
  "topic": "台灣官網價格與上市",
  "claim_type": "availability",
  "statement_zh": "AirPods 5 台灣官網售價 NT$4,490，包含稅與運送費用。",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "本次取得的台灣官網價格已包含稅與運送費用；價格屬當次快照，不是個別訂單或配送承諾。",
    "總價與最低月付、換購折抵分開；影片價格幣別另依使用者確認標示為美元；市場適用範圍與稅額仍分開核對。",
    "此為所列耳機與充電盒配置；購買頁說明 USB-C 充電連接線與電源轉接器不隨附。",
    "本次核對的價格欄位未取得個別稅額；不由總價倒推。"
  ],
  "structured_values": [
    {
      "name": "台灣價格",
      "state": "known",
      "value": 4490,
      "unit": "NT$"
    },
    {
      "name": "價格對應配置",
      "state": "known",
      "value": "AirPods 5",
      "unit": null
    },
    {
      "name": "幣別",
      "state": "known",
      "value": "TWD（新台幣）",
      "unit": null
    },
    {
      "name": "含稅與運送",
      "state": "known",
      "value": "已包含",
      "unit": null
    },
    {
      "name": "約含營業稅",
      "state": "unknown",
      "value": null,
      "unit": "NT$"
    }
  ],
  "evidence": [
    {
      "source_id": "S28",
      "artifact_revision": "sha256:56091ddc81a603473910f1d1809ce4e39e282a6cc69c09f5e05220f1916c8c87",
      "modality": "webpage",
      "locator": "a[href=\"/tw/shop/buy-airpods/airpods-5/%E6%9C%AA%E9%85%8D%E5%82%99%E7%84%A1%E7%B7%9A%E5%85%85%E9%9B%BB%E7%9B%92\"] .current_price",
      "context": "AirPods 5 台灣官網售價 NT$4,490，包含稅與運送費用。"
    },
    {
      "source_id": "S28",
      "artifact_revision": "sha256:56091ddc81a603473910f1d1809ce4e39e282a6cc69c09f5e05220f1916c8c87",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.products[0] → displayValues.prices[\"4490_00\"].currentPrice / priceCurrency",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S28",
      "artifact_revision": "sha256:56091ddc81a603473910f1d1809ce4e39e282a6cc69c09f5e05220f1916c8c87",
      "modality": "webpage",
      "locator": ".as-globalfooter-sosumi .pricing ul li",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S28",
      "artifact_revision": "sha256:56091ddc81a603473910f1d1809ce4e39e282a6cc69c09f5e05220f1916c8c87",
      "modality": "webpage",
      "locator": ".rs-buyflow-witbfooter .show-for-MKFW4",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    }
  ],
  "review_record": {
    "reviewer": "Codex（直接原文與資料欄位核對後整合）",
    "reviewed_at": "2026-09-10T00:16:11.067Z",
    "notes": "已直接讀取原始 HTML、核對 SHA-256，並以 JSON 解析器讀取同頁資料；未執行原文 script。主代理逐項核對產品、配置、總價與適用的原文稅額，不以研究報告或其他代理一致意見代替原文。",
    "coverage_ids": [
      "PAGE-S28-TAIWAN-COMMERCE"
    ]
  }
}
```

### KB-256

```json
{
  "id": "KB-256",
  "source": "[S28]",
  "subject": "AirPods 5 配備無線充電盒",
  "topic": "台灣官網價格與上市",
  "claim_type": "availability",
  "statement_zh": "AirPods 5 配備無線充電盒 台灣官網售價 NT$5,190，包含稅與運送費用。",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "本次取得的台灣官網價格已包含稅與運送費用；價格屬當次快照，不是個別訂單或配送承諾。",
    "總價與最低月付、換購折抵分開；影片價格幣別另依使用者確認標示為美元；市場適用範圍與稅額仍分開核對。",
    "此為所列耳機與充電盒配置；購買頁說明 USB-C 充電連接線與電源轉接器不隨附。",
    "本次核對的價格欄位未取得個別稅額；不由總價倒推。"
  ],
  "structured_values": [
    {
      "name": "台灣價格",
      "state": "known",
      "value": 5190,
      "unit": "NT$"
    },
    {
      "name": "價格對應配置",
      "state": "known",
      "value": "AirPods 5 配備無線充電盒",
      "unit": null
    },
    {
      "name": "幣別",
      "state": "known",
      "value": "TWD（新台幣）",
      "unit": null
    },
    {
      "name": "含稅與運送",
      "state": "known",
      "value": "已包含",
      "unit": null
    },
    {
      "name": "約含營業稅",
      "state": "unknown",
      "value": null,
      "unit": "NT$"
    }
  ],
  "evidence": [
    {
      "source_id": "S28",
      "artifact_revision": "sha256:56091ddc81a603473910f1d1809ce4e39e282a6cc69c09f5e05220f1916c8c87",
      "modality": "webpage",
      "locator": "a[href=\"/tw/shop/buy-airpods/airpods-5/%E9%85%8D%E5%82%99%E7%84%A1%E7%B7%9A%E5%85%85%E9%9B%BB%E7%9B%92\"] .current_price",
      "context": "AirPods 5 配備無線充電盒 台灣官網售價 NT$5,190，包含稅與運送費用。"
    },
    {
      "source_id": "S28",
      "artifact_revision": "sha256:56091ddc81a603473910f1d1809ce4e39e282a6cc69c09f5e05220f1916c8c87",
      "modality": "webpage",
      "locator": "window.PRODUCT_SELECTION_BOOTSTRAP.productSelectionData.products[1] → displayValues.prices[\"5190_00\"].currentPrice / priceCurrency",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S28",
      "artifact_revision": "sha256:56091ddc81a603473910f1d1809ce4e39e282a6cc69c09f5e05220f1916c8c87",
      "modality": "webpage",
      "locator": ".as-globalfooter-sosumi .pricing ul li",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S28",
      "artifact_revision": "sha256:56091ddc81a603473910f1d1809ce4e39e282a6cc69c09f5e05220f1916c8c87",
      "modality": "webpage",
      "locator": ".rs-buyflow-witbfooter .show-for-MKFT4",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    }
  ],
  "review_record": {
    "reviewer": "Codex（直接原文與資料欄位核對後整合）",
    "reviewed_at": "2026-09-10T00:16:11.067Z",
    "notes": "已直接讀取原始 HTML、核對 SHA-256，並以 JSON 解析器讀取同頁資料；未執行原文 script。主代理逐項核對產品、配置、總價與適用的原文稅額，不以研究報告或其他代理一致意見代替原文。",
    "coverage_ids": [
      "PAGE-S28-TAIWAN-COMMERCE"
    ]
  }
}
```

### KB-257

```json
{
  "id": "KB-257",
  "source": "[S24]",
  "subject": "iPhone 18 Pro 與 iPhone 18 Pro Max",
  "topic": "台灣官網價格與上市",
  "claim_type": "availability",
  "statement_zh": "iPhone 18 Pro 與 iPhone 18 Pro Max 台灣購買頁公告：9 月 12 日晚上 8 點開始預訂；9 月 18 日開始發售。",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "台灣官網當次公告以月日與上午／晚上列示，未在這些日期文字中明列年份及時區；保留原文，不轉成含年份的時間戳記。",
    "發售日期是頁面公告，不等於所有配置的庫存或個別訂單交期；也不改寫影片原日期卡的市場語境。"
  ],
  "structured_values": [
    {
      "name": "產品",
      "state": "known",
      "value": "iPhone 18 Pro 與 iPhone 18 Pro Max",
      "unit": null
    },
    {
      "name": "開始預訂",
      "state": "known",
      "value": "9 月 12 日晚上 8 點",
      "unit": null
    },
    {
      "name": "開始發售",
      "state": "known",
      "value": "9 月 18 日",
      "unit": null
    },
    {
      "name": "年份",
      "state": "unknown",
      "value": null,
      "unit": null
    },
    {
      "name": "時區",
      "state": "unknown",
      "value": null,
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S24",
      "artifact_revision": "sha256:a4eace619dc0e22124a2087c7a31d4f84ed2103e4da4a9be65a198eb7c4f1bc0",
      "modality": "webpage",
      "locator": "#as-noscript-header",
      "context": "iPhone 18 Pro 與 iPhone 18 Pro Max 台灣購買頁公告：9 月 12 日晚上 8 點開始預訂；9 月 18 日開始發售。"
    }
  ],
  "review_record": {
    "reviewer": "Codex（直接原文與資料欄位核對後整合）",
    "reviewed_at": "2026-09-10T00:16:11.067Z",
    "notes": "已直接讀取原始 HTML、核對 SHA-256，並以 JSON 解析器讀取同頁資料；未執行原文 script。主代理逐項核對產品、配置、總價與適用的原文稅額，不以研究報告或其他代理一致意見代替原文。",
    "coverage_ids": [
      "PAGE-S24-TAIWAN-COMMERCE"
    ]
  }
}
```

### KB-258

```json
{
  "id": "KB-258",
  "source": "[S25]",
  "subject": "iPhone Duo",
  "topic": "台灣官網價格與上市",
  "claim_type": "availability",
  "statement_zh": "iPhone Duo 台灣購買頁公告：10 月 16 日晚上 8 點開始預訂；10 月 23 日開始發售。",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "台灣官網當次公告以月日與上午／晚上列示，未在這些日期文字中明列年份及時區；保留原文，不轉成含年份的時間戳記。",
    "發售日期是頁面公告，不等於所有配置的庫存或個別訂單交期；也不改寫影片原日期卡的市場語境。"
  ],
  "structured_values": [
    {
      "name": "產品",
      "state": "known",
      "value": "iPhone Duo",
      "unit": null
    },
    {
      "name": "開始預訂",
      "state": "known",
      "value": "10 月 16 日晚上 8 點",
      "unit": null
    },
    {
      "name": "開始發售",
      "state": "known",
      "value": "10 月 23 日",
      "unit": null
    },
    {
      "name": "年份",
      "state": "unknown",
      "value": null,
      "unit": null
    },
    {
      "name": "時區",
      "state": "unknown",
      "value": null,
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S25",
      "artifact_revision": "sha256:1ee7e9f1c9b549d0a51a7176fe64a6d0fbf5f4617a361f2d178f936f8a7ff86a",
      "modality": "webpage",
      "locator": "#as-noscript-header",
      "context": "iPhone Duo 台灣購買頁公告：10 月 16 日晚上 8 點開始預訂；10 月 23 日開始發售。"
    }
  ],
  "review_record": {
    "reviewer": "Codex（直接原文與資料欄位核對後整合）",
    "reviewed_at": "2026-09-10T00:16:11.067Z",
    "notes": "已直接讀取原始 HTML、核對 SHA-256，並以 JSON 解析器讀取同頁資料；未執行原文 script。主代理逐項核對產品、配置、總價與適用的原文稅額，不以研究報告或其他代理一致意見代替原文。",
    "coverage_ids": [
      "PAGE-S25-TAIWAN-COMMERCE"
    ]
  }
}
```

### KB-259

```json
{
  "id": "KB-259",
  "source": "[S29]",
  "subject": "Apple Watch Series 12、Apple Watch Ultra 4 與 AirPods 5",
  "topic": "台灣官網價格與上市",
  "claim_type": "availability",
  "statement_zh": "Apple Watch Series 12、Apple Watch Ultra 4 與 AirPods 5 在台灣 Apple 首頁各自公告：9 月 11 日上午 9 點開始預訂，9 月 18 日開始發售。",
  "verification": "verified",
  "availability_status": "announced",
  "qualifiers": [
    "台灣官網當次公告以月日與上午／晚上列示，未在這些日期文字中明列年份及時區；保留原文，不轉成含年份的時間戳記。",
    "發售日期是頁面公告，不等於所有配置的庫存或個別訂單交期；也不改寫影片原日期卡的市場語境。"
  ],
  "structured_values": [
    {
      "name": "產品",
      "state": "known",
      "value": "Apple Watch Series 12、Apple Watch Ultra 4 與 AirPods 5",
      "unit": null
    },
    {
      "name": "開始預訂",
      "state": "known",
      "value": "9 月 11 日上午 9 點",
      "unit": null
    },
    {
      "name": "開始發售",
      "state": "known",
      "value": "9 月 18 日",
      "unit": null
    },
    {
      "name": "年份",
      "state": "unknown",
      "value": null,
      "unit": null
    },
    {
      "name": "時區",
      "state": "unknown",
      "value": null,
      "unit": null
    }
  ],
  "evidence": [
    {
      "source_id": "S29",
      "artifact_revision": "sha256:94041eb7004f021cb3cad6f8c85816d33be875d86aa2f8b19cf8cc7b8247e433",
      "modality": "webpage",
      "locator": "[data-tile-id=\"apple-watch-series-12\"] .tile-callout",
      "context": "Apple Watch Series 12、Apple Watch Ultra 4 與 AirPods 5 在台灣 Apple 首頁各自公告：9 月 11 日上午 9 點開始預訂，9 月 18 日開始發售。"
    },
    {
      "source_id": "S29",
      "artifact_revision": "sha256:94041eb7004f021cb3cad6f8c85816d33be875d86aa2f8b19cf8cc7b8247e433",
      "modality": "webpage",
      "locator": "[data-tile-id=\"apple-watch-ultra-4\"] .tile-callout",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    },
    {
      "source_id": "S29",
      "artifact_revision": "sha256:94041eb7004f021cb3cad6f8c85816d33be875d86aa2f8b19cf8cc7b8247e433",
      "modality": "webpage",
      "locator": "[data-tile-id=\"airpods-5\"] .tile-callout",
      "context": "同頁價格、配置映射及價格條件的直接核對；僅支持本條台灣商店資訊。"
    }
  ],
  "review_record": {
    "reviewer": "Codex（直接原文與資料欄位核對後整合）",
    "reviewed_at": "2026-09-10T00:16:11.067Z",
    "notes": "已直接讀取原始 HTML、核對 SHA-256，並以 JSON 解析器讀取同頁資料；未執行原文 script。主代理逐項核對產品、配置、總價與適用的原文稅額，不以研究報告或其他代理一致意見代替原文。",
    "coverage_ids": [
      "PAGE-S29-TAIWAN-COMMERCE"
    ]
  }
}
```

### KB-260

```json
{
  "id": "KB-260",
  "source": "[S30]",
  "statement_zh": "Guided generation 以 Swift 型別與 constrained sampling 約束輸出格式；@Generable 宣告可生成的型別，@Guide 可描述或限制儲存屬性，屬性依宣告順序生成。",
  "subject": "Foundation Models：用型別約束生成格式",
  "topic": "Foundation Models：用型別約束生成格式",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "這裡的格式約束不構成內容事實正確、來源充分或新品相容的證據。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S30",
      "artifact_revision": "sha256:07b203415316c9181ae7ea3a76dcc2eea5e11ee0fcb97e4e6f9a175eed1c9d75",
      "modality": "webpage",
      "locator": "Overview",
      "context": "Guided generation 以 Swift 型別與 constrained sampling 約束輸出格式；@Generable 宣告可生成的型別，@Guide 可描述或限制儲存屬性，屬性依宣告順序生成。"
    },
    {
      "source_id": "S30",
      "artifact_revision": "sha256:07b203415316c9181ae7ea3a76dcc2eea5e11ee0fcb97e4e6f9a175eed1c9d75",
      "modality": "webpage",
      "locator": "Conform your data type to Generable",
      "context": "Guided generation 以 Swift 型別與 constrained sampling 約束輸出格式；@Generable 宣告可生成的型別，@Guide 可描述或限制儲存屬性，屬性依宣告順序生成。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-260"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-261

```json
{
  "id": "KB-261",
  "source": "[S30]",
  "statement_zh": "輸出選項若到執行時才知道，可使用 DynamicGenerationSchema 建立結構，再轉為 GenerationSchema 交給 session；重複型別、衝突的屬性名稱或未定義參照可能使 schema 建立失敗。",
  "subject": "Foundation Models：在執行時建立輸出規格",
  "topic": "Foundation Models：在執行時建立輸出規格",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S30",
      "artifact_revision": "sha256:07b203415316c9181ae7ea3a76dcc2eea5e11ee0fcb97e4e6f9a175eed1c9d75",
      "modality": "webpage",
      "locator": "Define a dynamic schema at runtime",
      "context": "輸出選項若到執行時才知道，可使用 DynamicGenerationSchema 建立結構，再轉為 GenerationSchema 交給 session；重複型別、衝突的屬性名稱或未定義參照可能使 schema 建立失敗。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-261"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-262

```json
{
  "id": "KB-262",
  "source": "[S31]",
  "statement_zh": "工具呼叫可由 App 程式提供資料或執行動作；與 Contacts、HealthKit 等框架整合仍使用既有隱私與安全機制。工具可以拋出錯誤中止呼叫，session 的 ToolCallError 會保留出錯工具與 underlyingError。",
  "subject": "Foundation Models：工具仍使用既有權限與錯誤機制",
  "topic": "Foundation Models：工具仍使用既有權限與錯誤機制",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "工具可產生外部副作用；本段沒有提供任何特定產品權限或 API 存取核准。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S31",
      "artifact_revision": "sha256:0da28f34d39c1fed77cd7391ccf7e0a153ff071aad2ec2a7415175e93ab65667",
      "modality": "webpage",
      "locator": "Overview",
      "context": "工具呼叫可由 App 程式提供資料或執行動作；與 Contacts、HealthKit 等框架整合仍使用既有隱私與安全機制。工具可以拋出錯誤中止呼叫，session 的 ToolCallError 會保留出錯工具與 underlyingError。"
    },
    {
      "source_id": "S31",
      "artifact_revision": "sha256:0da28f34d39c1fed77cd7391ccf7e0a153ff071aad2ec2a7415175e93ab65667",
      "modality": "webpage",
      "locator": "Handle errors thrown by a tool",
      "context": "工具呼叫可由 App 程式提供資料或執行動作；與 Contacts、HealthKit 等框架整合仍使用既有隱私與安全機制。工具可以拋出錯誤中止呼叫，session 的 ToolCallError 會保留出錯工具與 underlyingError。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-262"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-263

```json
{
  "id": "KB-263",
  "source": "[S31]",
  "statement_zh": "工具呼叫預設由模型依提示決定；tool calling mode 可改成 required 或 disallowed。官方提醒 required 必須設計退出條件，例如從工具拋出錯誤或以 DynamicProfile 動態改變模式，否則模型會持續呼叫工具。",
  "subject": "Foundation Models：強制工具呼叫需要退出條件",
  "topic": "Foundation Models：強制工具呼叫需要退出條件",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "這份指南沒有 symbol 平台 metadata，不能據文章推定各模式的最低 SDK 或新品支援版本。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S31",
      "artifact_revision": "sha256:0da28f34d39c1fed77cd7391ccf7e0a153ff071aad2ec2a7415175e93ab65667",
      "modality": "webpage",
      "locator": "Configure the tool calling mode",
      "context": "工具呼叫預設由模型依提示決定；tool calling mode 可改成 required 或 disallowed。官方提醒 required 必須設計退出條件，例如從工具拋出錯誤或以 DynamicProfile 動態改變模式，否則模型會持續呼叫工具。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-263"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-264

```json
{
  "id": "KB-264",
  "source": "[S32]",
  "statement_zh": "官方安全指南指出 session 優先遵循 instructions；不應把使用者輸入或未核實的外部資料放入 instructions，否則會增加 prompt injection 風險。應由可信內容定義角色與行為，再將外部內容作為 prompt 資料。",
  "subject": "Foundation Models：可信 instructions 與外部輸入分開",
  "topic": "Foundation Models：可信 instructions 與外部輸入分開",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "這是 App 設計的風險降低措施，不是阻擋所有提示注入的保證。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S32",
      "artifact_revision": "sha256:3a17d51b2f6efc5d66083be5c10b22d7b62ab3e7de9a9ca8eff7c04ae3208803",
      "modality": "webpage",
      "locator": "Instruct the model for added safety",
      "context": "官方安全指南指出 session 優先遵循 instructions；不應把使用者輸入或未核實的外部資料放入 instructions，否則會增加 prompt injection 風險。應由可信內容定義角色與行為，再將外部內容作為 prompt 資料。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-264"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-265

```json
{
  "id": "KB-265",
  "source": "[S32]",
  "statement_zh": "模型輸入或輸出未通過 guardrail 可拋出 guardrailViolation；一般字串回覆也可能直接出現拒絕訊息。使用 guided generation 時，拒絕則透過 refusal 錯誤表示，取得拒絕說明是非同步操作，而且本身仍可能失敗。",
  "subject": "Foundation Models：區分 guardrail 與模型拒絕",
  "topic": "Foundation Models：區分 guardrail 與模型拒絕",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "拒絕或安全錯誤不等於網路故障，也不表示 App 已完成所要求的操作。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S32",
      "artifact_revision": "sha256:3a17d51b2f6efc5d66083be5c10b22d7b62ab3e7de9a9ca8eff7c04ae3208803",
      "modality": "webpage",
      "locator": "Handle guardrail errors",
      "context": "模型輸入或輸出未通過 guardrail 可拋出 guardrailViolation；一般字串回覆也可能直接出現拒絕訊息。使用 guided generation 時，拒絕則透過 refusal 錯誤表示，取得拒絕說明是非同步操作，而且本身仍可能失敗。"
    },
    {
      "source_id": "S32",
      "artifact_revision": "sha256:3a17d51b2f6efc5d66083be5c10b22d7b62ab3e7de9a9ca8eff7c04ae3208803",
      "modality": "webpage",
      "locator": "Handle model refusals",
      "context": "模型輸入或輸出未通過 guardrail 可拋出 guardrailViolation；一般字串回覆也可能直接出現拒絕訊息。使用 guided generation 時，拒絕則透過 refusal 錯誤表示，取得拒絕說明是非同步操作，而且本身仍可能失敗。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-265"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-266

```json
{
  "id": "KB-266",
  "source": "[S33]",
  "statement_zh": "呼叫裝置端模型前，可用 supportsLocale(_:) 核對 locale；預設考慮目前語言與 App 個別語言設定。supportedLanguages 可取得模型語言清單；OS 與模型版本不同，語言支援也可能不同。",
  "subject": "Foundation Models：查詢當前 locale 支援",
  "topic": "Foundation Models：查詢當前 locale 支援",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "這是 Foundation Models 裝置端模型的查詢方式，不能替 Siri AI、即時翻譯或本次產品的功能語言清單背書。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S33",
      "artifact_revision": "sha256:99a7bf06e90b8aac0fe8a2b36c54de1e39ee91ff547a0c2ce1587d037c95fcc6",
      "modality": "webpage",
      "locator": "Check a person’s language settings for your app",
      "context": "呼叫裝置端模型前，可用 supportsLocale(_:) 核對 locale；預設考慮目前語言與 App 個別語言設定。supportedLanguages 可取得模型語言清單；OS 與模型版本不同，語言支援也可能不同。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-266"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-267

```json
{
  "id": "KB-267",
  "source": "[S33]",
  "statement_zh": "模型偵測到不支援語言時可拋出 unsupportedLanguageOrLocale；官方建議說明限制、停用該生成功能或提供替代體驗。混在受支援語言內的短段不支援語言可能未被偵測，其安全檢查也可能漏判。",
  "subject": "Foundation Models：不支援語言仍須有替代體驗",
  "topic": "Foundation Models：不支援語言仍須有替代體驗",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "不能把沒有拋出語言錯誤解讀成該語言的生成品質或安全性已驗證。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S33",
      "artifact_revision": "sha256:99a7bf06e90b8aac0fe8a2b36c54de1e39ee91ff547a0c2ce1587d037c95fcc6",
      "modality": "webpage",
      "locator": "Handle an unsupported language or locale errors",
      "context": "模型偵測到不支援語言時可拋出 unsupportedLanguageOrLocale；官方建議說明限制、停用該生成功能或提供替代體驗。混在受支援語言內的短段不支援語言可能未被偵測，其安全檢查也可能漏判。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-267"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-268

```json
{
  "id": "KB-268",
  "source": "[S34]",
  "statement_zh": "GenerationOptions 的 maximumResponseTokens 用於防止非預期冗長回覆；官方提醒，嚴格限制回覆 token 數可能使結果格式不完整或文法不正確。",
  "subject": "Foundation Models：回應長度上限的代價",
  "topic": "Foundation Models：回應長度上限的代價",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "這不是可用的 context window 總量，也沒有在本文指定一個所有模型通用的安全數值。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S34",
      "artifact_revision": "sha256:4c1bcb88a0ba02a93625cf733df350cf52770294e7167eadb8c07bcca51f6b65",
      "modality": "webpage",
      "locator": "Overview",
      "context": "GenerationOptions 的 maximumResponseTokens 用於防止非預期冗長回覆；官方提醒，嚴格限制回覆 token 數可能使結果格式不完整或文法不正確。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-268"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "26.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "26.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "26.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "26.0",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "26.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "27.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-269

```json
{
  "id": "KB-269",
  "source": "[S34]",
  "statement_zh": "LanguageModelSession 的 context window 不只包含使用者 prompt；Instructions、Tool、Generable 型別與模型回覆都會占用 token，超過可用 context size 會拋出 contextSizeExceeded。",
  "subject": "Foundation Models：整個 session 都消耗 context",
  "topic": "Foundation Models：整個 session 都消耗 context",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "本頁沒有列出可套用所有 OS、模型與裝置的固定 context 容量。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S34",
      "artifact_revision": "sha256:4c1bcb88a0ba02a93625cf733df350cf52770294e7167eadb8c07bcca51f6b65",
      "modality": "webpage",
      "locator": "Overview",
      "context": "LanguageModelSession 的 context window 不只包含使用者 prompt；Instructions、Tool、Generable 型別與模型回覆都會占用 token，超過可用 context size 會拋出 contextSizeExceeded。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-269"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-126"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "26.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "26.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "26.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "26.0",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "26.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "27.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-270

```json
{
  "id": "KB-270",
  "source": "[S35]",
  "statement_zh": "系統在呼叫 App Intent 的 perform() 前先解析全部必要參數；無法可靠取得參數時可向使用者補問，全部必要參數無法解析則回報錯誤。perform() 執行 App 自己的程式，執行位置可受 intent 類型、設定與 app extension 影響。",
  "subject": "App Intents：先解析參數再執行 App 程式",
  "topic": "App Intents：先解析參數再執行 App 程式",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "系統解析出參數不等於業務操作已成功，仍需檢查實際執行結果。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S35",
      "artifact_revision": "sha256:f85c5f7ad988728d51e928acf038b0134a94c8b4c97215201ea7277ac5053e48",
      "modality": "webpage",
      "locator": "Add parameters for any data you require",
      "context": "系統在呼叫 App Intent 的 perform() 前先解析全部必要參數；無法可靠取得參數時可向使用者補問，全部必要參數無法解析則回報錯誤。perform() 執行 App 自己的程式，執行位置可受 intent 類型、設定與 app extension 影響。"
    },
    {
      "source_id": "S35",
      "artifact_revision": "sha256:f85c5f7ad988728d51e928acf038b0134a94c8b4c97215201ea7277ac5053e48",
      "modality": "webpage",
      "locator": "Write code for the action",
      "context": "系統在呼叫 App Intent 的 perform() 前先解析全部必要參數；無法可靠取得參數時可向使用者補問，全部必要參數無法解析則回報錯誤。perform() 執行 App 自己的程式，執行位置可受 intent 類型、設定與 app extension 影響。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-270"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-222",
      "KB-224"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-271

```json
{
  "id": "KB-271",
  "source": "[S35]",
  "statement_zh": "App Intent 可透過結果回傳值、對話文字或自訂 snippet view；回傳值可供另一個動作使用。文件提醒，由 Siri AI 呼叫 App Intent 時，系統可能不顯示 IntentDialog 或 ShowsSnippetView。",
  "subject": "App Intents：結果型別與顯示方式分開",
  "topic": "App Intents：結果型別與顯示方式分開",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "不能依宣告 snippet 或 dialog 就保證每個系統入口都會顯示同一介面。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S35",
      "artifact_revision": "sha256:f85c5f7ad988728d51e928acf038b0134a94c8b4c97215201ea7277ac5053e48",
      "modality": "webpage",
      "locator": "Return a result back to the caller",
      "context": "App Intent 可透過結果回傳值、對話文字或自訂 snippet view；回傳值可供另一個動作使用。文件提醒，由 Siri AI 呼叫 App Intent 時，系統可能不顯示 IntentDialog 或 ShowsSnippetView。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-271"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-222",
      "KB-224"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-272

```json
{
  "id": "KB-272",
  "source": "[S36]",
  "statement_zh": "AppShortcutsProvider 提供 App 預先配置的捷徑；appShortcuts 列出捷徑，AppShortcutsBuilder 可宣告式描述其內容，shortcutTileColor 設定捷徑方塊背景色。",
  "subject": "App Shortcuts：集中提供預先配置的捷徑",
  "topic": "App Shortcuts：集中提供預先配置的捷徑",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "這些是 provider 層的宣告；未據此推定任何新品的自然語言任務都能自動完成。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S36",
      "artifact_revision": "sha256:72f0b3b73db51677a69f2b12a43a027a0ee099dbf3210cc3c6aea46fc0e28db8",
      "modality": "webpage",
      "locator": "Providing App Shortcuts",
      "context": "AppShortcutsProvider 提供 App 預先配置的捷徑；appShortcuts 列出捷徑，AppShortcutsBuilder 可宣告式描述其內容，shortcutTileColor 設定捷徑方塊背景色。"
    },
    {
      "source_id": "S36",
      "artifact_revision": "sha256:72f0b3b73db51677a69f2b12a43a027a0ee099dbf3210cc3c6aea46fc0e28db8",
      "modality": "webpage",
      "locator": "Configuring shortcut tiles",
      "context": "AppShortcutsProvider 提供 App 預先配置的捷徑；appShortcuts 列出捷徑，AppShortcutsBuilder 可宣告式描述其內容，shortcutTileColor 設定捷徑方塊背景色。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-272"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-222",
      "KB-224"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "9.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 visionOS 在 JSON 有平台項目但未列 introducedAt，故不填入需有版本的 SDK 陣列；不推定不支援。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-273

```json
{
  "id": "KB-273",
  "source": "[S36]",
  "statement_zh": "AppShortcutsProvider 文件指出，Apple 可能擷取匿名化的 App Shortcuts 資料，例如本地化短語、顯示表示值，以及相關 intent 的標題與說明，用於機器學習模型訓練以改善捷徑體驗。",
  "subject": "App Shortcuts：官方揭露的匿名化資料用途",
  "topic": "App Shortcuts：官方揭露的匿名化資料用途",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "原文列的是這些捷徑資料，不能擴大成整份私人資料庫或全部使用者 prompt 都會被擷取。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S36",
      "artifact_revision": "sha256:72f0b3b73db51677a69f2b12a43a027a0ee099dbf3210cc3c6aea46fc0e28db8",
      "modality": "webpage",
      "locator": "Overview",
      "context": "AppShortcutsProvider 文件指出，Apple 可能擷取匿名化的 App Shortcuts 資料，例如本地化短語、顯示表示值，以及相關 intent 的標題與說明，用於機器學習模型訓練以改善捷徑體驗。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-273"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-222",
      "KB-224"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "9.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 visionOS 在 JSON 有平台項目但未列 introducedAt，故不填入需有版本的 SDK 陣列；不推定不支援。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-274

```json
{
  "id": "KB-274",
  "source": "[S37]",
  "statement_zh": "EntityQuery 定義系統如何取得特定 AppEntity 實例。entities(for:) 接受 entity ID 陣列並回傳對應實例；可先查記憶體，再非同步讀取磁碟或後端。指定 ID 的項目已不存在時，應從回傳陣列省略。",
  "subject": "App Entities：ID 查詢與已不存在的項目",
  "topic": "App Entities：ID 查詢與已不存在的項目",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "這只是 App 提供的查詢實作，不授予讀取其他 App 私人內容的能力。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S37",
      "artifact_revision": "sha256:53a373290cc7ae7e10162bbfd793163bec3d92ca50ff56876ec452eb519cfac7",
      "modality": "webpage",
      "locator": "Overview",
      "context": "EntityQuery 定義系統如何取得特定 AppEntity 實例。entities(for:) 接受 entity ID 陣列並回傳對應實例；可先查記憶體，再非同步讀取磁碟或後端。指定 ID 的項目已不存在時，應從回傳陣列省略。"
    },
    {
      "source_id": "S37",
      "artifact_revision": "sha256:53a373290cc7ae7e10162bbfd793163bec3d92ca50ff56876ec452eb519cfac7",
      "modality": "webpage",
      "locator": "Resolve entities by identifier",
      "context": "EntityQuery 定義系統如何取得特定 AppEntity 實例。entities(for:) 接受 entity ID 陣列並回傳對應實例；可先查記憶體，再非同步讀取磁碟或後端。指定 ID 的項目已不存在時，應從回傳陣列省略。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-274"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-222",
      "KB-224"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "9.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 visionOS 在 JSON 有平台項目但未列 introducedAt，故不填入需有版本的 SDK 陣列；不推定不支援。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-276

```json
{
  "id": "KB-276",
  "source": "[S38]",
  "statement_zh": "AppIntent.authenticationPolicy 可要求執行前先認證；預設 alwaysAllowed 允許不經認證執行 intent，包含裝置鎖定時。",
  "subject": "App Intent：明確設定執行前認證政策",
  "topic": "App Intent：明確設定執行前認證政策",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "這個屬性的預設值不代表底層資料、帳號、系統權限或業務條件都已滿足。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S38",
      "artifact_revision": "sha256:ad9a8f69470770168971e466d2c1627a69d14553f2ab3f24753a9d6d7c9d776c",
      "modality": "webpage",
      "locator": "Discussion",
      "context": "AppIntent.authenticationPolicy 可要求執行前先認證；預設 alwaysAllowed 允許不經認證執行 intent，包含裝置鎖定時。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-276"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-222",
      "KB-224"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "9.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 visionOS 在 JSON 有平台項目但未列 introducedAt，故不填入需有版本的 SDK 陣列；不推定不支援。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-278

```json
{
  "id": "KB-278",
  "source": "[S39]",
  "statement_zh": "官方驗證指南將檢查分為 App Intents Testing 的程式整合測試、捷徑的參數與結果、Spotlight 的 entity 可發現性，以及 Siri 的端到端自然語言體驗；每一層能發現的問題不同，前一層通過不能取代後一層。",
  "subject": "App Intents：驗證要涵蓋程式、捷徑、搜尋與語音",
  "topic": "App Intents：驗證要涵蓋程式、捷徑、搜尋與語音",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "本次只整理驗證要求，沒有宣稱已執行其中任何 SDK 或新品實機測試。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S39",
      "artifact_revision": "sha256:8477e41dd93c4d3a3ef79c2427c04d1d776c8f51a74002cb7732e188d27b4a4e",
      "modality": "webpage",
      "locator": "Overview",
      "context": "官方驗證指南將檢查分為 App Intents Testing 的程式整合測試、捷徑的參數與結果、Spotlight 的 entity 可發現性，以及 Siri 的端到端自然語言體驗；每一層能發現的問題不同，前一層通過不能取代後一層。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-278"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-222",
      "KB-224"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-279

```json
{
  "id": "KB-279",
  "source": "[S39]",
  "statement_zh": "Spotlight 的索引行為不一定與 Simulator 相同，官方要求在實體裝置驗證整合與 entity 可發現性。Siri 端到端測試應涵蓋不同說法、跨 App 流程、支援語言，以及 官方列舉的耳機純語音情境，確認口頭回覆清楚且保留重點。",
  "subject": "App Intents：真機與無畫面的驗證情境",
  "topic": "App Intents：真機與無畫面的驗證情境",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "官方公開文件的 context-only 技術對照；沒有 SDK 編譯或新品真機驗證，不據此推導特定產品第三方 API 支援。",
    "這是測試設計脈絡，沒有證明 AirPods 5 或本次 Siri AI 的完整第三方相容性。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S39",
      "artifact_revision": "sha256:8477e41dd93c4d3a3ef79c2427c04d1d776c8f51a74002cb7732e188d27b4a4e",
      "modality": "webpage",
      "locator": "Confirm that entities and App Shortcuts appear in Spotlight",
      "context": "Spotlight 的索引行為不一定與 Simulator 相同，官方要求在實體裝置驗證整合與 entity 可發現性。Siri 端到端測試應涵蓋不同說法、跨 App 流程、支援語言，以及 官方列舉的耳機純語音情境，確認口頭回覆清楚且保留重點。"
    },
    {
      "source_id": "S39",
      "artifact_revision": "sha256:8477e41dd93c4d3a3ef79c2427c04d1d776c8f51a74002cb7732e188d27b4a4e",
      "modality": "webpage",
      "locator": "Validate the end-to-end experience with Siri",
      "context": "Spotlight 的索引行為不一定與 Simulator 相同，官方要求在實體裝置驗證整合與 entity 可發現性。Siri 端到端測試應涵蓋不同說法、跨 App 流程、支援語言，以及 官方列舉的耳機純語音情境，確認口頭回覆清楚且保留重點。"
    }
  ],
  "review_record": {
    "reviewer": "Codex",
    "reviewed_at": "2026-09-11T18:14:19.158Z",
    "notes": "對照固定快照中列出的章節與必要限制；格式與查詢機制不等於產品功能、資料權限或完成結果。",
    "coverage_ids": [
      "PAGE-DEVELOPER-AI-279"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-222",
      "KB-224"
    ],
    "relationship": "context-only",
    "sdk_availability": [],
    "runtime_tested": false,
    "notes": "SDK availability 逐項來自這份 DocC JSON 的 metadata.platforms；文章未提供平台 metadata 時保持空陣列，不借用其他 symbol 的版本。 只以已 verified 的影片／產品功能建立研究入口，不把 Foundation Models 等同 Siri AI 全部能力，也不從文件倒灌影片事實。"
  }
}
```

### KB-280

```json
{
  "id": "KB-280",
  "source": "[S40]",
  "statement_zh": "AVCaptureDevice.DiscoverySession 依指定條件尋找拍攝裝置；建立後可讀取 devices 清單，並以 key-value observation 監看可用裝置清單的改變。",
  "subject": "AVCaptureDevice.DiscoverySession 裝置探索",
  "topic": "相機與影音開發",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "不以裝置探索文件推定 iPhone 18 Pro、iPhone Duo 的實際相機枚舉結果或可同時運作組合。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S40",
      "artifact_revision": "sha256:7bcc7b8fc68abd105db12af6f1ff0689c84a9dd3345acb2a8ee4740c795ffcc1",
      "modality": "webpage",
      "locator": "AVCaptureDevice.DiscoverySession / Overview",
      "context": "AVCaptureDevice.DiscoverySession 依指定條件尋找拍攝裝置；建立後可讀取 devices 清單，並以 key-value observation 監看可用裝置清單的改變。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "已讀 Overview 的 devices 與 key-value observation 敘述；不將清單視為固定產品規格。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S40-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-023",
      "KB-163"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "10.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "10.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "14.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "10.15",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "17.0",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "2.1",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-281

```json
{
  "id": "KB-281",
  "source": "[S40]",
  "statement_zh": "DiscoverySession 的 supportedMultiCamDeviceSets 列出可以在多相機 session 中同時使用的拍攝裝置集合。",
  "subject": "多相機可同時運作組合",
  "topic": "相機與影音開發",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "不以裝置探索文件推定 iPhone 18 Pro、iPhone Duo 的實際相機枚舉結果或可同時運作組合。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S40",
      "artifact_revision": "sha256:7bcc7b8fc68abd105db12af6f1ff0689c84a9dd3345acb2a8ee4740c795ffcc1",
      "modality": "webpage",
      "locator": "AVCaptureDevice.DiscoverySession / Finding devices / supportedMultiCamDeviceSets",
      "context": "DiscoverySession 的 supportedMultiCamDeviceSets 列出可以在多相機 session 中同時使用的拍攝裝置集合。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "已讀同份 DocC topic 的 reference abstract；未展開子 symbol 的獨立版本頁，不將 class introducedAt 當作此屬性的最低版本。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S40-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-023",
      "KB-163"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "10.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "10.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "14.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "10.15",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "17.0",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "2.1",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-282

```json
{
  "id": "KB-282",
  "source": "[S41]",
  "statement_zh": "照片拍攝先以 AVCapturePhotoOutput 查詢並啟用支援的功能，再建立單次 AVCapturePhotoSettings，最後交給 capturePhoto(with:delegate:)；delegate 接收拍攝流程的重要事件。",
  "subject": "AVCapturePhotoOutput 拍攝流程",
  "topic": "相機與影音開發",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "格式、深度、ProRAW 與 Live Photos 等能力依實際 capture output 與配置核對；未驗證新品的每一項支援。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S41",
      "artifact_revision": "sha256:6cbb1bd58d0bed45108e449f8e27495d4368d131adc7d68cd4db68189ba4c3e5",
      "modality": "webpage",
      "locator": "AVCapturePhotoOutput / Overview",
      "context": "照片拍攝先以 AVCapturePhotoOutput 查詢並啟用支援的功能，再建立單次 AVCapturePhotoSettings，最後交給 capturePhoto(with:delegate:)；delegate 接收拍攝流程的重要事件。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "逐項核對原文三步流程，與既有 session/input/output 架構形成不同層次的補充。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S41-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-023",
      "KB-163"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "10.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "10.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "14.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "10.15",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "17.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-283

```json
{
  "id": "KB-283",
  "source": "[S41]",
  "statement_zh": "照片自動閃光等選項是否啟用，要到拍攝時才決定；AVCaptureResolvedPhotoSettings 回報這次實際採用的設定，並以 uniqueID 對應原來的 AVCapturePhotoSettings。",
  "subject": "照片自動選項的實際結果",
  "topic": "相機與影音開發",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "格式、深度、ProRAW 與 Live Photos 等能力依實際 capture output 與配置核對；未驗證新品的每一項支援。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S41",
      "artifact_revision": "sha256:6cbb1bd58d0bed45108e449f8e27495d4368d131adc7d68cd4db68189ba4c3e5",
      "modality": "webpage",
      "locator": "AVCapturePhotoOutput / Overview / AVCaptureResolvedPhotoSettings",
      "context": "照片自動閃光等選項是否啟用，要到拍攝時才決定；AVCaptureResolvedPhotoSettings 回報這次實際採用的設定，並以 uniqueID 對應原來的 AVCapturePhotoSettings。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "核對自動設定與 resolved settings 的不同，不能把請求當成成功結果。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S41-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-023",
      "KB-163"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "10.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "10.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "14.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "10.15",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "17.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-284

```json
{
  "id": "KB-284",
  "source": "[S42]",
  "statement_zh": "setExposureModeCustom(duration:iso:completionHandler:) 鎖定明確的曝光時間與 ISO；設定不支援的值會拋出例外，修改前須取得 lockForConfiguration()，完成後用 unlockForConfiguration() 釋放。",
  "subject": "手動曝光的設定條件",
  "topic": "相機與影音開發",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "曝光時間與 ISO 控制不等於鏡頭光圈控制；這份文件沒有確認新品可變光圈或原廠影像控制介面的第三方存取。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S42",
      "artifact_revision": "sha256:00647f5a0f1a39b265f04355b728a71c417cfb37e79c3821d303e3607907fa65",
      "modality": "webpage",
      "locator": "setExposureModeCustom(duration:iso:completionHandler:) / Discussion",
      "context": "setExposureModeCustom(duration:iso:completionHandler:) 鎖定明確的曝光時間與 ISO；設定不支援的值會拋出例外，修改前須取得 lockForConfiguration()，完成後用 unlockForConfiguration() 釋放。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "逐段核對不支援數值的例外及 configuration lock；不延伸成光圈控制。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S42-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-227",
      "KB-240"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "8.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "8.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "14.0",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "17.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-285

```json
{
  "id": "KB-285",
  "source": "[S42]",
  "statement_zh": "AVCapturePhotoSettings 的照片品質優先預設為 balanced；在暗處需要多張融合改善品質時，拍照可能暫時覆寫曝光時間與 ISO。文件要求把優先順序設為 speed，才能在 custom 或 locked 曝光模式下維持指定值。",
  "subject": "照片品質與手動曝光的交互條件",
  "topic": "相機與影音開發",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "曝光時間與 ISO 控制不等於鏡頭光圈控制；這份文件沒有確認新品可變光圈或原廠影像控制介面的第三方存取。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S42",
      "artifact_revision": "sha256:00647f5a0f1a39b265f04355b728a71c417cfb37e79c3821d303e3607907fa65",
      "modality": "webpage",
      "locator": "setExposureModeCustom(duration:iso:completionHandler:) / Discussion / photoQualityPrioritization",
      "context": "AVCapturePhotoSettings 的照片品質優先預設為 balanced；在暗處需要多張融合改善品質時，拍照可能暫時覆寫曝光時間與 ISO。文件要求把優先順序設為 speed，才能在 custom 或 locked 曝光模式下維持指定值。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "核對 balanced、暗處、多張融合、暫時覆寫及 custom/locked+speed 五項條件，保留品質取捨，不建議無條件固定 speed。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S42-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-227",
      "KB-240"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "8.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "8.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "14.0",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "17.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-286

```json
{
  "id": "KB-286",
  "source": "[S43]",
  "statement_zh": "PhotosPicker 可單選或多選照片／影片並套用篩選；選取結果是 placeholder，還須透過 PhotosPickerItem 的 Transferable 載入所需表示。從 iCloud Photos 載入時若沒有網路，資料取得可能失敗。",
  "subject": "PhotosPicker 選擇與載入",
  "topic": "照片與媒體開發",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "這是選圖與資料載入介面，不是照片物件移除、擴圖、視角變換等影片效果的公開實作證明。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S43",
      "artifact_revision": "sha256:1b7646e5b21c56ab00ddb952d07c6fb0e446800a38a7c8360f0ab9e770ed8dd8",
      "modality": "webpage",
      "locator": "PhotosPicker / Overview",
      "context": "PhotosPicker 可單選或多選照片／影片並套用篩選；選取結果是 placeholder，還須透過 PhotosPickerItem 的 Transferable 載入所需表示。從 iCloud Photos 載入時若沒有網路，資料取得可能失敗。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "核對選擇、placeholder、Transferable 與離線下載失敗；沒有把選取完成等同資料已可用。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S43-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-226"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "9.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-287

```json
{
  "id": "KB-287",
  "source": "[S44]",
  "statement_zh": "PHAccessLevel 將照片圖庫存取分為 addOnly 與 readWrite：前者只允許新增，後者表示讀取及寫入的存取層級。",
  "subject": "PHAccessLevel 圖庫存取層級",
  "topic": "照片與媒體開發",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "權限層級是圖庫存取的資料契約，不證明影片照片編輯功能向第三方開放。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S44",
      "artifact_revision": "sha256:9bb389459d93aacdf27bb6f4a0ff2b0a1564b6b51b8e3893703e6102e64a45cc",
      "modality": "webpage",
      "locator": "PHAccessLevel / Access Levels / addOnly; readWrite",
      "context": "PHAccessLevel 將照片圖庫存取分為 addOnly 與 readWrite：前者只允許新增，後者表示讀取及寫入的存取層級。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "核對 enum 兩個 case 的原文；未將 access level 值本身視為使用者已授權。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S44-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-226"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "14.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "14.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "14.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "11.0",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "14.0",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "1.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-288

```json
{
  "id": "KB-288",
  "source": "[S45]",
  "statement_zh": "isHealthDataAvailable() 回報這台裝置是否可使用 HealthKit。文件指出 iPadOS 16 或更早、以及 macOS 13 或更新雖有 framework，App 仍不能讀寫 HealthKit 資料，這項檢查回傳 false；企業環境亦可能限制健康資料存取。",
  "subject": "HealthKit 裝置資料可用性",
  "topic": "健康與運動開發",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "HealthKit 可用不等於已取得每種健康資料的讀寫授權；更不代表 Apple 自家準備指數等所有指標都向第三方提供。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S45",
      "artifact_revision": "sha256:f36509bb0383863fac1095eb77a858bc7c319e14039d23f7b872c44d7dd5ebe6",
      "modality": "webpage",
      "locator": "isHealthDataAvailable() / Discussion",
      "context": "isHealthDataAvailable() 回報這台裝置是否可使用 HealthKit。文件指出 iPadOS 16 或更早、以及 macOS 13 或更新雖有 framework，App 仍不能讀寫 HealthKit 資料，這項檢查回傳 false；企業環境亦可能限制健康資料存取。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "核對 SDK 存在與資料存取能力不同；保留原文平台及企業限制，不據此推論特定新品 runtime。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S45-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-130",
      "KB-140"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "8.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "8.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "1.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "2.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-289

```json
{
  "id": "KB-289",
  "source": "[S46]",
  "statement_zh": "HealthKit 的 heartRate 是心率 quantity sample 型別，採 count/time 單位與離散值；HealthKit 可能精簡或合併樣本資料。",
  "subject": "HealthKit 心率樣本",
  "topic": "健康與運動開發",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "心率型別文件不證明新品感測器的量測準確性、更新頻率或準備指數算法；不能以缺值作健康診斷。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S46",
      "artifact_revision": "sha256:23f7f2940a1bbb853cda7e74fe21ac2c6eaba57db1e1ac80c247fb250376ecc6",
      "modality": "webpage",
      "locator": "heartRate / Discussion / count-time and discrete samples",
      "context": "HealthKit 的 heartRate 是心率 quantity sample 型別，採 count/time 單位與離散值；HealthKit 可能精簡或合併樣本資料。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "核對心率型別、單位、離散性及資料可能 condensed/coalesced，沒有宣稱固定採樣頻率。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S46-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-130",
      "KB-140"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "8.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "8.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "1.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "2.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-290

```json
{
  "id": "KB-290",
  "source": "[S46]",
  "statement_zh": "心率樣本可附帶 HKMetadataKeyHeartRateMotionContext，但不是每筆都有。文件要求缺少這項 metadata 的樣本依 notSet 處理，不能把缺少情境資料直接解讀為靜止。",
  "subject": "心率動態情境中繼資料缺值",
  "topic": "健康與運動開發",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "心率型別文件不證明新品感測器的量測準確性、更新頻率或準備指數算法；不能以缺值作健康診斷。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S46",
      "artifact_revision": "sha256:23f7f2940a1bbb853cda7e74fe21ac2c6eaba57db1e1ac80c247fb250376ecc6",
      "modality": "webpage",
      "locator": "heartRate / Discussion / HKMetadataKeyHeartRateMotionContext",
      "context": "心率樣本可附帶 HKMetadataKeyHeartRateMotionContext，但不是每筆都有。文件要求缺少這項 metadata 的樣本依 notSet 處理，不能把缺少情境資料直接解讀為靜止。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "原文亦說其他 App 可存有或沒有動態情境的心率樣本；未知保持未知。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S46-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-130",
      "KB-140"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "8.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "8.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "1.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "2.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-291

```json
{
  "id": "KB-291",
  "source": "[S47]",
  "statement_zh": "WorkoutScheduler 提供 isSupported 查詢目前裝置是否支援訓練排程，並以 requestAuthorization() 請求排程權限、authorizationState 表示授權狀態；schedule(_:at:) 用指定日期安排 WorkoutPlan。",
  "subject": "WorkoutScheduler 支援與排程權限",
  "topic": "健康與運動開發",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "WorkoutScheduler 處理排程；不把排程授權當作 HealthKit 資料讀取權限，也不推定新品配對與同步已實測成功。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S47",
      "artifact_revision": "sha256:cba215343a0ea68b230a8b58fa4039ac0c443fab58da8827438563637998fd89",
      "modality": "webpage",
      "locator": "WorkoutScheduler / Accessing the scheduler; Scheduling workouts",
      "context": "WorkoutScheduler 提供 isSupported 查詢目前裝置是否支援訓練排程，並以 requestAuthorization() 請求排程權限、authorizationState 表示授權狀態；schedule(_:at:) 用指定日期安排 WorkoutPlan。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "逐一核對同份 DocC 章節與 referenced member abstract；資料讀取仍由其他 API 契約處理。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S47-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-131",
      "KB-141"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "17.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "17.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "18.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "15.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "10.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-292

```json
{
  "id": "KB-292",
  "source": "[S47]",
  "statement_zh": "WorkoutScheduler.scheduledWorkouts 是此 App 排定的訓練清單；maxAllowedScheduledWorkoutCount 表示 App 排程上限，另有標記完成、移除單項與移除全部排程的方法。",
  "subject": "App 自己的體能訓練排程",
  "topic": "健康與運動開發",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "WorkoutScheduler 處理排程；不把排程授權當作 HealthKit 資料讀取權限，也不推定新品配對與同步已實測成功。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S47",
      "artifact_revision": "sha256:cba215343a0ea68b230a8b58fa4039ac0c443fab58da8827438563637998fd89",
      "modality": "webpage",
      "locator": "WorkoutScheduler / Managing scheduled workouts",
      "context": "WorkoutScheduler.scheduledWorkouts 是此 App 排定的訓練清單；maxAllowedScheduledWorkoutCount 表示 App 排程上限，另有標記完成、移除單項與移除全部排程的方法。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "保留 by your app 的範圍；來源本頁沒有上限數字，故不填入常數猜測。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S47-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-131",
      "KB-141"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "17.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "17.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "18.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "15.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "10.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-293

```json
{
  "id": "KB-293",
  "source": "[S48]",
  "statement_zh": "CMMotionManager 管理加速度計、陀螺儀、磁力計與處理後的 device-motion 資料；經 sensor fusion 的 device-motion 包含姿態、旋轉速率、重力方向及使用者造成的加速度等。",
  "subject": "Core Motion 裝置動作資料",
  "topic": "裝置動作與版面適應",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "一般裝置動作與姿態資料不等於 iPhone Duo 鉸鏈角度、開合事件、內外螢幕切換或耳機專屬姿態介面。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S48",
      "artifact_revision": "sha256:715576ae68a871435afd6b44800c82837f7283a67d354a44972f1c79be00dbbd",
      "modality": "webpage",
      "locator": "CMMotionManager / Overview",
      "context": "CMMotionManager 管理加速度計、陀螺儀、磁力計與處理後的 device-motion 資料；經 sensor fusion 的 device-motion 包含姿態、旋轉速率、重力方向及使用者造成的加速度等。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "核對四類服務與處理後資料；不把裝置座標的姿態推定為折疊鉸鏈角度。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S48-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-150",
      "KB-172"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "4.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "4.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "13.1",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "1.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "2.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-294

```json
{
  "id": "KB-294",
  "source": "[S48]",
  "statement_zh": "官方要求每個 App 只建立一個 CMMotionManager，因多個實例可能影響加速度計與陀螺儀資料接收速率；不再需要資料時，應呼叫對應的 stop 方法停止更新。",
  "subject": "Core Motion 服務生命週期",
  "topic": "裝置動作與版面適應",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "一般裝置動作與姿態資料不等於 iPhone Duo 鉸鏈角度、開合事件、內外螢幕切換或耳機專屬姿態介面。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S48",
      "artifact_revision": "sha256:715576ae68a871435afd6b44800c82837f7283a67d354a44972f1c79be00dbbd",
      "modality": "webpage",
      "locator": "CMMotionManager / Overview / Important and stop methods",
      "context": "官方要求每個 App 只建立一個 CMMotionManager，因多個實例可能影響加速度計與陀螺儀資料接收速率；不再需要資料時，應呼叫對應的 stop 方法停止更新。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "核對單一 manager 與停止更新要求，不以此聲稱特定節電百分比。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S48-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-150",
      "KB-172"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "4.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "4.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "13.1",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "1.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "2.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-295

```json
{
  "id": "KB-295",
  "source": "[S48]",
  "statement_zh": "CMMotionManager 分別提供服務可用性與活動狀態檢查，例如 isGyroAvailable 與 isGyroActive；若硬體功能不可用，呼叫對應 start 方法不會生效。",
  "subject": "Core Motion 能力與活動狀態",
  "topic": "裝置動作與版面適應",
  "claim_type": "limitation",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "一般裝置動作與姿態資料不等於 iPhone Duo 鉸鏈角度、開合事件、內外螢幕切換或耳機專屬姿態介面。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S48",
      "artifact_revision": "sha256:715576ae68a871435afd6b44800c82837f7283a67d354a44972f1c79be00dbbd",
      "modality": "webpage",
      "locator": "CMMotionManager / Determine hardware availability and state",
      "context": "CMMotionManager 分別提供服務可用性與活動狀態檢查，例如 isGyroAvailable 與 isGyroActive；若硬體功能不可用，呼叫對應 start 方法不會生效。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "已讀硬體可用與正在更新是兩個不同條件；列舉的型號感測器仍須 runtime 核對。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S48-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-150",
      "KB-172"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "4.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "4.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "13.1",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "1.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "2.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-296

```json
{
  "id": "KB-296",
  "source": "[S49]",
  "statement_zh": "AnyLayout 允許動態切換符合 Layout 的容器類型，而不破壞子視圖狀態；官方示例依 Dynamic Type 設定在 HStackLayout 與 VStackLayout 之間切換。",
  "subject": "AnyLayout 保留子視圖狀態",
  "topic": "裝置動作與版面適應",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "子視圖狀態保留限於此版面容器契約，不等於跨 App、跨裝置或折疊時全部狀態自動延續。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S49",
      "artifact_revision": "sha256:59710ff38a78473b9e2a8c8c402316bc109963d1544a48011bef776e08922891",
      "modality": "webpage",
      "locator": "AnyLayout / Overview",
      "context": "AnyLayout 允許動態切換符合 Layout 的容器類型，而不破壞子視圖狀態；官方示例依 Dynamic Type 設定在 HStackLayout 與 VStackLayout 之間切換。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "核對 state preservation 的作用範圍及原文 Dynamic Type 示例；未說是 iPhone Duo 開合介面。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S49-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-234"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "16.0",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "1.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "9.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-297

```json
{
  "id": "KB-297",
  "source": "[S50]",
  "statement_zh": "horizontalSizeClass 表示讀取該環境值的視圖可用橫向空間類別；它受到裝置、方向及 iPad 的 Slide Over／Split View 等因素影響，App 應處理執行期間尺寸類別的改變。",
  "subject": "水平尺寸類別的變動",
  "topic": "裝置動作與版面適應",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "水平尺寸類別描述可用空間，不能拿來當作 iPhone Duo 開合、鉸鏈角度或多視窗生命週期事件。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S50",
      "artifact_revision": "sha256:f054c5dad1d8e6b5a35502e0e25647d67fc21c01561522c4018a0197fa148e94",
      "modality": "webpage",
      "locator": "horizontalSizeClass / Discussion",
      "context": "horizontalSizeClass 表示讀取該環境值的視圖可用橫向空間類別；它受到裝置、方向及 iPad 的 Slide Over／Split View 等因素影響，App 應處理執行期間尺寸類別的改變。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "核對空間而非實體機型判斷；不推論 iPhone Duo 具體尺寸類別或折疊事件。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S50-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-234"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "10.15",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "13.0",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "1.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "6.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-298

```json
{
  "id": "KB-298",
  "source": "[S51]",
  "statement_zh": "NSUserActivity 保存 App 在某個時間點的活動狀態，供 Handoff 等系統功能使用；一般 Handoff 可把 activity 傳到使用者其他裝置，讓 App 在那裡重建該活動。",
  "subject": "NSUserActivity 的一般 App 接續",
  "topic": "App 活動接續",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "此處只研究一般 App activity 延續；不能用它解釋影片 Switched to this iPhone 提示的觸發、門號／SIM 移轉或通話接續。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S51",
      "artifact_revision": "sha256:88f9475594be69386ae8112350afb74e7c8c63a96ab43ca5b215be1215b1bbde",
      "modality": "webpage",
      "locator": "NSUserActivity / Overview / activity state and Handoff",
      "context": "NSUserActivity 保存 App 在某個時間點的活動狀態，供 Handoff 等系統功能使用；一般 Handoff 可把 activity 傳到使用者其他裝置，讓 App 在那裡重建該活動。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "僅核對一般 App 活動狀態的公開文件，不把同名當成影片 iPhone Handoff 的機制證據。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S51-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-249"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "8.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "8.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "13.1",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "10.10",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "9.0",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "1.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "2.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```

### KB-299

```json
{
  "id": "KB-299",
  "source": "[S51]",
  "statement_zh": "App 以 activityType 建立 NSUserActivity，保存重建活動所需的 URL、內容識別或 userInfo；以 becomeCurrent() 標示目前活動，結束時 resignCurrent() 或 invalidate()。支援的 activity type 須以 NSUserActivityTypes 在 Info.plist 宣告。",
  "subject": "NSUserActivity 資料與生命週期",
  "topic": "App 活動接續",
  "claim_type": "specification",
  "verification": "verified",
  "availability_status": "not-applicable",
  "qualifiers": [
    "既有公開 API 文件的技術對照，不代表本次新增 API；本次沒有 SDK 編譯或實機測試。",
    "此處只研究一般 App activity 延續；不能用它解釋影片 Switched to this iPhone 提示的觸發、門號／SIM 移轉或通話接續。"
  ],
  "structured_values": [],
  "evidence": [
    {
      "source_id": "S51",
      "artifact_revision": "sha256:88f9475594be69386ae8112350afb74e7c8c63a96ab43ca5b215be1215b1bbde",
      "modality": "webpage",
      "locator": "NSUserActivity / Overview / activityType; becomeCurrent; NSUserActivityTypes",
      "context": "App 以 activityType 建立 NSUserActivity，保存重建活動所需的 URL、內容識別或 userInfo；以 becomeCurrent() 標示目前活動，結束時 resignCurrent() 或 invalidate()。支援的 activity type 須以 NSUserActivityTypes 在 Info.plist 宣告。"
    }
  ],
  "review_record": {
    "reviewer": "Codex Developer device reviewer",
    "reviewed_at": "2026-09-11T18:14:31Z",
    "notes": "核對資料欄位、目前活動與宣告要求；沒有新增平台間移轉成功保證。 直接閱讀本次保存的官方 DocC 主體章節及以下 locator 相關 reference 描述；HTML 標題、canonical、description 與 DocC title／identifier／abstract 相符，HTML 連出的 Markdown 原文 title／identifier 再次相符。僅核對本頁選定內容，不宣稱遍讀所有連出文件；無 SDK 編譯、無實機測試。",
    "coverage_ids": [
      "PAGE-S51-DEVICE-20260912"
    ]
  },
  "technical_context": {
    "related_claim_ids": [
      "KB-249"
    ],
    "relationship": "context-only",
    "sdk_availability": [
      {
        "platform": "iOS",
        "introduced": "8.0",
        "beta": false
      },
      {
        "platform": "iPadOS",
        "introduced": "8.0",
        "beta": false
      },
      {
        "platform": "Mac Catalyst",
        "introduced": "13.1",
        "beta": false
      },
      {
        "platform": "macOS",
        "introduced": "10.10",
        "beta": false
      },
      {
        "platform": "tvOS",
        "introduced": "9.0",
        "beta": false
      },
      {
        "platform": "visionOS",
        "introduced": "1.0",
        "beta": false
      },
      {
        "platform": "watchOS",
        "introduced": "2.0",
        "beta": false
      }
    ],
    "runtime_tested": false,
    "notes": "平台版本只取本次主文件 metadata.platforms 中有 introducedAt 的項目；空缺不猜。class/enum 主文件的版本不當作所有列出子成員的個別最低版本，也不等於新品可用性。"
  }
}
```
