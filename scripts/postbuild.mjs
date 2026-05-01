// Post-build helpers for GitHub Pages deployment.
// 1. Copy `dist/index.html` to `dist/404.html` so direct hits to client-side
//    routes (e.g. /portfolio/contact) fall back to the SPA shell instead of
//    GitHub Pages' generic 404 page.
// 2. Create an empty `dist/.nojekyll` file so GitHub Pages serves files /
//    folders whose names start with `_` (Vite emits some).

import { copyFileSync, writeFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const DIST = resolve(process.cwd(), "dist");
const indexPath = resolve(DIST, "index.html");
const fourOhFourPath = resolve(DIST, "404.html");
const nojekyllPath = resolve(DIST, ".nojekyll");

if (!existsSync(indexPath)) {
  console.warn("[postbuild] dist/index.html not found — skipping.");
  process.exit(0);
}

copyFileSync(indexPath, fourOhFourPath);
writeFileSync(nojekyllPath, "");

console.log("[postbuild] wrote dist/404.html and dist/.nojekyll");
