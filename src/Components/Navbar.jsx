
import React from 'react';
import "../Components/Navbar.css";
import { BiMenuAltLeft } from "react-icons/bi";
import { IoSearch } from "react-icons/io5";
import { BsFillBagFill } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav>
        <div className="menu">
            <button><BiMenuAltLeft/></button>
        </div>
        <div className="logo">
            <span>fitvibe</span>
        </div>
        <div className="item">
            <button className='search'><IoSearch/></button>
            <button className='bag'><BsFillBagFill/></button>
        </div>
    </nav>
  )
}

export default Navbar