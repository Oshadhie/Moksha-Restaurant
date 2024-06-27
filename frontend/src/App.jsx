import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import './App.css'
import Home from './pages/Home';
import Success from './pages/Success';
import Dashboard from './pages/AdminDashboard';
import Login from './pages/Login';
import AddNewAdmin from './pages/AddAdmin';
import SignupUser from './pages/Signup';


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/success' element={<Success/>}/>
          <Route path= '/admindashboard' element={<Dashboard/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/addadmin' element={<AddNewAdmin/>}/>
          <Route path='/signup' element={<SignupUser/>}/>
        </Routes>
        <Toaster/>
      </Router>
    </>
  )
}

export default App
