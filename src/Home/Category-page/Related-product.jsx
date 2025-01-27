import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { GrCart } from "react-icons/gr";
// import { TiArrowShuffle } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
const Related_product = () => {
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
                items: 4,
                dots: true,
                nav: false
            },
            1200: {
                items: 4
            }
        }
    }
    return (
        <>
            <div className="related-product-main">
                <div className="container">
                    <div className="related-product-main-inner">
                        <div className="product-title">
                            <span>Related products </span>
                        </div>
                        <div className="products">
                            <OwlCarousel className='owl-theme' loop margin={10} nav {...options}>
                                <div className='item'>
                                    <div className="item-inner">
                                        <div className="image">
                                            <a href="#">
                                                <img src="assets/img/prod-6-opt-430x468.jpg.webp" alt="" />
                                            </a>
                                            <div className="cart-info">
                                                <ul className="info">
                                                    <li><a href="#"><FiHeart /></a>
                                                        <div className="tooltip-lable">Add to wishlist</div>
                                                    </li>
                                                    <li><a href="#"><GrCart /></a>
                                                        <div className="tooltip-lable">Add to cart</div>
                                                    </li>
                                                    {/* <li><a href="#"><TiArrowShuffle /></a>
                                                    <div className="tooltip-lable">Compare</div>
                                                </li> */}
                                                    <li><a href="#"><IoSearch /></a>
                                                        <div className="tooltip-lable">Quick view</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="contant">
                                            <h3><a href="#">Berry Cupcakes</a></h3>
                                            <div className="product-cats">
                                                <a href="#">Sweets Bakery</a>
                                            </div>
                                            <div className="price">$256.00</div>
                                        </div>

                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="item-inner">
                                        <div className="image">
                                            <a href="#">
                                                <img src="assets/img/prod-3-opt-430x468.jpg.webp" alt="" />
                                            </a>
                                            <div className="cart-info">
                                                <ul className="info">
                                                    <li><a href="#"><FiHeart /></a>
                                                        <div className="tooltip-lable">Add to wishlist</div>
                                                    </li>
                                                    <li><a href="#"><GrCart /></a>
                                                        <div className="tooltip-lable">Add to cart</div>
                                                    </li>
                                                    {/* <li><a href="#"><TiArrowShuffle /></a>
                                                    <div className="tooltip-lable">Compare</div>
                                                </li> */}
                                                    <li><a href="#"><IoSearch /></a>
                                                        <div className="tooltip-lable">Quick view</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="contant">
                                            <h3><a href="#">Chocolate Cake</a></h3>
                                            <div className="product-cats">
                                                <a href="#">Sweets Bakery</a>
                                            </div>
                                            <div className="price">$249.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="item-inner">
                                        <div className="image">
                                            <a href="#">
                                                <img src="assets/img/prod-4-opt-430x468.jpg.webp" alt="" />
                                            </a>
                                            <div className="cart-info">
                                                <ul className="info">
                                                    <li><a href="#"><FiHeart /></a>
                                                        <div className="tooltip-lable">Add to wishlist</div>
                                                    </li>
                                                    <li><a href="#"><GrCart /></a>
                                                        <div className="tooltip-lable">Add to cart</div>
                                                    </li>
                                                    {/* <li><a href="#"><TiArrowShuffle /></a>
                                                    <div className="tooltip-lable">Compare</div>
                                                </li> */}
                                                    <li><a href="#"><IoSearch /></a>
                                                        <div className="tooltip-lable">Quick view</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="contant">
                                            <h3><a href="#">Honey Waffles</a></h3>
                                            <div className="product-cats">
                                                <a href="#">Sweets Bakery</a>
                                            </div>
                                            <div className="price">$199.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="item-inner">
                                        <div className="image">
                                            <a href="#">
                                                <img src="assets/img/prod-5-opt-430x468.jpg.webp" alt="" />
                                            </a>
                                            <div className="cart-info">
                                                <ul className="info">
                                                    <li><a href="#"><FiHeart /></a>
                                                        <div className="tooltip-lable">Add to wishlist</div>
                                                    </li>
                                                    <li><a href="#"><GrCart /></a>
                                                        <div className="tooltip-lable">Add to cart</div>
                                                    </li>
                                                    {/* <li><a href="#"><TiArrowShuffle /></a>
                                                    <div className="tooltip-lable">Compare</div>
                                                </li> */}
                                                    <li><a href="#"><IoSearch /></a>
                                                        <div className="tooltip-lable">Quick view</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="contant">
                                            <h3><a href="#">Muffin Cake</a></h3>
                                            <div className="product-cats">
                                                <a href="#">Sweets Bakery</a>
                                            </div>
                                            <div className="price">$269.00</div>
                                        </div>
                                    </div>
                                </div>
                                <div className='item'>
                                    <div className="item-inner">
                                        <div className="image">
                                            <a href="#">
                                                <img src="assets/img/prod-2-opt-430x468.jpg.webp" alt="" />
                                            </a>
                                            <div className="cart-info">
                                                <ul className="info">
                                                    <li><a href="#"><FiHeart /></a>
                                                        <div className="tooltip-lable">Add to wishlist</div>
                                                    </li>
                                                    <li><a href="#"><GrCart /></a>
                                                        <div className="tooltip-lable">Add to cart</div>
                                                    </li>
                                                    {/* <li><a href="#"><TiArrowShuffle /></a>
                                                    <div className="tooltip-lable">Compare</div>
                                                </li> */}
                                                    <li><a href="#"><IoSearch /></a>
                                                        <div className="tooltip-lable">Quick view</div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="contant">
                                            <h3><a href="#">Rasbarry Pie</a></h3>
                                            <div className="product-cats">
                                                <a href="#">Sweets Bakery</a>
                                            </div>
                                            <div className="price">$189.00</div>
                                        </div>
                                    </div>
                                </div>
                            </OwlCarousel>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Related_product;