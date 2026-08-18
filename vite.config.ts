import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/webdev-studio/",
  plugins: [react()],
});
