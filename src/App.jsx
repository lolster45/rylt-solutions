
//React...
import { useState, createContext, useContext } from 'react'
import {HashRouter, Routes, Route, Link} from "react-router-dom"

//Components...
import Home from './pages/Home'
import ProductsList from './pages/ProductsList'
import Contact from './pages/Contact'
import MoreDetails from './pages/MoreDetails'

//React icons...
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";





export const myContext = createContext();


//Styles...
import './App.scss'
import CartPage from './pages/CartPage'

function App() {


  const [cart, setCart] = useState([]);

 

  return (
    <myContext.Provider value={{cart, setCart}}>

      <div className="App poppins-light">
        <HashRouter>
          
            <div className='nav-bar'>

              <div className='nav-wrap'>
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
                  <Link to={'/cart'}>
                    <CiShoppingCart/>
                    Cart
                    {cart.length > 0 &&
                        <span className='cart-length'>{cart.length}</span>
                    }
                  </Link>
                </div>
              </div>

              {/* <div className='hamburger-menu'>
                    hamburger menu
              </div> */}


            </div>





            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/cart" element={<CartPage/>}/>
                <Route path="/products" element={<ProductsList/>}/>
                <Route path="/products/:productId" element={<MoreDetails/>}/>

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
    </myContext.Provider>
  )
}

export default App



