import React, { useState } from 'react';
import {
    Button,
    Modal,
    Space,
} from 'antd';
import { Breadcrumb } from 'antd';
import { TiArrowShuffle } from "react-icons/ti";
import { FiHeart } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaPinterest } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import { IoSearch } from 'react-icons/io5';
// import Product_search from './Product-search';
dayjs.locale('en');

const Search = (props) => {
    const [open, setOpen] = useState(false);
    const showModal = () => {
        setOpen(true);
    };
    const hideModal = () => {
        setOpen(false);
    };


    return (
        <>

            <Space wrap>
                <Button type="primary" onClick={showModal}>
                    <IoSearch />
                </Button>
            </Space>


            <Modal open={open} onCancel={hideModal}>

                <div className="Product-main">
                    <div className="Product-main-inner">
                        <div className="block-left">
                            <div className="block-left-inner">
                                <div className="product-img">
                                    <a href="#">
                                        <img src={props.image} alt="" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="block-right">
                            <div className="block-right-inner">
                                {/* <div className="path">
                                    <div className="breadcrumb">
                                        <Breadcrumb
                                            items={[
                                                {
                                                    title: 'Home',
                                                },
                                                {
                                                    title: <a href="">Shop</a>
                                                },
                                                {
                                                    title: <a href="">Sweets Bakery</a>,
                                                },
                                                {
                                                    title: 'White Cake',
                                                },
                                            ]}
                                        />
                                    </div>
                                </div> */}
                                <h1 className="product-title">
                                   {props.item}
                                </h1>
                                <p className="price">
                                    <div className="raguler-price">{props.reguler}</div>
                                    <div className="discount-price">
                                    ${props.disc}
                                    </div>
                                </p>
                                <div className="short-desc">
                                    <p>Erat orci consectetur consectetur consectetur eleifend habitasse est non aenean accumsan risus adipiscing laoreet risus. Libero sed consectetur sit taciti montes suspendisse adipiscing a ligula adipiscing arcu rutrum in praesent nec suspendisse a nec condimentum eu elementum. Mauris mollis a per ipsum nulla eget consectetur egestas iaculis adipiscing at a vestibulum montes sagittis sed pharetra lectus massa eu ut fermentum.</p>
                                </div>
                                <form method="post" className="cart">
                                    <div className="peoducts">
                                        <button type="button" onclick="down();">-</button>
                                        <input type="text" id="quantity" value="0" />
                                        <button type="button" onclick="up();">+</button>
                                    </div>
                                    <div className="add-cart">
                                        <button type="button">
                                            Add to cart
                                        </button>
                                    </div>
                                </form>
                                <div className="product-facility">
                                    <div className="compare">
                                        <a href="#">
                                            <div className="icon"><TiArrowShuffle /></div>
                                            <span>Compare</span>
                                        </a>
                                        <a href="#">
                                            <div className="icon"><FiHeart /></div>
                                            <span>Add to wishlist</span>
                                        </a>
                                    </div>
                                </div>
                                <div className="product-meta">
                                    <span className="meta-lable">
                                        Category:
                                    </span>
                                    <a href="#">Sweets Bakery</a>
                                </div>
                                <div className="share">
                                    <span className="share-title">
                                        Share:
                                    </span>
                                    <div className="social-icon">
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
                            </div>
                        </div>
                    </div>
                </div>
            </Modal>

        </>
    );
};
export default Search;