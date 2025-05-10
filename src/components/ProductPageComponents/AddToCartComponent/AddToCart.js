import React from "react";
import './AddToCart.css';
import ProductListData from "../../ProductListComponent/ProductListData";
import { useParams } from "react-router-dom";
import QuantityCounter from "../QuantityCounterComponent/QuantityCounter";
import GeneralButton from "../../GeneralButtonComponent/GeneralButton";

const AddToCart = () => {

    const { id } = useParams();
    const product = ProductListData.find(p => p.id.toString() === id);

    return (
        <div className="addToCartContainer">
            <div className="productInfo">
                <div>
                    {product.brand}
                </div>
                <div>
                    {product.name}
                </div>
                <div>
                    {product.price}
                </div>
            </div>
            <div className="line"></div>
            <div className="orderInfo">
                <QuantityCounter />
                <GeneralButton btnText="Add to Cart" className="addToCartBtn" />
            </div>
        </div>
    );
}

export default AddToCart;