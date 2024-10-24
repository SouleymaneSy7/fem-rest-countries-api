import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    open: "/",
    strictPort: false,
    port: 3000,
  },
  clearScreen: false,
});
