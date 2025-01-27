import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Content from "./contact-content";
import Brand from "../Category-page/Brand";
import Location_page from "./Location";

const Contact_us = () => {
    return (
        <>
            <div className="contact-page">
                <Header />
                <Location_page/>
                <Content />
                <Brand/>
                <Footer />
            </div>
        </>
    );
}

export default Contact_us;