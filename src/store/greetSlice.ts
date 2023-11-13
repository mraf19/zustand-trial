import { StateCreator } from "zustand"
import { countSlice, greetSlice, todoSlice } from "../models/store"

export const createGreetSlice: StateCreator<
  countSlice & greetSlice & todoSlice,
  [],
  [],
  greetSlice> = (set) => ({
    name: "User",
    setName: (text) => set({ name: text }),
  })