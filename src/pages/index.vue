<template>
  <v-form>
    <v-row>
      <v-spacer></v-spacer>
      <v-col cols="12" sm="6" lg="3">
        <div class="d-flex ga-4">
          <div>Preis</div>
          <v-range-slider
            v-model="price"
            step="10000"
            thumb-label="always"
            :min="minPrice"
            :max="maxPrice"
          ></v-range-slider>
        </div>
      </v-col>

      <v-col cols="12" sm="3" lg="2">
        <v-text-field
          v-model="city"
          :counter="10"
          label="Stadt"
          hide-details
          clearable
          variant="outlined"
          density="compact"
        ></v-text-field>
      </v-col>

      <v-col cols="12" sm="3" lg="2">
        <v-autocomplete
          clearable
          v-model="energyclass"
          label="Energieklasse"
          :items="energyClasses"
          variant="outlined"
          density="compact"
        ></v-autocomplete>
      </v-col>
    </v-row>
  </v-form>
  <v-row>
    <v-col
      v-for="property in filteredProperties"
      :key="property.address.street"
      cols="12"
      sm="6"
      lg="4"
    >
      <PropertyCard v-bind="property" />
    </v-col>
  </v-row>
  <div v-if="filteredProperties.length === 0">
    <NoResults />
  </div>
</template>

<script setup lang="ts">
import useProperties from "@/composables/useProperties";
import { EnergyClasses, Property, energyClasses } from "@/types";
import { computed, ref } from "vue";

const { properties } = useProperties();

const sortedByPrice = computed(() =>
  properties.value.sort((a, b) => b.price - a.price)
);

const maxPrice = computed(() => sortedByPrice.value[0].price);

const minPrice = computed(
  () => sortedByPrice.value[sortedByPrice.value.length - 1].price
);

const minMaxPrice = computed<[number, number]>(() => [
  minPrice.value,
  maxPrice.value,
]);

const price = ref<[number, number]>(minMaxPrice.value);
const city = ref<string>();
const energyclass = ref<EnergyClasses>();

const filteredProperties = computed(() => {
  return sortedByPrice.value.filter((property) => {
    return (
      matchesCity(property) &&
      matchesEnergyclass(property) &&
      matchesPrice(property)
    );
  });
});

const matchesCity = (property: Property) => {
  return city.value
    ? property.address.city.toLowerCase().includes(city.value.toLowerCase())
    : property;
};

const matchesEnergyclass = (property: Property) => {
  return energyclass.value
    ? property.energy_class === energyclass.value
    : property;
};

const matchesPrice = (property: Property) => {
  return property.price >= price.value[0] && property.price <= price.value[1];
};
</script>
