
import React from "react";
import "./profile.css";
import img2 from "../../assets/mob-2.jpg";
import spotify from "../../assets/spotify.svg";
import netflix from "../../assets/netflix.svg";
import playlist from "../../assets/playlist.jpg";
import netflixx from "../../assets/netflixx.jpg"
import { BiBrightness } from "react-icons/bi";

const Profile = () => {
  return (
    < 
    >
      <div className="pro-top-div" id="about">
        <h1>Chat & Yamo Smart Match</h1>
        <p>
          AI-powered matches. Real-world chemistry
        </p>
      </div>
      <div className="pro-container">
        <div className="pro-left-div">
          
          <div id="playlist">
            <div style={{ display: "flex" }}>
              <img
                style={{ position: "absolute", filter: `brightness(50%)`,height:"500px", marginTop:"0",width:"350px",marginLeft:"10px" }}
                src={playlist}
                alt=""
              />
              
              <h1
                style={{
                  zIndex: 1,
                  width: "20vw",
                  color: "white",
                  textAlign: "center",
                  
                  marginTop: "150px",
                  marginLeft:"10px",
                  fontSize:"45px"
                }}
              >
                Spotify
                <p style={{fontSize:"25px",fontWeight:"100",marginTop:"10px"}}>14 Common Songs &#9829;</p>
              </h1>
              
            </div>
          </div>
        </div>

        <div>
          <div className="pro-bottom-div">
            <img style={{ zIndex: -10 }} src={img2} alt="" />
          </div>
        </div>

        <div className="pro-right-div">
          <div id="playlist">
            <div style={{ display: "flex" }}>
              <img
                style={{ position: "absolute", filter: `brightness(40%)`,height:"500px", marginTop:"0",width:"350px" ,borderRadius:"20px"}}
                src={netflixx}
                alt=""
              />
              <h1
                style={{
                  zIndex: 1,
                  width: "20vw",
                  color: "white",
                  textAlign: "center",
                  marginTop: "150px",
                  marginLeft:"10px",
                  fontSize:"45px"
                }}
              >
                Netflix
                <p style={{fontSize:"25px",fontWeight:"100",marginTop:"10px"}}>4 Common movies &#9829;</p>
              </h1>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Profile;
