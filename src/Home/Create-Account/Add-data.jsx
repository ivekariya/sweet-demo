import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input } from 'antd';
import axios from "axios";


const Add_data = () => {
    // const [passwordVisible, setPasswordVisible] = React.useState(false);
    const hendelusername = useRef();
    const hendelemail = useRef();
    const hendelpassword = useRef();
    const navigate = useNavigate();

    const hendelClick = (e) => {
        e.preventDefault();
        var username = hendelusername.current.value;
        var email = hendelemail.current.value;
        var password = hendelpassword.current.value;

        const obj = {
            "username": username,
            "email": email,
            "password": password,
        }

        axios.post('http://localhost:5000/add', obj)
            .then(function (response) {
                console.log(response);
                if (response.status == 200) {
                    alert("data insert sucess");
                    navigate("/Login");
                }
            })
            .catch(function (error) {
                console.log(error);
            })
    }
    return (
        <>
            <div className="add-data-main">
                <div className="container">
                    <div className="add-data-main-inner">
                        <div className="block-left">
                            <div className="title">
                                <h1>Register</h1>
                            </div>
                            <div className="content">
                                <form method="POST" onSubmit={hendelClick} enctype="multipart/form-data">
                                    <div className="item">
                                        <p>
                                            <label for="reg_username">Username&nbsp;<span class="required">*</span></label>
                                            <input type="text" name="username" ref={hendelusername} />
                                        </p>
                                    </div>
                                    <div className="item">
                                        <p>
                                            <label for="reg_password">Email address&nbsp;<span class="required">*</span></label>
                                            <input type="email" name="email" ref={hendelemail} />
                                        </p>
                                    </div>
                                    <div className="item">
                                        <label htmlFor="">Password <span class="required">*</span></label>
                                        <input type="text" name="password" ref={hendelpassword} />
                                        {/* <Input.Password ref={hendelpassword} /> */}
                                    </div>
                                    <div className="desc">
                                        <p>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="https://woodmart.xtemos.com/privacy-policy/demo/sweets-bakery/" class="woocommerce-privacy-policy-link" target="_blank">privacy policy</a>.</p>
                                    </div>
                                    <div className="register">
                                        <input type="submit" value="register" name="submit" />
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div className="block-right">
                            <div className="title">
                                <h1>Login</h1>
                            </div>
                            <div className="content">
                                Login here by filling you're username and password or use your favorite social network account to enter to the site. Site login will simplify the purchase process and allows you to manage your personal account.
                            </div>
                            <Link to="/Login" className="login">
                                Login
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Add_data;