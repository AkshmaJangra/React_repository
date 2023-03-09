import { Component } from 'react';

import React from 'react';

import logo from '../../assets/voltas--600.png';

import {
  Box,
  Container,
  Row,
  Column,
  FooterLink,
  Heading,
} from "./FooterStyles";

function toggleFooter(){
  if( document.getElementById('show-footer').style.display==='none'){
  document.getElementById('show-footer').style.display='block'}else{
    document.getElementById('show-footer').style.display='none'
  }
}


const Footer = () => {
  return (
    <Box>
      <div onClick={toggleFooter}
        style={{
          color: "green",
          textAlign: "center",
          marginTop: "-50px"
        }}>
        <a>Quick Access</a>

      </div>

      <Container id='show-footer' style={{display:'none'}}>
        <Row>
          <Column>
            <Heading>Call us at:</Heading>
              <a href="tel:18605994555">
                1860-599-4555
              </a>
              <a href="tel:9650694555">
                9650694555
              </a>
          </Column>
          <Column>
            <Heading>Products</Heading>
            <ul _ngcontent-gya-c79="">
               <li _ngcontent-gya-c79="">
                  <a
                    _ngcontent-gya-c79=""
                    href="https://www.myvoltas.com/inverter-ac/"
                    target="_blank"
                  >
                    Inverter AC
                  </a>
                </li>
                <li _ngcontent-gya-c79="">
                  <a
                    _ngcontent-gya-c79=""
                    href="https://www.myvoltas.com/air-conditioners/"
                    target="_blank"
                  >
                    Air Conditioners
                  </a>
                </li>
                <li _ngcontent-gya-c79="">
                  <a
                    _ngcontent-gya-c79=""
                    href="https://www.myvoltas.com/air-coolers/"
                    target="_blank"
                  >
                    Air Coolers
                  </a>
                </li>
                <li _ngcontent-gya-c79="">
                  <a
                    _ngcontent-gya-c79=""
                    href="https://www.myvoltas.com/commercial-refrigerators/"
                    target="_blank"
                  >
                    Commercial Refrigerators
                  </a>
                </li>
                <li _ngcontent-gya-c79="">
                  <a
                    _ngcontent-gya-c79=""
                    href="https://www.myvoltas.com/water-dispensers/"
                    target="_blank"
                  >
                    Water Dispensers
                  </a>
                </li>
              </ul>
           
          </Column>
          <Column>
           
            <div _ngcontent-gya-c79="" className="foot-menu">
              <Heading>About</Heading>
              <ul _ngcontent-gya-c79="">
                <li _ngcontent-gya-c79="">
                  <a
                    _ngcontent-gya-c79=""
                    href="https://www.myvoltas.com/about-us/"
                    target="_blank"
                  >
                    About Us
                  </a>
                </li>
                <li _ngcontent-gya-c79="">
                  <a
                    _ngcontent-gya-c79=""
                    href="https://www.myvoltas.com/brand-story/"
                    target="_blank"
                  >
                    Brand Story
                  </a>
                </li>
                <li _ngcontent-gya-c79="">
                  <a
                    _ngcontent-gya-c79=""
                    href="https://www.myvoltas.com/in-the-news/"
                    target="_blank"
                  >
                    In The News
                  </a>
                </li>
              </ul>
            </div>
          </Column>
          <Column>
          <div
            _ngcontent-gya-c79=""
            className="col-lg-3 col-md-3 col-sm-3 col-xs-12"
          >
            <div _ngcontent-gya-c79="" className="foot-menu">
              <h2 _ngcontent-gya-c79="">
                <a
                  _ngcontent-gya-c79=""
                  href="https://www.myvoltas.com/support/"
                  target="_blank"
                >
                  Contact Us
                </a>
              </h2>
              <ul _ngcontent-gya-c79="">
                {/**/}
                <li _ngcontent-gya-c79="">
                  <a
                    _ngcontent-gya-c79=""
                    href="https://www.myvoltas.com/store-locator/"
                    target="_blank"
                  >
                    Store Locator
                  </a>
                </li>
                {/**/}
                <li _ngcontent-gya-c79="">
                  <a
                    _ngcontent-gya-c79=""
                    href="https://www.myvoltas.com/faqs/"
                    target="_blank"
                  >
                    FAQs
                  </a>
                </li>
                {/**/}
                {/**/}
                <li _ngcontent-gya-c79="">
                  <a
                    _ngcontent-gya-c79=""
                    href="https://www.myvoltas.com/offers/"
                    target="_blank"
                  >
                    Offers
                  </a>
                </li>
                
                <li _ngcontent-gya-c79="">
                  <a _ngcontent-gya-c79="" style={{ cursor: "pointer" }}>
                    Manuals
                  </a>
                </li>
                {/**/}
              </ul>
            </div>
          </div>
        
          </Column>
        </Row>
        <div _ngcontent-gya-c79="" className="copy-right">
          {" "}
          Copyright © 2020 Voltas, Inc. All rights reserved. 
         <a
            _ngcontent-gya-c79=""
            href="https://www.myvoltas.com/privacy-policy"
            target="_blank"
          >
            Privacy Policy
          </a>
          
          <a
            _ngcontent-gya-c79=""
            href="https://www.myvoltas.com/e-waste-guidelines"
            target="_blank"
          >
            E-Waste Guidelines
          </a>{" "}
          |{" "}
          <a
            _ngcontent-gya-c79=""
            href="https://www.myvoltas.com/disclaimers"
            target="_blank"
          >
            Disclaimers
          </a>
        </div>
      
      </Container>
    </Box>
  );
};
export default Footer;