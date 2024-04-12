<template>
  <v-chip
    variant="flat"
    class="text-white"
    :style="'backgroundColor: ' + energyColor"
  >
    Energieklasse {{ energyClass }}</v-chip
  >
</template>

<script setup lang="ts">
import { EnergyClasses } from "@/types";
import { computed } from "vue";
import colors from "vuetify/util/colors";

const props = defineProps<{ energyClass: EnergyClasses }>();

const energyColor = computed(() => {
  switch (props.energyClass) {
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
