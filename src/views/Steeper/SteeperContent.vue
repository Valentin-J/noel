<template>
  <v-stepper-content :step="this.content.step">
    <v-card class="mb-12">
      <v-alert type="success" dismissible v-if="success">
        Bonne réponse !
      </v-alert>
      <v-alert type="error" dismissible v-if="error"
        >Mauvaise réponse !
      </v-alert>

      <v-card-title>{{ content.question }}</v-card-title>

      <v-card-text v-if="intro">
        {{ content.reponse }}
      </v-card-text>

      <validation-observer ref="observer" v-slot="{ invalid }" v-if="!intro">
        <v-card-text>
          <validation-provider
            v-slot="{ errors }"
            name="Réponse"
            rules="required"
            mode="aggressive"
          >
            <v-text-field
              v-model="reponse"
              label="Réponse"
              clearablel
              :error-messages="errors"
            ></v-text-field>
          </validation-provider>
        </v-card-text>

        <v-card-text>
          <v-btn
            color="info"
            @click="validate()"
            :disabled="invalid || disabled"
          >
            Valider
          </v-btn>

          <v-btn
            color="success"
            v-if="success"
            class="ml-2"
            @click="$emit('continuer')"
          >
            Continuer
          </v-btn>
        </v-card-text>
      </validation-observer>

      <v-card-text v-if="intro">
        <v-btn color="success" class="ml-2" @click="$emit('continuer')">
          Continuer
        </v-btn>
      </v-card-text>
    </v-card>
  </v-stepper-content>
</template>

<script lang="ts">
import { Vue, Component, Prop } from "vue-property-decorator";
import { required } from "vee-validate/dist/rules";
import { extend, ValidationObserver, ValidationProvider } from "vee-validate";

extend("required", {
  ...required,
  message: "{_field_} ne peut pas être vide",
});

@Component({
  components: {
    ValidationProvider,
    ValidationObserver,
  },
})
export default class SteeperContent extends Vue {
  @Prop({ type: Object }) content: any;

  reponse = "";
  disabled = false;
  success = false;
  intro = false;
  error = false;

  public mounted(): void {
    if (this.content.step === 1 || this.content.step === 10) {
      this.intro = true;
    }
  }

  validate(): void {
    if (this.reponse === this.content.reponse) {
      this.success = true;
      this.error = false;
    } else {
      this.success = false;
      this.error = true;
    }
  }
}
</script>