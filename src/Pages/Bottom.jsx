import React from 'react';
import "../Pages/Bottom.css";
import img from "../assets/images/ChickenAlfredoPasta.png";

const Bottom = () => {
  return (
    <div className="bottom">
        <div className="fristbottom">
            <div className="fristtext">
                <h2>See What Makes One <br /> Medical Different</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.
                <br /> Lorem ipsum dolor sit amet consectetur.
                <br /> Lorem, ipsum.</p>

                <p>Lorem ipsum dolor sit amet consectetur adipisicing.
                <br /> Lorem ipsum dolor sit amet consectetur. <br />
                Lorem ipsum dolor sit amet consectetur.
                <br /> Lorem, ipsum dolor.</p>

                <button>Shop Now</button>
            </div>
            <div className="fristimg">
                <div className="fimg">
                    <img src={img} alt="" />
                </div>
            </div>
        </div>


        <div className="sub">
            <h1>Ready To Get Started?</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Lorem ipsum dolor sit.</p>

            <div className="inubtn">
                <input type="text" placeholder='Enter your Mail'/>
                <button>Subscribe</button>
            </div>
        </div>
    </div>
  )
}

export default Bottom