// vite.config.js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  base: "/", // Ensure this is set to the correct base path if needed
  build: {
    outDir: "dist",
    assetsDir: "assets", // Ensure assets are placed in the 'assets' directory
  },
  plugins: [react()],
});
