<template>
    <main>
        <header>
            <Link href="/">Home</Link>
            &nbsp;
            <Link href="/subs">Subs</Link>
        </header>
        <div>
            <h1>Home</h1>
            <div>
                <div
                    class="i-openmoji:backhand-index-pointing-down"
                    style="display: inline-block"
                ></div>
                This is from UnoCSS,
            </div>
            <div class="i-mdi-alarm" />
            <div class="i-openmoji:airplane"></div>
        </div>
    </main>
</template>

<script setup lang="ts">
import { Link } from "@inertiajs/inertia-vue3";
</script>
