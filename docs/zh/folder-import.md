<p class="kicker">這部電腦</p>

# 資料夾匯入

<figure class="watch">
  <video controls preload="none" playsinline poster="https://visiondoc-tutorials.s3.ap-southeast-1.amazonaws.com/posters/26-folder-import.jpg" src="https://visiondoc-tutorials.s3.ap-southeast-1.amazonaws.com/videos/26-folder-import.mp4"></video>
  <figcaption>看短片。這段短片和字幕都是英文。</figcaption>
</figure>

資料夾匯入裝在一部看得到網絡資料夾的電腦上。它登入 [https://app.visiondoc.ai](https://app.visiondoc.ai)，讀那個資料夾，把新檔案上傳。它不會改、也不會刪那個資料夾裡的檔案。

這一頁是給設定那部電腦的人看的。下面的指令打在那部電腦上，不是打在 VisionDoc 裡面。設定頁保持英文，也保持淺色。

<figure class="shot">
  <img src="assets/importer.png" alt="VisionDoc 資料夾匯入的登入卡">
  <figcaption>設定頁。它保持英文，也保持淺色。</figcaption>
</figure>

程式是公開的映像 [ghcr.io/kaff-international-limited/visiondoc-smb](https://github.com/kaff-international-limited/visiondoc-smb/pkgs/container/visiondoc-smb)。下載它不用登入 GitHub。

## 你需要甚麼

- 那部電腦要有 Docker。
- 一個 VisionDoc 的管理員帳號。
- 公司要已經獲准連接匯入程式。如果登入說公司未啟用，問負責你們公司 VisionDoc 的人。
- 一個可以讀那個資料夾的帳號就夠。它不用能夠修改資料夾。

## 啟動

在該做匯入的那部電腦上：

```sh
docker pull ghcr.io/kaff-international-limited/visiondoc-smb:latest

docker run -d --name visiondoc-smb \
  --restart unless-stopped \
  -p 127.0.0.1:8787:8080 \
  -v visiondoc-smb:/data \
  --read-only \
  --tmpfs /tmp:size=64m,mode=1777 \
  --cap-drop ALL \
  --security-opt no-new-privileges:true \
  --memory 512m \
  ghcr.io/kaff-international-limited/visiondoc-smb:latest
```

然後在同一部電腦打開 **http://localhost:8787**。如果這個地址已被用，改第一個數字，例如 `-p 127.0.0.1:8788:8080`。

## 連接公司

1. 輸入管理員電郵和密碼。
2. 按 **Sign in**。

卡片寫 **Use the administrator account for your company. The password is checked once and is not saved on this computer.** 密碼只核對一次，不會存在這部電腦上。

下次有人在這部電腦打開 **http://localhost:8787**，公司仍然是連著的，最多 30 日，或者直到有人登出。

## 選資料夾

1. 選 **SMB**、**SFTP**、**FTPS** 或 **WebDAV**。
2. 輸入資料夾。
   - SMB 用類似 `\\server\share\folder` 的路徑。
   - SFTP 用 `sftp://files.example/inbox`。
   - FTPS 用 `ftps://files.example/inbox`。
   - WebDAV 用 `https://` 地址。
3. 輸入那個資料夾的帳號和密碼。SMB 可以用 `DOMAIN\username`。
4. 按 **Test connection and save**。
5. 按 **Start import**。

普通的 FTP 和普通的 HTTP 不會被接受。頁面會告訴你你選的那種該怎樣寫地址。

大於 64 MB 的檔案留在資料夾裡，不會上傳。裡面的每個子資料夾都會包括。

掃描器把 PDF 放進 `\\files\scan\inbox`。選 **SMB**，輸入 `\\files\scan\inbox`，用一個只能讀的帳號，再按 **Test connection and save** 和 **Start import**。2 MB 的發票會上傳。90 MB 的掃描會留在資料夾。

## 狀態是甚麼意思

最上面三步是 **Company**、**Folder** 和 **Import**。

| 標記 | 意思 |
|---|---|
| Importing | 正在掃 |
| Paused | 掃描停了 |
| Ready | 資料夾已儲存，還沒掃過 |
| Imported | 那份檔案已經在 VisionDoc |
| Unchanged | 同一份檔案之前已經匯入 |
| Skipped | 和已經匯入的內容重複 |
| Waiting | 檔案還在變，這一次先留低 |
| Failed | 那份檔案沒有上傳。原因寫在那一行 |

內容相同的檔案只上傳一次，就算改了檔名也一樣。內容改了就會變成一份新文件。從資料夾刪掉檔案，不會刪掉 VisionDoc 裡的那一份。

重新整理頁面就更新清單。**Scan again** 再掃一次。**Pause** 停下掃描。

`invoice-104.pdf` 匯入了。有人把它改名成 `invoice-104-signed.pdf`，頁面沒有改。下一次掃描標成 **Unchanged**。如果加了一頁簽名，下一次就會把新的檔案帶進來。從共用資料夾刪掉 PDF，VisionDoc 裡的檔案仍然留在原位。

## 登出和重新開機

**Sign out** 只是藏起這個設定畫面。匯入繼續跑。按鈕下面寫 **Hides this screen only. Import keeps running.**

重新開機之後，儲存了的資料夾和已經匯入的清單都還在。不要刪掉 `visiondoc-smb` 那個儲存區，除非你想從頭再設定一次。

這個頁面只在這部電腦上。不要把 8787 這個端口開到互聯網。
