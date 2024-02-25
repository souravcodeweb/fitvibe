import React from 'react';
import "../Pages/Provide.css";
import { LuTreePine } from "react-icons/lu";
import { FcSalesPerformance } from "react-icons/fc";
import { TbTie } from "react-icons/tb";

const Provide = () => {
  return (
    <div className="provide">
        <div className="phed">
            <h1>We Provide Best <br /> healthyfoods</h1>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing <br /> Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="multibox">
            <div className="pbox">
                <div className="ig">
                    <span><TbTie/></span>
                    <h2>Preven</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos officiis dolorem inventore! Aliquam, quisquam!</p>
                </div>
                <div className="titel"></div>
                <div className="dis"></div>
            </div>
            <div className="pbox">
                <div className="ig">
                    <span><LuTreePine/></span>
                    <h2>Natural</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos officiis dolorem inventore! Aliquam, quisquam!</p>
                </div>
            </div>
            <div className="pbox">
                <div className="ig">
                <span><FcSalesPerformance/></span>
                <h2>Performance</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem eos officiis dolorem inventore! Aliquam, quisquam!</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Provide