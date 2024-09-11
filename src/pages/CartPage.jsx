
//React...
import React, {useContext}from 'react';
import { myContext } from '../App';

//React icons...
import { CiShoppingCart } from "react-icons/ci";


import products from '../products';


//Styles...
import "../styles/cartPage.scss"

// const products = [
//     { id: 1, name: 'Product A', price: 100 },
//     { id: 2, name: 'Product B', price: 200 },
//     { id: 3, name: 'Product C', price: 300 },
// ];

const CartPage = () => {



    const { cart, setCart } = useContext(myContext);


    const addToCart = (product) => {
        const existingProduct = cart.find(item => item.id === product.id);
        if (existingProduct) {
        setCart(cart.map(item =>
            item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        ));
        } 
        else {
            setCart([...cart, { ...product, quantity: 1 }]);
        }
      };
    
    const removeFromCart = (productId) => {
          setCart(cart.filter(item => item.id !== productId));
    };

    const updateQuantity = (productId, quantity) => {
          setCart(cart.map(item =>
          item.id === productId ? { ...item, quantity } : item
          ));
    };

    const getTotalPrice = () => {
          return cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    };
    
    




    return (
        <div className="cart-page">
            <div className="product-list">
                <h1>Recommended</h1>
                {products.slice(0, 3).map(product => (
                    <div key={product.id} className="product-item">
                        <img src={product.productImage} alt="" />
                        <div className='item-right'>
                            <h2>{product.name}</h2>
                            <span>${product.price}</span>
                            <button onClick={() => addToCart(product)}>
                                <CiShoppingCart/>
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            <div className="cart">
                <h1>Cart</h1>
                <div className='actual-cart-wrap'>
                    {cart.length === 0 ? (
                        <p>Your cart is empty</p>
                    ) : (
                    cart.map(item => (
                        <div key={item.id} className="cart-item">

                            <img src={item.productImage} />

                            <div className='cart-right'>
                                <h2>{item.name}</h2>
                                <p>Price: ${item.price}</p>
                                <p>
                                    Quantity: 
                                    <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                                    />
                                </p>
                                <button onClick={() => removeFromCart(item.id)}>Remove</button>

                            </div>
                        </div>
                    ))
                    )}
                </div>
            </div>

            {/* <h2>Total: ${getTotalPrice()}</h2> */}
        </div>
  );
};


export default CartPage;

