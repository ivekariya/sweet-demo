import React, { useRef, useState } from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Shop_banner from "../Shop/Shop-banner";
import { Link, useNavigate } from "react-router-dom";
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import axios from "axios";
import { Input } from 'antd';

const Login = () => {
    // const [passwordVisible, setPasswordVisible] = React.useState(false);
    const hendelemail = useRef();
    const hendelpassword = useRef();
    const navigate = useNavigate();
    // function generateOTP() {
    //     // Generate a random number between 100000 and 999999
    //     const otp = Math.floor(100000 + Math.random() * 900000);
    //     return otp;
    // }
    const hendelClick = (e) => {
        e.preventDefault();
        var email = hendelemail.current.value;
        var password = hendelpassword.current.value;

        const obj = {
            "email": email,
            "password": password,
        }

        axios.post('http://localhost:5000/log', obj)
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    alert("login sucess");
                    navigate("/");
                }
            })
            .catch(function (error) {
                // alert(error.response.data.message);
                console.log(error.response.data.message);
            })
    }
    return (
        <>
            <Header />
            <Shop_banner title="My Account" />
            <div className="add-data-main">
                <div className="container">
                    <div className="add-data-main-inner">
                        <div className="block-left">
                            <div className="title">
                                <h1>Login</h1>
                            </div>
                            <div className="content">
                                <form method="POST" onSubmit={hendelClick} enctype="multipart/form-data">
                                    <div className="item">
                                        <p>
                                            <label for="reg_username">Username or email address <span class="required">*</span></label>
                                            <input type="email" name="email" ref={hendelemail} />
                                        </p>
                                    </div>
                                    <div className="item">
                                        <label htmlFor="">Password <span class="required">*</span></label>
                                        <input type="text" name="password" ref={hendelpassword} />
                                        {/* <Input.Password /> */}
                                    </div>
                                    <div className="register">
                                        <input type="submit" value="Login" name="login" />
                                    </div>
                                    <div className="login-footer">
                                        <div className="remenber">
                                            <input type="checkbox" />
                                            <label htmlFor="">Remember me</label>
                                        </div>
                                        <Link to="/Forgot_pass">Lost your password?</Link>
                                    </div>
                                </form>
                                <div className="title"><span>Or login with</span></div>
                                <div className="social-login">
                                    <a href="#" className='facebook'><div className="icon"><FaSquareFacebook /></div><span>FACEBOOK</span></a>
                                    <a href="#" className='google'><div className="icon"><FcGoogle /></div><span>GOOGLE</span></a>
                                </div>
                            </div>
                        </div>
                        <div className="block-right">
                            <div className="title">
                                <h1>Register</h1>
                            </div>
                            <div className="content">
                                Registering for this site allows you to access your order status and history. Just fill in the fields below, and we’ll get a new account set up for you in no time. We will only ask you for information necessary to make the purchase process faster and easier.
                            </div>
                            <Link to="/Create_Account" className="login">
                                Register
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Login;