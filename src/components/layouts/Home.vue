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
  name: "HomeLayout",
  components: { Table, Pagination },

  data() {
    return {
      currentPage: 1,
      itemsPerPage: 10,
    };
  },

  computed: {
    ...mapGetters(["todos"]),

    dataLength() {
      return this.todos.length;
    },

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
