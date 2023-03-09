import Navbar from "./navbar/navbar";
import Body from "./Body/Body";
import Footer from "./Footer/Footer";
import React from "react";

function LoginPage(){
    return(
    <div>
    <React.Fragment>
    <Navbar></Navbar>
    
   <Body />
    
    <Footer></Footer> 
    </React.Fragment>
    </div>
    );
}
export default LoginPage
