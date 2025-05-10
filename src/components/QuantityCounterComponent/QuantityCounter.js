import React, { useState } from "react";
import './QuantityCounter.css';
import { CgMathPlus, CgMathMinus } from "react-icons/cg";


const QuantityCounter = () => {
    let [count, setCount] = useState(1);

    const increaseQuantity = () => {
        setCount(count + 1);
    };

    const descreaseQuantity = () => {
        setCount(count - 1);
    };

    count = count < 2 ? count = 1 : count;

    return (
        <div className="quantityCounterContainer">
            <div className="counterText">Quantity</div>
            <div className="counterContainer">
                <div className="minusCounter" onClick={descreaseQuantity}><CgMathMinus /></div>
                <div className="counterOutcome">{count}</div>
                <div className="addCounter" onClick={increaseQuantity}><CgMathPlus /></div>
            </div>
        </div>
    );
}

export default QuantityCounter;