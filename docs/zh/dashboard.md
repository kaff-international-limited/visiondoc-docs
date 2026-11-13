<p class="kicker">主頁</p>

# 圖表報告

<figure class="watch">
  <video controls preload="none" playsinline poster="https://visiondoc-tutorials.s3.ap-southeast-1.amazonaws.com/posters/03-dashboard.jpg" src="https://visiondoc-tutorials.s3.ap-southeast-1.amazonaws.com/videos/03-dashboard.mp4"></video>
  <figcaption>看短片。這段短片和字幕都是英文。</figcaption>
</figure>

這是登入後的第一頁。中文畫面的副題仍然是英文：**Workspace activity and usage at a glance**。意思是一眼看到公司在做甚麼、用了多少。

<figure class="shot">
  <img src="assets/dashboard.png" alt="圖表報告，有儲存空間、讀取頁數、代幣、五份文件和三個工作數目">
  <figcaption>儲存空間幾乎是空的。三份文件在等。</figcaption>
</figure>

## 三個分頁

| 分頁 | 去哪裡 |
|---|---|
| Dashboard | 這一頁。中文畫面這個分頁仍然是英文 |
| Tasks | 和 Inbox & outbox 同一張清單。等你處理的工作 |
| Workflows | 你可以開始的流程。和 Start workflow 是同一頁 |

選中的是 **Dashboard**。

## 用量

**用量** 是分頁下面那張卡。英文畫面寫 **Usage**。管理公司的人看得到數字。其他人看到 **Workspace administrators can view usage and subscription details.**

### 儲存空間

**Storage** 寫 **0.00 GB / 10.00 GB**。第一個數字是檔案用了多少空間。第二個數字是公司可以用多少。下面的橫條顯示用了多少。這裡是空的。

橫條下面寫 **10.00 GB shared across your company**。這 10 GB 是整家公司共用，不是每個人各有 10 GB。中文畫面這句仍然是英文。

### 讀取頁數

**AI reading pages** 寫 **2 / 500**。一頁就是 VisionDoc 從檔案讀過的一頁。這家公司可以讀 500 頁。已經讀了兩頁。

### 估計用了多少

**Estimated AI tokens used** 寫 **5,600**。token 是 AI 讀到的一小段文字。5,600 是公司大概用了多少。

下面寫 **No configured limit**。中文畫面這句是 **未設定上限**。沒有上限，所以 5,600 不是「一共幾多裡面的幾多」。橫條保持灰色。

### 已儲存文件

**已儲存文件** 寫 **5**。英文畫面寫 **Stored documents**。下面寫 **Files in the library. Folders are not included.** 像 Invoice 這種資料夾不算。裡面的 PDF 才算。

**查看所有文件** 打開文件庫。英文畫面寫 **View all documents**。

## 工作

**Jobs** 是用量卡下面的標題。一件工作就是公司送進來要讀的一份檔案。中文畫面這個標題仍然是英文。

**View all jobs** 打開完整清單。那一頁的標題是 **Jobs**。下面寫 **Document processing job list · click a row for a quick preview.** 中文副題是 **文件處理工作列表 · 點擊列可快速預覽**。

下面有三張卡。每張卡都打開 Inbox & outbox。

| 卡 | 這張圖 | 數字是甚麼 |
|---|---|---|
| Pending | 3 | 還要人看的檔案。VisionDoc 已經讀完 |
| Processing | 0 | VisionDoc 還在讀的檔案。檔案一進來就讀完，所以這個數字停留在 0 |
| Submitted | 3 | 在 Pending 等了超過一天的檔案 |

這三個名稱在中文畫面仍然是英文。這張圖的 **Pending** 和 **Submitted** 都是 3。每一份在等的檔案都等了超過一天。按 **Pending** 或 **Submitted** 打開它們。按 **查看所有文件** 去文件庫看那五份檔案。
