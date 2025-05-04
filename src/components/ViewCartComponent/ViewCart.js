import React from "react";
import './ViewCart.css';
import { MdOutlineShoppingBag } from "react-icons/md";

const ViewCart = ({ label }) => {
    return (
        <button className="viewCart">
            <MdOutlineShoppingBag />
            {label}
        </button>
    );
}

export default ViewCart;