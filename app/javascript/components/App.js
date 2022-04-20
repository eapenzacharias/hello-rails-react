import React from 'react'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Greetings from './Greetings'
const App = () => {
  return (
    <>
      <h1>App</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>Home</h1>} />
          <Route path="/greetings" element={<Greetings />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
