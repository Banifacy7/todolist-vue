import { defineStore } from "pinia";

export interface Todo {
  id: number;
  text: string; // переименовать
  completed: boolean;
}

// Интерфейс для состояния стора (список задач и следующий id)
interface TodoState {
  todos: Todo[];
  nextId: number;
}

// Интерфейс для методов стора (действий)
interface TodoActions {
  addTodo(text: string): void;
  saveToLocalStorage(): void;
  loadFromLocalStorage(): void;
  toggleTodo(id: number): void;
  removeTodo(id: number): void;
  clearAll(): void;
}

export const useTodoStore = defineStore<string, TodoState, {}, TodoActions>(
  "todo",
  {
    state: () => ({
      todos: [] as Todo[],
      nextId: 1,
    }),

    actions: {
      addTodo(text: string) {
        console.log("Start addTodo", text, this.todos);
        this.todos.push({
          id: this.nextId++,
          text,
          completed: false,
        });
        console.log("Массив todos", this.todos);

        localStorage.setItem("1", text);
        this.saveToLocalStorage(); // сохраняем изменения
      },

      saveToLocalStorage() {
        localStorage.setItem(
          "todos",
          JSON.stringify({
            todos: this.todos,
            nextId: this.nextId,
          })
        );
      },

      loadFromLocalStorage() {
        const saved = localStorage.getItem("todos");
        if (saved) {
          const parsed = JSON.parse(saved);
          this.todos = parsed.todos || [];
          this.nextId = parsed.nextId || 1;
        }
      },

      toggleTodo(id: number) {
        const todo = this.todos.find((todo) => todo.id === id);
        if (todo) {
          todo.completed = !todo.completed; // меняем состояние на противоположное
          this.saveToLocalStorage(); //сохраняем изменения
        }
      },

      removeTodo(id: number) {
        this.todos = this.todos.filter((todo) => todo.id !== id);
        this.saveToLocalStorage(); //сохраняем изменения после удаления
      },

      clearAll() {
        this.todos = [];
        this.saveToLocalStorage();
      },
    },
  }
);
