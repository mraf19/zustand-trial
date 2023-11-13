import { useState } from "react"
import { Status } from "../models/store"
import { useBoundStore } from "../store"
import Modal from "./Modal"
import TaskList from "./TaskList"

export default function Task({ status }: Status) {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const tasks = useBoundStore((state) => state.tasks).filter(task => task.status === status)
  const draggedTask = useBoundStore((state) => state.draggedTask)
  const setDraggedTask = useBoundStore((state) => state.setDraggedTask)
  const moveTask = useBoundStore((state) => state.moveTask)


  return (
    <>
      <div
        className="border border-black rounded-xl w-1/3 bg-gray-100 text-dark-gray min-h-max flex flex-col justify-start p-6"
        onDragOver={(e: React.DragEvent<HTMLDivElement>) => {
          e.preventDefault()
        }}
        onDrop={() => {
          moveTask(draggedTask, status)
          setDraggedTask(null)
        }}
      >
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-3xl font-semibold">{status}</h1>
          <button className="text-xl font-semibold" onClick={() => setIsModalOpen(true)}>Add</button>
        </div>
        {tasks.map(task => (
          <TaskList key={task.id} title={task.title} status={status} id={task.id} />
        ))}
      </div>
      {isModalOpen && <Modal setIsModalOpen={setIsModalOpen} status={status} />}

    </>
  )
}