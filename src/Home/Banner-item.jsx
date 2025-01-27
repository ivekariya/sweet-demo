import React from "react";

const CarouselItem = (props) => {
    return (
        <>
            <div className='item'>
                <div className="banner-main">
                    <div className="container container-move">
                        <div className="banner-main-inner">
                            <div className="image">
                                <div className="wraper">
                                    <div className="title zoom-in">
                                        <p>{props.title}</p>
                                    </div>
                                    <div className="item-contant">
                                        <p>{props.left}</p>
                                        <div className="zoom-in">
                                            <div className="small-img">
                                                <img src={props.content_image} alt="" />
                                            </div>
                                        </div>
                                        <p>{props.right}</p>
                                    </div>
                                    <img className="zoom-in" src={props.image} alt="" />
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
        </>
    );
}

export default CarouselItem;