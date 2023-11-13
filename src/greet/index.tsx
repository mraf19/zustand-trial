import { useBoundStore } from "../store"

export default function Greet() {

  const name = useBoundStore((state) => state.name)
  const setName = useBoundStore((state) => state.setName)

  return (
    <>
      <input className="w-full p-6 text-dark-gray border-4 border-gray-600 rounded-xl text-3xl font-bold bg-gray-100 outline-none" type="text" value={name} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
      }} />
    </>
  )
}