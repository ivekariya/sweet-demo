import React from "react";
import { GrCart } from "react-icons/gr"; 
import { ImCross } from "react-icons/im";
const Add_to_cart = () => {
    return (
        <>
            <div className="cart-main">
                <div className="empty-cat">
                    <div className="cart"><span className="cart-icon"><GrCart /></span>
                        <span className="cross"><ImCross /></span>
                    </div>
                    <div className="message-title">No products in the cart.</div>
                    <a href="#">Return To Shop</a>
                </div>
            </div>
        </>
    );
}

export default Add_to_cart;