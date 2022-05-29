<script setup lang="ts">
import { RouterView } from "vue-router";
</script>

<template>
  <RouterView />
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300&display=swap");

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html,
body {
  margin: 0;
  width: 100vw;
  height: 100vh;
  font: 18px "Quicksand Light", sans-serif;
  color: #ffffff;
  overflow-x: hidden;
  overflow-y: auto;
  background-size: cover;
  background: #151614 no-repeat center;
}

a {
  color: #33ddff;
  text-decoration: none;
  transition: all 200ms ease-out;
}

a:hover {
  color: #00aadd;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb {
  background: #999999;
  border-radius: 5px;
}

::-webkit-scrollbar-thumb:hover {
  background: #333333;
}
</style>
