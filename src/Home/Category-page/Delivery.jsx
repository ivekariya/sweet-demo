import React from "react";
import { FaAngleRight } from "react-icons/fa6";
const Delivery = () => {
    return (
        <>
            <div className="delivery-content">
                <div className="delivery-content-inner">
                    <div className="block-left">
                        <div className="block-left-inner">
                            <div className="image">
                                <img src="assets/img/wood-ship-1.jpg" alt="" />
                            </div>
                            <div className="image">
                                <img src="assets/img/wood-ship-3.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="block-right">
                        <div className="block-right-inner">
                            <div className="title">
                                <strong>MAECENAS IACULIS</strong>
                            </div>
                            <p>Vestibulum curae torquent diam diam commodo parturient penatibus nunc dui adipiscing convallis bulum parturient suspendisse parturient a.Parturient in parturient scelerisque nibh lectus quam a natoque adipiscing a vestibulum hendrerit et pharetra fames nunc natoque&nbsp;dui.</p>
                            <div className="title">
                                <strong>ADIPISCING CONVALLIS BULUM</strong>
                            </div>
                            <ul className="list">
                                <li><div className="icon"><FaAngleRight /></div>Vestibulum penatibus nunc dui adipiscing convallis bulum parturient suspendisse.</li>
                                <li><div className="icon"><FaAngleRight /></div>Abitur parturient praesent lectus quam a natoque adipiscing a vestibulum hendre.</li>
                                <li><div className="icon"><FaAngleRight /></div>Diam parturient dictumst parturient scelerisque nibh lectus.</li>
                            </ul>
                            <p className="bottom">
                                Scelerisque adipiscing bibendum sem vestibulum et in a a a purus lectus faucibus lobortis tincidunt purus lectus nisl class eros.Condimentum a et ullamcorper dictumst mus et tristique elementum nam inceptos hac parturient scelerisque&nbsp;vestibulum amet elit ut volutpat.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Delivery;