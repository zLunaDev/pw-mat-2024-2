import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {BrowserRouter, Routes, Route, Link
} from 'react-router-dom'

import Exercicio01 from './exercicios/01'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Just die</h1>
      <BrowserRouter>
      <ul>
        <li> <Link to = "/01">Exercio 01</Link></li>
      </ul>

      <hr />
      <Routes>
        <Route path="/" element={
        <div>Clique em um dos <em>Links</em> acima para exibir um exercio</div>
        } />
        <Route path= "/01" element = { <Exercicio01 />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
