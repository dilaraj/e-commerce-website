import React from "react";
import './QuantityCounter.css';
import { CgMathPlus, CgMathMinus } from "react-icons/cg";


const QuantityCounter = ( { quantity, setQuantity}) => {

    const increaseQuantity = () => {
        setQuantity(quantity + 1);
    };

    const descreaseQuantity = () => {
        setQuantity(Math.max(1, quantity - 1));
    };

    return (
        <div className="quantityCounterContainer">
            <div className="counterText">Quantity</div>
            <div className="counterContainer">
                <div className="minusCounter" onClick={descreaseQuantity}><CgMathMinus /></div>
                <div className="counterOutcome">{quantity}</div>
                <div className="addCounter" onClick={increaseQuantity}><CgMathPlus /></div>
            </div>
        </div>
    );
}

export default QuantityCounter;