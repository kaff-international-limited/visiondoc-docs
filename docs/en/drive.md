<p class="kicker">Files</p>

# Drive

**Drive** is the library. You land in **Home**.

<figure class="shot">
  <img src="assets/drive.png" alt="Drive home with the top buttons and a selected PDF">
  <figcaption>Home is open. One PDF is selected, so the second row of buttons is showing.</figcaption>
</figure>

The left list is the folders. **Search files…** at the top of that list filters the folder you are looking at. **Search** in the sidebar searches the whole workspace.

In this picture the list shows **esign_signed**, then **Home**, then **inbox**. **Home** is open, so **Invoice**, **Quotation**, and **Sales Order** sit under it. The **1** on Home is how many items in that folder are selected.

## The top row

These buttons sit on the right of the folder name. On Home the name is **Home**. While Home is open, this row has no **Add folder** button. Each button has its own page.

| Button | Page |
|---|---|
| Magnifying glass | [Filter](drive-filter.md) |
| List icon | [List and grid](drive-view.md) |
| Type | [Type](drive-sort.md) |
| Paste | [Paste](drive-paste.md) |
| Reports | [Reports](drive-reports.md) |
| Drop-off link | [Drop-off link](drive-dropoff.md) |
| Upload folder | [Upload folder](drive-upload-folder.md) |
| Upload files | [Upload files](drive-upload.md) |

## When a file is selected

Select a file or a folder and a second row appears. One item shows its name on the chip. The chevron opens the list, and the chip's title is the path. With more than eight items, that list has a box that says **Find in selection**. The ✕ on a row in that list removes that one item. Several files in the same folder show a count on the chip, such as **3 selected**.

| Button | What it does |
|---|---|
| The name chip | The selected file. In this picture it is one PDF |
| Copy | Copies it. The page tells you to open a folder and click **Paste**. The original stays where it is. **Paste** then puts a new copy in the folder you have open |
| Move to… | Cuts it. The page tells you to open a folder and click **Paste**. **Paste** then moves the item into that folder |
| Paste | The same paste as the top row |
| Delete | Asks first. For a file, the question names the file and asks to move it to rejected (soft delete). Confirm, and the file moves to rejected. **Home**, **Invoice**, **Quotation**, and **Sales Order** cannot be deleted. The page says **System folders (inbox, approved, …) cannot be deleted.** A folder you are allowed to delete is removed with everything inside it, and that cannot be undone |
| Rename | Shows when exactly one item is selected, and that item is not **Home**. The box is titled **Rename** and asks **New file name:** |
| Download | Saves the file to your computer |
| Export | Opens a menu. **CSV (.csv)** and **Excel (.xlsx)** are the extracted fields of files VisionDoc has already read. If none of the selected files have been read, the page says **Select documents that have been processed.** |
| Permissions | Shows for one item. Opens **Folder permissions** for that file or that folder |
| Re-read folder | Company administrators see this. The panel is titled **Re-read this folder**. It counts the documents in this folder and in everything below it. **Read them again** replaces their text, classification, extracted fields, and tags. A file with no document behind it can be brought in first. That button says how many files it will bring in as documents. Each page is read again. **Cancel** closes the panel |
| Ask about these | The green button. Sends the selected files to the assistant. If none of them have been read, the page says **Select documents that have been processed.** |
| ✕ | **Deselect all**. The second row goes away |

Select two or more files that VisionDoc has already read, and **Rename with AI** appears between **Rename** and **Download**. It shows a proposed name for each file. Nothing is renamed until you confirm. This picture has one file selected, so that button is not in the row.

## Folder structure

**Home** is the main folder. It sits in Drive. A company starts with three folders inside it. Every company gets this same layout.

| Folder | Where | Rule | Example |
|---|---|---|---|
| Home | In Drive | The root. You cannot delete it or rename it | The folder you land in |
| Invoice | In Home | You cannot delete it | The bill for an order |
| Quotation | In Home | You cannot delete it | The PDF a salesperson sends to a customer |
| Sales Order | In Home | You cannot delete it | The confirmed order that follows that quotation |

You can add as many folders as you need inside **Invoice**, **Quotation**, and **Sales Order**. Open one of those three and **Add folder** is in the top row. The box is titled **New folder**. It asks for a folder name made of letters, numbers, hyphens, and underscores. **Create** makes it. For example, `Quotation / 2026` holds this year's quotations, and `Invoice / 2026` holds the bills.

You cannot add a folder directly inside **Home**, and you cannot add a folder next to **Home**. The page says **This folder level is fixed. Add a subfolder under Invoice, Quotation, Sales Order.**

How long a file stays is a separate section, [Retention](retention.md).
