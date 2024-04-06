<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg pt-6">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr class="text-center">
          <th scope="col" class="px-6 py-3">No</th>
          <th scope="col" class="px-6 py-3">User ID</th>
          <th scope="col" class="px-6 py-3">Title Todo</th>
          <th scope="col" class="px-6 py-3">Status</th>

          <th scope="col" class="px-6 py-3">Action</th>
        </tr>
      </thead>
      <tbody>
        <tr
          v-for="todo in todos"
          :key="todo.id"
          class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            class="px-6 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {{ todo.id }}
          </th>
          <td class="px-6 py-3">{{ todo.userId }}</td>
          <td class="px-6 py-3">{{ todo.title }}</td>
          <td class="text-center">
            <span v-if="todo.completed" class="text-green-500 font-semibold"
              >Done</span
            >
            <input
              v-else
              type="checkbox"
              class="cursor-pointer"
              v-model="todo.completed"
            />
          </td>

          <td class="px-6 py-3 text-center">
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Edit</a
            >
            <a
              href="#"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              >Edit</a
            >
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: "TableComponent",
  props: ["todos"],
};
</script>
