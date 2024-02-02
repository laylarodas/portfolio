import { useState } from 'react'
//import './App.css'
import { Myroutes } from './router/Myroutes'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='layout'>
      <Myroutes />
    </div>
  )
}

export default App
