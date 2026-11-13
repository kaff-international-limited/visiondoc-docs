<p class="kicker">工作</p>

# E-form designer

<figure class="watch">
  <video controls preload="none" playsinline poster="https://visiondoc-tutorials.s3.ap-southeast-1.amazonaws.com/posters/17-eform-designer.jpg" src="https://visiondoc-tutorials.s3.ap-southeast-1.amazonaws.com/videos/17-eform-designer.mp4"></video>
  <figcaption>看短片。這段短片和字幕都是英文。</figcaption>
</figure>

**E-form designer** 用來做一張表單，然後分享出去。側欄上的名稱仍然是英文。頁面標題是 **表單設計器**。下面寫 **以即時預覽建立無程式碼表單**。

<figure class="shot">
  <img src="assets/eform-designer.png" alt="表單設計器，上面是空白的新表單，下面有兩張已存的表單">
  <figcaption>建立的地方還沒有填。已經存了兩張：AP payment voucher 和 Expense application。這張圖是英文畫面。下面會寫出繁體中文介面改了哪些字。</figcaption>
</figure>

這一頁有三張卡。**AI 生成表單** 和 **新增表單** 用來做表單。**表單** 是已經存好的清單。英文畫面寫 **AI form builder**、**New form**、**Forms**。

## AI 生成表單

提示寫 **用一句話描述你想要的表單，AI 會產生欄位；你可再調整後建立，並發佈成可分享的連結。** 英文畫面是 **Describe the form you want in one sentence; AI generates the fields. Adjust, create, then publish a shareable link.**

框裡已經有一個例子。英文是 **e.g. Customer satisfaction survey with name, email, rating (1–5) and comments**。繁體是 **例如：客戶滿意度調查，包含姓名、電郵、評分（1–5）與意見**。把這句換成你自己的。**用 AI 生成**（英文 **Generate with AI**）會按那句話填好 **新增表單**：一個鍵、一個名稱、每一題一行。你仍然要看過那些行，再按 **建立表單**。只按 **用 AI 生成** 還沒有存檔。

## 新增表單

這一卡可以自己填，也可以讓 AI 填好再改。

| 控制 | 是甚麼 |
|---|---|
| 鍵 | 表單的名字，例如 `contract_review_v1`。下面兩張用的是 `ap_payment_voucher` 和 `ap_expense_application`。清單裡靠這個鍵認出表單。英文畫面寫 **Key** |
| 表單名稱 | 別人看到的名字，例如 AP payment voucher。英文畫面寫 **Form name** |
| 說明 | 可留空。英文畫面寫 **Description (optional)** |
| 1. | 第一題。**新增欄位** 會再加 2、3 |
| 欄位標籤 | 那一題，例如 Invoice no.。英文畫面寫 **Field label** |
| 類型 | 答案是哪一種。選項在下面。類型的字仍然是英文 |
| 必填 | 這一題不能留空就勾上。英文畫面寫 **required** |
| ↑ ↓ | 把這一題上移或下移 |
| 一列上的 ✕ | 刪掉這一題。只剩一列時，那一列留著 |
| 新增欄位 | 再加一題。英文畫面寫 **Add field** |
| 建立表單 | 儲存。要有鍵、名稱，和至少一題寫了標籤。英文畫面寫 **Create form** |

類型選單：

| 類型 | 答案 |
|---|---|
| text | 一行字，例如供應商名稱 |
| textarea | 好幾行，例如備註 |
| number | 一個數字，例如金額 |
| date | 一個日期 |
| select | 從清單裡選一個。這一列會再問 **選項（逗號分隔）**，例如 `HKD, USD, EUR`。英文畫面寫 **Options (comma separated)** |
| checkbox | 是或否 |
| image | 一張圖 |

**即時預覽** 跟著你打的字畫出表單。英文畫面寫 **Live preview**。還沒有標籤時寫 **尚無欄位。** 英文畫面寫 **No fields yet.** 在 **欄位標籤** 打 Invoice no.，預覽就出現這一題。改類型，預覽跟著改。

存好的表單不能在清單裡改題目。題目要改，就另做一張，用另一個鍵。

## 表單

**表單** 列出已經存好的。一張都沒有時寫 **尚無表單**。英文是 **No forms yet.** 這家公司有兩張。

每一列是 **名稱 · 鍵 · 幾多個欄位**，然後是每一題和它的類型，然後三個控制。英文的「個欄位」寫 **fields**。

| 控制 | 做甚麼 |
|---|---|
| ✕ | **刪除表單**。確認一次。如果已經有人填過，第二次確認會說明那些答案會一併清掉 |
| 建立分享連結 | 做出一條連結。卡上接著出現 **電郵邀請**：連結、複製、收件人電郵、主旨、邀請正文、**用 AI 起草**、**寄出邀請**。打開連結的人填表，不用 VisionDoc 帳戶。英文畫面寫 **Create share link**、**Email invite**、**Send invite** |
| 查看回應 | 在那張表單下面打開 **回應**。每一行是誰填的、何時填的、答案是甚麼。還沒有人填就寫 **尚無回應**。有答案就可以 **下載 CSV / Excel**。英文畫面寫 **View responses**、**Responses**、**No responses yet** |

### AP payment voucher

**AP payment voucher · ap_payment_voucher · 15 fields.** 這張是用來付供應商發票的。

| 題目 | 類型 | 填甚麼 |
|---|---|---|
| Invoice no. | text | 發票編號 |
| Invoice date | date | 發票日期 |
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
| Date of payment | date | 付款日期 |
| Comments | textarea | 備註 |

### Expense application

**Expense application · ap_expense_application · 6 fields.** 這張是費用申請。

| 題目 | 類型 | 填甚麼 |
|---|---|---|
| Team | select | 哪一隊 |
| Vendor | text | 付給誰 |
| Amount | number | 金額 |
| Currency | select | 哪一種貨幣 |
| Goods or services | select | 買了甚麼 |
| Notes | textarea | 備註 |

例子：客戶調查還沒有在清單裡。打 **客戶滿意度調查，包含姓名、電郵、評分（1–5）與意見**，按 **用 AI 生成**，在 **即時預覽** 看那些題。電郵那一題勾 **必填**。按 **建立表單**。新表單會出現在 **表單** 裡，排在付款單和費用申請旁邊。**建立分享連結** 就是寄出去的連結。答案回到 **查看回應**。
