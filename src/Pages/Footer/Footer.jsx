import React from 'react'
import './footer.css'
import foo from '../../assets/footer-1.jpg'
import fot2 from '../../assets/fot-2.jpg'

const Footer = () => {
  return (
    <div className='footer' id='contact'>
      <div id='fot'>
        <img src={foo} alt="" />
      </div>
      <div className='bottom-footer'>
        <div >
            <div className='heading'>
                <h1>Reviews from users</h1>
                <p>best some profile i find near you create account & start dating within them</p>
            </div>
            

            <div className='bottom-footer-2'>
                <div>
                    <img src={fot2} alt="" />
                </div>
                <div className='person'>
                    <h2>Bella Sangwan</h2>
                    <h3>Africa</h3>
                    <p>"I tried a few dating apps before, but nothing felt real. Here, the matches actually made sense — no random swipes or forced conversations. I met someone who understands me, respects my boundaries, and makes me laugh every day. For the first time, dating feels exciting, not exhausting.".</p>
                </div>
                <div className='data'>
                    <div>
                    <h2>15k + </h2>
                    <p>dates and matches everyday</p>
                    </div>
                    <div>
                    <h2>1458</h2>
                    <p>new member sign up everyday </p>
                    </div>
                    <div>
                    <h2>30k +</h2>
                    <p>Member from around the world</p>
                    </div>
                </div>
            </div>

        </div>
        <div>

        </div>
      </div>
    </div>
  )
}

export default Footer
