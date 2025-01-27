import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './Home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category_page from './Home/Category-page/Category-page';
import Shop from './Home/Shop/Shop';
import Indian_sweet from './Home/Shop/Indian-sweet';
import Contact_us from './Home/Contact-us/Contact-us';
import About_us from './Home/About-us/About-us';
import Create_Account from './Home/Create-Account/Create-Account';
import Forgot_pass from './Home/Create-Account/Forgot-pass';
import Login from './Home/Create-Account/Login';
import Error from './Home/Error/Error';
import OTP from './Home/Create-Account/otp';
import Reset_pass from './Home/Create-Account/Reset-pass';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// AOS.init();
// import 'animate.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <BrowserRouter>
            <Routes>
                    <Route path="/" element={<Home  />} />
                    <Route path="/Category" element={<Category_page />} />
                    <Route path="/Shop" element={<Shop />} />
                    <Route path="/Indian_sweet" element={<Indian_sweet />} />
                    <Route path="/Contact_us" element={<Contact_us />} />
                    <Route path="/About_us" element={<About_us />} />
                    <Route path="/Create_Account" element={<Create_Account />} />
                    <Route path="/Forgot_pass" element={<Forgot_pass />} />
                    <Route path="/Login" element={<Login />} />
                    <Route path="/otp" element={<OTP />} />
                    <Route path="/reset_pass" element={<Reset_pass />} />
                    <Route path="*" element={<Error />} />
            </Routes>
        </BrowserRouter>
    </>
);

