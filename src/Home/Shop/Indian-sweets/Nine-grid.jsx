import React from "react";
import ReadMore from "../Read-more";
const Nine_grid = () => {
    const longText = "  Erat orci consectetur consectetur consectetur eleifend habitasse est non aenean accumsan risus adipiscing laoreet risus. Libero sed consectetur sit taciti montes suspendisse adipiscing a ligula adipiscing arcu rutrum in praesent nec suspendisse a nec condimentum eu elementum. Mauris mollis a per ipsum nulla eget consectetur egestas iaculis adipiscing at a vestibulum montes sagittis sed pharetra lectus massa eu ut fermentum.	";
    return (
        <>
            <div className="nine-grid-main">
                <div className='item'>
                    <div className="item-inner">
                        <div className="image">
                            <a href="#">
                                <img src="assets/img/gulab-jambun.png" alt="" />
                            </a>
                        </div>
                        <div className="contant">
                            <h3><a href="#">Gulab jamun</a></h3>
                            <div className="product-cats">
                                <a href="#">Sweets Bakery</a>
                            </div>
                            <div className="price">$250.00</div>
                            <div className="desc">
                                <ReadMore text={longText} maxLength={100} />
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
                                <img src="assets/img/kesar-peda.webp" alt="" />
                            </a>
                        </div>
                        <div className="contant">
                            <h3><a href="#">Kesar Peda</a></h3>
                            <div className="product-cats">
                                <a href="#">Sweets Bakery</a>
                            </div>
                            <div className="price">$249.00</div>
                            <div className="desc">
                                <ReadMore text={longText} maxLength={100} />
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
                                <img src="assets/img/jalebi.jpg" alt="" />
                            </a>
                        </div>
                        <div className="contant">
                            <h3><a href="#">Jalebi </a></h3>
                            <div className="product-cats">
                                <a href="#">Sweets Bakery</a>
                            </div>
                            <div className="price">$199.00</div>
                            <div className="desc">
                                <ReadMore text={longText} maxLength={100} />
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
                                <img src="assets/img/laddo.avif" alt="" />
                            </a>
                        </div>
                        <div className="contant">
                            <h3><a href="#"> motichoor laddu </a></h3>
                            <div className="product-cats">
                                <a href="#">Sweets Bakery</a>
                            </div>
                            <div className="price">$269.00</div>
                            <div className="desc">
                                <ReadMore text={longText} maxLength={100} />
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
                                <img src="assets/img/kaju-katli2.webp" alt="" />
                            </a>
                        </div>
                        <div className="contant">
                            <h3><a href="#">Kaju Katli</a></h3>
                            <div className="product-cats">
                                <a href="#">Sweets Bakery</a>
                            </div>
                            <div className="price">$189.00</div>
                            <div className="desc">
                                <ReadMore text={longText} maxLength={100} />
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

export default Nine_grid;