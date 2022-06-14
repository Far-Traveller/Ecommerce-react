//Libs
import React from "react";
import { NavLink } from 'react-router-dom';

//Styles
import "./Navbar.css";

export default function Navbar() {

    return (
        <nav className="nav-top">
            <NavLink to="/">Accueil</NavLink>
            <NavLink to="/produits">Produits</NavLink>
            <NavLink to="/contact">Contact</NavLink>
        </nav>
    )
}