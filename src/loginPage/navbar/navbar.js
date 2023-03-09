import { Component } from 'react'
import './navbar.css'
import logo from '../../assets/voltas--600.png'
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Placeholder } from 'react-bootstrap';
function Navbar(){
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleOff = ()  => setShow(false);
  const handleSh = () => setShow(true); 
  return(<div><nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <img src={logo}></img>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item active">
            <a className="nav-link" onClick={handleShow}>
              Callback <span className="sr-only"></span>
            </a>
            <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Kindly Enter your Mobile Number</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <input
  _ngcontent-xvn-c87=""
  placeholder="Mobile Number"
  type="number"

  id="otpInput"
  onkeypress="return event.charCode>47 && event.charCode<58"
  appautofocus=""
  style={{ padding: "0px 5px 5px 24px", marginRight: 3 }}
 
/> </Modal.Body>
      <Modal.Footer>
       
        <Button variant="primary" onClick={handleClose}>
          OK
        </Button>
      </Modal.Footer>
    </Modal>
          </li>

           
           <li className="nav-item">
             <a className="nav-link" onClick={handleSh}> 
             Service Escalation
             <span className="sr-only"></span>
             </a> 
             <Modal show={show} onHide={handleOff}>
      <Modal.Header closeButton>
        <Modal.Title>Kindly enter your City or Pin code to know your Escalation Manager</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <input
  _ngcontent-xvn-c87=""
  placeholder="City"
  type="name"

  id="Name"
  onkeypress="return event.charCode>47 && event.charCode<58"
  appautofocus=""
  style={{ padding: "0px 5px 5px 24px", marginRight: 3 }}
 
/>
<input
  _ngcontent-xvn-c87=""
  placeholder="PinCode"
  type="number"

  id="otpInput"
  onkeypress="return event.charCode>47 && event.charCode<58"
  appautofocus=""
  style={{ padding: "0px 5px 5px 24px", marginRight: 3 }}
 
/> </Modal.Body>
      <Modal.Footer>
        {/* <Button variant="secondary" onClick={handleClose}>
          Close
        </Button> */}
        <Button variant="primary" onClick={handleOff}>
          Fetch
        </Button>
      </Modal.Footer>
    </Modal>
    
          </li> 
        </ul>
      </div>
    </nav>
    
    {/* */}
   
    
    </div>
    )
}
export default Navbar 