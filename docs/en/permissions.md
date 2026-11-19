<p class="kicker">Workspace</p>

# Permissions: who can do what

Use **People & access** to manage a person's role and memberships. Use **Permissions** on a folder or document to control access to that content. Use [PII and role masking](pii.md) to hide sensitive values from a role.

These controls answer different questions:

| Control | Question it answers | Where to check |
|---|---|---|
| Company modules | Is this feature enabled for this company? | Ask the company administrator if the page says the module is not enabled |
| User permissions | Can this person upload, review, download or change settings? | People & access → person → **Info** / permissions |
| Folder and file rules | Can this person access this particular folder or file? | Drive → **Permissions** → effective permissions |
| Role masking | Which values may this role see? | Settings → **PII** and **Role Masking** |
| Workflow assignment | Who must act at this approval step? | The workflow and its assigned participants |

A permission grant does not enable a company module or appoint someone as a workflow approver. Being able to view a file also does not mean every sensitive value is visible.

## Every user permission

These are the ten permission IDs in the application catalog. A permission enables a capability, not access to every document or an otherwise disabled company module. For the Chinese names and worked examples, see the [Traditional Chinese permission reference](../zh/permissions.html).

| Permission ID | Name | What it covers and what to check |
|---|---|---|
| `drive:read` | Read drive/documents | Read library listings, search results and document data, subject to applicable file access and masking. Does not itself grant writing, review or download. |
| `drive:write` | Write/upload documents | Upload and library changes, including rename, move, delete and folder creation. This is not an upload-only permission. File controls, document state and retention can still restrict an operation. Online editing also requires this capability and a supported file, service and masking policy. |
| `queue:manage` | Manage processing queue | A catalog entry reserved for queue management; the current version does not use it as a gate for every queue or reprocessing action. Revoking it alone does not stop reprocessing. Administrative reruns check `settings:edit`; single-document OCR reruns check `review`; upload checks `drive:write`. |
| `review` | Review & approve | Document review decisions, related extraction corrections and single-document OCR reruns. The document state controls which decisions are available. Workflow approval separately depends on the assigned participant and current step. |
| `settings:edit` | Edit settings (admin) | Company settings and protected administration such as people, roles, overrides, rules and masking. Granting it does not change the base role to Admin, enable company modules or grant platform operations access. Some functions require additional conditions. |
| `watermark:lookup` | Watermark leak lookup | Look up watermark identifiers and their associated output records. It does not grant watermark policy editing or manual token issuance; those require settings permission. |
| `assistant:use` | Use AI assistant | Assistant queries. Reading documents additionally needs `drive:read`; email drafting and workbench skills have separate capabilities. Does not remove masking. |
| `assistant:email_draft` | AI email drafting | Draft email subject and body from accessible selections. Also requires `assistant:use` and `drive:read`; attachment downloads require download access. Produces a reviewable draft, not an automatically sent email or workflow notification. |
| `workbench:run` | Run workbench skills | List/run available workbench skills and access their artifacts. A skill may additionally need document-read or assistant access. This is separate from ordinary assistant chat. |
| `download:secure` | Secure download/print | Controlled file output, subject to the relevant download/print action, document state, watermark and masking policy. Does not grant an unmasked-original exception. |

## Start with the person's role

The built-in defaults are below. A custom role, group/title role or individual override can change the effective result.

| Capability | Uploader | Compliance / Reviewer | Admin |
|---|---|---|---|
| Browse and work with Drive files | Yes | Yes | Yes |
| Processing queue capability (see limitation below) | Yes | Yes | Yes |
| Use the assistant | Yes | Yes | Yes |
| Secure download | Yes | Yes | Yes |
| Review documents | No | Yes | Yes |
| Look up watermarks / run workbench actions | No | Yes | Yes |
| Draft email with the assistant | No | No | Yes |
| Edit company settings | No | No | Yes |

These are application capabilities, subject to the company's enabled features and applicable file controls. **Uploader is not a read-only role.** For a person who should only read and download, create a custom role based on Uploader with those permissions, then check that memberships and overrides do not add writing. Do not use an Admin base role to test restrictions: Admin bypasses file ACL and role masking.

1. Open **People & access** and find the person.
2. Check their role, groups and titles. Group and title memberships can carry role permissions too.
3. Open **Info**. It lists the user role, each group/title role, member overrides and **Effective permissions**.
4. Change only the relevant role, membership or override. Save where the editor offers **Save**.
5. Ask the person to reload or sign in again, then test the intended action with their account.

