import React from "react";
import Header from "../components/HeaderComponent/Header";
import HeroBanner from "../components/HeroBannerComponent/HeroBanner";

const Home = () => {
    return (
        <div className="container">
            <Header />
            <div className="heroComponent">
                <HeroBanner />
            </div>
        </div>
    );
}

export default Home;