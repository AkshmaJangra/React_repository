import './Home.css';
// import {
//     BrowserRouter as Router, Switch,
//     Route, Redirect,
// } from "react-router-dom";

import foodie from '../assets/foodie.webp';
import img2 from '../assets/img2.webp';
import img9 from '../assets/img9.webp';
import img10 from '../assets/img10.webp';
import img11 from '../assets/img11.webp';

function HomePage() {
    return (
        <>  
            <nav id="header">
                <div id="logo">
                    <img src={foodie} />
                </div>
                <div className="header-nav-lists">
                    <ul>
                        <li className="items"><a href="#home">HOME</a></li>
                        <li className="items"><a href="#all-Recipes">RECIPES</a></li>
                        <li className="items"><a href="#About-us">ABOUT US</a></li>
                        <li> <form id="form">
                            <input type="search" id="query" name="q" placeholder="Search..." />
                            <button>Search</button>
                        </form></li>

                    </ul>

                </div>
            </nav>
            <section id="home">
                <h1 className="h-primary">Let's Cook</h1>
                <p className="h-p-notes">Try Recipes from World's best Chefs</p>
                <button className="btn"><a href="#all-Recipes">Try Recipes </a></button>
            </section>
            <div id="all-Recipes">
                <div className="layout-recipe-items">
                    <div className="heading-r">
                        <h2 className="title">Top Recipes</h2>
                    </div>
                    <div className="page_body">
                        <a className="item" href="Recipes/simpleMacaroniAndCheese.jsx"><img src={img2} />
                            <h3>Simple Macroni and Cheese</h3>
                        </a>
                        <a className="item" href="Recipes/HomemadePastaRoni.jsx"><img src={img9} />
                            <h3>Home Made Paste Roni</h3>
                        </a>
                        <a className="item" href="Recipes/GarlicNoodles.jsx"><img src={img10} />
                            <h3>Garlic Noodles</h3>
                        </a>
                        <a className="item" href="Recipes/BakedZiti.jsx"><img src={img11} />
                            <h3>Baked Ziti</h3>
                        </a>
                    </div>
                </div>
            </div>
            <footer>
                <div className="center">
                    Copyright &copy; www.foodie.com. All rights reserved!
                </div>
            </footer>
 
        </>);
}

export default HomePage;
