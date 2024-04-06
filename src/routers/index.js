import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../components/layouts/Home.vue";

import AddFormLayout from "../components/layouts/AddForm.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeLayout,
  },
  {
    path: "/add",
    name: "add",
    component: AddFormLayout,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
