import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
const Brand = () => {
    const options = {
        loop: true,
        margin: 10,
        dots: false,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 7
            }
        }
    }
    return (
        <>
            <div className="brand-main">
                <div className="container">
                    <div className="brand-main-inner">
                        <OwlCarousel className='owl-theme banner' loop margin={10} {...options} >
                            <div className="item">
                                <a href="#" className="fill">
                                    <img src="assets/img/brand-witra.png" alt="" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" className="fill">
                                    <img src="assets/img/brand-Rosenthal.png" alt="" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" className="fill">
                                    <img src="assets/img/brand-PackIt.png   " alt="" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" className="fill">
                                    <img src="assets/img/nichemodern.png" alt="" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" className="fill">
                                    <img src="assets/img/brand-Magisso.png" alt="" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" className="fill">
                                    <img src="assets/img/brand-Louis-Poulsen.png" alt="" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" className="fill">
                                    <img src="assets/img/klobe2r.png" alt="" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" className="fill">
                                    <img src="assets/img/brand-Joseph-Joseph.png" alt="" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" className="fill">
                                    <img src="assets/img/brand-hay.png" alt="" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" className="fill">
                                    <img src="assets/img/brand-flos.png" alt="" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" className="fill">
                                    <img src="assets/img/brand-Eva-Solo.png" alt="" />
                                </a>
                            </div>
                            <div className="item">
                                <a href="#" className="fill">
                                    <img src="assets/img/brand-alessi.png" alt="" />
                                </a>
                            </div>
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Brand;