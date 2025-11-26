import React from 'react'
import './navbar.css'
import { FaApple } from "react-icons/fa";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { GiBrokenHeartZone } from "react-icons/gi";

const Navbar = () => {
  return (
     <div className='navbar'>
      <nav >
        <div className='logo'>
            <img src="https://www.svgrepo.com/show/247087/heart.svg" alt="" style={{height:"50px",width:"50px"}} />
            <b>HeartSync</b></div>
        <div className='list'>
          <ul>
            {/* <li> <a className='linkText' >Home</a></li> */}
            <li> <a className='linkText' href="#home">Home</a></li>
            {/* <li><a className='linkText' >Features</a></li> */}
            <li> <a className='linkText' href="#features">Features</a></li>
            {/* <li><a className='linkText' >About</a></li> */}
            <li> <a className='linkText' href="#about">About</a></li>
            {/* <li><a className='linkText' >Contact</a></li> */}
            <li> <a className='linkText' href="#contact">Contact</a></li>
           
          </ul>
        </div>
        <div className='nav-btn'>
          <button type='button'><h3>Get App</h3>
            <div className='app'>
              <FaApple /> 
              <  IoLogoGooglePlaystore />
            </div>
            
            </button>
          

        </div>
      </nav>
    </div>
  )
}

export default Navbar
