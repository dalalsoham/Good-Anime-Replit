<script setup lang="ts">
import animeQuery from "@/graphql/anime.graphql";
import { useQuery } from "@vue/apollo-composable";
import { onMounted, ref } from "vue";
import AnimeLoader from "@/components/Loader.vue";
import AnimePage from "@/components/Anime/index.vue";
import { useHistory } from "@/stores/history";
const history = useHistory();

const { result, loading, refetch, onResult } = useQuery(animeQuery);

onResult((qResult) => {
  if (history.checkHistory(qResult.data.randomMedia.id)) refetch();
  else history.addToHistory(qResult.data.randomMedia.id);
});

const int = ref(setInterval(refetch, 30000));

onMounted(() => {
  window.addEventListener("keyup", async (e) => {
    if (e.code.toLowerCase() === "space") {
      clearInterval(int.value);
      await refetch();
      int.value = setInterval(refetch, 30000);
    }
  });
});
</script>

<template>
  <AnimeLoader v-if="loading" />
  <AnimePage
    :anime="result.randomMedia"
    class="animate-bottom"
    v-if="!loading && result"
  />
</template>

<style>
body {
  background-position: top;
  background-size: cover;
}
</style>

<style scoped>
/* Add animation to "page content" */
.animate-bottom {
  position: relative;
  -webkit-animation-name: animatebottom;
  -webkit-animation-duration: 1s;
  animation-name: animatebottom;
  animation-duration: 1s;
}

@-webkit-keyframes animatebottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
}

@keyframes animatebottom {
  from {
    bottom: -100px;
    opacity: 0;
  }
  to {
    bottom: 0;
    opacity: 1;
  }
}

small {
  font-size: 0.75rem;
}
</style>
