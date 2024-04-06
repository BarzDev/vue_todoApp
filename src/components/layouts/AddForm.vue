<template>
  <div class="pt-24">
    <FormComponent />
  </div>
</template>

<script>
import FormComponent from "../ui/form.vue";

export default {
  name: "AddFormLayout",
  components: { FormComponent },
  props: ["todos"],
};
</script>
