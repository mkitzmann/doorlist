<template>
  <v-form>
    <v-container>
      <v-row>
        <v-col cols="12" md="3">
          <v-text-field
            v-model="city"
            :counter="10"
            label="City"
            hide-details
            clearable
            variant="outlined"
            density="compact"
          ></v-text-field>
        </v-col>

        <v-col cols="12" md="2">
          <v-autocomplete
            clearable
            v-model="energyclass"
            label="Energieklasse"
            :items="energyClasses"
            variant="outlined"
            density="compact"
          ></v-autocomplete>
        </v-col>

        <!-- <v-col cols="12" md="4">
          <v-text-field
            v-model="email"
            label="E-mail"
            hide-details
            required
          ></v-text-field>
        </v-col>  -->
      </v-row>
    </v-container>
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
</template>

<script setup lang="ts">
import useProperties from "@/composables/useProperties";
import { Property, energyClasses } from "@/types";
import { computed, ref } from "vue";

const { properties } = useProperties();
const filteredProperties = computed(() => {
  return properties.value.filter((property) => {
    return matchesCity(property) && matchesEnergyclass(property);
  });
});

const matchesCity = (property: Property) => {
  return city.value
    ? property.address.city.toLowerCase().includes(city.value.toLowerCase())
    : property;
};

const matchesEnergyclass = (property: Property) => {
  return energyclass.value
    ? property.energy_class
        .toLowerCase()
        .includes(energyclass.value.toLowerCase())
    : property;
};

const city = ref<string>();
const energyclass = ref<string>();
</script>
