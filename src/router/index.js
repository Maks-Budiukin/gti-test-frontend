import { createRouter, createWebHistory } from "vue-router";
import MyView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MyView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("../views/NotFoundView.vue"),
    },
  ],
});

export default router;
