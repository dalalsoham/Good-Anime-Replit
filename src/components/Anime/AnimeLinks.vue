<script lang="ts" setup>
import type AnimeType from "@/types/anime";
defineProps<{
  trailer: AnimeType["youtubeTrailerVideoId"];
  streamers: AnimeType["streamingLinks"]["nodes"];
}>();
</script>

<template>
  <div v-if="trailer || streamers.length" class="links-section">
    <h3>Links</h3>
    <a
      v-if="trailer"
      :href="'https://youtube.com/watch?v=' + trailer"
      target="_blank"
      class="trailer-link"
    >
      Watch trailer!
    </a>
    <ul v-if="streamers.length">
      <li v-for="(node, i) in streamers" :key="i">
        <a :href="node.url" target="_blank" v-text="node.streamer.siteName" />
      </li>
    </ul>
  </div>
</template>

<style scoped>
.links-section {
  margin-top: 2rem;
}

h3 {
  font-size: 1.25rem;
  margin-bottom: 0.5rem;
}

.trailer-link {
  margin-top: 0.5rem;
}

ul {
  margin-top: 1rem;
  list-style-position: inside;
}
</style>
