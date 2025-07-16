<script setup lang="ts">
import { computed } from "vue";
import { useTodoStore } from "../stores/todo";
import Todo from "./Todo.vue";

const store = useTodoStore();
store.loadFromLocalStorage(); //Загружаем задачи при старте

function toggleTodo(id: number) {
  store.toggleTodo(id);
}

function removeTodo(id: number) {
  store.removeTodo(id);
}

// реактивный todos
const todos = computed(() => store.todos);
</script>

<template>
  <div>
    <h2>Список задач</h2>

    <div v-for="todo in todos" :key="todo.id">
      <Todo :todo="todo" @toggle="toggleTodo" @remove="removeTodo" />
    </div>
  </div>
</template>
