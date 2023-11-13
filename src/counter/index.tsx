import { useBoundStore } from '../store'



export default function Counter() {
  const count = useBoundStore((state) => state.count)
  const increment = useBoundStore((state) => state.increment)
  const decrement = useBoundStore((state) => state.decrement)
  const reset = useBoundStore((state) => state.reset)

  return (
    <>
      <h1>{count}</h1>
      <div className="card">
        <button onClick={() => increment(count)}>
          +
        </button>
        <button onClick={() => reset(count)}>
          Reset
        </button>
        <button onClick={() => decrement(count)}>
          -
        </button>

      </div>
    </>
  )
}