import { createWebHistory, createRouter, RouteRecordRaw } from "vue-router";

import IndexPage from "./pages/index.vue";
import DetailPage from "./pages/detail.vue";

const routes: RouteRecordRaw[] = [
  { path: "/", component: IndexPage },
  { path: "/detail/:slug", component: DetailPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
