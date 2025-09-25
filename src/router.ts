import { createRouter, createWebHistory } from "vue-router";

import HomePage from "~/pages/HomePage.vue";

const routes = [{ path: "/", component: HomePage }];

const router = createRouter({
  // Using web history for clean, user-friendly URLs without the hash (#).
  // This requires server-side configuration for production deployment.
  history: createWebHistory(),
  routes,
});

export default router;
