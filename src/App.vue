<template>
  <main class="bg-slate-200 h-screen overflow-y-hidden">
    <NavbarComponent />
    <div class="container mx-auto px-4">
      <RouterView :todos="todos" />
    </div>
  </main>
</template>

<script>
import api from "./api";
import NavbarComponent from "./components/ui/navbar.vue";
export default {
  name: "App",
  components: { NavbarComponent },

  data() {
    return {
      todos: [],
    };
  },
  mounted() {
    this.fetchApi();
  },

  methods: {
    async fetchApi() {
      const response = await api.get("/todos");
      // console.log(response.data);
      this.todos = response.data;
    },
  },
};
</script>

<style></style>
