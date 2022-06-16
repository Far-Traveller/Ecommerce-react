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

    const addingInfo = useRef();
    let timerInfo;
    let display = true;

    const dispatch = useDispatch();

    const addToCart = event => {
        event.preventDefault();

        const itemAdded = {
            ...inventory[productClicked],
            quantity: nbMugs
        }

        dispatch({
            type: "ADDITEM",
            payload: itemAdded,
        })

        addingInfo.current.innerText = "Ajouté au panier";

        //faire disparaitre le texte 
        if(display){
            display = false;
            timerInfo = setTimeout(() => {
                addingInfo.current.innerText = "";
                display = true;
            }, 700)
        }
    }

    //on nettoie le composant, pour éviter d'avoir une erreur, si on quitte la page avant que le timerinfo soit fini, si on revient sur la page, il va tenter de supprimer le texte, qui n'existe plus
    useEffect(() => {
        return () => {
            clearTimeout(timerInfo)
        }
    }, [timerInfo])

    return (
        <div className="showcase">
            <div className="container-img-showcase">
                <img
                className="img-showcase"
                src={process.env.PUBLIC_URL + `/images/${inventory[productClicked].img}.png`} 
                alt="produit" />
            </div>
            <div className="product-infos">
                <h2>{inventory[productClicked].title}</h2>
                <p>Prix : {inventory[productClicked].price} €</p>
                <form onSubmit={addToCart}>
                    <label htmlFor="quantity">Quantité</label>
                    <input
                    type="number"
                    id="quantity"
                    value={nbMugs}
                    onChange={updateMugs}
                    />
                    <button>Ajouter au panier</button>
                    <span
                    ref={addingInfo}
                    className="adding-info"></span>
                </form>
            </div>

        </div>
    );
};

export default ProductShowcase;