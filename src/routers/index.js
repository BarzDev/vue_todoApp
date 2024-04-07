import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../components/layouts/Home.vue";

import AddFormLayout from "../components/layouts/AddForm.vue";
import EditFormLayout from "../components/layouts/EditForm.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeLayout,
    props: true,
  },
  {
    path: "/add",
    name: "add",
    component: AddFormLayout,
    props: true,
  },
  {
    path: "/edit/",
    name: "edit",
    component: EditFormLayout,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
