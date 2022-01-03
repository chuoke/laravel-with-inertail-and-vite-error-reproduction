This is a reproduction for some problems in [Laravel](https://laravel.com) with [Inertia](https://inertiajs.com) and [Laravel-Vite](https://laravel-vite.innocenzi.dev).

All this is defualt.

When I under `pnpm dev`, it works fun. But when I compiled it via `pnpm build`, it only contained part of files.

---

-   1. Run Laravel serve

```
php artisan serve
```

-   2. Run vite

In terminal of frontend.

```
pnpm dev
```

It is ok in this mode.

-   3. Build

Still in terminal of frontend.

```
pnpm build
```

Build passed.

But it just compile entrance file and some file reffrenced in it , and some index file at the first level in a directory, such as `pages/index.vue`, but not `pages/subs/index.vue`.

After visit sub page, it will show error

> Uncaught (in promise) Error: Unknown variable dynamic import: ./pages/subs/index.vue

---

I don't know what mistake I made. And I haven't figured out which part is responsible for this.

But Laravel and Inertia response seems ok.
