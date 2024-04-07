// store/index.js

import { createStore } from "vuex";

export default createStore({
  state: {
    todos: [],
  },
  mutations: {
    setTodos(state, todos) {
      state.todos = todos;
    },

    addTodo(state, newTodo) {
      state.todos.unshift(newTodo);
      // console.log(state.todos);
      // console.log(newTodo);
    },

    editTodo(state, updatedTodo) {
      const index = state.todos.findIndex((todo) => todo.id === updatedTodo.id);
      if (index !== -1) {
        state.todos.splice(index, 1, updatedTodo);
      }
    },
  },
  actions: {
    addTodoAction({ commit }, newTodo) {
      commit("addTodo", newTodo);
    },

    editTodoAction({ commit }, updatedTodo) {
      commit("editTodo", updatedTodo);
    },
  },

  getters: {
    todos(state) {
      return state.todos;
    },
  },
  modules: {},
});
