<template>
  <div class="clear-all">
    <button @click="clearAll">Удалить все задачи</button>
  </div>
</template>

<script setup lang="ts">
import { useTodoStore } from "../stores/todo";

const store = useTodoStore();

function clearAll() {
  store.clearAll();
}
</script>

<style scoped>
.clear-all {
  text-align: center;
  margin: 1rem 0;
}

button {
  padding: 0.5rem 1rem;
  background-color: crimson;
  color: white;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}
</style>
