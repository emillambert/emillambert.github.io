# Design QA

Source visual: `output/playwright/live-home-http.png`, captured from `http://emilwl.me/` on 2026-08-24. The HTTPS domain currently serves a `*.github.io` certificate and opens a privacy error, so the content baseline was captured over HTTP.

Implementation screenshots:

- `output/playwright/qa-home-desktop.png`
- `output/playwright/qa-home-mobile.png`
- `output/playwright/qa-home-desktop-v4.png`
- `output/playwright/qa-home-mobile-v4.png`
- `output/playwright/qa-about-desktop.png`

Route: `/`

Viewport: desktop 1440 x 1000 CSS px; mobile 390 x 844 CSS px. Screenshots were captured at CSS pixel density with no device-frame or browser chrome included. The source screenshot is a full-page capture of the current live homepage; the implementation captures use the same full-page treatment.

State: production static export, light theme, default content, homepage at rest.

## Evidence

- Full-view comparison: the implementation was inspected against the live baseline for hierarchy, density, spacing, color, project prominence, lab layout, experience timeline, CV CTA, and contact footer.
- Focused regions: hero, first project card, lab heading/grid, and footer were checked at desktop and mobile sizes. About and CV pages were also opened to verify the shared navigation and page-level styling.
- Interactions tested: homepage `Read the case study` link navigated to `/work/millie/`; project page rendered; `/about/` and `/cv/` rendered successfully; external and mail links remain present.
- Console errors: none in production-mode captures for homepage, About, CV, or project page.

## Findings and fixes

- [P1] Original page used a very long black canvas with oversized outline typography and decorative pseudo-aerospace graphics that competed with the work. Replaced the presentation with a warm editorial canvas, clearer hierarchy, and restrained data-led project panels.
- [P1] The first redesign introduced slogan-like hero and section copy that did not reflect the owner. Replaced it with factual identity copy: “EMIL LAMBERT”, “Selected work”, “Side projects”, and “Experience across engineering, software and business.”
- [P1] Project proof was visually subordinate to the decorative visuals. Rebuilt each featured project into a readable card with summary, facts, status, and a consistent visual evidence panel.
- [P2] Lab heading content was split across grid columns because the heading and eyebrow were ungrouped. Grouped them so the heading reads as one unit at desktop and mobile.
- [P2] Browser captured a missing `/favicon.ico` request. Added `app/icon.svg`, which is emitted in the static export and removes the 404.

## Comparison history

1. Initial implementation capture showed the lab heading separated from its eyebrow by the two-column grid. The heading markup was grouped and the production export was rebuilt.
2. Initial local development capture showed a favicon 404. `app/icon.svg` was added and the production export was rebuilt. The subsequent production capture had no console errors.
3. Owner review rejected slogan-like positioning copy. The hero and section headings were simplified and re-captured at desktop and mobile sizes; the latest captures have no console errors.

## Follow-up polish

- Repair the `emilwl.me` TLS certificate/custom-domain configuration so the live site is safe to open over HTTPS. Current blocker: Namecheap is signed out; `www` must point directly to `emillambert.github.io` before GitHub can issue the certificate.
- Consider adding real project imagery later if it supports a specific case study; the current data panels intentionally avoid invented or placeholder imagery.

final result: passed
