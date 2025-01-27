import React from "react";
import Banner from "./Banner";
import Body from "./Body/Body";
import Footer from "./Footer";
import Header from "./Header";

const Home = () => {
    return (
        <>
            <div className="main-page">
                <Header />
                <Banner />
                <Body />
                <Footer />
            </div>
        </>
    );
}

export default Home;