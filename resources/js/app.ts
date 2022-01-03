import { createApp, h } from "vue";
import { createInertiaApp } from "@inertiajs/inertia-vue3";
import "uno.css";

createInertiaApp({
    resolve: async (name) => {
        // const page = (await import(`./pages/${name}.vue`)).default;

        const pages = import.meta.glob(`./pages/**/*.vue`);
        const page = (await pages[`./pages/${name}.vue`]()).default;

        return page;
    },
    setup({ el, app, props, plugin }) {
        createApp({ render: () => h(app, props) })
            .use(plugin)
            .mount(el);
    },
});
