<template>
  <v-app>
    <v-main>
      <v-container fluid style="max-width: 1400px">
        <v-img
          src="/src/assets/logo-wordmark.svg"
          :width="200"
          class="mb-16 py-4"
        ></v-img>
        <router-view v-slot="{ Component, route }">
          <transition name="fade">
            <component :is="Component" :key="route.name" />
          </transition>
        </router-view>
      </v-container>
    </v-main>
  </v-app>
</template>

<script setup lang="ts">
//
</script>
