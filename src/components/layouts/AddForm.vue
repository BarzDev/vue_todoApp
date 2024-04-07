<template>
  <div class="pt-24">
    <FormComponent />
  </div>
</template>

<script>
import FormComponent from "../ui/formAdd.vue";

export default {
  name: "AddFormLayout",
  components: { FormComponent },
  props: ["todos"],
};
</script>
