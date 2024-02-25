import React from 'react';
import "../Pages/Review.css";
import { HiOutlineArrowNarrowRight } from "react-icons/hi";

const Review = () => {
  return (
    <div className="review">
        <div className="hed">
            <h2>Pure Vit-is Better At <br /> Restoring Cellular Health</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing. <br /> Lorem ipsum dolor sit amet.</p>
        </div>

        <div className="reviewbox">
            <div className="rbox frist">
                <h1>40+</h1>
                <h2>More cellular <br /> benefits</h2>
                <p>Nutrients, your liver function, and <br />
                Nutrients, your liver function, and  <br /> 
                Nutrients, your liver function, and  </p>
            </div>
            <div className="rbox center">
                <h1>60+</h1>
                <h2>More cell types <br /> repaired.</h2>
                <p>Nutrients, your liver function, and <br />
                Nutrients, your liver function, and  <br /> 
                Nutrients, your liver function, and  </p>
            </div>
            <div className="rbox last">
                <h1>40+</h1>
                <h2>More ecll types <br /> Protected</h2>
                <p>Nutrients, your liver function, and <br />
                Nutrients, your liver function, and  <br /> 
                Nutrients, your liver function, and  </p>
            </div>
        </div>

        <div className="rbtn">
            <button>Know More <HiOutlineArrowNarrowRight/> </button>
        </div>
    </div>
  )
}

export default Review