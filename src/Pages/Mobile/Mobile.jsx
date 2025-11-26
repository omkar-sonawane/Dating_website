import React from 'react'
import './mobile.css'
import mob from "../../assets/mobile.jpg"
import svg1 from '../../assets/svg-1.svg'
import svg2 from '../../assets/svg-2.svg'
import svg3 from '../../assets/svg-3.svg'


const Mobile = () => {
  return (
    <div className='mobile' id='features'>

      <div className='left'>
        <img src="https://plus.unsplash.com/premium_vector-1731400282546-65b1b0ff1a90?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8ZGF0aW5nfGVufDB8fDB8fHww" alt="" />
      </div>

    <div className='right'>

        

    <div className='left-span'>
        <h1>How it Works</h1>
        <div id='span-1'>
            <img src={svg1} alt="" />
            <h2>Dating with Benefits</h2>
            <p>It means connecting with people who share your vibe, energy, and goals.</p>
        </div>
    </div>

    <div className='right-span'>  
        <div id='span-2'>
            <img src={svg2} alt="" />
            <h2>Ideal Relationship</h2>
            <p>It’s real. It’s where communication feels effortless, respect is mutual, and love grows naturally.</p>
        </div>
        <div id='span-3'>
            <img src={svg3} alt="" />
            <h2>Date Beautiful peoples</h2>
            <p>inside and out. Our smart matching helps you connect with individuals who value confidence, kindness, and chemistry.</p>
        </div>
    </div>      
        
      </div>
    </div>
  )
}

export default Mobile
