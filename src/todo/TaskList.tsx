import { getStatus } from "./utils";
import IconTrash from "../assets/icons8-trash.svg"
import { useBoundStore } from "../store";
import { task } from "../models/store";



export default function TaskList({ title, status, id }: task) {

  const setDraggedTask = useBoundStore((state) => state.setDraggedTask)
  const deleteTask = useBoundStore((state) => state.deleteTask)

  return (
    <div className="border border-black rounded-sm bg-gray-300 text-dark-gray flex flex-col justify-between font-medium p-2 mb-2 cursor-move" draggable onDragStart={() => {
      setDraggedTask(title)
    }}>
      <div className="flex">
        <p className="mr-2">{title}</p>
        <img src={IconTrash} alt="icon-trash" className="w-4 cursor-pointer" onClick={() => deleteTask(id)} />
      </div>
      <div className="flex justify-between">
        <div></div>
        <p className={`w-fit h-fit rounded-sm ${getStatus(status)}`}>{status}</p>
      </div>
    </div>
  )
}

