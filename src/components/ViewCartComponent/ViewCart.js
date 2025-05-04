import React from "react";
import './ViewCart.css';
import { MdOutlineShoppingBag } from "react-icons/md";

const ViewCart = ({ label }) => {
    return (
        <button>
            <MdOutlineShoppingBag />
            {label}
        </button>
    );
}

export default ViewCart;