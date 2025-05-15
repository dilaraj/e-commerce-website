import React from "react";
import './BagItem.css';
import { useCart } from "../../../pages/CartFunctionality/CartContext";
import { CgMathPlus, CgMathMinus } from "react-icons/cg";

const BagItem = ({ id, src, brand, name, price}) => {

    const { cartItems, removeFromCart, updateQuantity } = useCart();
    const item = cartItems.find(i => i.id === id);
    const quantity = item?.quantity || 1;

    return (
        <div className="bagItemContainer">
            <img src={src} alt={name} className="bagItemImg"/>
            <div className="bagProductInfo">
                <div className="bagProductSpecs">
                    <div className="bagBrand">{brand}</div>
                    <div className="bagName">{name}</div>
                    <div className="priceContainer">
                        <div>${(price * quantity).toFixed(2)}</div>
                    </div>
                </div>
                <div className="bagProductActions">
                    <div className="bagQuantityContainer">
                        <button onClick={() => updateQuantity(id, quantity - 1)} disabled={quantity <= 1}>
                            <CgMathMinus />
                        </button>
                        <div className="bagQuantity">{quantity}</div>  
                        <button onClick={() => updateQuantity(id, quantity + 1)}>
                            <CgMathPlus />
                        </button>
                    </div>
                    <button onClick={() => removeFromCart(id)} className="removeBtn">Remove</button>
                </div>
            </div>
        </div>
    );
}

export default BagItem;