
//React...
import { useState } from 'react'
import {HashRouter, Routes, Route, Link} from "react-router-dom"

//Components...
import Home from './pages/Home'
import ProductsList from './pages/ProductsList'
import Contact from './pages/Contact'

//React icons...
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";




//Styles...
import './App.scss'

function App() {

  return (
    <div className="App">
      <HashRouter>
        
          <div className='nav-bar'>
            <h3>Royalty Solutions</h3>
            <nav className='nav-wrap'>
              <Link to={'/'}>Home</Link>
              <Link to={'/products'}>Products</Link>
              <Link to={'/contact'}>Contact</Link>
            </nav>
            
            <div className='social-media-links'>
              <FaFacebook/>
              <FaInstagram/>
              <FaTiktok/>
            </div>
          </div>





          <Routes>
              <Route path="/" element={<Home/>}/>
              <Route path="/products" element={<ProductsList/>}/>
              <Route path="/contact" element={<Contact/>}/>
            


          </Routes>
      </HashRouter>
    </div>
  )
}

export default App



