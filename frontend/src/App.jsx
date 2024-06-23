import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css'
import Home from './pages/Home';
import Success from './pages/Success';
const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App
