import React from "react";
import './Header.css';
import logo from '../../assets/images/logo.png';
import { Link } from "react-router-dom";

import ViewCart from "../ViewCartComponent/ViewCart";

const Home = () => {
    return (
        <div className="header">
            <div>
                <Link to='/' style={{textDecoration: 'none'}} className="headerLink">
                    <img src={logo} alt="Logo" />
                    <div className="brandName">SUN CO.</div>
                </Link>
            </div>

            <ViewCart label="View Cart"/>
        </div>
    );
}

export default Home;