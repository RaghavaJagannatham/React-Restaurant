import React from 'react';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './Home';
import Order from './Order'

const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<h1>{<Home />}</h1>} />
        <Route path='/Order' element={<h1>{<Order />}</h1>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
