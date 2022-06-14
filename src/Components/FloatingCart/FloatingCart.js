//Libs
import React from "react";
import { NavLink } from 'react-router-dom';

//Components
import cartIcon from "./shopping-cart.svg";

//Styles
import "./FloatingCart.css";

export default function FloatingCart() {

    return (
        <div>
            <NavLink to="/panier">
                <div className="floating-cart">
                    <p>Votre Panier</p>
                    <div className="img-notif-container">
                        <img src={cartIcon} alt="icône caddie"></img>
                        <span className="notif">0</span>
                    </div>
                </div>
            </NavLink>
        </div>


    )
}
