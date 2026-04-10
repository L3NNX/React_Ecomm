import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home  from "./components/Home"
import Details from './components/Details'
import Edit from './components/Edit'
import Create from './components/Create'
import Cart from './components/Cart'

function App() {
  return (
    <div className='h-screen w-screen flex bg-botanical-bg'>
      <div
        className="pointer-events-none fixed inset-0 z-50 opacity-[0.015]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
        }}
      />

      <Routes>
        <Route path ="/" element={<Home/>} />
        <Route path ="/create" element={<Create/>} />
        <Route path ="/details/:id" element={<Details/>} />
        <Route path ="/edit/:id" element={<Edit/>} />
        <Route path ="/cart" element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App