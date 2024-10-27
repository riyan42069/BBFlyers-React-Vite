import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: {
        popup: "index.html", // Entry for the popup
      },
    },
  },
  publicDir: "public", // Ensures public files (manifest.json, icons) are copied to dist
});
