<template>
  <div class="max-w-lg mx-auto bg-slate-900 p-5 rounded-lg">
    <div class="flex items-center justify-center pb-10">
      <p class="font-bold text-xl text-white">Create New Todo Item</p>
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
      <div
        @click="onReset"
        class="text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
      >
        Reset
      </div>

      <button
        @click="onSave"
        class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Save
      </button>
    </div>
  </div>
</template>

<script>
import { ref } from "vue";
import { useStore } from "vuex";
import router from "@/routers";

export default {
  name: "FormComponent",

  setup() {
    const userId = ref("");
    const title = ref("");
    const store = useStore();

    function onReset() {
      userId.value = "";
      title.value = "";
    }

    function onSave() {
      const newTodo = {
        id: Date.now(),
        userId: userId.value,
        title: title.value,
        completed: false,
      };

      // console.log({ newTodo });

      store.dispatch("addTodoAction", newTodo);
      alert("Success add new Todo");
      router.push("/");
    }

    return {
      userId,
      title,
      onReset,
      onSave,
    };
  },
};
</script>
