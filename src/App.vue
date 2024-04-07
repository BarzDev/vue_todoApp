<template>
  <main class="bg-slate-200 min-h-screen">
    <NavbarComponent />
    <div class="container mx-auto p-4">
      <RouterView />
    </div>
  </main>
</template>

<script>
import api from "./api";
import NavbarComponent from "./components/ui/navbar.vue";
import { useStore } from "vuex";

export default {
  name: "App",
  components: { NavbarComponent },

  setup() {
    const store = useStore();

    const fetchApi = async () => {
      const response = await api.get("/todos");
      store.commit("setTodos", response.data);
    };

    fetchApi();

    return {};
  },
};
</script>

<style></style>
