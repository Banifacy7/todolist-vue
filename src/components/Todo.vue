<script setup lang="ts">
// экспортируется автоматически

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

//тригер для гит

const { todo } = defineProps<{ todo: Todo }>();

//связь функции с родителем
const emit = defineEmits(["toggle", "remove"]);

//обработчик на выполнено
function toggleTodo(id: number) {
  emit("toggle", id); // отправляем в родиетель
}

//обработчик на удалить
function removeTodo(id: number) {
  emit("remove", id);
}
</script>

<template>
  <div
    :style="{
      border: '1px solid #CCC',
      textDecoration: todo.completed ? 'line-through' : 'none',
    }"
  >
    {{ todo.text }}
    <button @click="toggleTodo(todo.id)">✅</button>
    <button @click="removeTodo(todo.id)">❌</button>
  </div>
</template>
