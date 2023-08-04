<script setup lang="ts">
import type { ProjectInterface } from '@/interfaces';
import { ref } from 'vue';


defineProps<{
    project: ProjectInterface;
}>()


</script>

<template>
    <div class="bg-white rounded-lg shadow-sm border  overflow-hidden">
        <img :src="project.image" alt="Image du projet" class="w-full h-48 object-cover">
        <div class="p-4">
            <h2 class="text-lg font-bold mb-2">{{ project.title }}</h2>
            <p class="text-gray-500 text-base">{{ project.description }}</p>
        </div>
        <button class="p-4">
            <a :href="project.url" target="_blank" class="text-blue-500 hover:underline">View Project</a>
        </button>
        <div class="flex items-center justify-start p-2">
            <div class="mt-4">
                <span class="text-gray-600 font-bold text-sm bg-lime-300 rounded-lg p-2">{{ project.category }}</span>
            </div>
            <div class="mt-4 p-2">
                <span class="text-gray-600 font-bold text-sm bg-amber-300 rounded-lg p-2">{{ project.style }}</span>
            </div>
        </div>
    </div>
</template>

<style scoped></style>
