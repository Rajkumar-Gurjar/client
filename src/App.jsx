import React from 'react'
import Header from './components/Header'
import Home from './pages/Home'
import Footer from './components/Footer'
import Courses from './pages/Courses';
import Login from './pages/Login';
import Register from './pages/Register';

import {
  Routes,
  Route,
} from "react-router-dom";
import Coursedetils from './pages/CourseDetail';
import MyBooking from './pages/MyBooking';


const App = () => {
  return (
    <>
    <Header/>
    <Routes>
      <Route path="/" element ={<Home/>}/>
      <Route path="/courses" element ={<Courses/>}/>
      <Route path="/login" element ={<Login/>}/>
      <Route path="/register" element ={<Register/>}/>
      <Route path="/mybooking" element ={<MyBooking/>}/>
      <Route path="/coursedetils/:id" element ={<Coursedetils/>}/>
      
    </Routes>
    <Footer/>
    </>
  )
}

export default App