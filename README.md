# HomePage

To Run this project

1. Clone this repo
2. Run "npm install"
3. Run "npm run dev"
4. Open localhost:5173 in your browser

Should the be an issue running the api call, ensure the vite config has the following set up

# vite.config.js

import {defineConfig} from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
plugins: [react()],
server: {
proxy: {
"/api": {
target:
"https://zm6zxgq6hyhe3smi5krzsrk2fu0iidhh.lambda-url.us-east-1.on.aws/",
changeOrigin: true,
rewrite: (path) => path.replace(/^\/api/, ""),
secure: false,
},
},
},
});
