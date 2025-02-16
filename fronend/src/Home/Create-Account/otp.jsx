import React, { useEffect, useRef } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import Shop_banner from "../Shop/Shop-banner";
import { useNavigate } from "react-router-dom";

const OTP = () => {
    const hendelotp = useRef();
    const hendelemail = useRef();
    // const otp = Math.floor(100000 + Math.random() * 900000);
    const navigate = useNavigate();

    
    const hendelClick = (e) => {
        e.preventDefault();
        var otp = hendelotp.current.value;
        var email = hendelemail.current.value;
        console.log(email);
        console.log(otp);
        const obj = {
            "email": email,
            "otp": otp,
        }
        console.log(obj);

        axios.post('http://localhost:5000/verify-otp', obj)
        .then(function (response) {
        console.log(response);

            if (response.status == 200) {
                alert('otp matched');
                navigate("/reset_pass");
            }

        })
        .catch(function (error) {
            // alert(error.response.data.message);
            console.log(error);
        })
    }
    return (
        <>
            <Header />
            <Shop_banner title="My Account" />
            <div className="forgot-main">
                <div className="container">
                    <div className="forgot-main-inner">
                        <div className="content">
                            <form method="POST" onSubmit={hendelClick} enctype="multipart/form-data">
                                <p>Lost your password? Please enter your username or email address. You will receive a link to create a new password via email.</p>
                                <div className="item">
                                    <label>Username or email</label>
                                    <input type="email" name="email" ref={hendelemail} />
                                </div>
                                <div className="item">
                                    <label>OTP</label>
                                    <input type="text" name="otp" ref={hendelotp} />
                                </div>
                                <div className="Reset_pass">
                                    <input type="submit" value="Done" name="respass" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
export default OTP;