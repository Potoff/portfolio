<script setup lang="ts">
import { RouterLink } from 'vue-router';
import { ref } from 'vue';

const isOpen = ref(false);
const page = ref('');

</script>

<template>
    <header>
        <nav class="">
            <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px8">
                <div class="flex items-center justify-end h-16">
                    <div class="flex items-center">
                        <div class="hidden md:block">
                            <div class="ml-10 flex items-baseline space-x-4">
                                <RouterLink to="/"
                                    class="text-gray-500 hover:underline hover:text-gray-600 px-3 py-2 rounded-md text-xl font-medium"
                                    :class="{ 'underline active text-green-700': $route.path === '/' }"
                                    @click="page = 'home'">
                                    Accueil</RouterLink>
                                <RouterLink to="/projects"
                                    class="text-gray-500 hover:underline hover:text-gray-600 px-3 py-2 rounded-md text-xl font-medium"
                                    :class="{ 'underline active text-green-700': $route.path === '/projects' }"
                                    @click="page = 'project'">
                                    Projets</RouterLink>
                                <RouterLink to="/contact"
                                    class="text-gray-500 hover:underline hover:text-gray-600 px-3 py-2 rounded-md text-xl font-medium"
                                    :class="{ 'underline active text-green-700': $route.path === '/contact' }"
                                    @click="page = 'contact'">
                                    Contact</RouterLink>
                            </div>
                        </div>
                    </div>
                    <div class="mr-2 flex md:hidden">
                        <button @click="isOpen = !isOpen" type="button"
                            class="inline-flex items-center justify-center p-2 rounded-md text-gray-500 hover:text-gray-600"
                            aria-controls="mobile-menu" :aria-expanded="isOpen ? 'true' : 'false'">
                            <span class="sr-only">Open main menu</span>
                            <svg :class="{ 'hidden': isOpen, 'block': !isOpen }" class="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                            <svg :class="{ 'hidden': !isOpen, 'block': isOpen }" class="h-6 w-6"
                                xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                aria-hidden="true">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                    d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
            <transition name="slide">
                <div v-if="isOpen">
                    <div :class="{ 'block': isOpen, 'hidden': !isOpen }" class="md:hidden" id="mobile-menu">
                        <div class="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                            <RouterLink to="/"
                                class="text-gray-500 hover:underline block px-3 py-2 rounded-md text-base font-medium"
                                :class="{ 'active-mobile underline text-green-700': page === 'home' }"
                                @click="page = 'home'">
                                Accueil</RouterLink>
                            <RouterLink to="/projects"
                                class="text-gray-500 hover:underline block px-3 py-2 rounded-md text-base font-medium"
                                :class="{ 'active-mobile underline text-green-700': page === 'project' }"
                                @click="page = 'project'">
                                Projets</RouterLink>
                            <RouterLink to="/contact"
                                class="text-gray-500 hover:underline block px-3 py-2 rounded-md text-base font-medium"
                                :class="{ 'active-mobile underline text-green-700': page === 'contact' }"
                                @click="page = 'contact'">
                                Contact</RouterLink>
                        </div>
                    </div>
                </div>
            </transition>
        </nav>
    </header>
</template>

<style scoped>
.active {
    transition: transform .2s ease-in-out;
}

.active:focus,
.active:hover {
    transform: scale(1.2);
}

.active-mobile {
    transition: transform .2s ease-in-out;
}

.active-mobile:focus,
.active-mobile:hover {
    transform: scale(1.05);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter,
.slide-leave-to {
  transform: translateY(-100%);
  opacity: 0;
  height: 0;
}

.slide-enter-to,
.slide-leave {
  transform: translateY(0%);
  opacity: 1;
  height: auto;
}

.slide-leave-active {
  position: absolute;
}

.menu {
  opacity: 0;
}

.slide-enter-active .menu,
.slide-enter-to .menu {
  opacity: 1;
}



</style>
