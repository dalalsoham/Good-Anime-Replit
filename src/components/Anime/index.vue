<script lang="ts" setup>
import type AnimeType from "@/types/anime";
import { onMounted } from "vue";
import AnimeTitle from "@/components/Anime/AnimeTitle.vue";
import AnimeGenres from "@/components/Anime/AnimeGenres.vue";
import AnimeEpisodes from "@/components/Anime/AnimeEpisodes.vue";
import AnimeLinks from "@/components/Anime/AnimeLinks.vue";
const props = defineProps<{ anime: AnimeType }>();

onMounted(() => {
  if (props.anime.bannerImage)
    document.body.style.backgroundImage = `url("${props.anime.bannerImage.original.url}")`;
  else document.body.style.backgroundImage = "none";
});
</script>

<template>
  <div class="content">
    <div style="max-width: 90%">
      <AnimeTitle
        :titles="anime.titles"
        :age-rating="anime.ageRating"
        :age-rating-guide="anime.ageRatingGuide"
      />
      <div
        class="anime-description"
        v-text="Object.values(anime.description)[0]"
      />
      <AnimeGenres :categories="anime.categories" />
      <AnimeEpisodes
        :titles="anime.titles"
        :count="anime.episodeCount"
        :length="anime.episodeLength"
      />
      <AnimeLinks
        :trailer="anime.youtubeTrailerVideoId"
        :streamers="anime.streamingLinks.nodes"
      />
    </div>
    <img
      :src="anime.posterImage.original.url"
      :alt="anime.titles.original"
      class="poster-image"
    />
  </div>
</template>

<script lang="ts">
export default {
  name: "AnimePage",
};
</script>

<style scoped>
.content {
  padding: 2rem 2rem;
  background: linear-gradient(
    180deg,
    rgba(4, 4, 4, 0.95) 0%,
    rgba(4, 4, 4, 0.85) 100%
  );
  min-height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-columns: 7fr 3fr;
  grid-column-gap: 2rem;
}

.poster-image {
  justify-self: center;
  max-width: 100%;
  margin-top: 3.5rem;
  border-radius: 8px;
}

.anime-description {
  font-size: 1.1rem;
  margin-top: 1rem;
}

@media only screen and (max-width: 768px) {
  .content {
    grid-template-columns: 1fr;
    grid-row-gap: 2rem;
  }

  .poster-image {
    justify-self: start;
  }
}
</style>
