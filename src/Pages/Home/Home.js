//Libs
import React from 'react';

//Components
import imgHomeShop from './shopimg.jpg';

//Styles
import "./Home.css";

const Home = () => {
    return (
        <div className='global-container'>
            <h1 className='home-title'>
                Bienvenue dans le <span>Pays Fantastique</span>
            </h1>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit reprehenderit ex, perspiciatis ea tenetur reiciendis perferendis non? Consequuntur nobis voluptatibus praesentium minus excepturi distinctio commodi sunt, ratione, dolor tempora non aut hic, fugit assumenda.
            </p>
            <img src={imgHomeShop} alt="accueil shop" />
        </div>
    );
};

export default Home;