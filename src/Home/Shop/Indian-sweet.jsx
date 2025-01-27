import React from "react";
import Header from "../Header";
import Footer from "../Footer";
import Shop_banner from "./Shop-banner";
import { Breadcrumb } from 'antd';
import { LiaBarsSolid } from "react-icons/lia";
import { TfiLayoutGrid2 } from "react-icons/tfi";
import { TfiLayoutGrid3Alt } from "react-icons/tfi";
import { TfiLayoutGrid4Alt } from "react-icons/tfi";
import { Tabs } from 'antd';

import Bar from "./Indian-sweets/Bar";
import Four_grid from "./Indian-sweets/four-grid";
import Nine_grid from "./Indian-sweets/Nine-grid";
import Six_grid from "./Indian-sweets/Six-grid";
const Indian_sweet = () => {
    const onChange = (key) => {
        console.log(key);
    };
    const items = [
        {
            key: '1',
            label: <LiaBarsSolid />,
            children: <Bar/>
        },
        {
            key: '2',
            label: <TfiLayoutGrid2 />,
            children: <Four_grid/>
        },
        {
            key: '3',
            label: <TfiLayoutGrid3Alt />,
            children: <Nine_grid />
        },
        {
            key: '4',
            label: <TfiLayoutGrid4Alt />,
            children: <Six_grid />
        },
    ];
    return (
        <>
            <Header />
            <Shop_banner />
            <div className="shop-content-main">
                <div className="container">
                    <div className="shop-content-main-inner">
                        <div className="block-left">
                            <div className="block-left-inner">
                                <div className="price-filter">
                                    <h2 className="title">Filter by price</h2>
                                    <form method="post">
                                        <div className="price-slider">
                                            <div className="slider">
                                                <div class="ui-slider-range ui-corner-all ui-widget-header"></div>
                                                <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                                                <span tabindex="0" class="ui-slider-handle ui-corner-all ui-state-default"></span>
                                            </div>
                                            <div className="amount">
                                                <div className="price-lable">
                                                    Price: <span class="from">$130</span> — <span class="to">$200</span>
                                                </div>
                                                <button className="filter" type="submit">Filter</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="block-right">
                            <div className="block-right-inner">
                                <div className="shop-loop-head">
                                    <div className="path">
                                        <Breadcrumb
                                            items={[
                                                {
                                                    title: 'Home',
                                                },
                                                {
                                                    title: <a href="">Shop</a>,
                                                },
                                                {
                                                    title: 'Sweet Bakery',
                                                },
                                            ]}
                                        />
                                    </div>
                                    <div className="grid-list">
                                        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Indian_sweet;