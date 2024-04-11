<template>
  <RouterLink to="/">
    <v-card class="h-100 d-flex flex-column">
      <v-img
        v-if="images && images[0]"
        height="280px"
        :src="'/src/assets/listing/' + images[0] + '.jpeg'"
        cover
        class="flex-grow-0"
      ></v-img>
      <div class="d-flex flex-wrap mt-6 ga-4 justify-space-between px-6">
        <div>
          <div class="text-h4 font-weight-bold">
            {{ formattedPrice }}
          </div>
          <div>
            {{ address.street }}, {{ address.postcode }}
            {{ address.city }}
          </div>
        </div>
        <v-chip
          variant="flat"
          class="text-white"
          :style="'backgroundColor: ' + energyColor"
        >
          Energieklasse {{ energy_class }}</v-chip
        >
      </div>
      <v-card-text class="text-body-2 pa-6">{{ description }}</v-card-text>
      <v-spacer></v-spacer>
      <div class="pa-6 d-flex ga-6 mt-auto">
        <FeatureIcon icon="mdi-vector-square">{{ area }} m²</FeatureIcon>
        <FeatureIcon icon="mdi-shower" class="ml-auto">
          {{ bathrooms }} {{ pluraliseBath }}
        </FeatureIcon>
        <FeatureIcon icon="mdi-bed-queen-outline">
          {{ bedrooms }} Zimmer
        </FeatureIcon>
      </div>
    </v-card>
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from "vue";
import type { Property } from "../types";
import colors from "vuetify/util/colors";
import { RouterLink } from "vue-router";

const props = defineProps<Property>();

const formattedPrice = computed(() => {
  return props.price.toLocaleString("de-DE", {
    style: "currency",
    currency: "EUR",
    maximumFractionDigits: 0,
  });
});

const pluraliseBath = computed(() => (props.bathrooms > 1 ? "Bäder" : "Bad"));

const energyColor = computed(() => {
  switch (props.energy_class) {
    case "A+": {
      return colors.green.darken3;
    }
    case "A": {
      return colors.green.base;
    }
    case "B": {
      return colors.lightGreen.darken2;
    }
    case "C": {
      return colors.lime.darken1;
    }
    case "D": {
      return colors.yellow.darken1;
    }
    case "E": {
      return colors.amber.base;
    }
    case "F": {
      return colors.orange.base;
    }
    case "G": {
      return colors.deepOrange.base;
    }
    case "H": {
      return colors.red.base;
    }
    default: {
      return colors.grey.base;
    }
  }
});
</script>
