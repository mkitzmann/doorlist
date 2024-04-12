<template>
  <v-hover v-slot="{ isHovering, props }">
    <RouterLink :to="'/property/' + slug">
      <v-card
        class="h-100 d-flex flex-column"
        v-bind="props"
        :elevation="isHovering ? 10 : 4"
      >
        <v-img
          v-if="images && images[0]"
          height="280px"
          :src="'/listing/' + images[0] + '.jpeg'"
          cover
          class="flex-grow-0"
        ></v-img>
        <div class="d-flex flex-wrap mt-6 ga-4 justify-space-between px-6">
          <div>
            <div class="text-h4 font-weight-bold">
              {{ formattedPrice }}
            </div>
            <div class="font-weight-light">
              {{ address.street }}, {{ address.postcode }}
              {{ address.city }}
            </div>
          </div>
          <EnergyChip :energy-class="energy_class" />
        </div>
        <div class="pa-6 font-weight-light">
          {{ description }}
        </div>
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
  </v-hover>
</template>

<script setup lang="ts">
import type { Property } from "../types";
import { RouterLink } from "vue-router";
import useProperty from "../composables/useProperty";

const props = defineProps<Property>();

const { formattedPrice, pluraliseBath } = useProperty(props);
</script>
