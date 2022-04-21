import React from 'react'
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from '../redux/configureStore';
import Greetings from './Greetings'
const App = () => {
  return (
    <>
      <h1>App</h1>
      <Provider store={store}>
        <BrowserRouter>
          <NavLink to="/">Home</NavLink> <br />
          <NavLink to="/greetings">Greetings</NavLink>
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
