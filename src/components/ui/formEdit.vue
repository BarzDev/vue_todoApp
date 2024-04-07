<template>
  <div class="max-w-lg mx-auto bg-slate-900 p-5 rounded-lg">
    <div class="flex items-center justify-center pb-10">
      <p class="font-bold text-xl text-white">Edit Todo Item</p>
    </div>

    <div class="relative z-0 w-full mb-5 group">
      <input
        v-model="userId"
        type="text"
        inputmode="numeric"
        name="userId"
        id="userId"
        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="userId"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >User ID</label
      >
    </div>

    <div class="relative z-0 w-full mb-5 group">
      <input
        v-model="title"
        type="text"
        name="title"
        id="title"
        class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
        placeholder=" "
        required
      />
      <label
        for="title"
        class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
        >Todo Title</label
      >
    </div>

    <div class="flex items-center justify-end gap-3">
      <RouterLink
        to="/"
        class="text-white bg-sky-700 hover:bg-sky-800 focus:ring-4 focus:outline-none focus:ring-sky-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-sky-600 dark:hover:bg-sky-700 dark:focus:ring-sky-800"
      >
        Back
      </RouterLink>

      <button
        @click="onSave"
        class="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
      >
        Edit
      </button>
    </div>
  </div>
</template>

<script>
import router from "@/routers";
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { useStore } from "vuex";
export default {
  name: "FormEdit",
  components: { RouterLink },
  props: ["todo"],

  setup(props) {
    const userId = ref(props.todo.userId);
    const title = ref(props.todo.title);
    const store = useStore();

    function onSave() {
      if (userId.value === "" || title.value === "") {
        alert("Please fill in the form");
        return;
      }
      const editTodo = {
        id: props.todo.id,
        userId: userId.value,
        title: title.value,
        completed: props.todo.completed,
      };

      const confirmed = window.confirm(
        "Are you sure you want to edit this todo?"
      );
      if (confirmed) {
        store.dispatch("editTodoAction", editTodo);
        alert("Todo Edited Successfully");
        router.push("/");
      }
    }
    return {
      userId,
      title,
      onSave,
    };
  },
};
</script>
