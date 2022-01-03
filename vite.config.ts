import { defineConfig } from "laravel-vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig().withPlugin(vue).merge({
    // Your own Vite options
});
