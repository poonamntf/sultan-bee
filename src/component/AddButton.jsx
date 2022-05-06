import React, { useEffect, useState  } from 'react'
import { useStateValue } from "./StateProvider";
import { AddRounded, RemoveRounded } from "@mui/icons-material";
import { actionType } from "./Reducer";
import Button1 from "./Button"
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { useNavigate } from "react-router-dom";



let cartItems = [];
let cartData = [];
const AddButton = ({itemId, imgSrc, name, price  }) => {

  const [qty, setQty] = useState(1)
   
    const [showSecondFields, setShowSecondFields] = useState(true);

    const [show, setShow] = useState(false);
  const [selectedData, setSelectedData] = useState({});

  const [{}, dispatch] = useStateValue();
  const [isCart, setCart] = useState(null);
  const [{ cart, total }] = useStateValue();

  useEffect(() => {
    cartItems = cart;
    if (isCart) {
      cartData.push(isCart);
      dispatch({
        type: actionType.SET_CART,
        cart: cartData,
      });
    }
  }, [isCart]);


  const updateQty = (action, id) => {
    if (action == "add") {
      setQty(qty + 1);
    } else {
      // initial state value is one so you need to check if 1 then remove it
      if (qty == 1) {
        setShow(false);
        setShowSecondFields(true);
        cartItems.pop(id);
        dispatch({
          type: actionType.SET_CART,
          cart: cartItems,
        });
      } 
      else {
        setQty(qty - 1);
       
        console.log(qty);
        
      }
    }
  };

// const removeModel =()=>{
//   if(setQty(-qty)){
//     setShow(false);
//   }else{
//     setShow(true);
//   }
// }
  const hanldeClick = (selectedRec) => {
    setSelectedData(selectedRec);
    setShow(true);
  };


  const hideModal = () => {
    setShow(false);
  };
 
  return (
    <div>
        {showSecondFields ? (
          <div
         
            className="addToCart"
            onClick={() => {
              // setCart(Items.find((n) => n.id === itemId));
              hanldeClick(itemId)
              setShowSecondFields(false);
              // setCart(Items.find((n) => n.id === itemId))
              // navigate("/cart")
            }}
          >
            Add
            <AddRounded/>
          </div>
        ) : (
          <div className="cartItem" id={itemId}>
          <div className="itemSection    ">
            <div className="itemQuantity ">
              <div className="quantity d-flex align-items-center justify-content-between w-25">
                <RemoveRounded
                  className="itemRemove mt-0 mb-2 fs-6 "
                  onClick={() => updateQty("remove", itemId)
                  
                  }
                />
                <h6 className=" bg-orange text-white p-1 me-3 ms-1 mt-0">
                  {qty}
                </h6>
                <AddRounded
                  className="itemAdd fs-6  me-5  "
                  onClick={() => updateQty("add", itemId)}
                />
              </div>
            </div>
          </div>
        </div>
        )}

{show && <Modal details={selectedData} handleClose={hideModal} />}
    </div>
    
  )
}



const Modal = ({ handleClose, details}) => {
    const navigate = useNavigate();
    return (
      <div className="modal display-block">
        <section className="modal-main">
          <div className="App">
           <h6>Item 1</h6>
           <h6>price 119$</h6>
          </div>
           <div  className="cross position-absolute top-0 end-0 d-flex flex-column" >
           <CancelRoundedIcon onClick={handleClose} className="cancel position-absolute" />
           <button className="text-white mt-3 " onClick={()=>{navigate("/cart ")}}>Next</button>
           </div>
         
        </section>
      </div>
    );
  };
  
  

export default AddButton