import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Shop_banner from "../Shop/Shop-banner";
import Forgot_data from "./Forgot-data";

const Forgot_pass = () => {
    return (
        <>
            <Header />
            <Shop_banner title="My Account" />
            <Forgot_data />
            <Footer />
        </>
    );
}

export default Forgot_pass;