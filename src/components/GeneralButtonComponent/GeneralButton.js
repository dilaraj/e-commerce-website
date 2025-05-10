import React from "react";
import './GeneralButton.css';

const GeneralButton = ({ btnText, icon, className }) => {
    return (
        <button className="generalBtn addToCartBtn">
            {btnText}
            <span>
                {icon}
            </span>
        </button>
    );
}

export default GeneralButton;