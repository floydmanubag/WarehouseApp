import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/UserView.vue";
import UserView from "../views/UserView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/users",
      name: "users",
      component: UserView,
    },
    {
      path: "/warehouse",
      name: "home",
      component: HomeView,
    },
  ],
});





export default router;
