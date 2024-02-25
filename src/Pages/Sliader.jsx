import React, { useState } from "react";
import "../Pages/Sliader.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import Cheeseburger from "../assets/images/Cheeseburger.png";
import CaesarSalad from "../assets/images/CaesarSalad.png";
import MargheritaPizza from "../assets/images/MargheritaPizza.png";
import ChickenAlfredoPasta from "../assets/images/ChickenAlfredoPasta.png";
import Sushi from "../assets/images/Sushi.png";
import Grilled from "../assets/images/Grilled.png";

const Sliader = () => {
  const products = [
    { image: CaesarSalad, name: "Caesar Salad", price: "$10.49" },
    { image: Cheeseburger, name: "Cheeseburger", price: "$8.99" },
    { image: MargheritaPizza, name: "Margherita Pizza", price: "$12.99" },
    { image: ChickenAlfredoPasta, name: "Chicken Alfredo Pasta", price: "$14.99" },
    { image: Sushi, name: "Sushi Platter (Assorted)", price: "$18.99" },
    { image: Grilled, name: "Grilled Salmon", price: "$16.99" },
    { image: CaesarSalad, name: "Caesar Salad", price: "$10.49" },
    { image: Cheeseburger, name: "Cheeseburger", price: "$8.99" },
    { image: MargheritaPizza, name: "Margherita Pizza", price: "$12.99" },
    { image: ChickenAlfredoPasta, name: "Chicken Alfredo Pasta", price: "$14.99" },
    { image: Sushi, name: "Sushi Platter (Assorted)", price: "$18.99" },
    { image: Grilled, name: "Grilled Salmon", price: "$16.99" },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const endIndex = startIndex + 5;

  const nextSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex + 5 >= products.length ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 5 : prevIndex - 1
    );
  };

  const visibleProducts = products.slice(startIndex, endIndex);

  return (
    <div className="slider">
      <div className="hed">
        <h1>Just Arrived</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Harum, quam!{" "}
          <br /> Lorem ipsum dolor sit amet consectetur adipisicing.
        </p>
      </div>

      <div className="products">
        {visibleProducts.map((product, index) => (
          <div key={index} className={`box`}>
            <div className={`broder ${index % 3 === 0 ? "one" : index % 3 === 1 ? "two" : "three"}`}>
              <img src={product.image} alt="" />
            </div>
            <h4>{product.name}</h4>
            <span>{product.price}</span>
          </div>
        ))}
      </div>

      <div className="btn">
        <button onClick={prevSlide}><GrFormPrevious /></button>
        <button onClick={nextSlide}><MdOutlineNavigateNext /></button>
      </div>
    </div>
  );
};

export default Sliader;
