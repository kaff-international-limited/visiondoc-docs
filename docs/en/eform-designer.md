<p class="kicker">Work</p>

# E-form designer

<figure class="watch">
  <video controls preload="none" playsinline poster="https://visiondoc-tutorials.s3.ap-southeast-1.amazonaws.com/posters/17-eform-designer.jpg" src="https://visiondoc-tutorials.s3.ap-southeast-1.amazonaws.com/videos/17-eform-designer.mp4"></video>
  <figcaption>Watch the video</figcaption>
</figure>

**E-form designer** builds a form and shares it. You do not write code. The page title is **Form designer**. The line under it says **Build no-code forms with a live preview**.

<figure class="shot">
  <img src="assets/eform-designer.png" alt="Form designer with the AI builder, an empty new form, and two saved forms">
  <figcaption>The builder is empty. Two forms are already saved.</figcaption>
</figure>

The page has three cards. **AI form builder** and **New form** make a form. **Forms** is the list of forms already saved.

## AI form builder

The hint says **Describe the form you want in one sentence; AI generates the fields. Adjust, create, then publish a shareable link.**

The box already shows an example: **e.g. Customer satisfaction survey with name, email, rating (1–5) and comments**. Replace that sentence with your own. **Generate with AI** fills **New form**. It does not save. Check the questions, then click **Create form**.

## New form

Fill this card yourself, or let the AI fill it and then edit it.

| Box | What it is |
|---|---|
| Key | The id of the form, such as `contract_review_v1`. The saved forms below use `ap_payment_voucher` and `ap_expense_application` |
| Form name | The name people see, such as AP payment voucher |
| Description | Optional. Leave it blank if the name is enough |
| 1. | The first question. **Add field** adds 2, then 3 |
| Field label | The question, such as Invoice no. |
| Type | What kind of answer. The choices are below |
| required | Tick it when the answer cannot be left blank |
| ↑ ↓ | Move this question up or down |
| ✕ on a row | Remove that question. The first row stays while it is the only one |
| Add field | Another question |
| Create form | Save. The form needs a key, a name, and at least one question |

The type menu:

| Type | The answer |
|---|---|
| text | One line, such as a supplier name |
| textarea | Several lines, such as comments |
| number | A number, such as an amount |
| date | A date |
| select | One choice from a list. The row then asks for **Options (comma separated)**, for example `HKD, USD, EUR` |
| checkbox | Yes or no |
| image | A picture |

**Live preview** draws the form as you type. With no question filled in, it says **No fields yet.**

A saved form is not edited from the list. To change the questions, make a new form with its own key.

## Forms

**Forms** lists what is already saved. An empty company says **No forms yet.** This company has two.

Each row shows the name, the key, how many questions, the questions, then three buttons.

| Button | What it does |
|---|---|
| ✕ | **Delete form**. Confirm once. If people have already answered, a second confirm tells you those answers will be wiped |
| Create share link | Makes a link. The card then shows **Email invite**: the link, a copy button, **Recipient emails**, **Subject**, the message, **Draft with AI**, and **Send invite**. The person who opens the link fills the form. They do not need a VisionDoc account |
| View responses | Opens **Responses**. Each line is who answered, when, and the answers. None yet says **No responses yet.** **Download CSV / Excel** saves the answers |

### AP payment voucher

**AP payment voucher · ap_payment_voucher · 15 fields.** This form is for paying a supplier invoice.

| Question | Type | What goes in it |
|---|---|---|
| Invoice no. | text | The invoice number |
| Invoice date | date | The date on the invoice |
| Invoice amount | number | How much the invoice is for |
| Currency | select | Which currency |
| Supplier | text | The supplier's name |
| Vendor code | text | The supplier's code in the company's books |
| P.O. no. | text | The purchase-order number |
| Issued by | text | Who issued the voucher |
| Department | text | Which department |
| Account code | text | The account to charge |
| Cost code | text | The cost code |
| Bank | text | The bank |
| Account name | text | The account name |
| Date of payment | date | When it is paid |
| Comments | textarea | Any note |

### Expense application

**Expense application · ap_expense_application · 6 fields.** This form is for an expense claim.

| Question | Type | What goes in it |
|---|---|---|
| Team | select | Which team |
| Vendor | text | Who is being paid |
| Amount | number | How much |
| Currency | select | Which currency |
| Goods or services | select | What was bought |
| Notes | textarea | Any note |

A customer survey is not in the list yet. Type **Customer satisfaction survey with name, email, rating (1–5) and comments**. Click **Generate with AI**. Read the questions in **Live preview**. Tick **required** on the email question. Click **Create form**. **Create share link** is the link you send. Answers come back under **View responses**.
