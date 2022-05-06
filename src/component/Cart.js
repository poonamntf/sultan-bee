import React from "react";
import {  StarRounded } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

import { IoIosArrowBack } from "react-icons/io";
import AddMoreItem from "./CartMoreItems/AddMoreItem";
import HotBevrages from "./CartMoreItems/HotBevrages";
import RedBull from "./CartMoreItems/RedBull";
import SoftDrinks from "./CartMoreItems/SoftDrinks";
import WaterBottle from "./CartMoreItems/WaterBottle";
import Wine from "./CartMoreItems/Wine";

import Lade from "../images/hamburg.jpg";
import AddButton from "./AddButton";

const Cart = () => {
  const navigate = useNavigate();

  
 
 

  return (
    <>
      <div className="position-relative mb-5 pb-3">
        <div className="header h-50 text-white fw-bold d-flex">
          <IoIosArrowBack onClick={() => navigate(-1)} className="my-3 ms-3" />
          <p className="cart">Cart</p>
        </div>

        

        <div className="itemCard d-flex align-items-center my-3">
          <div className="imgBox me-1 ps-1">
            <img src={Lade} alt="" className="itemImg  " />
          </div>

          <div className="itemContent d-flex  justify-content-between flex-column w-100 ps-2 me-3">
            <div className="bottom d-flex justify-content-between align-items-center">
              <h3 className="itemName m-0">
                Burger Bistro{" "}
                <span>
                  <StarRounded className="mx-1 star mt-0 " />
                  4.2
                </span>
              </h3>
            </div>
            <h1 className="discription">
              Lorem ipsum dolor sit amet. Ut voluptatem enim eum ut.....
            </h1>
            <div className="bottom">
              <h3 className="price">
                <span>$ </span>
                119{" "}
                <span className="text-decoration-line-through text-black text-muted">
                  238
                </span>{" "}
                &nbsp; &nbsp;{" "}
                <span className="text-decoration-line-through me-5 ">
                  50% off
                </span>
              </h3>
            </div>
            {/* <Link to='/cart'> */}

            <AddButton />

            {/* </Link> */}
          </div>
        </div>
        
       
       <div className="extraItem">
        <AddMoreItem />
        <HotBevrages />
        <Wine />
        <SoftDrinks />
        <RedBull />
        <WaterBottle />
        </div>
        <button
          variant="primary"
          type="submit"
          className="checkOut text-center"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      
      </div>
    </>
  );
};

export default Cart;
