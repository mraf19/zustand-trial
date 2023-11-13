import { StateCreator } from "zustand"
import { countSlice, greetSlice, task, todoSlice } from "../models/store"
import { v4 as uuid4 } from "uuid"

export const createTodoSlice: StateCreator<
  countSlice & greetSlice & todoSlice,
  [["zustand/persist", unknown],
    ["zustand/devtools", unknown]],
  [],
  todoSlice> = (set) => ({
    tasks: [] as task[],
    draggedTask: null,
    addTask: (body) => {
      set((state) => ({
        tasks: [...state.tasks, body],
      }), false, "addTask")
    },
    deleteTask: (id) => {
      set((state) => ({
        tasks: state.tasks.filter((task) => task.id !== id),
      }), false, "deleteTask")
    },
    setDraggedTask: (title) => {
      set({ draggedTask: title }, false, "setDraggedTask")
    },
    moveTask: (title, status) => {
      set((state) => ({
        tasks: state.tasks.map((task) => (
          task.title === title ? { id: uuid4(), title, status } : task
        ))
      }), false, "moveTask")
    }
  })