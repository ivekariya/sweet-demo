import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Shop_banner from "../Shop/Shop-banner";
import Services from "./Services";
import Mission from "./Mission";
import Masterchef from "./Masterchef";
import Bakery from "./Bakery";

const About_us = () => {
    return (
        <>
            <div className="about-us">
                <Header />
                <Shop_banner title="About Us" />
                <Services />
                <Mission />
                <Masterchef />
                <Bakery />
                <Footer />
            </div>
        </>
    );
}

export default About_us;