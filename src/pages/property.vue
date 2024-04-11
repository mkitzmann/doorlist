<template>
  <div>{{ property }}</div>
</template>

<script setup lang="ts">
import useProperty from "@/composables/useProperty";
import { computed } from "vue";

const props = defineProps<{ slug: string }>();

const { findProperty } = useProperty();

const property = computed(() => findProperty(props.slug));
</script>
