import Task from "./Tasks";


export default function Todo() {

  return (
    <div className="flex gap-6">
      <Task status="ONGOING" />
      <Task status="COMPLETED" />
      <Task status="CANCELLED" />
    </div>
  )
}