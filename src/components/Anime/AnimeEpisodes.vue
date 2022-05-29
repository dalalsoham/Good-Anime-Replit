<script setup lang="ts">
import { duration } from "moment";
import type AnimeType from "@/types/anime";
defineProps<{
  titles: AnimeType["titles"];
  count: AnimeType["episodeCount"];
  length: AnimeType["episodeLength"];
}>();
</script>

<template>
  <div>
    <h3>Episodes Information</h3>
    <p>
      {{ titles.translated || titles.canonical }} has
      <strong>{{ count }} episodes</strong>. Average Episode length is
      <strong>{{ duration(length, "seconds").humanize() }}</strong
      >.
    </p>
  </div>
</template>

<style scoped>
h3 {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}
</style>
