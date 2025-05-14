import React, { useState } from "react";
import './AddToCart.css';
import ProductListData from "../../ProductListComponent/ProductListData";
import { useParams } from "react-router-dom";
import { useCart } from "../../../pages/CartFunctionality/CartContext";
import QuantityCounter from "../QuantityCounterComponent/QuantityCounter";
import GeneralButton from "../../GeneralButtonComponent/GeneralButton";

const AddToCart = () => {
    const { addToCart } = useCart();
    const { id } = useParams();
    const product = ProductListData.find(p => p.id.toString() === id);

    const [quantity, setQuantity] = useState(1);

    const handleAddToCart = () => {
        addToCart(product, quantity);
    }

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
                    ${product.price}
                </div>
            </div>
            <div className="line"></div>
            <div className="orderInfo">
                <QuantityCounter quantity={quantity} setQuantity={setQuantity}/>
                <GeneralButton btnText="Add to Cart" className="addToCartBtn" onClick={handleAddToCart}/>
            </div>
        </div>
    );
}

export default AddToCart;