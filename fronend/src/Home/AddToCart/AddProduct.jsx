import React from "react";

const AddProduct = () => {
    return (
        <>
            <div className="addpro-main">
                <div className="image">
                    <img src="assets/img/prod-1-opt-430x468.jpg.webp" alt="" />
                </div>
                <div className="info">
                    <span className="product-name">
                        White Cake
                    </span>
                    <div className="quantity">
                        <button type="button">-</button>
                        <input type="text" id="quantity" value="0" name="quantity" />
                        <button type="button">+</button>
                    </div>
                    <div className="price">
                        <span className="quan">
                            1 × 
                        </span>
                        <span className="pri">
                            <span className="symbol"> $</span>
                            119.00
                        </span>
                    </div>
                </div>
                <div className="cancel">
                    
                </div>
            </div>
        </>
    );
}

export default AddProduct;