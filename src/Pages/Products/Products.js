//Libs
import React from 'react';
import { NavLink } from 'react-router-dom';

//Components
import heart from './heart.svg';
import inventory from '../../data/inventory';

//Styles
import "./Products.css";


const Products = () => {
    return (
        <div className='container-products'>
            {inventory.map(item => (
                <NavLink
                    to={{
                        pathname: `/produits/${item.title.replace(/\s+/g, "").trim()}`
                    }}
                    key={item.id}
                    >
                        <div className="bloc-card">
                            <div className="product-card">
                                <div className="visual-aspect">
                                    <img 
                                    className="img-product" 
                                    src={process.env.PUBLIC_URL + `/images/${item.img}.png`} 
                                    alt="image produit" />
                                    <div className="like-container">
                                        <img src={heart} alt="j'aime" />
                                    </div>
                                </div>
                                <div className="info">
                                    <p>{item.title}</p>
                                    <p>{item.price} €</p>
                                </div>
                            </div>
                            <div className="back-card"></div>
                        </div>
                </NavLink>
            ))}
        </div>
    );
};

export default Products;