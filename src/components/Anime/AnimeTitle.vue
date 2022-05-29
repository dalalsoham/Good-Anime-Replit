<script setup lang="ts">
import type AnimeType from "@/types/anime";
defineProps<{
  titles: AnimeType["titles"];
  ageRating: AnimeType["ageRating"];
  ageRatingGuide: AnimeType["ageRatingGuide"];
}>();
</script>

<template>
  <h1 v-text="titles.translated || titles.canonical" />
  <h4>
    RATED {{ ageRating }}
    <span class="guide">- {{ ageRatingGuide }}</span>
  </h4>
  <h3 v-text="titles.original" />
</template>

<style scoped>
h1 {
  font-size: 2.5rem;
  padding-bottom: 0.5rem;
  font-weight: bold;
  border-bottom: 2px solid #ffffff;
}

h4 {
  margin-top: 0.5rem;
  font-size: 1.15rem;
}

h3 {
  margin-top: 2rem;
  font-size: 1.5rem;
}

.guide {
  font-weight: normal;
}
</style>
