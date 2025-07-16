<template>
  <input v-model="newTask" @keyup.enter="addTodo" placeholder="Новая задача" />
  <button @click="addTodo">Добавить</button>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useAddTodo } from "../composables/useAddTask";
import { useTodoStore } from "../stores/todo";

const store = useTodoStore();

// для новой задачи
const newTask = ref("");
console.log("newTask - ", newTask);

const { addTodo } = useAddTodo(newTask, store);
</script>

<style scoped></style>
