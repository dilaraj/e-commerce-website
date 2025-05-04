import React from "react";
import './Footer.css';
import logo from '../../assets/images/logo.png';
import instagram from '../../assets/images/Instagram.png';
import twitter from '../../assets/images/Twitter.png';
import youtube from '../../assets/images/Youtube.png';

const Footer = () => {
    return (
        <div className="footerContainer">
            <div className="logo">
                <img src={logo} alt="Sun Co. Logo" />
                <span>SUN CO.</span>
            </div>
            <div className="copyright">
                © 2023 dot.cards text task. All rights reserved
            </div>
            <div className="socialBtns">
                <img src={instagram} alt="Instagram Icon" className="social" />
                <img src={twitter} alt="Twitter Icon" className="social" />
                <img src={youtube} alt="Youtube Icon" className="social" />
            </div>
        </div>
    );
}

export default Footer;