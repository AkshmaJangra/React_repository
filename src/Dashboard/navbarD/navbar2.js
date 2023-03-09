import { Component } from 'react'
import './navbarD.css'
import services from "../../assets/images/services.png"
import demo from "../../assets/images/demo.png"
import register from "../../assets/images/register.png"
import benefit from "../../assets/images/benefit.png"
import publish from "../../assets/images/publish.png"
import youtube from "../../assets/images/youtube.png"

function Navbar1() {

    return (<div>
        <nav className="navbar1">
            <div id="navbar1Nav">
                <ul className="navbar1-nav">
                    <li>
                        <a>
                            <img src={services}></img>
                            <br />
                            <span class="chapternav-label">Service<br/>Request</span>
                        </a>
                    </li>
                    <li >
                        <a>
                            <img src={register}></img>
                            <br/>
                            <span class="chapternav-label">Register<br/>Your Product</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={demo}></img>
                            <br/>
                            <span class="chapternav-label"> Demo/<br/>Installation</span>
                        </a>
                    </li>
                    <li>
                        <a>
                            <img src={benefit}></img>
                            <br />
                            <span class="chapternav-label">Enquire About<br />Benefits</span>
                        </a>
                    </li>
                    <li >
                        <a >
                            <img src={publish}></img>
                            <br />
                            <span class="chapternav-label">See <br />Latest FAQ</span>
                        </a>
                    </li>
                    <li >
                        <a >
                            <img src={youtube}></img>
                            <br />
                            <span class="chapternav-label">Do It<br /> Yourself</span>
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}
export default Navbar1; 