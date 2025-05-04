import React from "react";
import './HeroBanner.css';
import heroGraphic from '../../assets/images/heroGraphic.png';
import GeneralButton from "../xGeneralButtonComponent/GeneralButton";

const HeroBanner = () => {
    return (
        <div className="heroBanner">
            <div className="heroText">
                <div className="promo">
                    25% OFF
                    <span>Summer Sale</span>
                </div>
                <span className="subText">Discover our summer styles with discount</span>
                <GeneralButton text="Shop Now" />
            </div>
            <div className="heroImg">
                img
            </div>
        </div>
    );
}

export default HeroBanner;