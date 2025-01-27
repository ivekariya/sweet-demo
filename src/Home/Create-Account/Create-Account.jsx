import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Shop_banner from "../Shop/Shop-banner";
import Add_data from "./Add-data";

const Create_Account = () => {
    return (
        <>
            <Header />
            <Shop_banner title="My Account" />
            <Add_data />
            <Footer />
        </>
    );
}

export default Create_Account;