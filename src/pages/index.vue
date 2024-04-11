<template>
  <v-container fluid>
    <v-row>
      <v-col v-for="n in 6" :key="n" cols="12" sm="6" md="4" lg="3">
        <ListingCard></ListingCard>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
//
</script>
