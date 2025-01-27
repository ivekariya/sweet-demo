import React from "react";
import { useState } from "react";
import { Tabs } from 'antd';
import Description from "./Description";
import Review from "./Review";
import Delivery from "./Delivery";

const Product_info = () => {
    const onChange = (key) => {
        console.log(key);
    };

    const items = [
        {
            key: '1',
            label: 'Description',
            children: <Description />
        },
        {
            key: '2',
            label: 'Reviews (0)',
            children: <Review />
        },
        {
            key: '3',
            label: 'Shipping & Delivery ',
            children: <Delivery />
        },
    ];
    return (
        <>
            <div className="product-info-main">
                <div className="container">
                    <div className="product-info-main-inner">
                            <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product_info;