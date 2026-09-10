# sarangbi.co

The SermonDesk site. Everything here is written by a workflow in the SermonDesk source repository, `deploy-site.yml`, on every change to the page, the demo, or the shared code: it builds the demo (the app itself, running in a browser), copies `site/` across, stamps `index.html` with the source commit, and waits until sarangbi.co serves it.

Do not edit this repository by hand. Change `site/` in the source repository and push; the next deploy replaces everything here except the git history.
