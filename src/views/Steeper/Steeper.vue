<template>
  <div class="d-flex justify-center align-center" style="height: 100vh">
    <v-stepper v-model="e1">
      <v-stepper-header>
        <template v-for="(item, i) in stepperHeader">
          <v-stepper-step
            :key="i"
            :complete="e1 > item.complete"
            :step="item.step"
          >
            {{ item.name }}
          </v-stepper-step>

          <v-divider
            v-if="item.step < stepperHeader.length"
            :key="i + stepperHeader.length"
          ></v-divider>
        </template>
      </v-stepper-header>

      <v-stepper-items>
        <SteeperContent
          v-for="(item, i) in stepperItems"
          :key="i + stepperHeader.length"
          :content="item"
          @continuer="e1++"
        ></SteeperContent>
      </v-stepper-items>
    </v-stepper>
  </div>
</template>

<script lang="ts">
import { Vue, Component, Watch } from "vue-property-decorator";

import SteeperContent from "@/views/Steeper/SteeperContent.vue";

@Component({
  components: {
    SteeperContent,
  },
})
export default class Steeper extends Vue {
  e1 = 1;

  stepperHeader = [
    { name: "Intro", complete: 1, step: 1 },
    { name: "Question 1", complete: 2, step: 2 },
    { name: "Question 2", complete: 3, step: 3 },
    { name: "Question 3", complete: 4, step: 4 },
    { name: "Question 4", complete: 5, step: 5 },
    { name: "Question 5", complete: 6, step: 6 },
    { name: "Question 6", complete: 7, step: 7 },
    { name: "Question 7", complete: 8, step: 8 },
    { name: "Question 8", complete: 9, step: 9 },
    { name: "Fin", complete: 10, step: 10 },
  ];

  stepperItems = [
    {
      question: "Intro",
      response:
        "Bonjour ! Un cadeau ça ce mérite non ? Pour le mériéter tu dois répondre à ces 8 questions ! Bonne chance :D",
      step: 1,
    },
    { question: "L'âge de mon père + 1 ?", reponse: "51", step: 2 },
    { question: "Le nombre de saison des simpsons - 3 ?", reponse: "30", step: 3 },
    { question: "Le chemin le plus court Paris - Bratislava * 2 - 18 le tout divisé par 1000 ?", reponse: "2.624", step: 4 },
    { question: "Première lettre du département où je travail ?", reponse: "N", step: 5 },
    { question: "La tête à toto est égale à ?", reponse: "0", step: 6 },
    { question: "Le nombre de jour dans une semaine ?", reponse: "7", step: 7 },
    { question: "Si aujourd'hui nous somme en 2021, en quelle année somme nous dans 844 ans ? Ah et divise ça par mmmh 100", reponse: "28.65", step: 8 },
    { question: "Ouest en anglais ?", reponse: "West", step: 9 },
    {
      question: "Fin",
      reponse:
        "Félicitations ! Tu a répondu à toutes les questions ! Les réponses de ces questions sont en fait des coordonnées GPS ! Clique sur continuer pour connaître la destination",
      step: 10,
    },
  ];

  @Watch("e1")
  e1Watcher(): void {
    if (this.e1 > this.stepperHeader.length) {
      this.$router.push("Login");
    }
  }
}
</script>