import { useEffect, useRef, useState } from "react"
import { useBoundStore } from "../store"
import { v4 as uuidv4 } from 'uuid';
import { Status } from "../models/store";

interface ModalProps extends Status {
  setIsModalOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export default function Modal({ setIsModalOpen, status }: ModalProps) {
  const inputRef = useRef<HTMLInputElement>(null)
  const modalRef = useRef<HTMLDivElement>(null)
  const [title, setTitle] = useState('')

  const addTask = useBoundStore((state) => state.addTask)
  const clickHandler = () => {
    if (title.length === 0) {
      setIsModalOpen(false)
      alert('Please enter a task')
    } else {
      setIsModalOpen(false)
      addTask({ id: uuidv4(), title: title, status: status })
    }
  }
  useEffect(() => {
    if (inputRef.current === null) return
    inputRef.current.focus()
  })

  const clickOutsideHandler = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement
    if(target.className === 'modal') setIsModalOpen(false)
    return null
  }

  return (
    <div 
      className="modal" 
      ref={modalRef}
      onClick={clickOutsideHandler}>
      <div className="modal-content">
        <input value={title}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
            setTitle(e.target.value)
          }}
          type="text"
          className="border border-black p-2 m-2 text-dark-gray rounded-sm"
          ref={inputRef}
        />
        <button
          onClick={clickHandler}
          className="p-2 rounded-lg text-dark-gray text-lg bg-gray-300 border border-black font-semibold">
          submit</button>
      </div>
    </div>
  )
}