import React from "react";
import { Form, Button, Container } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import image from "../images/login.png";
import logintop from "../images/login-top.png";
import fb from "../images/fb-icon.png";
import tw from "../images/twitter-icon.png";
import { MdEmail } from "react-icons/md";
import { BsFillLockFill } from "react-icons/bs";
import { AiFillEyeInvisible } from "react-icons/ai";

const Login = () => {
    const navigate = useNavigate();
    return (
        <div className="login_screen">
            <img src={logintop} alt="logintop" className="login_top w-100 img-fluid mt-3" />
            <div className="form_div d-grid align-items-center justify-content-center">
                <img src={image} alt="login_img" className="login_img mx-5 px-5 mt-0" />
                <Container>
                    <Form className="login_form mt-4 pt-1 border-2 border-bottom" onSubmit={() => navigate('/hotel')}>
                        <Form.Group className="mb-3 position-relative" controlId="formBasicEmail">
                            <MdEmail className="mail_icon position-absolute my-3 mx-4" />
                            <Form.Control
                                type="email"
                                placeholder="Email address"
                                className="px-5 py-3 border-2 ms-2"
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-4 position-relative" controlId="formBasicPassword">
                            <BsFillLockFill className="pass_icon position-absolute my-3 mx-4" />
                            <AiFillEyeInvisible className="eye_icon position-absolute end-0 mt-3 mb-2 mx-4 text-center" />

                            <Form.Control
                                type="password"
                                placeholder="Password"
                                className="px-5 py-3 border-2 ms-2"
                                required
                            />

                        </Form.Group>
                        <Form.Group className="mb-3 d-grid align-items-center justify-content-center">
                            <Button
                                variant="primary"
                                type="submit"
                                className="login_btn px-5 py-3 text-uppercase fw-bolder border-0"
                            >
                                Login
                            </Button>
                        </Form.Group>

                        <Form.Group
                            className="forgot_password pb-4 d-grid align-items-center justify-content-center"
                            controlId="formBasicForgotPassword"
                        >
                            <Link to="#" className="text-decoration-none">Forgot Password?</Link>
                        </Form.Group>
                    </Form>
                </Container>

                <div className="footer_icon d-flex align-items-center justify-content-center mx-5 px-5 pt-3 pt-xl-2">
                    <img src={fb} alt="fb_icon" className="ps-2 ps-xl-3 img-fluid" />
                    <img src={tw} alt="tw_icon" className="ps-3 ps-xl-3 img-fluid" />
                </div>
                <div className="create_accnt d-grid align-items-center justify-content-center">
                    <Link to="/signup" className="pt-1 pt-xl-0 text-decoration-none text-dark ps-xl-3 fw-bold">
                        Create New Account
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;
