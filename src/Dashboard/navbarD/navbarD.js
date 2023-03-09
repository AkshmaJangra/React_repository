import { Component } from 'react'
import { FaSearch,FaShoppingBag  } from "react-icons/fa";
import './navbarD.css'
import icon from '../../assets/voltas-blue.png';
function NavbarD() {

    return (<div>
        <nav className="navbard">


            <div id="navbardNav">
                <ul className="navbard-nav">
                    <li>
                        <a>
                            <img src={icon}></img>
                        </a>
                    </li>
                    <li>
                        <a>
                            My Products
                        </a>
                    </li>
                    <li >
                        <a >
                            My Service Requests
                        </a>
                    </li>
                    <li >
                        <a >
                            My Notifications
                        </a>
                    </li>
                    <li >
                        <a >
                            Guidelines
                        </a>
                    </li>
                    <li >
                        <a >
                            My AMCs
                        </a>
                    </li>
                    <li >
                        <a >
                            Do It Yourself
                        </a>
                    </li>
                    <li>
                        <a>

                        </a>
                    </li>
                    <li>
                        <a>
                            <FaSearch />
                          
                        </a>
                    </li>
                    <li>
                        <a>
                        <FaShoppingBag></FaShoppingBag>
                        </a>
                    </li>
                </ul>
            </div>


        </nav>
    </div>
    )
}
export default NavbarD; 