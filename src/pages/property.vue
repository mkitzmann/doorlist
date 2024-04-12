<template>
  <template v-if="property">
    <h1 class="text-h3 font-weight-bold">
      {{ property.address.street }}
    </h1>
    <div class="font-weight-light">
      {{ property.address.postcode }}
      {{ property.address.city }}
    </div>
    <ImageGallery :images="property.images" class="mt-8" />
    <v-row>
      <v-col cols="12" md="3">
        <div class="d-flex flex-column ga-4">
          <div class="d-flex flex-wrap mt-6 ga-4 justify-space-between">
            <div class="text-h2 font-weight-bold">
              {{ formattedPrice }}
            </div>
          </div>
          <div>
            <EnergyChip :energyClass="property.energy_class" />
          </div>
          <div class="d-flex ga-6">
            <FeatureIcon icon="mdi-vector-square"
              >{{ property.area }} m²</FeatureIcon
            >
            <FeatureIcon icon="mdi-shower" class="ml-auto">
              {{ property.bathrooms }} {{ pluraliseBath }}
            </FeatureIcon>
            <FeatureIcon icon="mdi-bed-queen-outline">
              {{ property.bedrooms }} Zimmer
            </FeatureIcon>
          </div>
        </div> </v-col
      ><v-col cols="0" md="1"></v-col>
      <v-col cols="12" md="5">
        <h2 class="mt-8 mb-4 font-weight-bold text-h6">Objektbeschreibung</h2>
        <div class="text-body-2 font-weight-light">
          {{ property.description }}
        </div>
        <h2 class="mt-8 mb-4 font-weight-bold text-h6">Lagebeschreibung</h2>
        <div class="text-body-2 font-weight-light">
          {{ property.location_description }}
        </div>
      </v-col>
    </v-row>
  </template>
</template>

<script setup lang="ts">
import useProperties from "@/composables/useProperties";
import useProperty from "@/composables/useProperty";
import { computed } from "vue";

const props = defineProps<{ slug: string }>();

const { findProperty } = useProperties();

const property = computed(() => findProperty(props.slug));
const { formattedPrice, pluraliseBath } = useProperty(property.value!);
</script>
