# sarangbi.co

The SermonDesk site. Everything here is written by a workflow in the SermonDesk source repository, `deploy-site.yml`, on every change to the page, the demo, or the shared code: it builds the demo (the app itself, running in a browser), copies `site/` across, stamps `index.html` with the source commit, and waits until sarangbi.co serves it.

Do not edit this repository by hand. Change `site/` in the source repository and push; the next deploy replaces everything here except the git history.

The page's facts are not typed by hand. `scripts/site-build.mjs` writes the
languages (as the app names them, in its order, and their count in words),
the version, and the latest release notes into the page at deploy, from the
app's source, so the page says what the app says. Its six pictures are
taken from the built app with the demo library by `scripts/site-shots.mjs`
and committed under `site/img/`; run it after a release that changed a
screen. The verifier refuses a page that offers one machine's download
without the other's, uses a word the app has retired, or counts the
languages by hand.
