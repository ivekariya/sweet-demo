import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Shop_banner from "./Shop-banner";
import Shop_content from "./Shop-content";
import Brand from "../Category-page/Brand";

const Shop = () => {
    return (
        <>
            <div className="shop-page">
                <Header />
                <Shop_banner title="Sweets Bakery" />
                <Shop_content />
                <Brand />
                <Footer />
            </div>
        </>
    );
}

export default Shop;