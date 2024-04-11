<template>
  <v-row>
    <v-col
      v-for="property in properties"
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
import useProperty from "@/composables/useProperty";

const { properties } = useProperty();
</script>
