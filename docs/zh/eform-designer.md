<p class="kicker">工作</p>

# E-form designer

<figure class="watch">
  <video controls preload="none" playsinline poster="https://visiondoc-tutorials.s3.ap-southeast-1.amazonaws.com/posters/17-eform-designer.jpg" src="https://visiondoc-tutorials.s3.ap-southeast-1.amazonaws.com/videos/17-eform-designer.mp4"></video>
  <figcaption>看短片。這段短片和字幕都是英文。</figcaption>
</figure>

**E-form designer** 用來做一張表單，然後分享出去。側欄上的名稱仍然是英文。頁面標題是 **表單設計器**。下面寫 **以即時預覽建立無程式碼表單**。不用寫程式。

<figure class="shot">
  <img src="assets/eform-designer.png" alt="表單設計器，上面是空白的新表單，下面有兩張已存的表單">
  <figcaption>建立的地方還沒有填。已經存了兩張表單。</figcaption>
</figure>

這一頁有三張卡。**AI 生成表單** 和 **新增表單** 用來做表單。**表單** 是已經存了的清單。

## AI 生成表單

提示寫 **用一句話描述你想要的表單，AI 會產生欄位；你可再調整後建立，並發佈成可分享的連結。**

框裡的例子是 **例如：客戶滿意度調查，包含姓名、電郵、評分（1–5）與意見**。換成你自己的句子。按 **用 AI 生成**。它會填好 **新增表單**，但還沒有存檔。看過題目，再按 **建立表單**。

## 新增表單

你可以自己填，也可以讓 AI 填好再改。

| 框 | 是甚麼 |
|---|---|
| 鍵 | 表單的 id，例如 `contract_review_v1`。下面已存的是 `ap_payment_voucher` 和 `ap_expense_application` |
| 表單名稱 | 大家看到的名字，例如 AP payment voucher |
| 說明 | 可以留空 |
| 1. | 第一題。**新增欄位** 會加第 2 題、第 3 題 |
| 欄位標籤 | 那一題，例如 Invoice no. |
| 類型 | 答案是哪一種。選擇在下面 |
| 必填 | 這一題不能留空就剔選 |
| ↑ ↓ | 把這一題上移或下移 |
| 一行上的 ✕ | 刪掉那一題。只剩一題的時候，第一題會留住 |
| 新增欄位 | 再加一題 |
| 建立表單 | 儲存。要有鍵、名稱，和至少一題 |

類型：

| 類型 | 答案 |
|---|---|
| text | 一行字，例如供應商名稱 |
| textarea | 好幾行，例如備註 |
| number | 一個數字，例如金額 |
| date | 一個日期 |
| select | 從清單選一個。那一行會問 **選項（逗號分隔）**，例如 `HKD, USD, EUR` |
| checkbox | 是或否 |
| image | 一張圖 |

**即時預覽** 會跟著你打的字畫出表單。還沒有題目的時候寫 **尚未有欄位。**

已存的表單不能在清單裡直接改。要改題目，就做一張新表單，用自己的鍵。

## 表單

**表單** 列出已經存了的。一家還沒有表單的公司會寫 **尚未有表單。** 這家公司有兩張。

每一行有名稱、鍵、多少題、題目，然後三個按鈕。

| 按鈕 | 做甚麼 |
|---|---|
| ✕ | **刪除表單**。確認一次。如果已經有人填過，第二次確認會說明那些答案會一併清掉 |
| 建立分享連結 | 做出一條連結。接著出現 **電郵邀請**：連結、複製、收件人電郵、主旨、邀請正文、**用 AI 起草**、**寄出邀請**。打開連結的人填表，不用 VisionDoc 帳戶 |
| 查看回應 | 打開 **回應**。每一行是誰填的、幾時、答案是甚麼。還沒有人填就寫 **尚未有回應。** **下載 CSV / Excel** 把答案存下來 |

### AP payment voucher

**AP payment voucher · ap_payment_voucher · 15 fields.** 這張表用來付供應商的發票。

| 題目 | 類型 | 填甚麼 |
|---|---|---|
| Invoice no. | text | 發票編號 |
| Invoice date | date | 發票上的日期 |
| Invoice amount | number | 發票金額 |
| Currency | select | 哪一種貨幣 |
| Supplier | text | 供應商名稱 |
| Vendor code | text | 公司帳上的供應商編號 |
| P.O. no. | text | 採購單編號 |
| Issued by | text | 誰開出這張單 |
| Department | text | 哪個部門 |
| Account code | text | 記入哪個帳戶 |
| Cost code | text | 成本編號 |
| Bank | text | 銀行 |
| Account name | text | 帳戶名稱 |
| Date of payment | date | 幾時付款 |
| Comments | textarea | 備註 |

### Expense application

**Expense application · ap_expense_application · 6 fields.** 這張表用來申請費用。

| 題目 | 類型 | 填甚麼 |
|---|---|---|
| Team | select | 哪一隊 |
| Vendor | text | 付給誰 |
| Amount | number | 多少錢 |
| Currency | select | 哪一種貨幣 |
| Goods or services | select | 買了甚麼 |
| Notes | textarea | 備註 |

客戶調查還沒有在清單裡。打 **客戶滿意度調查，包含姓名、電郵、評分（1–5）與意見**。按 **用 AI 生成**。在 **即時預覽** 看那些題。電郵那一題勾 **必填**。按 **建立表單**。**建立分享連結** 就是寄出去的連結。答案回到 **查看回應**。
