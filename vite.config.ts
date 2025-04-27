import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    // en este alias se establece '@' como el directorio para ./src
    alias: [{ find: "@", replacement: path.resolve(__dirname, "src") }],
  },
});
