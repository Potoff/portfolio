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
    <div class="h-screen overflow-hidden bg-lime-50">
        <Navbar />
        <RouterView :projects="state.projects"/>
    </div>
</template>

<style scoped></style>
