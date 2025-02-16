import React from "react";
import { FaAngleRight } from "react-icons/fa6";
const Description = () => {
    return (
        <>
            <div className="description-containt">
                <div className="content-inner">
                    <div className="item">
                        <div className="item-inner">
                            <div className="content-title">MAECENAS IACULIS</div>
                            <div className="content">
                                <p>
                                    <img src="assets/img/brand-Rosenthal-blog.png" alt="" />
                                    Nunc per mollis pot enti amet imperdiet blandit dis eu sociosqu accumsan dap ibus ultricies tristique montes a deros adipiscing a justo. Aliquet mus a aptent ullamcorper metus accumsan. Habitasse a purus nec ipsum a urna ac ullamcorper varius metus blandit posuere.
                                </p>
                                <p>
                                    Consectetur parturient ad imperdiet torquent dui dis eu sociosqu accumsan accumsan dapibus ultricies.&nbsp;Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibur.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-inner">
                            <div className="content-title">FEUGIAT PARTURIENT</div>
                            <div className="content">
                                <p>
                                    Venenatis duis tristique accumsan netus enim in posuere torquent ut ullamcorper integer aliquam a mi curae elementum. Maecenas iaculis viverra tellus ridiculus a sed vestibulum dapibus. Ante a mollis habitant duis urna cum iaculis ullamcorper luctus.
                                </p>
                                <ul className="unorederd-list">
                                    <li><FaAngleRight />65% Polyester, 23% Elastane</li>
                                    <li><FaAngleRight />Abitur parturient praesent ipsu</li>
                                    <li><FaAngleRight />Minceptos pri 187cm/3’1.3″ tall</li>
                                    <li><FaAngleRight />Diam parturient dictumst nibh mu</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item-inner">
                            <div className="content-title">FEUGIAT PARTURIENT</div>
                            <div className="content">
                                <p>
                                    Model’s height: 4’2.2”/184 cm<br />
                                    Model is wearing: Size&nbsp;Large
                                </p>
                                <div className="title">
                                    ALIQUET
                                </div>
                                <p>Quam suspendisse adipiscing quis pretium nostra cubilia tristique nam non ac placerat nascetur a vel.</p>
                                <div className="title">CURABITUR VELIT</div>
                                <p>Main: 76% Polyester, 24% Elastane.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Description;