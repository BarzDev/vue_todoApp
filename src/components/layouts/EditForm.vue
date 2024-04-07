<template>
  <FormEdit :todo="todo" />
</template>

<script>
import { mapGetters } from "vuex";
import FormEdit from "../ui/formEdit.vue";

export default {
  name: "EditFormLayout",
  components: { FormEdit },

  data() {
    return {
      todo: [],
    };
  },
  computed: {
    ...mapGetters(["todos"]),
  },
  created() {
    const id = parseInt(this.$route.params.id);
    this.todo = this.todos.find((todo) => todo.id === id);
  },
};
</script>
