import React from "react";
import Header from "../components/HeaderComponent/Header";
import HeroBanner from "../components/HeroBannerComponent/HeroBanner";
import ProductList from "../components/ProductListComponent/ProductList";
import '../global.css';

const Home = () => {
    return (
        <div className="container">
            <Header />
            <div className="heroComponent">
                <HeroBanner />
            </div>
            <div className="productListComponent">
                <ProductList />
            </div>
        </div>
    );
}

export default Home;