import notepad from "@/views/notepad.vue";
import mainVue from "@/views/main.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "main",
    component: mainVue,
  },
  {
    path: "/notepad",
    name: "notepad",
    component: notepad,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
