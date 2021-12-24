<template>
  <v-app>
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";
import Snowflakes from "magic-snowflakes";

@Component
export default class App extends Vue {
  snow = new Snowflakes({
    color: "#FFFFFF",
    count: 100,
    minSize: 20,
    maxSize: 40,
    speed: 1.5,
  });
}
</script>

<style>
#app {
  background: url("../public/images/low_poly_christmas.png") no-repeat center
    center fixed !important;
  background-size: cover;
}
</style>