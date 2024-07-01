import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div data-testid='app' className='container'>
      <div>
        <div className='text-red-400'>Count: {count}</div>
        <button onClick={() => setCount(current => current + 1)}>Increment</button>
        <button onClick={() => setCount(current => current - 1)}>Decrement</button>
      </div>
    </div>
  )
}

export default App
