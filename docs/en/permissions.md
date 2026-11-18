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

## Start with the person's role

The built-in defaults are below. A custom role, group/title role or individual override can change the effective result.

| Capability | Uploader | Compliance / Reviewer | Admin |
|---|---|---|---|
| Browse and work with Drive files | Yes | Yes | Yes |
| Manage the processing queue | Yes | Yes | Yes |
| Use the assistant | Yes | Yes | Yes |
| Secure download | Yes | Yes | Yes |
| Review documents | No | Yes | Yes |
| Look up watermarks / run workbench actions | No | Yes | Yes |
| Draft email with the assistant | No | No | Yes |
| Edit company settings | No | No | Yes |

These are application capabilities, subject to the company's enabled features and applicable file controls. **Uploader is not a read-only role.** For a person who should only read and download, create a custom role with those permissions.

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
