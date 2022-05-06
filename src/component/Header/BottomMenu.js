import React, { useEffect } from 'react'
import MenuContainer from "../MenuContainer";
import {
    History,
    LocationOn,
    MoreVert,
    QrCodeScanner,
    Settings,
  } from "@mui/icons-material";
import { useNavigate } from 'react-router';
const BottomMenu = () => {
  const navigate = useNavigate();
    useEffect(()=>{
        const menuLi = document.querySelectorAll("#menu li");

        function setMenuActive() {
          menuLi.forEach((n) => n.classList.remove("active"));
          this.classList.add("active");
        }
    
        menuLi.forEach((n) => n.addEventListener("click", setMenuActive));

    },[])
  return (
    <>
    
    <div className="leftMenu position-fixed bottom-0 start-0 w-100 shadow ">
        <ul id="menu" className='d-flex justify-content-around px-1 '>
          {/* prettier-ignore */}
          <div className='leftmenucompo'>
          <MenuContainer link = {'#'} icon = {<LocationOn onClick={() => navigate("/hotel-location")} />} text={" map/list"} isHome/>
         
          </div>
         
          {/* prettier-ignore */}
          <div className='leftmenucompo'>
          <MenuContainer link = {'#'} icon = {<Settings  />} text={" Details"}  />
          
          </div>
        
          {/* prettier-ignore */}
          <div className='leftmenucompo'>
          <MenuContainer link = {'#'} icon = {<QrCodeScanner onClick={() => navigate("/scan")} />} text={" Scan"} />
          
          </div>
          
          {/* prettier-ignore */}
          <div className='leftmenucompo'>
          <MenuContainer link = {'#'} icon = {<History onClick={() => navigate("/history")} />} text={"History"}   />
        
          </div>
         
          {/* prettier-ignore */}
          <div className='leftmenucompo'>
          <MenuContainer link = {'#'} icon = {<MoreVert onClick={() => navigate("/hotel")} />} text={" More"} />
          
          </div>
          
          {/* prettier-ignore */}
{/*         
          <div className="indicator"></div> */}
        </ul>
      </div>
    </>
  )
}

export default BottomMenu