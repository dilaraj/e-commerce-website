import React from "react";
import './Header.css';
import logo from '../../assets/images/logo.png';

import ViewCart from "../ViewCartComponent/ViewCart";

const Home = () => {
    return (
        <div className="header">
            <div>
                <img src={logo} alt="Logo" />
                <div className="brandName">SUN CO.</div>
            </div>

            <ViewCart label="View Cart"/>
        </div>
    );
}

export default Home;