import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// Hosted at https://iamshanu28.github.io/iamshanu28/ (GitHub Pages project
// site — the path segment must match the GitHub repo name).
const BASE = "/iamshanu28/";
const ALLOWED_HOSTS = ["iamshanu28.github.io", "localhost", "127.0.0.1"];

export default defineConfig({
  plugins: [react()],
  base: BASE,
  server: {
    port: 5173,
    open: true,
    allowedHosts: ALLOWED_HOSTS,
  },
  preview: {
    port: 4173,
    allowedHosts: ALLOWED_HOSTS,
  },
});
