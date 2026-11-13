<p class="kicker">Home</p>

# Dashboard

<figure class="watch">
  <video controls preload="none" playsinline poster="https://visiondoc-tutorials.s3.ap-southeast-1.amazonaws.com/posters/03-dashboard.jpg" src="https://visiondoc-tutorials.s3.ap-southeast-1.amazonaws.com/videos/03-dashboard.mp4"></video>
  <figcaption>Watch the video</figcaption>
</figure>

This is the first page after you sign in. The line under the title says **Workspace activity and usage at a glance**.

<figure class="shot">
  <img src="assets/dashboard.png" alt="Dashboard with storage, reading pages, tokens, five stored documents, and three job counts">
  <figcaption>Storage is almost empty. Three files are waiting.</figcaption>
</figure>

## The three tabs

| Tab | Where it goes |
|---|---|
| Dashboard | This page |
| Tasks | The same list as Inbox & outbox. Work waiting for you |
| Workflows | The workflows you can start. The same page as Start workflow |

**Dashboard** is the one selected.

## Usage

**Usage** is the card under the tabs. People who manage the company see the numbers. Everyone else sees **Workspace administrators can view usage and subscription details.**

### Storage

**Storage** reads **0.00 GB / 10.00 GB**. The first number is how much space the files are using. The second number is how much the company can use. The bar shows that fill. Here it is empty.

The line under the bar says **10.00 GB shared across your company**. The 10 GB is for the whole company, not 10 GB for each person.

### AI reading pages

**AI reading pages** reads **2 / 500**. One page is one page VisionDoc has read from a file. This company can read 500 pages. Two have been read.

### Estimated AI tokens used

**Estimated AI tokens used** reads **5,600**. A token is a small piece of the text the AI reads. 5,600 is an estimate of how much reading the company has used.

The line under it says **No configured limit**. There is no cap, so 5,600 is not "out of" a total. The bar stays grey.

### Stored documents

**Stored documents** reads **5**. The line under it says **Files in the library. Folders are not included.** A folder such as Invoice does not count. A PDF inside it does.

**View all documents** opens Drive.

## Jobs

**Jobs** is the heading under the usage card. A job is one file the company has sent in to be read.

**View all jobs** opens the full list. That page is titled **Jobs**. The line under the title says **Document processing job list · click a row for a quick preview.**

Three cards sit under the heading. Each card opens Inbox & outbox.

| Card | In the picture | What the number means |
|---|---|---|
| Pending | 3 | Files a person still has to look at. VisionDoc has finished reading them |
| Processing | 0 | Files VisionDoc is still reading. Reading finishes as the file comes in, so this stays at 0 |
| Submitted | 3 | Files that have been waiting in Pending for more than a day |

In this picture **Pending** and **Submitted** are both 3. Every file that is waiting has been waiting for more than a day. Click **Pending** or **Submitted** to open them. Click **View all documents** to see the five files in Drive.
