<template>
  <Table />
  <Pagination />
</template>

<script>
import Table from "../ui/table.vue";
import Pagination from "../ui/pagination.vue";
export default {
  name: "HomeLayout",
  components: { Table, Pagination },
};
</script>
