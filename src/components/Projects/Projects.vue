<script setup lang="ts">
import ProjectList from '@/components/Projects/ProjectsList.vue';
import type { ProjectInterface } from '@/interfaces';

defineProps<{
    projects: ProjectInterface[]
}>()


</script>

<template>

<ProjectList :projects="projects" />

</template>

<style scoped></style>
