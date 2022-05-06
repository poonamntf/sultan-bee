import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import image from "../images/login.png";
import signuptop from "../images/login-top.png";
import Allergy from "../images/allergy-preferance.png";
import PassIcon from "../images/pass-icon.png";
import EyeIcon from "../images/pass-eyes.png";
import PhoneIcon from "../images/phone.png";
import LangIcon from "../images/language.png";
import UserIcon from "../images/user.png";


const SignUp = () => {
    const navigate = useNavigate();
    const OnSubmitHandler = (e) => {
        e.preventDefault();
        navigate("/signup/card");
    };
    return (
        <div className="signup_screen">
            <img src={signuptop} alt="signuptop" className="signup_top w-100 img-fluid mt-1" />
            <div className="form_sign_div d-grid align-items-center justify-content-center">
                <img src={image} alt="signup_img" className="signup_img mx-5 px-5 mt-0" />
                <Container>
                    <Form className="signup_form mt-4 pt-1 border-2 border-bottom" onSubmit={OnSubmitHandler}>
                        <Form.Group className="mb-3 position-relative" controlId="formBasicName">
                            <img src={UserIcon}
                                alt="user_icon"
                                className="user_icon position-absolute my-2 mx-4"
                            />
                            <Form.Control
                                type="text"
                                placeholder="Full name"
                                className="px-5 py-2 border-2 ms-2"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 position-relative" controlId="formBasicLanguage">
                            <img src={LangIcon}
                                alt="lang_icon"
                                className="lang_icon position-absolute my-2 mx-4" />
                            <Form.Control
                                type="text"
                                placeholder="Language"
                                className="px-5 py-2 border-2 ms-2"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 position-relative" controlId="formBasicPhone">
                            <img src={PhoneIcon}
                                alt="phone_icon"
                                className="phone_icon position-absolute my-2 mx-4" />
                            <Form.Control
                                type="number"
                                placeholder="Phone"
                                className="px-5 py-2 border-2 ms-2"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3 position-relative" controlId="formBasicPassword">
                            <img src={PassIcon}
                                alt="password_icon"
                                className="password_icon position-absolute my-2 mx-4" />
                            <Form.Control
                                type="password"
                                placeholder="Password"
                                className="px-5 py-2 border-2 ms-2"
                                required
                            />
                            <img src={EyeIcon}
                                alt="eye_icon"
                                className="eyes_icon position-absolute end-0 mx-4 text-center" />
                        </Form.Group>

                        <Form.Group className="mb-3 position-relative" controlId="FormControlTextarea1">
                            <img src={Allergy}
                                alt="allergypreference"
                                className="allergy_icon position-absolute my-2 mx-4" />
                            <Form.Control
                                as="textarea"
                                rows={2}
                                placeholder="Alllergy/preference"
                                className="px-5 py-2 border-2 ms-2"
                                required
                            />
                        </Form.Group>
                        <Form.Group className="mb-3 d-grid align-items-center justify-content-center">
                            <Button
                                variant="primary"
                                type="submit"
                                className="login_btn px-5 py-3 text-uppercase fw-bolder border-0"
                            >
                                Next
                            </Button>
                        </Form.Group>
                    </Form>
                </Container>
                <div className="d-grid align-items-center justify-content-center">
                    <p className="pt-2 pt-xl-2 mb-0" style={{ fontSize: "14px" }}>
                        Already have an account?
                        <Link to="/login" className="text-decoration-none ps-1 ps-xl-1 fw-bold">
                            Sign in
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default SignUp;
