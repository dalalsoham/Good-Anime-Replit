<script setup lang="ts">
import moment from "moment";
import type AnimeType from "@/types/anime";
const props = defineProps<{
  titles: AnimeType["titles"];
  count: AnimeType["episodeCount"];
  length: AnimeType["episodeLength"];
}>();

const epLength = moment.duration(props.length, "seconds").humanize();
</script>

<template>
  <div>
    <h3>Episodes Information</h3>
    <p>
      {{ titles.translated || titles.canonical }} has
      <strong>{{ count }} episode{{ count > 1 ? "s" : "" }} </strong>.
    </p>
    <p>Average Episode length is <strong v-text="epLength" />.</p>
  </div>
</template>

<style scoped>
h3 {
  margin-top: 2rem;
  margin-bottom: 0.5rem;
  font-size: 1.25rem;
}
</style>
