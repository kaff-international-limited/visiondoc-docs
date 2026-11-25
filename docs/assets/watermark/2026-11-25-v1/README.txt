VisionDoc watermark tutorial — Dev observation on 2026-11-25

Guide: https://docs.visiondoc.ai/zh/watermark.html
English: https://docs.visiondoc.ai/en/watermark.html
Video: tutorial.mp4 (Cantonese narration, Traditional Chinese burned-in captions)

01-original.pdf: synthetic two-page original.
02-hidden-token.pdf: ordinary Drive download; hidden tracing token only.
03-print-footer.pdf: actual secure-print API output; visible footer.
04-visible-watermark.pdf: actual secure-download API output; visible diagonal watermark.

The server-returned PDF bytes are unchanged. No real customer records are used.
The custom text template was saved but was not applied to the tested secure export.
Long account/timestamp strings are clipped in the actual samples.
The QA tenant's original watermark settings were restored. Production was not modified.

api-example.js is a manual example for your own authorized, logged-in Dev session.
It contains no credentials and makes no request merely by opening the file.
Local synthesized voice: macOS Sinji. Pronunciation was not independently checked by listening.
