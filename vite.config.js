import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

 https://vitejs.dev/config/
export default defineConfig({
  server: {
     proxy: {
       "/first/one": "http://l92.168.59.100:5555",
     },
   },
  plugins: [react()],
});
