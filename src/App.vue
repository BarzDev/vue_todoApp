<template>
  <NavbarComponent />
  <main>
    <div class="container mx-auto px-4 pt-5">
      <RouterView />
    </div>
  </main>
</template>

<script>
import NavbarComponent from "./components/ui/navbar.vue";
export default {
  name: "App",
  components: { NavbarComponent },
};
</script>

<style></style>
