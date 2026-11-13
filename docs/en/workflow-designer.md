<p class="kicker">Work</p>

# Workflow designer

**Workflow designer** is where a company administrator defines a workflow. The page title is **Approval workflows**. The line under it says **Configurable multi-step, role-routed approval definitions**. The breadcrumb is **Home**, **Settings**, **Approval workflows**.

<figure class="shot">
  <img src="assets/workflow-designer.png" alt="New workflow card, with one internal approval step">
  <figcaption>The builder. The list of workflows already saved is left out of this picture.</figcaption>
</figure>

The card is **New workflow**.

The first box says **Describe the flow and let AI build it**. The grey example is an employment contract that needs a compliance review, and then an outside person signs. That address is only an example on the screen. **AI generate** drafts a name, a key, and the steps from whatever you type there.

You can fill the same card yourself.

| Field | Example |
|---|---|
| Display name | Quotation approval |
| Key | `quotation_approval_v1` |
| Step name | Manager approval |
| Step type | **Internal approval** |
| Role | admin |

The line under the key says steps run in order. An internal step is approved in the console. An external signer gets an emailed signing link and needs no account.

**Step type** has three choices:

| Type | Who acts |
|---|---|
| Internal approval | A role in the console: compliance, admin, or uploader |
| External signature | An email address. They sign from the link |
| JavaScript job | A short script on that step. It returns JSON |

**Add step** adds the next one. **Create workflow** saves the definition. Saved workflows are listed on the right, under **Workflows**. An empty list says **No workflows**. This picture stops before that list.

Example: a quotation needs a manager, then the customer. Set the display name and the key as in the table. Name the first step **Manager approval**, leave the type on **Internal approval**, and choose **admin**. Click **Add step**. Name the second step **Customer signature**, change the type to **External signature**, and enter the customer's email. **Create workflow** saves it. [Start workflow](start-workflow.md) can then open that definition and attach the PDF from **Quotation**.
