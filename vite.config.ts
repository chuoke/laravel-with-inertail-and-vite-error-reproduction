import { defineConfig } from "laravel-vite";
import vue from "@vitejs/plugin-vue";
import Unocss from "unocss/vite";
import presetIcons from "@unocss/preset-icons";

export default defineConfig()
    .withPlugin(vue)
    .withPlugins(
        ...Unocss({
            presets: [
                presetIcons({
                    /* options */
                }),
            ],
        })
    )
    .merge({
        // Your own Vite options
    });
