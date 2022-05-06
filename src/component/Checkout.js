import React, { useEffect, useState } from 'react'
import { AddRounded, RemoveRounded, StarRounded } from "@mui/icons-material";

import { useNavigate } from "react-router-dom";
import { actionType } from "./Reducer";
import { useStateValue } from "./StateProvider";
import { Link } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import Collapsible from "react-collapsible";
import { BiChevronDown, BiChevronUp } from "react-icons/bi";
import { Button } from 'react-bootstrap';
import swal from 'sweetalert';
import Lade from "../images/hamburg.jpg";
//import Button1 from "./Button"


const Checkout = () => {
  const navigate = useNavigate();
  const [text, setText] = useState(false);
  //const [showSecondFields, setShowSecondFields] = useState(true);
  

 

  const orderConfirm = () => {
    const el = document.createElement('div')
    el.innerHTML = "<a href='http://google.com'>View invoice</a>"
    swal({
      title: "Order Confirmed",
      text: "Your product will get to you soon.",
      content: el,
      icon: "success",
    }).then(() => {
      navigate('/history');
    });
  }

  return (
    <>
      <div className='main_div position-relative'>
        <div className="header h-50 text-white fw-bold d-flex">
          <IoIosArrowBack onClick={() => navigate(-1)}
            className="my-3 ms-3"
          />
          <p className='checkout'>Checkout</p>
        </div>

        <div className='mx-xl-5 px-xl-5'>
          <div className='items_of_cart h-50 mx-xl-5 px-xl-5'>
            <p className='fw-bold m-3 text-capitalize'>Items in cart</p>
            <div className='item_list'>
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

                  {/* {showSecondFields ? (
                    <div
                      className="addToCart"
                      onClick={() => {
                        // setCart(Items.find((n) => n.id === itemId));
                        setShowSecondFields(false);
                        // setCart(Items.find((n) => n.id === itemId))
                        // navigate("/cart")
                      }}
                    >
                      Add
                      <AddRounded />
                    </div>
                  ) : (
                    <Button1/>
                  )} */}

                  {/* </Link> */}
                </div>
              </div>

            </div>
          </div>

          <div className='delivery_option mx-xl-5 px-xl-5'>
            <p className='fw-bold mt-3 mx-3 mb-2'>Delivery Options</p>
            <div className='option_list ms-3 fw-bold position-relative'>
              Eat In
              <input type="radio" value="Eat In" name="options" className='my-1 position-absolute end-0' /><br />
              Eat In With Self Service
              <input type="radio" value="Self Service" name="options" className='my-1 position-absolute end-0' /><br />
              Packed for Home Delivery
              <input type="radio" value="Home delivery" name="options" className='my-1 position-absolute end-0' /><br />
            </div>

            <div className='option_accordion'>
              {text == true ? (
                <p className="text_true fw-bold mt-3 mx-3 mb-2">Home Delivery</p>
              ) : (
                <p className="text_false fw-bold mt-3 mx-3 mb-2">Home Delivery</p>
              )}
              <Collapsible
                trigger={<BiChevronDown onClick={() => setText(true)} className="position-absolute end-0" />}
                triggerWhenOpen={
                  <BiChevronUp
                    onClick={() => setText(false)}
                    style={{ color: "rgb(243, 142, 10)" }}
                    className="arrow_up position-absolute end-0"
                  />
                }
                className="position-relative"
              >
                <div className="options fw-bold position-relative">
                  Eat In
                  <input type="radio" value="Eat In" name="home-deliver" className='my-1 position-absolute end-0' />
                </div>
                <div className="option fw-bold mb-2 position-relative">
                  Eat In With Self Service
                  <input type="radio" value="Self Service" name="home-deliver" className='my-1 position-absolute end-0' />
                </div>
              </Collapsible>
            </div>

            <div className='payment_option'>
              <p className='fw-bold mt-3 mx-3 mb-2'>Pay Option</p>
              <div className='option_list ms-3 position-relative'>
                Cash  <input type="radio" value="Cash" name="pay-option" className='position-absolute end-0' /><br />
                Card  <input type="radio" value="Card" name="pay-option" className='position-absolute end-0' />
              </div>
            </div>
          </div>

          <div className='order_details ms-3 mt-2 mx-xl-5 px-xl-5'>
            <p className='mb-0 mx-xl-3'>Delivery in : <span className='fw-bold text-dark'>20-40min</span></p>
            <p className='mb-0 mx-xl-3'>Delivery Fee :<span className='fw-bold text-dark'> $5.138</span></p>
            <p className='mb-0 mx-xl-3'>Average rating :<span className='fw-bold text-dark'> 4.2 </span>
              <Link to="#" className='ms-3 text-decoration-none'>See more</Link></p>
          </div>

          <div className='total_amount position-fixed bottom-0 start-0 d-flex justify-content-between align-items-center'>
            <div className='ms-3'>
              <p className='fw-bold my-2 fs-5'>$119</p>
              <p className='fw-bold fs-5' style={{ color: 'rgb(243, 142, 10)' }}>Grand Total</p>
            </div>

            <Button variant="primary"
              type="submit"
              className='order_btn mb-3 me-3 mt-3 border-0 px-5 py-3 fw-bold'
              onClick={orderConfirm}
            >Order
            </Button>
          </div>
        </div>
      </div>

    </>

  )
}

export default Checkout