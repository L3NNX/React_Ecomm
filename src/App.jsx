import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home  from "./components/Home"
import Details from './components/Details'
import Edit from './components/Edit'
import Create from './components/Create'

function App() {
  return (
    <div className='h-screen w-screen flex'>

      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="/create" element={<Create/>} />
        <Route path ="/details/:id" element={<Details/>} />
        <Route path ="/edit/:id" element={<Edit/>} />
      </Routes>
    </div>
  )
}

export default App