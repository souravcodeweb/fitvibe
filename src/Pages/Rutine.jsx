import React from 'react';
import "../Pages/Rutine.css";
import foods from "../assets/images/foods.png";
import { IoCheckmark } from "react-icons/io5";


const Rutine = () => {
  return (
    <div className="rutine">
        <div className="centerbox">
            <div className="cntertext">
                <div className="titel">
                    <h2>A Routine <br /> Tailored To You.</h2>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing. <br /> Lorem ipsum dolor sit amet.</p>
                    <div className="listmark">
                        <div className="checkmark">
                            <div className="dot dot1">
                                <span><IoCheckmark/></span>
                            </div>
                            <div className="name"><h4>Immunity</h4></div>
                            <div className="about"><p>Lorem, ipsum dolor.</p></div>
                        </div>


                        <div className="checkmark">
                            <div className="dot dot2">
                                <span><IoCheckmark/></span>
                            </div>
                            <div className="name"><h4>Bones</h4></div>
                            <div className="about"><p>Lorem, ipsum dolor.</p></div>
                        </div>


                        <div className="checkmark">
                            <div className="dot dot3">
                                <span><IoCheckmark/></span>
                            </div>
                            <div className="name"><h4>Heart</h4></div>
                            <div className="about"><p>Lorem, ipsum dolor.</p></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="centerimg">
                <img src={foods} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Rutine