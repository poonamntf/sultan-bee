import React, { useEffect, useState } from "react";
import {
 
  KeyboardArrowLeftOutlined,
  KeyboardArrowRightOutlined,
} from "@mui/icons-material";
import { MenuItems, vegItems, Items, Hotel, vegitable } from "./Data";
import ItemCard from "./ItemCard";
import CartItem from "./CartItem";
import { useStateValue } from "./StateProvider";
import VegitableCard from "./VegitableCard";
import VegCard from "./VegCard";
import "react-multi-carousel/lib/styles.css";
import hotellogo from "../images/hotel.png";
import { actionType } from "./Reducer";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const HotelFood = () => {
  useEffect(() => {
    const toggleIcons =[...document.getElementsByClassName("itemName")];
    toggleIcons.map(toggleIcon=> toggleIcon.addEventListener("click", () => {
      document.querySelector(".rightMenu").classList.toggle("active");
    }))

    
   
  }, []);


  const navigate = useNavigate();
  const [isMainData, setMainData] = useState(
    Items.filter((element) => element.itemId == "buger01")
  );

  const [isVegData, setVegData] = useState(
    Hotel.filter((element) => element.itemId == "burger01")
  );


  const [{ cart, total }, dispatch] = useStateValue();

  console.log("poonamvarsha", total);

  const setData = (itemId) => {
    setVegData(Hotel.filter((element) => element.itemId == itemId));
  };
 
  return (
    <>
      {/* Header section */}
      {/* <Header /> */}
      <div className="main position-relative">
        <div className="hoteldetails">
          
            <div className="hotelLogo position-relative">
              <img src={hotellogo} alt="hotellogo "  />

              <div className="hotelmenu p-3 position-absolute top-0 start-0 end-0  text-center d-flex flex-column">
              <div className="hotelarrow text-start mb-2">
              <KeyboardArrowLeftOutlined onClick={() => navigate(-1)} />
            </div>

                <div className="rightVegMenuContainer d-flex align-items-center  p-1">
                  <div className="rowVegMenuCard d-flex flex-column align-items-center justify-content-around shadow  w-50 me-2 mt-1">
                    <h3 className=" me-1">Menu</h3>
                  </div>

                  <div className="shadow rowVegMenuCard d-flex flex-column align-items-center justify-content-around shadow  w-50 me-2 mt-1">
                    <h3>Papolares</h3>
                  </div>
                  <div className="shadow rowVegMenuCard d-flex flex-column align-items-center justify-content-around shadow  w-50 me-2 mt-1">
                    <h3>Todoterreno</h3>
                  </div>
                  <div className="shadow rowVegMenuCard d-flex flex-column align-items-center justify-content-around shadow  w-50 me-2 mt-1">
                    <h3>Conduct</h3>
                  </div>
                </div>

                <div className="text-white  position-absolute text-center">
                <h5 className=" text-orange ">La'De Kitchen</h5>
                <span className="text-orange  ">
                  See more information{" "}
                </span>{" "}
                <span className="rightaerrow ">
                  <KeyboardArrowRightOutlined />
                </span>
              </div>
              </div>

             
            </div>
         

       

          <div className="hotelpara">
            <p>
              "La'De kitchen Ea voluptate doloremque et repellendus ducimus et
              dolore amet quo sequi error non numquam quas non aliquid
              voluptate. Ut vitae dolor ab quis accusantium eum earum dolores et
              quibusdam quibusdam aut eius fugiat quo corrupti amet At illo
              eaque! Est error consequuntur eum sunt quam et velit enim. Est
              cumque tempora quo dicta nemo et inventore velit et nulla delectus
              ut enim veritatis aut molestiae maxime et laborum quaerat".
            </p>
          </div>
        </div>

    
        <div className="dishItemContainer d-flex justify-content-around align-items-center flex-wrap">
          {isMainData &&
            isMainData.map((data) => (
              <ItemCard
                key={data.id}
                itemId={data.id}
                imgSrc={data.imgSrc}
                disc={data.disc}
                name={data.name}
                ratings={data.ratings}
                price={data.price}
              />
            ))}
        </div>
        <button
          className="checkOut text-center"
          onClick={() => {
            navigate("/viewmore");
          }}
        >
          View More
        </button>

       
        <div className="rightMenu ">
       
          <Container>
            <h6> Delivery Option</h6>
            <div className="vegContainer d-flex align-items-center my-2 p-2">
              {vegItems &&
                vegItems.map((data) => (
                  <div key={data.id} onClick={() => setData(data.itemId)}>
                    <VegCard
                      imgSrc={data.imgSrc}
                      name={data.name}
                      isActive={data.id == "1" ? true : false}
                    />
                  </div>
                ))}
            </div>

            <div className="rightSumMenu">
              <Container>
                <div className="rightVegMenuContainer d-flex align-items-center  p-1">
                  <div className="rowVegMenuCard d-flex flex-column align-items-center justify-content-around shadow-sm  w-50 me-2 mt-1">
                    <h3>Vegitable</h3>
                  </div>
                  <div className="rowVegMenuCard d-flex flex-column align-items-center justify-content-around shadow-sm  w-50 me-2 mt-1">
                    <h3>Meat</h3>
                  </div>
                  <div className="rowVegMenuCard d-flex flex-column align-items-center justify-content-around shadow-sm  w-50 me-2 mt-1">
                    <h3>Sauce</h3>
                  </div>
                  <div className="rowVegMenuCard d-flex flex-column align-items-center justify-content-around shadow-sm  w-50 me-2 mt-1">
                    <h3>Topper</h3>
                  </div>
                </div>
              </Container>
              <div className="vegitableContainer ">
                {vegitable &&
                  vegitable.map((data) => (
                    <VegitableCard
                      key={data.id}
                      itemId={data.id}
                      imgSrc={data.imgSrc}
                      name={data.name}
                      price={data.price}
                    />
                  ))}
              </div>

              <button
                className="vegitableCheckOut text-center"
                onClick={() => {
                  navigate("/cart");
                }}
              >
                View More
              </button>
            </div>
          </Container>
        
        </div>

        {/* 
{!cart ? (
            <div className="addSomeItem">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/food-delivery-37c59.appspot.com/o/Images%2FemptyCart.png?alt=media&token=50b733d4-cdd9-4025-bffe-8efa4066ca24"
                alt=""
                className="emptyCart"
              />
            </div>
          ) : (
            <div className="cartCheckOutContianer">
              <div className="cartContainer">
                 <SubMenuContainer /> 

                <div className="cartItems">
                  {cart &&
                    cart.map((data) => (
                      <CartItem
                        key={data.id}
                        itemId={data.id}
                        name={data.name}
                        imgSrc={data.imgSrc}
                        qty={"4"}
                        price={data.price}
                      />
                    ))}
                </div>
              </div>
              <div className="totalSection">
                <h3>Total</h3>
                <p>
                  <span>$ </span> {total}
                </p>
              </div>
              <button className="checkOut">Checkout</button>
            </div>


          )} */}
      </div>
    </>
  );
};

export default HotelFood;
