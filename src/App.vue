<template>
  <div id="app">
    <Header />
    <AddTodo />
    <TodoList />
    <ClearAll />
    <h3>
      Commit on 23/7 successful — Vercel automatically deploys the pushed
      project
    </h3>
  </div>
</template>

<script setup lang="ts">
import TodoList from "./components/TodoList.vue";
import Header from "./components/Header.vue";
import AddTodo from "./components/AddTodo.vue";
import ClearAll from "./components/ClearAll.vue";
console.log(" 2 Запустился App.vue");

//Small change to trigger redeploy
</script>

<style scoped>
#app {
  max-width: 600px;
  margin: 2rem auto;
  font-family: sans-serif;
}
</style>

<!-- Компонент App.vue — корневой компонент приложения. 
Он собирает все основные части интерфейса: шапку (Header), 
форму добавления задач (AddTodo), 
список задач (TodoList) и кнопку очистки всех задач (ClearAll). 
Именно отсюда начинается отображение пользовательского интерфейса. -->
