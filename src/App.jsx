import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import { Navbar } from './components/Navbar'
import { Homepage } from './components/Homepage'
import { Shop } from './components/Shop'
import './style.css'

function App() {  
  return (
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/shop" element={<Shop />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App
