<script setup lang="ts">
import HomeSvg from '@/components/HomeSvg.vue';
</script>

<template>
  <main class="h-full overflow-hidden">
    <div class="flex flex-col items-center justify-between content-between h-fit md:flex-row md:justify-center md:mt-36">
      <div class="flex flex-col justify-end md:justify-between items-center h-60">
        <h1 class="text-4xl md:text-6xl font-bold text-green-700">Paul Demarest</h1>
        <div class="flex text-1xl md:text-4xl font-bold text-gray-500 my-2 md:my-0">
          <p>Developpeur / Integrateur web</p>
        </div>
        <!-- make a button to projects -->
        <router-link to="/projects"
          class="text-gray-100 hover:bg-green-700 hover:text-white px-3 py-2 rounded-md text-lg md:text-xl font-medium border-rounded border bg-green-600 w-24">
          Projets
        </router-link>
      </div>
      <HomeSvg />
    </div>
  </main>
</template>

<style scoped></style>
