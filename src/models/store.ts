export interface countSlice {
  count: number;
  increment: (by: number) => void;
  decrement: (by: number) => void;
  reset: (by: number) => void;
}

export interface greetSlice {
  name: string;
  setName: (name: string) => void;
}

export interface todoSlice {
  tasks: task[],
  draggedTask: string | null,
  addTask: (body: task) => void;
  deleteTask: (id: string) => void;
  setDraggedTask: (title: string | null) => void;
  moveTask: (title: string | null, status: "ONGOING" | "COMPLETED" | "CANCELLED") => void;
}

export interface task extends Status {
  id: string;
  title: string;
}

export interface Status {
  status: "ONGOING" | "COMPLETED" | "CANCELLED"
}