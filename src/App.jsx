
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
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";





//Styles...
import './App.scss'

function App() {

  return (
    <div className="App poppins-light">
      <HashRouter>
        
          <div className='nav-bar'>
            <h3>Royalty Solutions</h3>
            <nav className='nav-wrap'>
              <span>
                <Link to={'/'}>Home</Link>      
              </span>
              <span>
                <Link to={'/products'}>Products</Link>
              </span>
              <span>
                <Link to={'/contact'}>Contact</Link>
              </span>
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


          <footer>

            <div>
              <h2>Royalty Solutions</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi sapiente laudantium, rem dolore architecto sint praesentium ratione officiis autem fuga nobis tenetur a neque iure itaque quia dicta necessitatibus! Ipsum?</p>
              <div className='social-icons-footer'>
                <FaFacebook/>
                <FaInstagram/>
                <FaTiktok/>
                <FaGoogle/>
                <FaTwitter/>
              </div>
            </div>

          </footer>

      </HashRouter>
    </div>
  )
}

export default App



