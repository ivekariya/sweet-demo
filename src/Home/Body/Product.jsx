import React, { useState } from 'react';
import { GrCart } from "react-icons/gr";
import { TiArrowShuffle } from "react-icons/ti";
import { IoSearch } from "react-icons/io5";
import { FiHeart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { Button, Drawer } from 'antd';
import Search from './Search';
import Add_to_cart from '../AddToCart/AddToCart';
import AddProduct from '../AddToCart/AddProduct';
const Product = () => {
    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className="product-main">
                <div className="wraper">
                    <svg width="100%" height="50px" viewBox="0 0 1920 80" xmlns="http://www.w3.org/2000/svg" className="wd-divider"
                        preserveAspectRatio="none">
                        <path className="elementor-shape-fill" d="M1920,60s-169.5,20-510,20S850.5,20,510,20,0,60,0,60V0H1920Z">
                        </path>
                    </svg>
                </div>
                <div className="product-container">
                    <div className="product-main-inner">
                        <div className="product-title">
                            <div className="sub-title">Sweet Accessories</div>
                            <div className="liner-container">
                                <h4>Featured Products</h4>
                            </div>
                            <p>
                                To short sentences, to many headings, images too large for the proposed design, or too small, or
                                they fit in but it looks.
                            </p>
                        </div>
                        <div className="product-items">
                            <div className="item">
                                <div className="item-inner">
                                    <div className="image">
                                        <Link to="/Category">
                                            <img src="assets/img/prod-1-opt-430x468.jpg.webp" alt="" />
                                        </Link>

                                        <div className="top-info">
                                            <h3>
                                                <a href="#">White Cake</a>
                                            </h3>
                                            <div className="products-cats">
                                                <a href="#">Sweets Bakery</a>
                                            </div>
                                        </div>
                                        <div className="bottom-info">
                                            <div className="reguler">$199.00</div>
                                            <div className="price">$119.00</div>
                                        </div>
                                        <div className="cart-info">
                                            <ul className="info">
                                                <li>
                                                    <Button className="cart" type="primary" onClick={showDrawer}>
                                                        <span><GrCart /></span>
                                                    </Button>
                                                    <Drawer title="Shopping cart" onClose={onClose} open={open}>
                                                        <AddProduct />
                                                    </Drawer>
                                                    <div className="tooltip-lable">Add to cart</div>
                                                </li>
                                                <li><a href="#"><TiArrowShuffle /></a>
                                                    <div className="tooltip-lable">Compare</div>
                                                </li>
                                                <li><span>
                                                    <Search className="search" item="White Cake" disc="119.00" reguler="$199.00" image="assets/img/prod-1-opt-430x468.jpg.webp" />
                                                </span>
                                                    <div className="tooltip-lable">Quick view</div>
                                                </li>
                                                <li><a href="#"><FiHeart /></a>
                                                    <div className="tooltip-lable">Add to wishlist</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="image">
                                        <Link to="/Category">
                                            <img src="assets/img/prod-2-opt-430x468.jpg.webp" alt="" />
                                        </Link>
                                        <div className="top-info">
                                            <h3>
                                                <a href="#">Raspberry Pie</a>
                                            </h3>
                                            <div className="products-cats">
                                                <a href="#">Sweets Bakery</a>
                                            </div>
                                        </div>
                                        <div className="bottom-info">
                                            <div className="price">$189.00</div>
                                        </div>
                                        <div className="cart-info">
                                            <ul className="info">
                                                <li><a href="#"><GrCart /></a>
                                                    <div className="tooltip-lable">Add to cart</div>
                                                </li>
                                                <li><a href="#"><TiArrowShuffle /></a>
                                                    <div className="tooltip-lable">Compare</div>
                                                </li>
                                                <li><span>
                                                    <Search item="Raspberry Pie" disc="189.00" image="assets/img/prod-2-opt-430x468.jpg.webp" />
                                                </span>
                                                    <div className="tooltip-lable">Quick view</div>
                                                </li>
                                                <li><a href="#"><FiHeart /></a>
                                                    <div className="tooltip-lable">Add to wishlist</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="image">
                                        <Link to="/Category">
                                            <img src="assets/img/prod-3-opt-430x468.jpg.webp" alt="" />
                                        </Link>
                                        <div className="top-info">
                                            <h3>
                                                <a href="#">Chocolat Cake</a>
                                            </h3>
                                            <div className="products-cats">
                                                <a href="#">Sweets Bakery</a>
                                            </div>
                                        </div>
                                        <div className="bottom-info">
                                            <div className="price">$249.00</div>
                                        </div>
                                        <div className="cart-info">
                                            <ul className="info">
                                                <li><a href="#"><GrCart /></a>
                                                    <div className="tooltip-lable">Add to cart</div>
                                                </li>
                                                <li><a href="#"><TiArrowShuffle /></a>
                                                    <div className="tooltip-lable">Compare</div>
                                                </li>
                                                <li><span>
                                                    <Search item="Chocolat Cake" disc="249.00" image="assets/img/prod-3-opt-430x468.jpg.webp" />
                                                </span>
                                                    <div className="tooltip-lable">Quick view</div>
                                                </li>
                                                <li><a href="#"><FiHeart /></a>
                                                    <div className="tooltip-lable">Add to wishlist</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="image">
                                        <Link to="/Category">
                                            <img src="assets/img/prod-4-opt-430x468.jpg.webp" alt="" />
                                        </Link>
                                        <div className="top-info">
                                            <h3>
                                                <a href="#">Honey Waffles</a>
                                            </h3>
                                            <div className="products-cats">
                                                <a href="#">Sweets Bakery</a>
                                            </div>
                                        </div>
                                        <div className="bottom-info">
                                            <div className="price">$199.00</div>
                                        </div>
                                        <div className="cart-info">
                                            <ul className="info">
                                                <li><a href="#"><GrCart /></a>
                                                    <div className="tooltip-lable">Add to cart</div>
                                                </li>
                                                <li><a href="#"><TiArrowShuffle /></a>
                                                    <div className="tooltip-lable">Compare</div>
                                                </li>
                                                <li><span>
                                                    <Search item="Honey Waffles" disc="199.00" image="assets/img/prod-4-opt-430x468.jpg.webp" />
                                                </span>
                                                    <div className="tooltip-lable">Quick view</div>
                                                </li>
                                                <li><a href="#"><FiHeart /></a>
                                                    <div className="tooltip-lable">Add to wishlist</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="image">
                                        <Link to="/Category">
                                            <img src="assets/img/prod-5-opt-430x468.jpg.webp" alt="" />
                                        </Link>
                                        <div className="top-info">
                                            <h3>
                                                <a href="#">Muffin Cake</a>
                                            </h3>
                                            <div className="products-cats">
                                                <a href="#">Sweets Bakery</a>
                                            </div>
                                        </div>
                                        <div className="bottom-info">
                                            <div className="price">$269.00</div>
                                        </div>
                                        <div className="cart-info">
                                            <ul className="info">
                                                <li><a href="#"><GrCart /></a>
                                                    <div className="tooltip-lable">Add to cart</div>
                                                </li>
                                                <li><a href="#"><TiArrowShuffle /></a>
                                                    <div className="tooltip-lable">Compare</div>
                                                </li>
                                                <li><span>
                                                    <Search item="Muffin Cake" disc="269.00" image="assets/img/prod-5-opt-430x468.jpg.webp" />
                                                </span>
                                                    <div className="tooltip-lable">Quick view</div>
                                                </li>
                                                <li><a href="#"><FiHeart /></a>
                                                    <div className="tooltip-lable">Add to wishlist</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="item">
                                <div className="item-inner">
                                    <div className="image">
                                        <Link to="/Category">
                                            <img src="assets/img/prod-6-opt-430x468.jpg.webp" alt="" />
                                        </Link>
                                        <div className="top-info">
                                            <h3>
                                                <a href="#">Berry Cupcakes</a>
                                            </h3>
                                            <div className="products-cats">
                                                <a href="#">Sweets Bakery</a>
                                            </div>
                                        </div>
                                        <div className="bottom-info">
                                            <div className="price">$256.00</div>
                                        </div>
                                        <div className="cart-info">
                                            <ul className="info">
                                                <li><a href="#"><GrCart /></a>
                                                    <div className="tooltip-lable">Add to cart</div>
                                                </li>
                                                <li><a href="#"><TiArrowShuffle /></a>
                                                    <div className="tooltip-lable">Compare</div>
                                                </li>
                                                <li><span>
                                                    <Search item="Berry Cupcakes" disc="256.00" image="assets/img/prod-6-opt-430x468.jpg.webp" />
                                                </span>
                                                    <div className="tooltip-lable">Quick view</div>
                                                </li>
                                                <li><a href="#"><FiHeart /></a>
                                                    <div className="tooltip-lable">Add to wishlist</div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="wraper">
                    <svg width="100%" height="50px" viewBox="0 0 1920 80" xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none">
                        <path d="M0 20C0 20 169.5 0 510 0C850.5 0 1069.5 60 1410 60C1750.5 60 1920 20 1920 20V80H0V20Z">
                        </path>
                    </svg>
                </div>
            </div>
        </>
    );
}

export default Product;