<script setup lang="ts">
import type { ProjectInterface } from '@/interfaces';
import { computed, ref } from 'vue';


defineProps<{
    project: ProjectInterface;
}>()

const showDescription = ref(false);
const show = ref(false)

const toggleDescription = () => {
    showDescription.value = !showDescription.value;
}


</script>

<template>
    <div>
        <v-card class="mx-auto" max-width="344">
            <v-img :src="project.image" height="250px" width="auto" cover></v-img>
            <v-card-title>
                {{ project.title }}
            </v-card-title>
            <v-card-actions>
                <v-btn color="orange-lighten-2" variant="text" :href="project.url" target="blank">
                    Visiter
                </v-btn>

                <v-spacer></v-spacer>

                <v-btn :icon="show ? 'mdi-chevron-up' : 'mdi-chevron-down'" @click="show = !show"></v-btn>
            </v-card-actions>

            <v-expand-transition>
                <div v-show="show">
                    <v-divider></v-divider>

                    <v-card-text>
                        {{ project.description }}
                    </v-card-text>
                </div>
            </v-expand-transition>
        </v-card>
    </div>
</template>

<style scoped></style>
