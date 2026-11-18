<p class="kicker">Workspace</p>

# PII and role masking

PII means information that can identify a person, such as an identity number, phone number or email address. VisionDoc also lets a company protect extracted business fields, including bank accounts and contact details.

**Detection** finds information in document text. **Masking** decides which values a role may receive. A **watermark** marks an output; it does not hide its content. [File permissions](permissions.md) decide access to the file itself.

## Set the company's PII options

1. Sign in with permission to edit company settings.
2. Open **Settings → PII**.
3. Tick the categories to hide.
4. Click **Save**. Changing a checkbox without saving does not apply the policy.
5. Open a synthetic example as the affected non-admin user and check the extracted fields, preview and download that the user actually needs.

The checked options add masking rules for **Uploader** and **Compliance**. They do not hide values from **Admin**. A custom role still has an underlying built-in role; giving it a different name does not create a new masking category.

| PII option | What it covers |
|---|---|
| Mask emails | Detected email addresses and the extracted supplier email field |
| Mask phone numbers | Detected phone numbers and the supplier phone field |
| Mask ID numbers | The supported HKID detector; this is not a detector for every country's ID format |
| Mask bank account number | Account number, last four digits and account name, including the bank-account field aliases |
| Mask bank name | The extracted bank name field |
| Mask business registration number | Extracted supplier and customer business registration numbers |
| Mask delivery and billing addresses | Those two extracted address fields |
| Mask contact person and client name | Those two extracted name fields |

A field option targets the named extracted fields. It does not mean every possible address, name or registration number anywhere in an image is automatically found. Document quality and extraction accuracy affect what can be detected.

**Two controls need special care in the current release:**

- **Allow compliance roles to preview unmasked (placeholder)** is labelled as a placeholder. It is not an implemented override of masking restrictions. Do not use it to grant access to protected values.
- **Retention days** on the PII card is a stored setting, not a file-deletion policy. Configure actual file lifecycle rules under [Retention & Legal Hold](retention.md).

## Use Role Masking for a more specific rule

Open **Settings → Role Masking**. This is useful when, for example, uploaders should not see bank accounts but Compliance should.

1. Click **Add rule**.
2. Select the type and target from the table below.
3. Under **Hidden from**, tick **uploader**, **compliance**, or both.
4. Click **Save**. Every row needs a target and at least one denied role.
5. Test as each affected role. Admin is deliberately not a selectable denied role.

| Rule type | Target | Example |
|---|---|---|
| PII type | `HKID`, `PHONE`, `EMAIL`, or `BANK_ACCOUNT` | Hide `BANK_ACCOUNT` from uploader |
| Extracted field | The field's internal name, not its display label | Hide `total_amount` from uploader |
| Pattern | A valid regular expression | Hide a known text pattern specific to your documents |

**A field-name rule masks the extracted field value. It does not, by itself, locate and remove the same value inside the original file.** File-byte redaction uses supported PII detectors and pattern rules. If the original must not be available, also configure the relevant file/download permissions and verify the output.

Use the exact field key defined by your extraction schema. Ask the administrator who maintains the schema if only the friendly label is visible. A renamed display label does not rename the underlying field key.

If AI drafting is available, describe the policy and click **Generate draft**. The generated rules replace the unsaved editor contents. Review every row, then **Save** to apply them; generation alone does not change the live policy.

### Example: only uploaders should be masked

Suppose the company wants Compliance to see bank accounts while uploaders cannot.

1. Check **Settings → PII** first. If **Mask bank account number** is checked, it adds restrictions for both roles.
2. If the company's approved policy permits Compliance access, clear that broad option and save.
3. In **Role Masking**, add `BANK_ACCOUNT`, with only **uploader** ticked under **Hidden from**. Add any required account-name/field rules too.
4. Save and test with synthetic documents as uploader and compliance.

PII options and Role Masking rules combine. Removing one restriction does not cancel another rule that still hides the same value. There is no “allow” rule here that overrides a masking deny.

## What happens when someone opens or downloads a file

The application applies the company's masking policy for the user's underlying role. Protected values can appear as `[REDACTED]`. Masking does not delete those values from the stored original.

For supported PII-type and pattern rules, the server also checks protected file output:

- Supported text and text-based PDFs can have denied values removed from the returned output. PDF redaction is checked again before the result is served.
- An image-only scan, an unsupported format, or a PDF that cannot be safely redacted may be refused for that role.
- Where a download path has suitable extracted text and finds no denied values, an otherwise non-rewritable document can be returned unchanged. Do not assume every Office file is either always blocked or always safe.
- Online editing requires the original file bytes. A role with an applicable masking policy is refused an editing session, even if it can view a masked result.

**Admin is exempt from role masking.** Seeing full values as an administrator does not prove the policy failed. Likewise, being a Compliance user does not automatically bypass a rule that hides values from compliance.

## Verify a policy before using it

Use a test document with synthetic values and two separate accounts: an administrator and the intended restricted user. Check the fields, preview, download/export and editing paths your team actually uses. Confirm the admin can still administer the document, the restricted user sees the intended masking or refusal, and unrelated values remain usable.

If a value is still visible, check the field key, the detector/pattern, both policy pages and the user's underlying role. If a download is refused, read the explanation: the format may not support safe redaction. Do not turn off the company's protection simply to make a download succeed.

See [Permissions](permissions.md) for role and file-access rules, [Settings](settings.md) for where controls live, and [Audit](audit.md) for recorded activity.
