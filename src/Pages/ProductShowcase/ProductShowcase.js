//Libs
import React, { useState, useRef, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

//Components
import inventory from '../../data/inventory';

//Styles
import "./ProductShowcase.css";

const ProductShowcase = () => {
    //useState = always on top
    //utiliser useStateSnipper pour remplir automatiquement
    //useState(valeur de base)
    const [nbMugs, setNbMugs] = useState(1);

    const { id } = useParams();

    const productClicked = inventory.findIndex(obj => obj.title.replace(/\s+/g, "").trim() === id);
    //console.log(productClicked);

    //event = paramètre
    const updateMugs = event => {
        //transform event in number :
        setNbMugs(Number(event.target.value))
    }

    return (
        <div className="showcase">
            <div className="container-img-showcase">
                <img
                className="img-showcase"
                src={process.env.PUBLIC_URL + `/images/${inventory[productClicked].img}.png`} 
                alt="image du produit" />
            </div>
            <div className="product-infos">
                <h2>{inventory[productClicked].title}</h2>
                <p>Prix : {inventory[productClicked].price} €</p>
                <form>
                    <label htmlFor="quantity">Quantité</label>
                    <input
                    type="number"
                    id="quantity"
                    value={nbMugs}
                    onChange={updateMugs}
                    />
                    <button>Ajouter au panier</button>
                    <span className="adding-info"></span>
                </form>
            </div>

        </div>
    );
};

export default ProductShowcase;