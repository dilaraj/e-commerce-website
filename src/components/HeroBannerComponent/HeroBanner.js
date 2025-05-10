import React from "react";
import './HeroBanner.css';
import heroGraphic from '../../assets/images/heroGraphic.png';
import GeneralButton from '../GeneralButtonComponent/GeneralButton';
import { FaArrowRight } from "react-icons/fa";

const HeroBanner = () => {
    return (
        <div className="heroBanner">
            <div className="heroText">
                <div className="promo">
                    25% OFF
                    <span>Summer Sale</span>
                </div>
                <span className="subText">Discover our summer styles with discount</span>
                <GeneralButton btnText="Shop Now" icon={<FaArrowRight />}/>
            </div>
            <div className="heroImg">
                <img src={heroGraphic} alt="Shoes Hero Graphic"/>
            </div>
        </div>
    );
}

export default HeroBanner;