import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import './App.css'

import Profile from './pages/profile'
import Home from './pages/home'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/:nickname" element={<Profile />}></Route>
    </Routes>
  )
}

export default App
