<template>
  <nav
    class="bg-slate-900 text-white p-3 flex flex-row-reverse items-center justify-between gap-5 sticky top-0 z-10"
  >
    <p class="w-11/12 text-center font-bold">Barz Crud Todo App</p>
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
