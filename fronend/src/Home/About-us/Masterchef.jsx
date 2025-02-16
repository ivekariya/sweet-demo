import React from "react";

const Masterchef = () => {
    return (
        <>
            <div className="masterchef-main">
                <div className="masterchef-main-inner">
                    <div className="block-main">
                        <div className="image">
                            <img src="assets/img/old_man.png" alt="" />
                        </div>
                        <div className="content">
                            <div className="title">
                                <img class="top" src="assets/img/divider_4.png" alt="" />
                                <h2>Alex Doe</h2>
                                <span>Masterchef</span>
                                <img class="bottom" src="assets/img/divider_5.png" alt="" />
                            </div>
                            <div className="desc">
                                <p>
                                    Maria is a Roman-born pastry chef who spent 15 years in his city Rome perfecting his craft and exceptional creations. Vestibulum rhoncus ornare tincidunt. Etiam pretium metus sit amet est aliquet vulputate. Fusce et cursus ligula. Sed accumsan dictum porta. Aliquam rutrum ullamcorper velit hendrerit convallis.
                                </p>
                            </div>
                            <div className="service">
                                <a href="#" class="bellaria_button regular figure"><span></span>Our Services<span></span></a>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div className="desing">
                <svg width="100%" height="50px" viewBox="0 0 1920 80" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none"><path d="M0 20C0 20 169.5 0 510 0C850.5 0 1069.5 60 1410 60C1750.5 60 1920 20 1920 20V80H0V20Z"></path></svg>
                </div> */}
            </div>

        </>
    );
}

export default Masterchef;