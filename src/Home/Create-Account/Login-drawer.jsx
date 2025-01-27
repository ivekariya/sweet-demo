import React, { useRef } from "react";
import { Input, Space } from 'antd';
import { FaSquareFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";
import { LuUser2 } from "react-icons/lu";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
const Login_drawer = () => {
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
            <div className="log-in-contant">
                <form method="POST" onSubmit={hendelClick} enctype="multipart/form-data">
                    <div className="item">
                        <label htmlFor="">Username or email address <span>*</span></label>
                        <input type="email" name="email" ref={hendelemail} />
                    </div>
                    <div className="item">
                        <label htmlFor="">Password <span>*</span></label>
                        <input type="text" name="password" ref={hendelpassword} />
                        {/* <Input.Password /> */}
                    </div>
                    <div className="item">
                        <input className="submit" type="submit" name="login" value='Log IN' />
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
                <div className="create-account-que">
                    <div className="icn">
                        <LuUser2 />
                    </div>
                    <p>No account yet?</p>
                    <Link to="Create_Account" class="btn">Create an Account</Link>
                </div>
            </div>
        </>
    );
}

export default Login_drawer;