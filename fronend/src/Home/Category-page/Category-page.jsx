import React from "react";

import Footer from "../Footer";
import Header from "../Header";
import Category from "./Category";
import Product_info from "./Product-info";
import Related_product from "./Related-product";
import Brand from "./Brand";

const Category_page = () => {
    return (
        <>
            <div className="category">
                <Header />
                <Category/>
                <Product_info/>
                <Related_product/>
                <Brand/>
                <Footer />
            </div>
        </>
    );
}

export default Category_page;