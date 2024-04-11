import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

import IndexPage from "./pages/index.vue";

const routes: RouteRecordRaw[] = [{ path: "/", component: IndexPage }];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;