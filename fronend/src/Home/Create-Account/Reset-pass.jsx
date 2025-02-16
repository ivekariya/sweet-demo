import React, { useEffect, useRef } from "react";
import axios from "axios";
import Header from "../Header";
import Footer from "../Footer";
import Shop_banner from "../Shop/Shop-banner";
import { useNavigate, useParams } from "react-router-dom";

const Reset_pass = () => {
    const hendelpass = useRef();
    const hendelconfirmpass = useRef();
    const hendelemail = useRef();
    const navigate = useNavigate();

    const hendelClick = (e) => {
        e.preventDefault();
        var newPassword = hendelpass.current.value;
        var confirm_pass = hendelconfirmpass.current.value;
        var email = hendelemail.current.value;

        const obj = {
            "newPassword": newPassword,
            "confirm_pass": confirm_pass,
            "email": email,
        }
        axios.post('http://localhost:5000/updpass', obj)
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    alert(response.data.message);
                    navigate("/");
                }
            })
            .catch(function (error) {
                alert(error.response.data.message);
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
                                    <label>Email</label>
                                    <input type="text" name="password" ref={hendelemail} placeholder="enter new password" />
                                </div>
                                <div className="item">
                                    <label>New Password</label>
                                    <input type="text" name="password" ref={hendelpass} placeholder="enter new password" />
                                </div>
                                <div className="item">
                                    <label>confirm Password</label>
                                    <input type="text" name="confirm_pass" ref={hendelconfirmpass} placeholder="confirm password" />
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
export default Reset_pass;