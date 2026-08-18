# sarangbi.co

The SermonDesk site. One self-contained `index.html`, no build step and no
dependencies: edit it and push, and GitHub Pages serves it.

The canonical copy lives in the SermonDesk source repository at `site/index.html`.
Change it there first, then copy it here, so the page and the app's pricing do
not drift apart.

Before the store opens, two things have to change together:

- the two Subscribe links in `index.html`, currently `mailto:`
- `CHECKOUT_URL` in the app's `src/shared/billing.ts`
