<template>
  <div class="d-flex justify-center align-center" style="height: 100vh">
    <v-img
      id="imgNoel"
      contain
      :src="require('/public/images/merry_christmas.png')"
      @click="questions()"
      class="animate__animated animate__fadeIn animate__zoomIn"
      max-height="300"
      max-width="500"
    ></v-img>
  </div>
</template>

<script lang="ts">
import "animate.css";

import { Vue, Component } from "vue-property-decorator";

@Component
export default class Home extends Vue {
  questions() {
    this.$router.push("Questions");
  }
}
</script>

<style scoped>
  #imgNoel:hover{
    cursor: pointer;
  }
</style>