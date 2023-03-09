import React, { Component, useState } from 'react'
import './Body.css';


import slider1 from '../../assets/slider1.png';
import slider2 from '../../assets/slider2.png';
import slider3 from '../../assets/slider3.png';
import slider4 from '../../assets/slider4.png';
import slider5 from '../../assets/slider5.png';

import BackgroundSlider from 'react-background-slider'
import { useNavigate } from 'react-router-dom'

function Body() {
  const [Button, setButton] = useState(true);
  const navigate = useNavigate();

  const otpEntered = () => {

  }
  const requestOtp = () => {
    setButton(false);
  }
  const verifyClicked = () => {
    navigate('/Dashboard');
  }
  return (
    <React.Fragment>
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={slider1} className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider2} className="d-block w-100 h-100 " alt="..." />
          </div>
          <div className="carousel-item">
            <img src={slider3} className="d-block w-100 h-100 " alt="..." />
          </div>
          <div className="carousel-item active">
            <img src={slider4} className="d-block w-100 h-100" alt="..." />
          </div>
          <div className="carousel-item active">
            <img src={slider5} className="d-block w-100 h-100" alt="..." />
          </div>
        </div>
        {/* <button className="carousel-control-prev" type="button" data-bs-target="#carouslExampleControls" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button> */}
     
      <div className='carousel-caption d-block'>
        <div className='heading'><h3>Welcome to</h3>
          <h1>Voltas Selfcare Portal</h1><br></br>
          <h3>Please identify yourself with <br></br> your Registered Mobile Number</h3>
          <div className="request-otp">
            <input

              placeholder="Number"
              type="number"
              id="otpInput"
              //  onkeypress="return event.charCode>47 && event.charCode<58"
              style={{ padding: "5px 5px 6px 24px", marginRight: 3 }}
            // className="ng-pristine ng-valid ng-touched"
            />


            {!Button ?
              <div className="col form-ouyline mb-4">
                <input type="number" onChange={otpEntered} id="form3Example3" className="form-control form-control-lg" placeholder="OTP" />
              </div> : null}
            {Button ?
              <div className="col form-outline mb-4">
                <button onClick={requestOtp} className="btn btn-primary button-otp">Request OTP</button>
              </div> : <div className='cal form-outline mb-4'>
                <button onClick={verifyClicked} className='btn btn-primary button-otp'>Verify</button>
              </div>}
              </div>
          </div>
        </div>
      </div>


    </React.Fragment>
  );
}
export default Body;