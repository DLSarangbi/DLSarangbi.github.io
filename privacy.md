# Privacy

SermonDesk is written to keep your sermons on your own computer, and this page says exactly what leaves it, what stays, and what we never do. This is the whole of it.

## What leaves your computer

Everything the app sends over the internet, and what is in it.

<!-- @subscription -->
- **The subscription check.** When the app starts, and at most once a day after that, it sends your subscription key and the name of this computer (the name the computer gives itself) to Lemon Squeezy, the company that handles payments, and reads back whether the subscription is current. Entering a key and deactivating a computer are the same request. Nothing about your sermons goes with it, and the app carries on for thirty days without an answer.
<!-- @end-subscription -->
<!-- @sunset -->
- **No subscription check.** SermonDesk no longer asks for a subscription, so it sends nothing to a store: no key, no computer name, nothing at all.
<!-- @end-sunset -->
- **The update check.** When the app starts, and every six hours while it stays open, it asks GitHub, where the app’s releases are kept, whether a newer version is out, and downloads it in the background if so. GitHub sees what any website sees of a visitor: an internet address and the time.
- **The voice, when you ask for it.** The first time you click Dictate, or choose the more accurate voice, the app downloads what it needs to understand speech from Hugging Face, a site that hosts such files, <!-- @voice-quick --> or <!-- @voice-fine -->, and keeps it. After that, dictation runs on this computer, and nothing you say leaves it.
- **A spelling dictionary, on an older Windows.** On a Mac, and on Windows 10 and later, the app uses the spellchecker built into the system and downloads nothing. On an older Windows, the app’s browser engine downloads a dictionary for your language from Google the first time.
<!-- @subscription -->
- **When you buy.** The checkout is Lemon Squeezy's page, in your own browser, under their privacy policy. We receive your name, your email and what you bought, and use them to send your key and to reach you about the software. We do not sell or share them.
<!-- @end-subscription -->
- **When you contact us.** Contact us opens your own mail program with a message to us and the version in its subject. What you send, the log included, is your choice.

That is the whole list. The app has no account to sign in to, sends no usage statistics, sends no crash reports, and never sends a word of a sermon anywhere.

## What stays on your computer

- **Your sermons**, as ordinary files in the folder you chose, and nowhere else. If that folder is in iCloud Drive, Google Drive, OneDrive or Dropbox, that service copies it between your computers on your own account; we hold nothing.
- **The app’s own data**, in the folder named at the foot of the Settings window: your settings, the list it keeps to search your sermons quickly, the store’s last answer about your subscription (locked to this computer), and the speech files once downloaded.
- **The log**: what the app did and when, for when something goes wrong. It never holds a sermon's words or your key, and it leaves this computer only if you send it.
- **A kept copy**, when saving to your folder fails: the sermon as it was, kept with the app’s data until it can be saved to the folder or you discard it.

## Contact

Questions about any of this: davislor@sarangbi.co.
