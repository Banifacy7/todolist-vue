<template>
  <div id="app">
    <Header />
    <AddTodo />
    <TodoList />
    <ClearAll />
  </div>
</template>

<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
import Header from "./components/Header.vue";
import AddTodo from "./components/AddTodo.vue";
import ClearAll from "./components/ClearAll.vue";
console.log(" 2 Запустился App.vue");
</script>

<style scoped>
#app {
  max-width: 600px;
  margin: 2rem auto;
  font-family: sans-serif;
}
</style>
