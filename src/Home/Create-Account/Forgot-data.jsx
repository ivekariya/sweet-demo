import React, { useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Forgot_data = () => {
    const hendelemail = useRef();
    const navigate = useNavigate();
    const hendelClick = (e) => {
        e.preventDefault();

        var email = hendelemail.current.value;
        const obj = {
            "email": email,
        }

        axios.post('http://localhost:5000/forget', obj)
            .then(function (response) {
                console.log(response.data);

                if (response.status == 200) {
                    alert('send the otp');
                    navigate("/otp");
                }

            })
            .catch(function (error) {
                // alert(error.response.data.message);
                console.log(error);
            })
    }
    return (
        <>
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
                                <div className="Reset_pass">
                                    <input type="submit" value="SEND OTP" name="respass" />
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Forgot_data;