<template>
  <div class="d-flex flex-column align-center">
    <v-icon
      color="grey-lighten-2"
      :icon="icon"
      size="large"
      class="mb-1"
    ></v-icon>
    <slot />
  </div>
</template>

<script setup lang="ts">
defineProps<{ icon: string }>();
</script>
