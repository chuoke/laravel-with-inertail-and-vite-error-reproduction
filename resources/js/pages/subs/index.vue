<template>
    <div>
        <div>
            <Link href="/">Home</Link>
            &nbsp;
            <Link href="/subs/create" as="button">create</Link>
        </div>

        <div>sub index</div>
    </div>
</template>
<script setup lang="ts">
import { Link } from "@inertiajs/inertia-vue3";
</script>
