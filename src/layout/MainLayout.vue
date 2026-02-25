<script setup lang="ts">
import { RouterLink } from "vue-router";

</script>


<template>
    <div class="flex justify-end gap-25 pr-20 ">
            <RouterLink to="/proyecto" 
             class="rounded-md bg-slate-800 px-4 py-2 text-white hover:bg-slate-700 transition">
             Proyecto
            </RouterLink>
            <RouterLink to="/about"
            class="rounded-md bg-slate-800 px-4 py-2 text-white hover:bg-slate-700 transition">
                About
            </RouterLink>
            <RouterLink to="/contact"
            class="rounded-md bg-slate-800 px-4 py-2 text-white hover:bg-slate-700 transition">
                Contact
            </RouterLink>

    </div>
</template>


<style scoped>

</style>