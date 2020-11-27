import { createWebHistory, createRouter } from "vue-router";
import Home from "@/views/Home.vue";
import Inspiration from "@/views/Inspire.vue";
import Marco from "@/views/Marco.vue";
import Dominik from "@/views/Dominik.vue";


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
  {
    path: "/marco",
    name: "Marco",
    component: Marco,
  },
  {
    path: "/dominik",
    name: "Dominik",
    component: Dominik,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;