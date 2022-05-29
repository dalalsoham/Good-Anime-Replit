<script setup lang="ts">
import type AnimeType from "@/types/anime";
const props = defineProps<{
  categories: AnimeType["categories"];
}>();

const genres = props.categories.nodes.map(
  (n) => n.title[Object.keys(n.title)[0]]
);
</script>

<template>
  <div class="genres-block">
    <h3>Genres :</h3>
    <div class="genres-list" v-text="genres.join(', ')" />
  </div>
</template>

<style scoped>
.genres-block {
  margin-top: 2rem;
  display: flex;
  align-items: start;
}
h3 {
  font-size: 1.25rem;
  display: inline-block;
  min-width: fit-content;
}

.genres-list {
  margin-top: 0.2rem;
  align-self: end;
  margin-left: 0.5rem;
  display: inline-block;
}
</style>
