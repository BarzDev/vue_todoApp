<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table
      class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-300"
    >
      <thead
        class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
      >
        <tr class="text-center">
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
            {{ todo.userId }}
          </th>

          <td class="px-6 py-3">
            <span :class="{ done: todo.completed }"> {{ todo.title }}</span>
          </td>
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

          <td class="px-6 py-3 flex justify-center items-center gap-3">
            <div v-if="todo.completed" class="font-medium text-slate-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </div>

            <RouterLink
              v-else
              :to="{ name: 'edit', params: { id: todo.id } }"
              class="font-medium text-blue-600 dark:text-blue-500 hover:underline"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
            </RouterLink>

            <DeleteButton :todo="todo" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import DeleteButton from "./deleteButton.vue";

export default {
  name: "TableComponent",
  components: { DeleteButton },
  props: ["todos"],
};
</script>

<style>
.done {
  text-decoration: line-through;
  color: green;
}
</style>
