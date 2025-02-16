import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useState } from 'react';
// import { useEffect } from 'react';

const Banner = () => {
    const options = {
        loop: true,
        margin: 10,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    }
    return (
        <>
            <OwlCarousel className='owl-theme banner' loop margin={10} {...options} >
                <div className='item'>
                    <div className="banner-main">
                        <div className="container container-move">
                            <div className="banner-main-inner">
                                <div className="image">
                                    <div className="wraper">
                                        <div className="title zoom-in">
                                            <p>A Tasty and Light Dessert</p>
                                        </div>
                                        <div className="item-contant">
                                            <p>BELGIAN</p>
                                            <div className="zoom-in">
                                                <div className="small-img">
                                                    <img src="assets/img/sweets-bakery-slide-img-s-1.png.webp" alt="" />
                                                </div>
                                            </div>
                                            <p>WAFFLES</p>
                                        </div>
                                        <img className="zoom-in" src="assets/img/sweets-bakery-slide-img-1.png.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="desing">
                            <svg width="100%" height="50px" viewBox="0 0 1920 80" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none">
                                <path d="M0 20C0 20 169.5 0 510 0C850.5 0 1069.5 60 1410 60C1750.5 60 1920 20 1920 20V80H0V20Z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="banner-main banner-2">
                        <div className="container container-move">
                            <div className="banner-main-inner">
                                <div className="image">
                                    <div className="wraper">
                                        <div className="title zoom-in">
                                            <p>Crispy and Delicate</p>
                                        </div>
                                        <div className="item-contant">
                                            <p>ALMOND</p>
                                            <div className="small-img zoom-in">
                                                <img src="assets/img/sweets-bakery-slide-img-s-2.png.webp" alt="" />
                                            </div>
                                            <p>MAFFINS</p>
                                        </div>
                                        <img className="zoom-in" src="assets/img/sweets-bakery-slide-img-2.png.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="desing">
                            <svg width="100%" height="50px" viewBox="0 0 1920 80" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none">
                                <path d="M0 20C0 20 169.5 0 510 0C850.5 0 1069.5 60 1410 60C1750.5 60 1920 20 1920 20V80H0V20Z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="banner-main banner-3">
                        <div className="container container-move">
                            <div className="banner-main-inner">
                                <div className="image">
                                    <div className="wraper">
                                        <div className="title zoom-in">
                                            <p>It Is Worth Tasting</p>
                                        </div>
                                        <div className="item-contant">
                                            <p>SWEET</p>
                                            <div className="small-img zoom-in">
                                                <img src="assets/img/sweets-bakery-slide-img-s-3.png.webp" alt="" />
                                            </div>
                                            <p>DONUTS</p>
                                        </div>
                                        <img className="zoom-in" src="assets/img/sweets-bakery-slide-img-3.png.webp" alt="" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="desing">
                            <svg width="100%" height="50px" viewBox="0 0 1920 80" xmlns="http://www.w3.org/2000/svg"
                                preserveAspectRatio="none">
                                <path d="M0 20C0 20 169.5 0 510 0C850.5 0 1069.5 60 1410 60C1750.5 60 1920 20 1920 20V80H0V20Z">
                                </path>
                            </svg>
                        </div>
                    </div>
                </div>
            </OwlCarousel>
        </>
    );
}

export default Banner;