<script setup lang="ts">
import { RouterLink } from "vue-router";

</script>


<template>
    <div class=" bg-[#04090ffe] flex justify-center gap-5 pr-10 pt-10 pb-6    ">
        <div class="flex items-center gap-6 h-10 px-6 py-2 rounded-full bg-white/25 backdrop-blur-md ">
             <RouterLink to="/"
            class= " flex px-4 items-center rounded-full hover:bg-white/30 transition">
                Home
            </RouterLink>
            <RouterLink to="/proyecto" 
            class= " flex px-4 items-center rounded-full hover:bg-white/30 transition">
             
             Proyecto
            </RouterLink>
            <RouterLink to="/about"
            class= " flex px-4 items-center rounded-full hover:bg-white/30 transition">
            
                About
            </RouterLink>
            <RouterLink to="/contact"
            class= " flex px-4 items-center rounded-full hover:bg-white/30 transition">
           
                Contact
            </RouterLink>
        </div>
             

    </div>
</template>


<style scoped>

</style>