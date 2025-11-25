import React from 'react'
import './profile.css'
import img2 from '../../assets/mob-2.jpg'
import spotify from '../../assets/spotify.svg'
import netflix from '../../assets/netflix.svg'
import playlist from '../../assets/playlist.jpg'

const Profile = () => {
  return (
    <div className='pro-container'>
      <div className='pro-left-div'>
        {/* <div>
          <div>
            <img src={spotify} alt="" />
          </div>
          <div className='spo'>
            <h1>Spotify</h1>
            <p>14 common song &#9829;</p>
          </div>
          </div> */}

          <div id='playlist'>
           <div >
              <img src={playlist} alt="" />
              <h1>spotify</h1>
            </div>
          </div>
      </div>

      <div>
        <div className='pro-top-div'>
            <h1>Chat & Yamo Smart Match</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, hic.</p>
        </div>
        <div className='pro-bottom-div'>
            <img src={img2} alt="" />
        </div>
      </div>

      <div className='pro-right-div'>
          <div>
            <img src={netflix} alt="" />
          </div>
          <div className='net'>
            <h1>Netflix</h1>
            <p>4 common movies &#9829;</p>
          </div>
      </div>
      
    </div>
  )
}

export default Profile
