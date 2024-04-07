<template>
  <div>
    <Table :todos="displayedTodos" :currentPage="currentPage" />
    <Pagination
      :totalPages="totalPages"
      :currentPage="currentPage"
      :dataLength="dataLength"
      @changePage="changePage"
    />
  </div>
</template>

<script>
import Table from "../ui/table.vue";
import Pagination from "../ui/pagination.vue";
import { mapGetters } from "vuex";

export default {
  name: "CompletedTodoLayout",
  components: { Table, Pagination },

  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
    };
  },

  computed: {
    ...mapGetters(["todos"]),

    filteredTodos() {
      return this.todos.filter((todo) => todo.completed);
    },
    dataLength() {
      return this.filteredTodos.length;
    },

    totalPages() {
      return Math.ceil(this.dataLength / this.itemsPerPage);
    },

    displayedTodos() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = this.currentPage * this.itemsPerPage;
      return this.filteredTodos.slice(startIndex, endIndex);
    },
  },

  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>
