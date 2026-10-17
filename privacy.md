# Privacy

SermonDesk is written to keep your sermons on your own computer, and this page says exactly what leaves it, what stays, and what we never do. This is the whole of it; there is no longer version.

## What leaves your computer

Every request the app makes, and what is in it.

- **The subscription check.** When the app starts, and at most once a day after that, it sends your subscription key and the name of this computer, as the computer calls itself, to Lemon Squeezy, and reads back whether the subscription is current. Entering a key and deactivating a computer are the same request. Nothing about your sermons goes with it, and the app carries on for thirty days without an answer.
- **The update check.** When the app starts, and every six hours while it stays open, it asks GitHub whether a newer version is out, and downloads it quietly if so. GitHub sees what any website sees of a visitor: an address and the time.
- **The voice, when you ask for it.** The first time you press Dictate, or choose the finer voice, the app fetches the voice model from Hugging Face, <!-- @voice-quick --> or <!-- @voice-fine -->, and keeps it. After that, dictation and transcription run on this computer, and nothing you say leaves it.
- **A spelling dictionary, on an older Windows.** On macOS, and on Windows 10 and later, the app uses the spellchecker built into the system and fetches nothing. On an older Windows, Chromium fetches a dictionary for your language from Google's servers the first time.
- **When you buy.** The checkout is Lemon Squeezy's page, in your own browser, under their privacy policy. We receive your name, your email and what you bought, and use them to send your key and to reach you about the software. We do not sell or share them.
- **When you write to us.** Write to us opens your own mail program with a message to us and the version in its subject. What you send, the log included, is your choice.

That is the whole list. The app has no account to sign in to, sends no usage statistics, sends no crash reports, and never sends a word of a sermon anywhere.

## What stays on your computer

- **Your sermons**, as plain files in the folder you chose, and nowhere else. If that folder is in iCloud Drive, Google Drive, OneDrive or Dropbox, that service syncs it on your own account; we hold nothing.
- **The app's own data**, in the folder Settings names at the foot of its window: your settings, the search index built from your sermons, the store's last answer about your subscription, sealed to this computer, and the voice model once fetched.
- **The log**: what the app did and when, for the day something goes wrong. It never holds a sermon's words or your key, and it leaves this computer only if you send it.
- **A kept copy**, when a save to your folder fails: the sermon as it was, under the app's data, until the folder takes it or you discard it.

## Contact

Questions about any of this: davislor@sarangbi.co.
