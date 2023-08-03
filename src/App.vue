<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'

</script>

<template>
    <div class="h-screen overflow-hidden bg-lime-50">
        <Navbar />
        <RouterView />
    </div>
</template>

<style scoped></style>
