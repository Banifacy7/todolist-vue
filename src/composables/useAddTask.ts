import type { Ref } from "vue";

export function useAddTodo(
  newTask: Ref<string>,
  store: { addTodo: (task: string) => void }
) {
  const addTodo = () => {
    console.log("Заработал addTask отдельный хук");
    if (newTask.value.trim()) {
      console.log("newTask внутри if - ", newTask);
      store.addTodo(newTask.value.trim());
      newTask.value = "";
    }
  };

  return { addTodo };
}

// //разобран частично, надо вынести
// const addTodo = () => {
//     console.log("Заработал addTask из TodoList");
//     if (newTask.value.trim()) {
//       console.log("newTask внутри if - ", newTask);
//       store.addTodo(newTask.value.trim());
//       newTask.value = "";
//     }
//   };
