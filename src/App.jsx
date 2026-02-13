import React from 'react'

import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup'
import ProductPage from './Pages/ProductPage'
import Footer from './Components/Footer'


function App() {


  return (
    < >
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/signIn' element={<Signup />}></Route>
        <Route path='/product/:pd_id' element={<ProductPage />}></Route>
      </Routes>



      <Footer/>
      

    </>
  )
}

export default App
