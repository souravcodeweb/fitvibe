import React from 'react';
import "../Pages/Home.css";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import Sliader from './Sliader';
import Provide from './Provide';
import Rutine from './Rutine';
import Review from './Review';
import Bottom from './Bottom';

const Home = () => {
  return (
    <>
    <div className="home">
      <div className="btext">
        <h1>Take Health Into Your <br /> Own Hands</h1>
      </div>
      <div className="stext">
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit amet</p>
      </div>
      <div className="btn">
        <button className='know'>Know More</button>
        <button className='hover'>All Products</button>
      </div>
      <div className="bottom_img">
        <div className="box">
          <img src={img1} alt="" />
        </div>
        <div className="box">
          <img src={img3} alt="" />
        </div>
        <div className="box">
          <img src={img2} alt="" />
        </div>
      </div>

      <div className="bottomimgmobile">
        <div className="box"></div>
      </div>
    </div>


    <Sliader/>
    <Provide/>
    <Rutine/>
    <Review/>
    <Bottom/>
    </>
  )
}

export default Home