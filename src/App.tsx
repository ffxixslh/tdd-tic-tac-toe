import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div data-testid='app' id='app' className='container flex align-center justify-center'>
      <div className='flex flex-col justify-center'>
        <div className='self-center text-red-400'>Count: {count}</div>
        <div className='flex gap-4'>
          <button onClick={() => setCount(current => current + 1)}>Increment</button>
          <button onClick={() => setCount(current => current - 1)}>Decrement</button>
        </div>
      </div>
    </div>
  )
}

export default App
