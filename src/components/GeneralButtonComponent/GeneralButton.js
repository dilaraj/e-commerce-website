import React from "react";
import './GeneralButton.css';

const GeneralButton = ({ btnText, icon, className, onClick }) => {
    return (
        <button className="generalBtn addToCartBtn" onClick={onClick}>
            {btnText}
            <span>
                {icon}
            </span>
        </button>
    );
}

export default GeneralButton;