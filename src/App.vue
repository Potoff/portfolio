<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navbar from './components/Navbar.vue'
import { reactive } from 'vue';
import type { ProjectInterface } from './interfaces';
import data from './data/projects';

const state = reactive<{
    projects: ProjectInterface[]
}>({
    projects: data
})

</script>

<template>
    <div class="min-h-screen bg-lime-50 overflow-hidden">
        <Navbar />
        <RouterView :projects="state.projects" />
    </div>
</template>

<style scoped></style>
