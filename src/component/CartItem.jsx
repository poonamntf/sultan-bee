import { AddRounded, RemoveRounded } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import { actionType } from "./Reducer";
import { useStateValue } from "./StateProvider";
let cartItems = [];
let totalData =[]; 

function CartItem({ itemId, name, imgSrc, price }) {
  const [qty, setQty] = useState(1);
  const [itemPrice, setItemPrice] = useState(parseInt(qty) * parseFloat(price));
  const [totalPrice, setTotalPrice] = useState(0);
  const [{ cart, total }, dispatch] = useStateValue();

  useEffect(() => {
    cartItems = cart;
    //totalData = total;
    setItemPrice(parseInt(qty) * parseFloat(price));
    if(itemPrice)
    { 
      totalData.push(itemPrice) 
      dispatch({
        type:actionType.SET_TOTAL,
        total:totalData.reduce((acc,items,index)=> acc+items ,0),
      }) 
    }  
    
    }, [qty ,price]);  
  
  // console.log("totalPrice", totalPrice);
  
  const updateQty = (action, id) => {
   
    if (action == "add") {
      setQty(qty + 1);
     } 
     
     else {
      // initial state value is one so you need to check if 1 then remove it
      if (qty == 1) {
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        });
      } else {
        setQty(qty - 1);
      
        console.log(qty);
         
       }
   
    }

    


  };


  // const updateqty = (action ,id) =>{
  //   if(action == "remove")
  //   {
  //     setQty(qty - 1);
  // totalData.shift(id)
  //     dispatch({
  //       type:actionType.SET_TOTAL,
  //       total:totalData.reduce((acc,items,index)=> acc+items ,0),
  //     })
  //   }
    
    
  // }


  return (
    <div className="cartItem" id={itemId}>
      <div className="imgBox">
        <img src={imgSrc} alt="" />
      </div>
      <div className="itemSection">
        <h2 className="itemName">{name}</h2>
        <div className="itemQuantity">
          <span>x {qty}</span>
          <div className="quantity">
            <RemoveRounded
              className="itemRemove"
              onClick={() => updateQty("remove", itemId)}
            />
            <h6>{qty}</h6>
            <AddRounded
              className="itemAdd"
              onClick={() => updateQty("add", itemId)}
            />
          </div>
        </div>
      </div>
      <p className="itemPrice">
        <span className="dolorSign">$</span>{" "}
        <span className="itemPriceValue">{itemPrice}</span>
       
      </p>
      
    </div>
    
  );
} 
 
export default CartItem;
