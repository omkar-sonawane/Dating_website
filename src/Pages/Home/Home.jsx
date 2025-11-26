import React from 'react'
import './home.css'
import img from '../../assets/home.png'
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaWhatsappSquare } from "react-icons/fa";
import pro1 from '../../assets/Pro-1.svg'
import pro2 from '../../assets/Pro-2.svg'

const Home = () => {
  return (
    <div className='home-container' id='home'>
      <div className='upper-div'>
        <div className='upper-left'>
            <h1>When you would like to go on a Dating ?</h1>
            <p>Application Aimed at singles looking for a relationship </p>
        </div>
        <div className='upper-right'>
            <div className='upper-right-1'><h2>8.6 M</h2></div>
            <div className='upper-right-2'>
                <div className='div'>
                    <div>
                      <img src={pro1} alt="" />
                    </div> 
                    <div>
                      <img src={pro2} alt="" />
                    </div>
                    
                </div>

                <div> <p>there are 8.6 million user in the worldeveryone is happy with our service</p></div>

            </div>
        </div>
      </div>
      <div className='bottom-div'>
            <div className='bottom-div-left'>
              <div><FaInstagramSquare /></div>
                <div><FaFacebook /> </div>
                <div> <FaWhatsappSquare /></div>
                <div> <FaTwitterSquare /></div>
            </div>
            <div className='bottom-div-right'>
                <img src={img} alt="" />
            </div>
      </div>
    </div>
  )
}

export default Home
