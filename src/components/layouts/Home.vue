<template>
  <div>
    <Table :todos="displayedTodos" />
    <Pagination
      :totalPages="totalPages"
      :currentPage="currentPage"
      @changePage="changePage"
    />
  </div>
</template>

<script>
import Table from "../ui/table.vue";
import Pagination from "../ui/pagination.vue";

export default {
  name: "HomeLayout",
  components: { Table, Pagination },
  props: ["todos"],

  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
    };
  },

  computed: {
    totalPages() {
      return Math.ceil(this.todos.length / this.itemsPerPage);
    },

    displayedTodos() {
      const startIndex = (this.currentPage - 1) * this.itemsPerPage;
      const endIndex = this.currentPage * this.itemsPerPage;
      return this.todos.slice(startIndex, endIndex);
    },
  },

  methods: {
    changePage(pageNumber) {
      this.currentPage = pageNumber;
    },
  },
};
</script>
