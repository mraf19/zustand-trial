import {StateCreator} from "zustand"
import { countSlice, greetSlice, todoSlice } from "../models/store"

export const createCountSlice: StateCreator<
countSlice & greetSlice & todoSlice,
[],
[],
countSlice> = (set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  reset: () => set({ count: 0 }),

})