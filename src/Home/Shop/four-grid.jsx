import React from "react";
import ReadMore from "./Read-more";
// import { GrCart } from "react-icons/gr";
// // import { TiArrowShuffle } from "react-icons/ti";
// import { IoSearch } from "react-icons/io5";
// import { FiHeart } from "react-icons/fi";
const Four_grid = () => {
    const longText = "  Erat orci consectetur consectetur consectetur eleifend habitasse est non aenean accumsan risus adipiscing laoreet risus. Libero sed consectetur sit taciti montes suspendisse adipiscing a ligula adipiscing arcu rutrum in praesent nec suspendisse a nec condimentum eu elementum. Mauris mollis a per ipsum nulla eget consectetur egestas iaculis adipiscing at a vestibulum montes sagittis sed pharetra lectus massa eu ut fermentum.	";
    return (
        <>
            <div className="four-grid-main">
                <div className='item'>
                    <div className="item-inner">
                        <div className="image">
                            <a href="#">
                                <img src="assets/img/prod-6-opt-430x468.jpg.webp" alt="" />
                            </a>
                        </div>
                        <div className="contant">
                            <h3><a href="#">Berry Cupcakes</a></h3>
                            <div className="product-cats">
                                <a href="#">Sweets Bakery</a>
                            </div>
                            <div className="price">$256.00</div>
                            <div className="desc">
                                <ReadMore text={longText} maxLength={170} />
                            </div>
                            <a href="#" className="add">
                                Add to cart
                            </a>
                        </div>

                    </div>
                </div>
                <div className='item'>
                    <div className="item-inner">
                        <div className="image">
                            <a href="#">
                                <img src="assets/img/prod-3-opt-430x468.jpg.webp" alt="" />
                            </a>
                        </div>
                        <div className="contant">
                            <h3><a href="#">Chocolate Cake</a></h3>
                            <div className="product-cats">
                                <a href="#">Sweets Bakery</a>
                            </div>
                            <div className="price">$249.00</div>
                            <div className="desc">
                                <ReadMore text={longText} maxLength={170} />
                            </div>
                            <a href="#" className="add">
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="item-inner">
                        <div className="image">
                            <a href="#">
                                <img src="assets/img/prod-4-opt-430x468.jpg.webp" alt="" />
                            </a>
                        </div>
                        <div className="contant">
                            <h3><a href="#">Honey Waffles</a></h3>
                            <div className="product-cats">
                                <a href="#">Sweets Bakery</a>
                            </div>
                            <div className="price">$199.00</div>
                            <div className="desc">
                                <ReadMore text={longText} maxLength={170} />
                            </div>
                            <a href="#" className="add">
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="item-inner">
                        <div className="image">
                            <a href="#">
                                <img src="assets/img/prod-5-opt-430x468.jpg.webp" alt="" />
                            </a>
                        </div>
                        <div className="contant">
                            <h3><a href="#">Muffin Cake</a></h3>
                            <div className="product-cats">
                                <a href="#">Sweets Bakery</a>
                            </div>
                            <div className="price">$269.00</div>
                            <div className="desc">
                                <ReadMore text={longText} maxLength={170} />
                            </div>
                            <a href="#" className="add">
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>
                <div className='item'>
                    <div className="item-inner">
                        <div className="image">
                            <a href="#">
                                <img src="assets/img/prod-2-opt-430x468.jpg.webp" alt="" />
                            </a>
                        </div>
                        <div className="contant">
                            <h3><a href="#">Rasbarry Pie</a></h3>
                            <div className="product-cats">
                                <a href="#">Sweets Bakery</a>
                            </div>
                            <div className="price">$189.00</div>
                            <div className="desc">
                                <ReadMore text={longText} maxLength={170} />
                            </div>
                            <a href="#" className="add">
                                Add to cart
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Four_grid;