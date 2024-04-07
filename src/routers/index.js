import { createRouter, createWebHistory } from "vue-router";
import HomeLayout from "../components/layouts/Home.vue";

import AddFormLayout from "../components/layouts/AddForm.vue";
import EditFormLayout from "../components/layouts/EditForm.vue";
import CompletedTodo from "../components/layouts/CompletedTodo.vue";
import UncompletedTodo from "../components/layouts/UncompletedTodo.vue";

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
    path: "/edit/:id",
    name: "edit",
    component: EditFormLayout,
    props: true,
  },
  {
    path: "/completed",
    name: "completed",
    component: CompletedTodo,
    props: true,
  },
  {
    path: "/uncompleted",
    name: "uncompleted",
    component: UncompletedTodo,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
