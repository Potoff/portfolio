<script setup lang="ts">
import Projects from '@/components/Projects/Projects.vue'
import type { ProjectInterface } from '@/interfaces';

defineProps<{
    projects: ProjectInterface[]
}>()


</script>

<template>
<Projects :projects="projects" />

</template>

<style scoped>
</style>
