import React, { useState } from 'react';
import { Button, Drawer } from 'antd';
import { FiHeart } from "react-icons/fi";
import { TiArrowShuffle } from "react-icons/ti";
import { GrCart } from "react-icons/gr";
import { EyeInvisibleOutlined, EyeTwoTone } from '@ant-design/icons';
import { Input, Space } from 'antd';
import { FaAngleDown } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import Login_drawer from './Create-Account/Login-drawer';
const Header = () => {

    const [open, setOpen] = useState(false);
    const showDrawer = () => {
        setOpen(true);
    };
    const onClose = () => {
        setOpen(false);
    };
    return (
        <>
            <div className="header-main">
                <div className="container">
                    <div className="header-main-inner">
                        <div className="logo">
                            <a href="#">
                                <img src="assets/img/wood-logo-dark.svg" alt="" />
                            </a>
                        </div>
                        <div className="menu">
                            <ul className="menu-inner">
                                <li className="title"><Link to="/">Home <div className="icon"><FaAngleDown /></div></Link>
                                    <ul className="sub-menu-home">
                                        <li><img src="assets/img/default.jpg" alt="" />
                                            <div className="demo-name">Demo Default</div>
                                        </li>
                                        <li><img src="assets/img/demo-furniture-2.jpg" alt="" />
                                            <div className="demo-name">Demo Furniture 2</div>
                                        </li>
                                        <li><img src="assets/img/demo-games-white-1.jpg" alt="" />
                                            <div className="demo-name">Demo Games</div>
                                        </li>
                                        <li><img src="assets/img/demo-mega-electronics.jpg" alt="" />
                                            <div className="demo-name">Demo Mega Electronics</div>
                                        </li>
                                        <li><img src="assets/img/preview-megamarket.jpg" alt="" />
                                            <div className="demo-name">Demo Megamarket</div>
                                        </li>
                                        <li><img src="assets/img/demo-black_friday.jpg" alt="" />
                                            <div className="demo-name">Demo Black Friday</div>
                                        </li>
                                        <li><img src="assets/img/handmade.jpg" alt="" />
                                            <div className="demo-name">Demo Handmade</div>
                                        </li>
                                        <li><img src="assets/img/Fashion-Colored1.jpg" alt="" />
                                            <div className="demo-name">Demo Fashion Color</div>
                                        </li>
                                        <li><img src="assets/img/preview-glasses.jpg" alt="" />
                                            <div className="demo-name">Demo Glasses</div>
                                        </li>
                                        <li><img src="assets/img/preview-retail-2.jpg" alt="" />
                                            <div className="demo-name">Demo Retail 2</div>
                                        </li>
                                    </ul>
                                </li>
                                <li className="title"><Link to="/Shop">shop <div className="icon"><FaAngleDown /></div></Link>
                                    <ul className="sub-menu">
                                        <li><Link to="/Indian_sweet">Indian Sweets</Link></li>
                                        <li><a href="#">Indian Sweets</a></li>
                                        <li><a href="#">Indian Sweets</a></li>
                                        <li><a href="#">Indian Sweets</a></li>
                                    </ul>
                                </li>
                                <li className="title"><a href="#">blog <div className="icon"><FaAngleDown /></div></a>
                                    <div className="sub-menu-blog">
                                        <ul className="item">
                                            <li className="heading"><a href="#">Blog types</a>
                                                <ul className="inner">
                                                    <li><a href="#">Alternative </a></li>
                                                    <li><a href="#">Small images</a></li>
                                                    <li><a href="#">Blog chess </a></li>
                                                    <li><a href="#">Masonry grid </a></li>
                                                    <li><a href="#">Meta on image</a></li>
                                                    <li><a href="#">Infinit scrolling</a></li>
                                                    <li><a href="#">Blog flat</a></li>
                                                    <li><a href="#">Default flat </a></li>
                                                    <li><a href="#">Blog mask</a></li>
                                                </ul>
                                            </li>
                                            <li className="heading"><a href="#">Single posts</a>
                                                <ul className="inner">
                                                    <li><a href="#">Post example #1</a></li>
                                                    <li><a href="#">Post example #2</a></li>
                                                    <li><a href="#">Post example #3</a></li>
                                                    <li><a href="#">Post example #4</a></li>
                                                    <li><a href="#">Post example #5</a></li>
                                                    <li><a href="#">Post example #6</a></li>
                                                    <li><a href="#">Post example #7</a></li>
                                                    <li><a href="#">Post example #8</a></li>
                                                    <li><a href="#">Post example #9</a></li>
                                                </ul>
                                            </li>
                                        </ul>
                                        <div className="item-2">
                                            <div class="head">Recent Posts</div>
                                            <ul class="recent-content">
                                                <li><a href="#"><img src="assets/img/blog-12-75x65.jpg" alt="" /></a>
                                                    <div class="profile-info">
                                                        <div class="info-title">
                                                            <a href="#">A companion for extra sleeping</a>
                                                        </div>
                                                        <div class="time">July 23, 2016</div>
                                                        <a href="#" class="comment">1 Comment</a>
                                                    </div>
                                                </li>
                                                <li><a href="#"><img src="assets/img/blog-11-75x65.jpg" alt="" /></a>
                                                    <div class="profile-info">
                                                        <div class="info-title">
                                                            <a href="#">Outdoor seating collection inspiration</a>
                                                        </div>
                                                        <div class="time">July 23, 2016</div>
                                                        <a href="#" class="comment">1 Comment</a>
                                                    </div>
                                                </li>
                                                <li><a href="#"><img src="assets/img/blog-17-75x65.jpg" alt="" /></a>
                                                    <div class="profile-info">
                                                        <div class="info-title">
                                                            <a href="#">Modular seating and table system</a>
                                                        </div>
                                                        <div class="time">July 23, 2016</div>
                                                        <a href="#" class="comment">No Comments</a>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                <li className="title"><a href="#">pages <div className="icon"><FaAngleDown /></div></a>
                                    <ul className="sub-menu-pages">
                                        <li className="heading"><a href="#">Demo layouts</a>
                                            <ul className="inner">
                                                <li><a href="#">Categories </a></li>
                                                <li><a href="#">Basic</a></li>
                                                <li><a href="#">Parallax </a></li>
                                                <li><a href="#">Infinite Scrolling</a></li>
                                                <li><a href="#">Boxed </a></li>
                                                <li><a href="#">Grid</a></li>
                                                <li><a href="#">Video</a></li>
                                                <li><a href="#">Fullscreen</a></li>
                                                <li><a href="#">Lookbook </a></li>
                                                <li><a href="#">Landing </a></li>
                                            </ul>
                                        </li>
                                        <li className="heading"><a href="#">Pre-built pages</a>
                                            <ul className="inner">
                                                <li><Link to="/Contact_us">Contact Us #1 </Link></li>
                                                <li><a href="#">Contact Us #2 </a></li>
                                                <li><a href="#">Contact Us #3 </a></li>
                                                <li><a href="#">Contact Us #4 </a></li>
                                                <li><a href="#">FAQs #1</a></li>
                                                <li><a href="#">FAQs #2</a></li>
                                                <li><a href="#">Our team </a></li>
                                                <li><Link to="/About_us">About Us #1</Link></li>
                                                <li><a href="#">About Us #2</a></li>
                                                <li><a href="#">About Me </a></li>

                                            </ul>
                                        </li>
                                        <li className="heading"><a href="#">Portfolio</a>
                                            <ul className="inner">
                                                <li><a href="#">Standard </a></li>
                                                <li><a href="#">Alternative </a></li>
                                                <li><a href="#">Text under image</a></li>
                                                <li><a href="#">Hover parallax</a></li>
                                                <li><a href="#">Portfolio fullwidth </a></li>
                                                <li><a href="#">Infinit scrolling</a></li>
                                                <li><a href="#">Single - sticky </a></li>
                                                <li><a href="#">Single - alternative </a></li>
                                                <li><a href="#">Single - gallery </a></li>
                                                <li><a href="#">Single - video </a></li>
                                            </ul>
                                        </li>
                                        <li className="heading"><a href="#">Headers</a>
                                            <ul className="inner">
                                                <li><a href="#">Advanced </a></li>
                                                <li><a href="#">E-Commerce </a></li>
                                                <li><a href="#">Header base </a></li>
                                                <li><a href="#">Header base </a></li>
                                                <li><a href="#">Double menu </a></li>
                                                <li><a href="#">Logo center </a></li>
                                                <li><a href="#">With categories menu </a></li>
                                                <li><a href="#">Menu in top bar </a></li>
                                                <li><a href="#">Dark header </a></li>
                                                <li><a href="#">Colored header </a></li>
                                            </ul>
                                        </li>
                                    </ul>
                                </li>
                                <li className="title"><a href="#">elementa <div className="icon"><FaAngleDown /></div></a></li>
                                <li className="title"><a href="#">buy</a></li>
                            </ul>
                        </div>
                        <div className="cart-info">
                            <div className="my-account">
                                <Button type="primary" onClick={showDrawer}>
                                    Login / Register
                                </Button>
                                <Drawer title="Sign in" onClose={onClose} open={open}>
                                    <Login_drawer />
                                </Drawer>
                            </div>
                            <div className="icons">
                                <div className="icon">
                                    <a href="#"><FiHeart /></a>
                                </div>
                                <div className="icon">
                                    <a href="#"><TiArrowShuffle /></a>
                                </div>
                                <div className="icon">
                                    <a href="#"><GrCart /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default Header;