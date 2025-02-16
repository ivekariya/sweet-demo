import React from "react";
import { ImMobile } from "react-icons/im";
import { IoPaperPlaneSharp } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
const Footer = () => {
    return (
        <>
            <div className="footer-main">
                <div className="wraper">
                    <svg width="100%" height="50px" viewBox="0 0 1920 80" xmlns="http://www.w3.org/2000/svg" class="wd-divider" preserveAspectRatio="none">
                        <path className="elementor-shape-fill" d="M1920,60s-169.5,20-510,20S850.5,20,510,20,0,60,0,60V0H1920Z"></path>
                    </svg>
                </div>
                <div className="container">
                    <div className="footer-main-inner">
                        <div className="footer-contant">
                            <div className="item">
                                <div className="item-inner">
                                    <div className="logo">
                                        <a href="#">
                                            <img src="assets/img/wood-logo-dark.svg" alt="" />
                                        </a>
                                    </div>
                                    <div className="contant">
                                        <p>Condimentum adipiscing vel neque dis nam parturient orci at scelerisque neque dis nam parturient.</p>
                                        <ul>
                                            <li><div className="icon"><IoPaperPlaneSharp /></div><span>451 Wall Street, UK, London</span></li>
                                            <li><div className="icon"><ImMobile /></div><span>Phone: <a href="tel:  (064) 332-1233"> (064) 332-1233</a></span></li>
                                            <li><div className="icon"><IoIosMail /></div><span>Fax: (099) 453-1357</span></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="title">
                                        Recent Posts
                                    </div>
                                    <ul className="recent-content">
                                        <li><a href="#">
                                            <img src="assets/img/blog-12-75x65.jpg" alt="" />
                                        </a>
                                            <div className="profile-info">
                                                <div className="info-title">
                                                    <a href="#">A companion for extra sleeping</a>
                                                </div>
                                                <div className="time">July 23, 2016</div>
                                                <a href="#" className="comment">1 Comment</a>
                                            </div>
                                        </li>
                                        <li><a href="#">
                                            <img src="assets/img/blog-11-75x65.jpg" alt="" />
                                        </a>
                                            <div className="profile-info">
                                                <div className="info-title">
                                                    <a href="#">Outdoor seating collection inspiration</a>
                                                </div>
                                                <div className="time">July 23, 2016</div>
                                                <a href="#" className="comment">1 Comment</a>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item-1">
                                <div className="item-1-inner">
                                    <div className="title">Our Stores</div>
                                    <ul className="menu">
                                        <li><a href="#">New York</a></li>
                                        <li><a href="#">London SF</a></li>
                                        <li><a href="#">Edinburgh </a></li>
                                        <li><a href="#">Los Angeles</a></li>
                                        <li><a href="#">Chicago</a></li>
                                        <li><a href="#">Las Vegas</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item-1">
                                <div className="item-1-inner">
                                    <div className="title">Useful Links</div>
                                    <ul className="menu">
                                        <li><a href="#">Privacy Policy</a></li>
                                        <li><a href="#">Returns</a></li>
                                        <li><a href="#">Terms &amp; Conditions</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Latest News</a></li>
                                        <li><a href="#">Our Sitemap</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="item-1">
                                <div className="item-1-inner">
                                    <div className="title">Footer Menu</div>
                                    <ul className="menu">
                                        <li><a href="#">Instagram profile</a></li>
                                        <li><a href="#">New Collection</a></li>
                                        <li><a href="#">Woman Dress</a></li>
                                        <li><a href="#">Contact Us</a></li>
                                        <li><a href="#">Latest News</a></li>
                                        <li><a href="#">Purchase Theme</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <div className="footer-bottom-inner">
                        <div className="block-left">
                            <p><a href="#"><strong>WOODMART</strong></a>  © 2024 CREATED BY <a href="#"><strong><span>X</span>TEMOS STUDIO</strong></a>. PREMIUM E-COMMERCE SOLUTIONS.</p>
                        </div>
                        <div className="block-right">
                            <img src="assets/img/payments.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            
        </>
    );
}

export default Footer;