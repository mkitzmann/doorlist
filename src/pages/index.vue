<template>
  <v-row>
    <v-col v-for="property in propertiesDb" :key="n" cols="12" sm="6" lg="4">
      <PropertyCard v-bind="property" />
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import propertiesDb from "../data/properties.json";
</script>
