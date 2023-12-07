import { useState } from 'react'
import './App.css'
import SignUp from './components/SignUp'
import Login from './components/Login'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <SignUp />
      <Login />
      <h1 className="text-3xl font-bold underline">
      </h1>
    </>
  )
}

export default App
