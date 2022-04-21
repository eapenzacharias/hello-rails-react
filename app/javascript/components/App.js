import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Greetings from './Greetings'
const App = () => {
  return (
    <>
      <h1>App</h1>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<h1>Home</h1>} />
            <Route path="/greetings" element={<Greetings />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
