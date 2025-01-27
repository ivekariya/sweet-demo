import React from "react";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { FaRegCommentAlt } from "react-icons/fa";
import { GoShareAndroid } from "react-icons/go";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
const Artical = () => {
    const options = {
        loop: true,
        dots: false,
        nav: true,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 3
            },
            1000: {
                items: 3
            }
        }
    }
    return (
        <>

            <div className="artical-main">
                <div className="container">
                    <div className="artical-main-inner">
                        <div className="artical-title">
                            <div className="sub-title">Share Best News</div>
                            <div className="liner-container">
                                <h4>Our New Articles</h4>
                            </div>
                            <p>Commercial publishing platforms and content management systems ensure that you can show different text product.</p>
                        </div>
                        <div className="artical-info">
                            <OwlCarousel className='owl-theme banner' loop  {...options} >
                                <div className="item">
                                    <div className="item-inner">
                                        <div className="image">
                                            <a href="#">
                                                <img src="assets/img/bakery-blog-img-1.jpg" alt="" />
                                            </a>
                                            <div className="blog-contant">
                                                <div className="category-wrapper">
                                                    <a href="#">Design trends</a>,
                                                    <a href="#">Furniture</a>
                                                </div>
                                                <div className="post-title">
                                                    <a href="#">Seating collection inspiration</a>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul className="entry-meta-deta">
                                                        <li className="author"><span>Posted by</span><img src="assets/img/avatar-home.jpg" alt="" /><a href="#"><span>S. Rogers</span></a></li>
                                                        <li className="reply"><a href="#"><FaRegCommentAlt />
                                                        <span className="replies-count">1</span></a></li>
                                                        <li className="share"><GoShareAndroid />
                                                            <div className="label">
                                                                <div className="lable-inner">
                                                                    <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwoodmart.xtemos.com%252F2016%252F07%252F23%252Fseating-collection-inspiration%252Fdemo%252Fsweets-bakery%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"><span><FaFacebookF /></span></a>
                                                                    <a href="https://twitter.com/intent/post?url=https%3A%2F%2Fwoodmart.xtemos.com%2F2016%2F07%2F23%2Fseating-collection-inspiration%2Fdemo%2Fsweets-bakery%2F">
                                                                        <span><FaXTwitter /></span>
                                                                    </a>
                                                                    <a href="https://www.pinterest.com/pin/create/button/?url=https://woodmart.xtemos.com/2016/07/23/seating-collection-inspiration/demo/sweets-bakery/&media=https://woodmart.xtemos.com/wp-content/uploads/2019/07/bakery-blog-img-1.jpg&description=Seating+collection+inspiration">
                                                                        <span><FaPinterest /></span>
                                                                    </a>
                                                                    <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwoodmart.xtemos.com%2F2016%2F07%2F23%2Fseating-collection-inspiration%2Fdemo%2Fsweets-bakery%2F">
                                                                        <span><FaLinkedinIn /></span>
                                                                    </a>
                                                                    <a href="https://telegram.me/share/url?url=https://woodmart.xtemos.com/2016/07/23/seating-collection-inspiration/demo/sweets-bakery/">
                                                                        <span><FaTelegram /></span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-inner">
                                        <div className="image">
                                            <a href="#">
                                                <img src="assets/img/bakery-blog-img-2.jpg" alt="" />
                                            </a>
                                            <div className="blog-contant">
                                                <div className="category-wrapper">
                                                    <a href="#">Design trends</a>,
                                                    <a href="#">Hand made</a>
                                                </div>
                                                <div className="post-title">
                                                    <a href="#">Green interior design inspiration</a>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul className="entry-meta-deta">
                                                        <li className="author"><span>Posted by</span><img src="assets/img/avatar-home.jpg" alt="" /><a href="#"><span>S. Rogers</span></a></li>
                                                        <li className="reply"><a href="#"><FaRegCommentAlt />
                                                        <span className="replies-count">0</span></a></li>
                                                        <li className="share"><GoShareAndroid />
                                                            <div className="label">
                                                                <div className="lable-inner">
                                                                    <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwoodmart.xtemos.com%252F2016%252F07%252F23%252Fseating-collection-inspiration%252Fdemo%252Fsweets-bakery%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"><span><FaFacebookF /></span></a>
                                                                    <a href="https://twitter.com/intent/post?url=https%3A%2F%2Fwoodmart.xtemos.com%2F2016%2F07%2F23%2Fseating-collection-inspiration%2Fdemo%2Fsweets-bakery%2F">
                                                                        <span><FaXTwitter /></span>
                                                                    </a>
                                                                    <a href="https://www.pinterest.com/pin/create/button/?url=https://woodmart.xtemos.com/2016/07/23/seating-collection-inspiration/demo/sweets-bakery/&media=https://woodmart.xtemos.com/wp-content/uploads/2019/07/bakery-blog-img-1.jpg&description=Seating+collection+inspiration">
                                                                        <span><FaPinterest /></span>
                                                                    </a>
                                                                    <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwoodmart.xtemos.com%2F2016%2F07%2F23%2Fseating-collection-inspiration%2Fdemo%2Fsweets-bakery%2F">
                                                                        <span><FaLinkedinIn /></span>
                                                                    </a>
                                                                    <a href="https://telegram.me/share/url?url=https://woodmart.xtemos.com/2016/07/23/seating-collection-inspiration/demo/sweets-bakery/">
                                                                        <span><FaTelegram /></span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-inner">
                                        <div className="image">
                                            <a href="#">
                                                <img src="assets/img/bakery-blog-img-3.jpg" alt="" />
                                            </a>
                                            <div className="blog-contant">
                                                <div className="category-wrapper">
                                                    <a href="#">Design trends</a>,
                                                    <a href="#">Furniture</a>
                                                </div>
                                                <div className="post-title">
                                                    <a href="#">Minimalist design furniture 2024</a>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul className="entry-meta-deta">
                                                        <li className="author"><span>Posted by</span><img src="assets/img/avatar-home.jpg" alt="" /><a href="#"><span>S. Rogers</span></a></li>
                                                        <li className="reply"><a href="#"><FaRegCommentAlt />
                                                        <span className="replies-count">3</span></a></li>
                                                        <li className="share"><GoShareAndroid />
                                                            <div className="label">
                                                                <div className="lable-inner">
                                                                    <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwoodmart.xtemos.com%252F2016%252F07%252F23%252Fseating-collection-inspiration%252Fdemo%252Fsweets-bakery%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"><span><FaFacebookF /></span></a>
                                                                    <a href="https://twitter.com/intent/post?url=https%3A%2F%2Fwoodmart.xtemos.com%2F2016%2F07%2F23%2Fseating-collection-inspiration%2Fdemo%2Fsweets-bakery%2F">
                                                                        <span><FaXTwitter /></span>
                                                                    </a>
                                                                    <a href="https://www.pinterest.com/pin/create/button/?url=https://woodmart.xtemos.com/2016/07/23/seating-collection-inspiration/demo/sweets-bakery/&media=https://woodmart.xtemos.com/wp-content/uploads/2019/07/bakery-blog-img-1.jpg&description=Seating+collection+inspiration">
                                                                        <span><FaPinterest /></span>
                                                                    </a>
                                                                    <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwoodmart.xtemos.com%2F2016%2F07%2F23%2Fseating-collection-inspiration%2Fdemo%2Fsweets-bakery%2F">
                                                                        <span><FaLinkedinIn /></span>
                                                                    </a>
                                                                    <a href="https://telegram.me/share/url?url=https://woodmart.xtemos.com/2016/07/23/seating-collection-inspiration/demo/sweets-bakery/">
                                                                        <span><FaTelegram /></span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="item">
                                    <div className="item-inner">
                                        <div className="image">
                                            <a href="#">
                                                <img src="assets/img/bakery-blog-img-4.jpg" alt="" />
                                            </a>
                                            <div className="blog-contant">
                                                <div className="category-wrapper">
                                                    <a href="#">Design trends</a>,
                                                    <a href="#">Inspiration</a>
                                                </div>
                                                <div className="post-title">
                                                    <a href="#">Reinterprets the classic bookshelf</a>
                                                </div>
                                                <div className="entry-meta">
                                                    <ul className="entry-meta-deta">
                                                        <li className="author"><span>Posted by</span><img src="assets/img/avatar-home.jpg" alt="" /><a href="#"><span>S. Rogers</span></a></li>
                                                        <li className="reply"><a href="#"><FaRegCommentAlt />
                                                        <span className="replies-count">1</span></a></li>
                                                        <li className="share"><GoShareAndroid />
                                                            <div className="label">
                                                                <div className="lable-inner">
                                                                    <a href="https://www.facebook.com/login.php?skip_api_login=1&api_key=966242223397117&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fsharer%2Fsharer.php%3Fu%3Dhttps%253A%252F%252Fwoodmart.xtemos.com%252F2016%252F07%252F23%252Fseating-collection-inspiration%252Fdemo%252Fsweets-bakery%252F&cancel_url=https%3A%2F%2Fwww.facebook.com%2Fdialog%2Fclose_window%2F%3Fapp_id%3D966242223397117%26connect%3D0%23_%3D_&display=popup&locale=en_GB"><span><FaFacebookF /></span></a>
                                                                    <a href="https://twitter.com/intent/post?url=https%3A%2F%2Fwoodmart.xtemos.com%2F2016%2F07%2F23%2Fseating-collection-inspiration%2Fdemo%2Fsweets-bakery%2F">
                                                                        <span><FaXTwitter /></span>
                                                                    </a>
                                                                    <a href="https://www.pinterest.com/pin/create/button/?url=https://woodmart.xtemos.com/2016/07/23/seating-collection-inspiration/demo/sweets-bakery/&media=https://woodmart.xtemos.com/wp-content/uploads/2019/07/bakery-blog-img-1.jpg&description=Seating+collection+inspiration">
                                                                        <span><FaPinterest /></span>
                                                                    </a>
                                                                    <a href="https://www.linkedin.com/uas/login?session_redirect=https%3A%2F%2Fwww.linkedin.com%2FshareArticle%3Fmini%3Dtrue%26url%3Dhttps%3A%2F%2Fwoodmart.xtemos.com%2F2016%2F07%2F23%2Fseating-collection-inspiration%2Fdemo%2Fsweets-bakery%2F">
                                                                        <span><FaLinkedinIn /></span>
                                                                    </a>
                                                                    <a href="https://telegram.me/share/url?url=https://woodmart.xtemos.com/2016/07/23/seating-collection-inspiration/demo/sweets-bakery/">
                                                                        <span><FaTelegram /></span>
                                                                    </a>
                                                                </div>
                                                            </div>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
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

export default Artical;