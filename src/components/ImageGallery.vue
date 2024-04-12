<template>
  <v-row>
    <v-col cols="12" md="9">
      <v-img
        height="60vw"
        style="max-height: 700px"
        :src="imageSrc(selectedImage)"
        cover
        class="flex-grow-0 rounded-lg"
      />
    </v-col>
    <v-col cols="12" md="3">
      <v-row>
        <v-col cols="4" md="12" v-for="image in images">
          <v-img
            @click="selectedImage = image"
            :key="image"
            height="20vw"
            style="max-height: 140px"
            width="200"
            :src="imageSrc(image)"
            cover
            class="flex-grow-0 cursor-pointer rounded-lg"
          />
        </v-col>
      </v-row>
    </v-col>
  </v-row>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps<{ images: string[] }>();

const selectedImage = ref(props.images[0]);

const imageSrc = (image: string) => `/listing/${image}.jpeg`;
</script>
