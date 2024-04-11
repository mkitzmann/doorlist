import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

import IndexPage from "./pages/index.vue";
import PropertyPage from "./pages/property.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: IndexPage },
  { path: "/property/:slug", component: PropertyPage, props: true },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
