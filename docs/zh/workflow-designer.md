<p class="kicker">工作</p>

# Workflow designer

<figure class="watch">
  <video controls preload="none" playsinline poster="https://visiondoc-tutorials.s3.ap-southeast-1.amazonaws.com/posters/18-workflow-designer.jpg" src="https://visiondoc-tutorials.s3.ap-southeast-1.amazonaws.com/videos/18-workflow-designer.mp4"></video>
  <figcaption>看短片。這段短片和字幕都是英文。</figcaption>
</figure>

**Workflow designer** 是管理員設定審批路徑的地方。側欄上的名稱仍然是英文。頁面標題是 **審批流程**。下面寫 **可設定的多步驟、依角色路由的審批定義**。

<figure class="shot">
  <img src="assets/workflow-designer.png" alt="左邊是新增流程，右邊有四個已存的流程">
  <figcaption>建立的地方還沒有填。已經存了四個流程。</figcaption>
</figure>

這一頁有兩張卡。**新增流程** 做一個。**流程** 是已經存了的清單。空的清單寫 **尚無流程**。

## 新增流程

第一個框寫 **用文字描述流程，交俾 AI 建立**。灰色的例子是一份僱傭合約要先做合規審查，然後由 jane@acme.com 簽署。那個電郵只是畫面上的例子，不是這家公司的帳戶。按 **AI 生成** 會填好名稱、鍵和步驟。它還沒有存檔。看過步驟，再按 **建立流程**。

你也可以自己填。

| 框 | 是甚麼 |
|---|---|
| 顯示名稱 | 大家看到的名字，例如 Accounts payable (dept → finance) |
| 鍵 | id，例如 `accounts_payable_v1` |
| 步驟名稱 | 這一步的名字，例如 Finance approval |
| 步驟類型 | 誰來做。下面有三種 |
| 下一個選單 | 內部審批時選角色。外部簽署時填電郵 |
| 新增步驟 | 再加一步，編號 2，然後 3 |
| 建立流程 | 儲存。要有鍵、名稱，和至少一步寫了名稱 |

鍵下面那一行寫 **步驟依序執行。內部審批在後台完成；外部簽署人會收到電郵簽署連結，無需帳號。** 第 1 步做完，第 2 步才開始。

| 類型 | 誰來做 |
|---|---|
| 內部審批 | 帳戶上有那個角色的人，在 VisionDoc 裡批准。角色是 **compliance**、**admin** 和 **uploader**。這三個字仍然是英文 |
| 外部簽署 | 一個電郵。對方收到簽署連結，不用 VisionDoc 帳戶 |
| JavaScript job | 這一步上的一小段程式。這張圖裡已存的流程都沒有用這個 |

角色不是步驟名稱。**Department manager review** 下面仍然可以寫 **compliance**。名稱是標籤。角色是誰可以批。這些角色在 [人員與權限](people.md) 設在每一個人身上。

已存的流程不能在這張清單裡直接改。要改，就做一個新流程，用自己的鍵。**Delete** 拿掉它，[Start workflow](start-workflow.md) 就不能再選它。

## 已存的流程

每一個已存的流程有名稱、鍵、按次序的步驟，和 **Delete**。每一步下面，第一個字是角色。這張圖裡每一步都是 **內部審批**。

### Sequential review (compliance → admin)

鍵 `dlp_sequential_review_v1`。

| 步 | 名稱 | 誰批 |
|---|---|---|
| 1 | Compliance review | compliance |
| 2 | Admin approval | admin |

### Accounts payable (dept → finance)

鍵 `accounts_payable_v1`。這條路徑用來處理供應商發票。

| 步 | 名稱 | 誰批 |
|---|---|---|
| 1 | Department manager review | compliance |
| 2 | Finance approval | admin |

第一步的名字是部門經理。任何有 compliance 角色的人都可以批。財務那一步是任何有 admin 角色的人。

### Expense application (team lead → HR/Ops → GM)

鍵 `expense_application_v1`。這條路徑用來處理費用表。

| 步 | 名稱 | 誰批 |
|---|---|---|
| 1 | Team lead review | compliance |
| 2 | HR / Operation Manager | compliance |
| 3 | General Manager / Operation Manager | admin |

前兩步都是 compliance 角色。步驟名稱把牠們分開。最後一步是 admin 角色。

### Payment request (team lead → HR/Ops → Ops/HR → Finance → GM)

鍵 `payment_request_v1`。

| 步 | 名稱 | 誰批 |
|---|---|---|
| 1 | Team lead review | compliance |
| 2 | HR / Operation Manager | compliance |
| 3 | Operation Manager / HR | compliance |
| 4 | Finance approval | admin |
| 5 | General Manager / Operation Manager | admin |

前三步是 compliance 角色。最後兩步是 admin 角色。

一份報價先給經理，再給客戶簽。顯示名稱 **報價批准**。鍵 `quotation_approval_v1`。第 1 步 **經理批准**，類型 **內部審批**，角色 **admin**。按 **新增步驟**。第 2 步 **客戶簽署**，類型 **外部簽署**，填客戶的電郵。按 **建立流程**。之後在 [Start workflow](start-workflow.md) 可以選這個流程，附上 **Quotation** 裡的 PDF。
