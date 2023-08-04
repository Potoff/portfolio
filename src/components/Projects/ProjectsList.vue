<script setup lang="ts">
import type { ProjectInterface } from '@/interfaces';
import ProjectCard from '@/components/Projects/ProjectCard.vue';

defineProps<{
    projects: ProjectInterface[]
}>()

</script>

<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 m-10">
        <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
    </div>
</template>

<style scoped></style>
