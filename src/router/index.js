import { createRouter, createWebHistory } from "vue-router";
import AuthRoutes from "./AuthRoutes";
import AdminRoutes from "./AdminRoutes";
const routes = [
  {
    path: "/template",
    name: "template",
    component: () => import("@/views/examples/BaseTemplate.vue"),
  },
];
routes.push(...AuthRoutes, ...AdminRoutes);
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
