<script setup lang="ts">
// экспортируется автоматически

//объект задачи
// const props = defineProps({
//   todo: Object,
// });

interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

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

//console.trace("Call stack:");
//throw new Error("Что-то пошло не так");

try {
  throw new Error("Что-то пошло не так");
} catch (e) {
  console.error("Ошибка:", e);
  console.log("Call stack:", e.stack);
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
