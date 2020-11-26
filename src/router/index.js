import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Inspiration from "@/views/Inspire.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/inspiration",
    name: "Inspire",
    component: Inspiration,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;