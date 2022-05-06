import React, { useState } from 'react'
import { Form, Button, Container } from 'react-bootstrap';
import PaymentImgSlider from './PaymentImgSlider';
import { useNavigate } from 'react-router-dom';



const PayCard = () => {
    const navigate = useNavigate();
    const [cardNumber, setCardNumber] = useState("");
    const [cvv, SetCvv] = useState("");
    // const [expiry, setExpiry] = useState("");

    return (
        <>
            <div className="card_details">
                <Container>
                    <PaymentImgSlider />
                    <p className='detail fs-6 fw-bold ms-4 ms-xl-0'>
                        Card Details
                    </p>
                    <Form className="Signnext_form mx-3 mx-xl-5 pt-2 px-xl-5" onSubmit={() => { navigate("/hotel") }}>

                        <Form.Group className="mb-3 position-relative" controlId="formBasicNameCard">
                            <p className='demo_name position-absolute end-0 my-2 mx-3 fw-bold pt-1'>David Smith</p>
                            <Form.Control
                                type="text"
                                placeholder="Name On Card"
                                className="m-0 mx-xl-5 py-2 px-4"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 position-relative" controlId="formBasicCardNumber">
                            <p className="demo_number position-absolute end-0 my-2 mx-3 fw-bold pt-1">**** **** **** 5443</p>
                            <Form.Control
                                type="number"
                                placeholder="Card Number"
                                className="m-0 mx-xl-5 py-2 px-4"
                                value={cardNumber}
                                onChange={(event) => {
                                    if (event.target.value.length == 17)  //limits to 16 digit entry
                                        return false;
                                    setCardNumber(event?.target.value) //saving input to state
                                }}
                                required
                            />
                        </Form.Group>

                        <div className='pay_div d-flex'>
                            <Form.Group className="mb-3 me-3 position-relative" controlId="formBasicExpire">
                                <p className='demo_expiry position-absolute end-0 my-2 mx-3 fw-bold pt-1'>10/2020</p>
                                <Form.Control
                                    // type="date"
                                    type="number"
                                    placeholder="Expire"
                                    className="m-0 mx-xl-5 py-2 px-4 px-xl-5"
                                    required
                                />
                            </Form.Group>

                            <Form.Group className="mb-3 position-relative" controlId="formBasicCvv">
                                <p className='demo_cvv position-absolute end-0 my-0 mx-3 fw-bold'>...</p>
                                <Form.Control
                                    type="number"
                                    placeholder="CVV"
                                    className="m-0 mx-xl-5 py-2 px-4 px-xl-5"
                                    value={cvv}
                                    onChange={(event) => {
                                        if (event.target.value.length == 4) return false;   //limits to 3 digit entry
                                        SetCvv(event?.target.value);       //saving input to state
                                    }
                                    }
                                    required
                                />
                            </Form.Group>
                        </div>
                        <Form.Group className="mb-3 d-grid align-items-center justify-content-center">
                            <Button variant="primary"
                                type="submit"
                                className='signup_btn px-5 py-3 mt-2 text-uppercase fw-bolder border-0'
                            >
                                Sign Up
                            </Button>
                        </Form.Group>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default PayCard