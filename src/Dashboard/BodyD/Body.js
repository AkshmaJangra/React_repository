import React, { Component, useState } from 'react';
import './BodyD.css';
import product1 from "../../assets/images/product1.png";
import beko from "../../assets/images/beko-banner-1.jpg";
import box1 from "../../assets/box1.webp";
import box2 from "../../assets/box2.webp";
import box3 from "../../assets/box3.webp";
import box4 from "../../assets/box4.webp";
import box5 from "../../assets/box5.webp";
import box6 from "../../assets/box6.webp";


function Body() {

    {
        return (
            <div className='Container1' >
                <div className='Heading1'>
                    <h6>Hello , Welcome to </h6>
                    <h4>Voltas Selfcare Portal</h4>
                </div>

                <div className='Container2'>
                    <h1>Air <br /> Conditioners</h1>
                    <img src={product1}></img>
                </div>

                <div className='Container3'>
                    <h2>Washing <br></br>Machines</h2>
                    <p>5 Star Fully Automatic<br /> And Semi Automatic Washing Washing Machines</p>
                    <img src={beko}></img>
                </div>

                <div className='Container4'>
                    <div className='Box1'>
                    <img src={box1}></img>
                    </div>
                    <div className='Box2'>
                    <img src={box2}></img>
                    </div>
                    <div className='Box3'>
                    <img src={box3}></img>
                    </div>
                </div>
                <div className='Container5'>
                    <div className='Box4'>
                    <img src={box4}></img>
                    </div>
                    <div className='Box5'>
                    <img src={box5}></img>
                    </div>
                    <div className='Box6'>
                    <img src={box6}></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default Body;
