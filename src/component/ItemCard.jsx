import { AddRounded,  StarRounded } from "@mui/icons-material";
import React, { useState } from "react";
import { actionType } from "./Reducer";
import { useStateValue } from "./StateProvider";
import { Items } from "./Data";
import { useEffect } from "react";
import {  useNavigate } from "react-router";
import AddButton from "./AddButton";


// let cartItems = [];
// let cartData = [];
// let totaldata = [];

function ItemCard({ itemId, imgSrc, name, price, ratings, disc }) {
  const navigate = useNavigate();



  const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
  };


  const hideModal = () => {
    setShow(false);
  };
   

  // useEffect(() => {
  //   const toggleIcon = document.querySelector(".addToCart");
  //   toggleIcon.addEventListener("click", () => {
  //     document.querySelector(".rightmenu").classList.toggle("active");
  //   });

   
  // }, []);

  
  
  // const [{}, dispatch] = useStateValue();
  // const [isCart, setCart] = useState(null);
  

  // const [{ cart, total }] = useStateValue();

  // useEffect(() => {
  //   cartItems = cart;
  //   if (isCart) {
  //     cartData.push(isCart);
  //     dispatch({
  //       type: actionType.SET_CART,
  //       cart: cartData,
  //     });
  //   }
   
  // }, [isCart]);

  //console.log("cart ki quntity", cartData.length);

 
  

  return (
    <div className="itemCard d-flex align-items-center " id={itemId}>
      <div className="imgBox me-1 ps-1">
        <img src={imgSrc} alt="" className="itemImg  " />
      </div>

      <div className="itemContent d-flex  justify-content-between flex-column w-100 ps-2 me-3">
        <div className="bottom d-flex justify-content-between align-items-center">
          <h3 className="itemName m-0" id="toggleItem">
            {name}{" "}
            <span>
              <StarRounded className="mx-1 star mt-0 " />
              4.2
            </span>
          </h3>
        </div>
        <h1 className="discription">{disc}</h1>
        <div className="bottom">
          <h3 className="price">
            <span>$ </span>
            {price}{" "}
            <span className="text-decoration-line-through text-black text-muted">
              238
            </span>{" "}
            &nbsp; &nbsp;{" "}
            <span className="text-decoration-line-through me-5 ">50% off</span>
          </h3>
        </div>
        {/* <Link to='/cart'> */}

       
        <AddButton  />

        {/* </Link> */}
      </div>

     
     

    </div>
  );
}

export default ItemCard;

