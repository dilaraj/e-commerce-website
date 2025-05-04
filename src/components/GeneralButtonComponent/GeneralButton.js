import React from "react";
import './GeneralButton.css';
import { FaArrowRight } from "react-icons/fa";

const GeneralButton = ({ btnText }) => {
    return (
        <button className="generalBtn">
            {btnText}
            <span>
                <FaArrowRight />
            </span>
        </button>
    );
}

export default GeneralButton;