import React from "react";
import './ViewCart.css';
import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

const ViewCart = ({ label }) => {

    return (
        <button className="viewCart">
            <Link to={"/cart"} style={{ textDecoration: 'none', color: 'black' }} className="viewCartLink">
                <MdOutlineShoppingBag />
                {label}
            </Link>
        </button>
    );
}

export default ViewCart;