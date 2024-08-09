import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: "/", // Ensure this is set to the correct base path if needed
  build: {
    outDir: "dist",
    assetsDir: "assets", // Ensure assets are placed in the 'assets' directory
    chunkSizeWarningLimit: 2000, // Adjust the size limit (in KB) as needed
    rollupOptions: {
      external: [
        'react-quill/dist/quill.snow.css'
      ],
      output: {
        manualChunks(id) {
          if (id.includes("node_modules")) {
            return id
              .toString()
              .split("node_modules/")[1]
              .split("/")[0]
              .toString();
          }
        },
      },
    },
  },
  plugins: [react(), visualizer()],
});
