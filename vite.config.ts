import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "touch-screen-web",
  // server: {
  //   host: true,
  //   port: 5173, // ensure this matches your development port
  // },
});
