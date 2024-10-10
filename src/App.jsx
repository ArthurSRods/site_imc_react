import { useState } from 'react'
import './App.css'
import CalculadoraIMC from './components/CalculadoraIMC.JSX'

function App() {
  const [count, setCount] = useState(0)

  return (
    <CalculadoraIMC/>
  )
}

export default App
