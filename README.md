# sarangbi.co

The SermonDesk site. Everything here is written by a workflow in the SermonDesk source repository, `deploy-site.yml`, on every change to the page, the demo, or the shared code: it builds the demo (the app itself, running in a browser), copies `site/` across, stamps `index.html` with the source commit, and waits until sarangbi.co serves it.

Do not edit this repository by hand. Change `site/` in the source repository and push; the next deploy replaces everything here except the git history.

The page's facts are not typed by hand. `scripts/site-build.mjs` writes the
languages (as the app names them, in its order, and their count in words),
the version, and the latest release notes into the page at deploy, from the
app's source, so the page says what the app says. Its ten pictures are
taken from the built app with the demo library by `scripts/site-shots.mjs`,
and its film, thirteen seconds of the app in each theme, by
`scripts/site-film.mjs`; the release workflow runs both on its Mac job, and
the publish job commits them under `site/img/` and `site/media/` on main
and deploys the site, so they are always of the version that is out. Run
the scripts by hand only for a look between releases. The verifier refuses a page that offers one machine's download
without the other's, uses a word the app has retired, or counts the
languages by hand.
