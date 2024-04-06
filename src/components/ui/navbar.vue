<template>
  <nav
    class="bg-slate-900 text-white p-3 flex items-center justify-between gap-5"
  >
    <p class="w-11/12 text-center">Crud</p>
    <div class="flex w-1/12 items-center justify-center">
      <Toogle />
    </div>
  </nav>
</template>

<script>
import Toogle from "./toogle.vue";

export default {
  name: "NavbarComponent",
  components: { Toogle },
};
</script>
