import { create } from "zustand";
import { persist, devtools } from "zustand/middleware"

import { countSlice, greetSlice, todoSlice } from "../models/store";
import { createCountSlice } from "./countSlice";
import { createGreetSlice } from "./greetSlice";
import { createTodoSlice } from "./todoSlice";


export const useBoundStore = create<countSlice & greetSlice & todoSlice>()(devtools(persist((...a) => ({
  ...createCountSlice(...a),
  ...createGreetSlice(...a),
  ...createTodoSlice(...a)
}), { name: "todo" })) )