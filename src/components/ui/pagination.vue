<template>
  <div class="flex items-center justify-between">
    <!-- Help text -->
    <span class="text-sm">
      Showing
      <span class="font-semibold text-red-500">{{ currentPage * 10 - 9 }}</span>
      to
      <span class="font-semibold text-red-500">{{ currentPage * 10 }}</span> of
      <span class="font-semibold text-red-500">{{ dataLength }}</span>
      Entries
    </span>
    <div class="inline-flex mt-2 xs:mt-0"></div>
    <div class="inline-flex mt-2 xs:mt-0">
      <button
        @click="changePage(currentPage - 1)"
        :disabled="currentPage === 1"
        class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 rounded-s hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        <svg
          class="w-3.5 h-3.5 me-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M13 5H1m0 0 4 4M1 5l4-4"
          />
        </svg>
        Prev
      </button>
      <button
        @click="changePage(currentPage + 1)"
        :disabled="currentPage === totalPages"
        class="flex items-center justify-center px-4 h-10 text-base font-medium text-white bg-gray-800 border-0 border-s border-gray-700 rounded-e hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
      >
        Next
        <svg
          class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 14 10"
        >
          <path
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M1 5h12m0 0L9 1m4 4L9 9"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  name: "PaginationComponent",
  props: {
    totalPages: {
      type: Number,
      required: true,
    },
    currentPage: {
      type: Number,
      required: true,
    },
    dataLength: {
      type: Number,
      required: true,
    },
  },
  methods: {
    changePage(pageNumber) {
      this.$emit("changePage", pageNumber);
    },
  },
};
</script>

<style scoped>
.pagination {
  display: flex;
  list-style-type: none;
}

.page-item {
  margin: 0 2px;
}

.page-link {
  cursor: pointer;
  padding: 6px 12px;
  border: 1px solid #ddd;
  background-color: #fff;
  color: #333;
}

.page-link:hover {
  background-color: #f4f4f4;
}
</style>
