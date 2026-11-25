/* VisionDoc visible-watermark example, verified on Dev 2026-11-25.
   Run in the browser console while signed in to YOUR authorized Dev tenant.
   Pass the job ID of your own synthetic PDF. This creates an export copy.
   No password is included, no policy is changed, and no email is sent.
   channel: "ecopy" = diagonal; "print" = footer, in the tested version.
*/
async function createWatermarkedPdf(jobId, channel = "ecopy") {
  if (location.origin !== "https://app.dev.visiondoc.ai") {
    throw new Error("This example is restricted to VisionDoc Dev.");
  }
  if (!/^[0-9a-f-]{36}$/i.test(jobId) || !["ecopy", "print"].includes(channel)) {
    throw new Error("Supply your PDF job ID and ecopy or print.");
  }
  const meResponse = await fetch("/api/auth/me", {cache: "no-store"});
  if (!meResponse.ok) throw new Error("Sign in first.");
  const me = await meResponse.json();
  const csrf = decodeURIComponent(document.cookie.match(/(?:^|;\s*)dlp_csrf=([^;]+)/)?.[1] || "");
  const endpoint = `/api/jobs/${jobId}/${channel === "print" ? "print" : "download"}`;
  const response = await fetch(endpoint, {
    method: "POST", headers: {"Content-Type": "application/json", "X-CSRF-Token": csrf},
    body: JSON.stringify({user_id: me.user_id, channel})
  });
  if (!response.ok) throw new Error(`Export refused (${response.status}): ${await response.text()}`);
  const exported = await response.json();
  if (!exported.download_id) throw new Error("No downloadable export returned.");
  const file = await fetch(`/api/jobs/${jobId}/downloads/${exported.download_id}/file`);
  if (!file.ok) throw new Error(`File retrieval failed (${file.status}).`);
  const url = URL.createObjectURL(await file.blob());
  const a = document.createElement("a"); a.href = url;
  a.download = `VisionDoc-${channel}-${exported.watermark_token}.pdf`;
  a.click(); setTimeout(() => URL.revokeObjectURL(url), 60000);
  return {watermark_token: exported.watermark_token, layout: exported.layout,
          download_id: exported.download_id};
}
// Example AFTER replacing the ID with your own document:
// await createWatermarkedPdf("YOUR-OWN-DOCUMENT-JOB-UUID", "ecopy");
// await createWatermarkedPdf("YOUR-OWN-DOCUMENT-JOB-UUID", "print");
