# Design QA

final result: passed

## Scope

- Direction implemented: 1+3 hybrid.
- Homepage target: full-screen video background, modern ecosystem-style entry layer, concise copy, interactive name on desktop.
- Checked routes: `/`, `/film`, `/translation`, `/photography`, `/about`, `/work/lingnan-cultural-shorts`.

## Evidence

- Desktop screenshot: `qa/home-desktop-v3-final2.png`.
- Mobile screenshot: `qa/home-mobile-v3-final3.png`.
- Build check: `npm run build` passed.

## Notes

- Desktop homepage uses a full-viewport video with switchable preview clips.
- The name is not used as the main hero title; it is placed in a hover-responsive identity dock.
- Mobile keeps the video-first hero, compact toolbar, and module entry control without text/control overlap.
- Homepage copy has been reduced; detailed content remains in clickable subpages.
