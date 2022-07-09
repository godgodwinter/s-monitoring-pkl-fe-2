import { createRouter, createWebHistory } from "vue-router";
import AuthRoutes from "./AuthRoutes";
import AdminRoutes from "./AdminRoutes";
import PembimbingSekolahRoutes from "./PembimbingSekolahRoutes";
const routes = [
  {
    path: "/template",
    name: "template",
    component: () => import("@/views/examples/BaseTemplate.vue"),
  },
];
routes.push(...AuthRoutes, ...AdminRoutes, ...PembimbingSekolahRoutes);
const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
