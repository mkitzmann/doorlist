<template>
  <v-card>
    <v-img
      height="200px"
      src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg"
      cover
    ></v-img>
    <div class="d-flex flex-wrap mt-4 ga-4 justify-space-between">
      <div>
        <v-card-title class="text-h4 font-weight-bold">
          450.000 €
        </v-card-title>
        <v-card-subtitle> Hauptstraße 12, 12345 Musterstadt </v-card-subtitle>
      </div>
      <v-chip variant="flat" color="orange" class="mx-4 text-white"
        >Energieklasse C</v-chip
      >
    </div>
    <v-card-text class="text-body-2"
      >Doppelhaushälfte mit großem Garten und Garage. Ruhige Wohngegend, ideal
      für Familien. | In ruhiger Lage im Stadtgebiet, gute Anbindung an
      öffentliche Verkehrsmittel und Einkaufsmöglichkeiten</v-card-text
    >
    <div class="pa-4 d-flex ga-4">
      <FeatureIcon icon="mdi-vector-square">125 m²</FeatureIcon>
      <FeatureIcon icon="mdi-shower" class="ml-auto">2 Bäder</FeatureIcon>
      <FeatureIcon icon="mdi-bed-queen-outline">2 Zimmer</FeatureIcon>
    </div>
  </v-card>
</template>

<script setup lang="ts"></script>
