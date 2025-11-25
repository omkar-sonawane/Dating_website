import React from 'react'
import './navbar.css'
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";

const Navbar = () => {
  return (
     <div className='navbar'>
      <nav >
        <div className='logo'>Dating App</div>
        <div className='list'>
          <ul>
            <li> <a className='linkText' >Home</a></li>
            <li><a className='linkText' >Features</a></li>
            <li><a className='linkText' >About</a></li>
            <li><a className='linkText' >Contact</a></li>
           
          </ul>
        </div>
        <div className='nav-btn'>
          <button type='button'>Get App <FaApple /> <IoLogoGooglePlaystore /></button>

        </div>
      </nav>
    </div>
  )
}

export default Navbar
