import React from 'react'
import BottomMenu from "./Header/BottomMenu";
import Scan1 from "/home/ntf-310/Desktop/sultan-bee/src/images/Layer 1.png"

const Scan = () => {
  return (
    <div className="scanMain  vh-100  text-white">
         <p className="text-center fw-bold pt-4">Scan</p>
        <div className="scanimage text-center mt-5 pt-5 ">
        <img src={Scan1} alt=""  />
        </div>
      
        <BottomMenu />
    </div>
  )
}

export default Scan