For creating people and departments, see [People & access](people.md). For changing an administrator, see [Change the admin](change-admin.md).

## Custom roles, Union and Intersect

Open **Custom Roles** from People & access or Settings. Give the role a name, choose an available base role, select its permissions and create it. Assign the role to the intended person or directory entry; creating it alone does not change anyone's access.

| Choice | What it does |
|---|---|
| **Union** on a group/title role | Adds that role's permissions to the person's combined set |
| **Intersect** on a group/title role | Keeps only permissions also present in that role; every Intersect restriction applies after all Unions |
| Individual **Grant** | Adds a permission, still subject to Intersect restrictions |
| Individual **Deny** | Removes the permission; another Union does not restore it |
| Individual **Inherit** | Removes that person's override and uses their role/membership result |

For example, a group can add document review through **Union**. A separate **Intersect** role that contains only read and download permissions still removes review from the final result. Use **Info**, rather than the role's name, to confirm the outcome.

## Folder and document permissions

| File action | Meaning and limits |
|---|---|
| `view` | View the file/folder; does not also grant editing, download or unmasked values. |
| `edit` | Library changes such as rename/move and writing to a destination folder. It is separate from company settings permission. |
| `copy` | The editor's copy action defaults to denied without an explicit allow for non-admins. It is not a universal gate on every copy path, the operating-system clipboard, screenshots or copies of already downloaded files. |
| `delete` | Delete the target, subject to applicable document state, retention and hold restrictions. |
| `print` | VisionDoc controlled print output; does not remotely control printing in external software. |
| `download` | Obtain the document's download output; does not bypass role masking. |

Online editing separately checks write capability, document state, editor availability and role masking. In the current version, do not rely on the file `edit` rule alone to disable online editing. To remove a person's writing capability, also check their effective `drive:write` permission and verify the operation they use.

The file resolver uses the built-in role's ceiling: read for view, write for edit/delete, and secure download for copy/print/download. An operation can separately check effective user permissions; an Allowed file-rule result alone is not confirmation that all conditions for that operation are met.


In **Drive**, select the folder or file and open **Permissions**. A document preview also offers a Permissions section when your account can manage it.

1. Choose **Add a rule**.
2. Choose **allow** or **deny**.
3. Choose the action offered by the editor, such as view, edit, download, delete, print or copy.
4. Choose whether the rule applies to a **role**, **user** or **department**, then choose the name.
5. Add the rule. In the effective-permissions viewer, select the person whose access you need to check.

The viewer explains which rule decided the result. The order is:

1. **Admin bypasses folder/file rules.** Admin access is audited. Test restrictions with a non-admin account.
2. A rule on a file takes priority over a folder rule. A nearer parent folder takes priority over a more distant one.
3. At the same scope, a named user takes priority over a department, then a role.
4. If equally specific rules conflict, **deny** wins.
5. An allow cannot exceed the action ceiling of the person's underlying built-in role. Custom/user grants do not remove this ceiling.
6. With no matching rule, the built-in role's capability applies. **Copy** needs an explicit allow.

Example: deny **view** to the Uploader role on a Finance folder, then allow **view** for one particular file. That file exception takes priority. If the same file has a named-user deny, that person's deny takes priority over its role allow.

An allow for one department does **not** automatically deny everyone else. Add the appropriate broader deny and check the result for both an intended recipient and an excluded person. Removing a rule restores the inherited/default result; it does not automatically deny access.

## When access does not match expectations

| Symptom | Check |
|---|---|
| A whole feature says it is not enabled | Company module availability; changing a user role alone will not enable it |
| A button is missing or disabled | Effective permissions in **Info**, plus any feature or document-state requirement |
| One folder/file is unavailable | Its effective-permissions result, including inherited and named-user rules |
| The file opens but values show `[REDACTED]` | Both PII and Role Masking settings |
| A masking test appears to do nothing | Test as the intended non-admin role; Admin is exempt from role masking |
| A new allow still has no effect | A more specific deny, an Intersect restriction, or the underlying role's file-action ceiling |
| An approval is not assigned to the person | Workflow participants and the current step, separately from general review permission |

Use [Audit](audit.md) to review recorded changes and file actions. The **Who** and **What** filters help narrow down a permission or access issue.
