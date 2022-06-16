//Libs
import React from "react";
import { NavLink } from 'react-router-dom';
import { useSelector } from "react-redux";

//Components
import cartIcon from "./shopping-cart.svg";

//Styles
import "./FloatingCart.css";

export default function FloatingCart() {

    const shoppingCart = useSelector(state => state);

    console.log("état du panier : ", shoppingCart);

    let totalItems = 0;
    for(const item of shoppingCart.cart){
        totalItems += item.quantity;
    }

    return (
        <div>
            <NavLink to="/panier">
                <div className="floating-cart">
                    <p>Votre Panier</p>
                    <div className="img-notif-container">
                        <img src={cartIcon} alt="icône caddie"></img>
                        <span className="notif">{totalItems}</span>
                    </div>
                </div>
            </NavLink>
        </div>


    )
}
