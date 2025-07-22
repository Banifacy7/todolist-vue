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

// Если нужно использовать событие (например, для preventDefault)
function toggleTodo(e: MouseEvent, id: number) {
  e.preventDefault(); // пример использования
  emit("toggle", id);
}

function removeTodo(e: MouseEvent, id: number) {
  e.preventDefault(); // пример использования
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

    <button @click="(e) => toggleTodo(e, todo.id)">✅</button>

    <button @click="(e) => removeTodo(e, todo.id)">❌</button>
  </div>
</template>
