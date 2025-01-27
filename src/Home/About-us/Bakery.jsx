import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Bakery = () => {
    const options = {
        loop: true,
        margin: 10,
        dots: true,
        nav: false,
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
            <div className="bakery-main">
                <div className="back-img">
                    <div className="bakery-main-inner">
                        <div className="content">
                            <div className="title">
                                <h1>
                                    Our Bakery
                                </h1>
                            </div>
                            <OwlCarousel className='owl-theme banner' loop margin={10} {...options} >
                                <div className="item">
                                    <p> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent molestie eu turpis nec molestie.&nbsp;Nam auctor magna mauris, non lacinia felis mattis nec.</p>
                                </div>
                                <div className="item">
                                    <p> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent molestie eu turpis nec molestie.&nbsp;Nam auctor magna mauris, non lacinia felis mattis nec.</p>
                                </div>
                                <div className="item">
                                    <p> Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Praesent molestie eu turpis nec molestie.&nbsp;Nam auctor magna mauris, non lacinia felis mattis nec.</p>
                                </div>
                            </OwlCarousel >
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Bakery;