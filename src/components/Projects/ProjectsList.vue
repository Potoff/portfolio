<script setup lang="ts">
import type { ProjectInterface } from '@/interfaces';
import ProjectCard from '@/components/Projects/ProjectCard.vue';

defineProps<{
    projects: ProjectInterface[]
}>()

</script>

<template>
    <ProjectCard v-for="project in projects" :key="project.id" :project="project" />
</template>

<style scoped></style>
