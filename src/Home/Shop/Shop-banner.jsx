import React from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
const Shop_banner = (props) => {
    return (
        <>
            <div className="shop-banner-main">
                <div className="container">
                    <div className="shop-banner-inner">
                        <div className="text">
                            <div className="arroew-icon"><Link to="/Category"><FaArrowLeftLong /></Link></div>
                            <h1>{props.title}</h1>
                            <ul className="product-cats">
                                <li><a href="#">
                                    <img src="assets/img/clock.svg" alt="" />
                                    <span className="link-summery">
                                        <span className="title">Clocks</span>
                                        <span className="count">12 products</span>
                                    </span>
                                </a></li>
                                <li><a href="#">
                                    <img src="assets/img/light-bulb.svg" alt="" />
                                    <span className="link-summery">
                                        <span className="title">Lighting</span>
                                        <span className="count">17 products</span>
                                    </span>
                                </a></li>
                                <li><a href="#">
                                    <img src="assets/img/chair.svg" alt="" />
                                    <span className="link-summery">
                                        <span className="title">Furniture</span>
                                        <span className="count">33 products</span>
                                    </span>
                                </a></li>
                                <li><a href="#">
                                    <img src="assets/img/flower.svg" alt="" />
                                    <span className="link-summery">
                                        <span className="title">Accessories</span>
                                        <span className="count">12 products</span>
                                    </span>
                                </a></li>
                                <li><a href="#">
                                    <img src="assets/img/knives.svg" alt="" />
                                    <span className="link-summery">
                                        <span className="title">Cooking</span>
                                        <span className="count">12 products</span>
                                    </span>
                                </a></li>
                                <li><a href="#">
                                    <img src="assets/img/rocking-horse.svg" alt="" />
                                    <span className="link-summery">
                                        <span className="title">Toys</span>
                                        <span className="count">12 products</span>
                                    </span>
                                </a></li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div className="design">
                    <svg width="100%" height="50px" viewBox="0 0 1920 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0 20C0 20 169.5 0 510 0C850.5 0 1069.5 60 1410 60C1750.5 60 1920 20 1920 20V80H0V20Z"></path></svg>
                </div>
            </div>
        </>
    );
}

export default Shop_banner;