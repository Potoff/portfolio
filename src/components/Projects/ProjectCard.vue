<script setup lang="ts">
import type { ProjectInterface } from '@/interfaces';


defineProps<{
    project: ProjectInterface;
}>()

</script>

<template>
    <div class="shadow-sm">
        <div class="" :style="{ backgroundImage: `url(${ project.image })` }"></div>
        <div class="p-4">
            <h3 class="text-xl font-semibold">{{ project.title }}</h3>
            <p class="text-gray-500">{{ project.description }}</p>
        </div>
        <button class="p-4">
            <a :href="project.url" target="_blank" class="text-blue-500 hover:underline">View Project</a>
        </button>

    </div>
</template>

<style scoped></style>
