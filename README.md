# Shanu Portfolio

A video-editor portfolio site built from a Figma design.

- **Stack:** Vite, React 18, TypeScript, Tailwind CSS
- **Video:** [Mux](https://mux.com) via `@mux/mux-player-react`
- **Source design:** [`video editng portfolio` (Figma)](https://www.figma.com/design/9dRRepzH62IEKc7eqb1oVL/video--editng-portfolio?node-id=1-6)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:5173 in your browser. Vite ships with hot-module replacement, so edits show up instantly.

```bash
npm run build      # production build
npm run preview    # locally preview the production build
npm run lint       # type-check the project (no emit)
```

## Project structure

```
src/
├── App.tsx                # Page composition
├── main.tsx               # React entry point
├── index.css              # Tailwind + design-token CSS
├── assets/                # Bitmap assets pulled from the Figma file
├── data/
│   └── works.ts           # Six work items + Mux playback IDs
└── components/
    ├── Header.tsx
    ├── Hero.tsx
    ├── CategoriesBar.tsx
    ├── WorkSection.tsx    # "Work" pill, 3×2 grid, big outlined headline
    ├── VideoCard.tsx      # 328×583 portrait card with hover-to-play Mux
    └── Footer.tsx
```

## Mux video integration

The six cards in `WorkSection` each render a [`MuxPlayer`](https://docs.mux.com/guides/video/mux-player-web) using a `playbackId`. The 16:9 source is set to `object-fit: cover` so the video fills the portrait card composition from the design.

Replace the placeholder `DEMO_PLAYBACK_ID` in `src/data/works.ts` with your own Mux playback IDs from your [Mux Video dashboard](https://dashboard.mux.com).

```ts
// src/data/works.ts
export const works: Work[] = [
  {
    id: "01",
    number: "01",
    title: "Doctor",
    subtitle: "Reel 2026",
    tags: ["Motion Design", "Color Grading", "Sound Design"],
    muxPlaybackId: "YOUR_MUX_PLAYBACK_ID_HERE",
  },
  // ...
];
```

### Notes

- All six cards autoplay muted in a loop on page load. Hovering a card unmutes that one (others stay muted). Leaving the card re-mutes it.
- No built-in player controls are shown (design intent — silent ambient looping).
- If you want letterboxed 16:9 instead of cropped portrait, change the `.mux-cover` rule in `src/index.css` to use `--media-object-fit: contain;`.

## Fonts

Inter and Intel One Mono are loaded from Google Fonts in `index.html`. The body falls back to system sans / mono when those fonts haven't loaded yet.

## Deployment — GitHub Pages

The site is configured for **GitHub Pages** at `https://iamshanu28.github.io/portfolio/`.

Three pieces work together:

1. `vite.config.ts` sets `base: "/portfolio/"` so all built asset URLs are prefixed
2. `src/App.tsx` reads `import.meta.env.BASE_URL` and passes it to `<BrowserRouter basename={...}>` so client-side routes (`/`, `/contact`) resolve under the subpath
3. `scripts/postbuild.mjs` copies `dist/index.html` → `dist/404.html` (so direct hits to `/portfolio/contact` fall back to the SPA shell instead of GitHub's 404 page) and creates an empty `dist/.nojekyll` (so Pages serves files starting with `_`)

### Deploy

```bash
npm run deploy
```

This runs `npm run build` (which triggers `postbuild`) and then publishes `dist/` to the `gh-pages` branch via the `gh-pages` package. Make sure your repo's Pages source is set to **Deploy from a branch → `gh-pages` → `/ (root)`** in repo settings.

### Local preview at the production base path

```bash
npm run build && npm run preview
# → http://localhost:4173/portfolio/
```

### Allowed hosts

`vite.config.ts` whitelists `iamshanu28.github.io` for both `server.allowedHosts` and `preview.allowedHosts` — useful if you tunnel the dev server (e.g. via ngrok) behind that domain. Production GitHub Pages serves the static `dist/` files and doesn't go through Vite, so this only affects dev/preview.
