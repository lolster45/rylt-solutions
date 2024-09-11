//React...
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

//React icons...
import { LuLayoutGrid } from "react-icons/lu";
import { LuLayoutList } from "react-icons/lu";
import { IoIosSearch } from "react-icons/io";


import products from '../products';


//Styles...
import '../styles/productList.scss'


const ProductsList = () => {


    // State for user input
    const [searchTerm, setSearchTerm] = useState('');

    // Filtered items based on search term
    const filteredItems = products.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Handle input change
    const handleInputChange = (event) => {
        setSearchTerm(event.target.value);
    };


    const [layoutChange, setLayoutChange] = useState(false)


    return (
        <div className='products-page'>
            <h1>Products</h1>
            <div className='list-wrap'>
                <nav>
                    <span className='input-wrap'>
                        <input type="text" onChange={handleInputChange} placeholder='Search...' />
                        <div className="right-input">
                            <IoIosSearch/>
                            <LuLayoutGrid onClick={() => setLayoutChange(prev => !prev)}/>
                            <span>Filters</span>
                        </div>

                    </span>
                </nav>

                <div className={`actual-list ${layoutChange ? "rows" : "blocks"}`}>

                    {
                        filteredItems.map(card => {
                            return (
                                <Link className='card' to={`/products/${card.name}`}>
                                    <img src={card.productImage}/>
                                    <div>
                                        <h2>{card.name}</h2>
                                        {layoutChange &&
                                            <p>{card.description}</p>
                                        }
                                        <span>${card.price}</span>
                                    </div>
                                </Link>           
                            )
                        })
                    }
                    {!filteredItems.length && 
                        <h2>Nothing to see here...</h2>
                    }

                </div>

            </div>
        </div>
    );
};

export default ProductsList;