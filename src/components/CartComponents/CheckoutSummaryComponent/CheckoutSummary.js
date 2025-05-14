import React from "react";
import './CheckoutSummary.css';
import { useCart } from "../../../pages/CartFunctionality/CartContext";
import { FaArrowRight } from "react-icons/fa";
import GeneralButton from '../../GeneralButtonComponent/GeneralButton';

const CheckoutSummary = () => {

    const { subTotal, totalTax, shippingCost, discount, totalPrice } = useCart();

    return (
        <div className="checkoutSummaryContainer">
            <div className="checkoutSummaryText">Summary</div>
            <div className="checkoutSummaryValues">
                <div className="valueContainer">
                    <div className="valueLabel">Subtotal</div>
                    <div className="valueText">${subTotal.toFixed(2)}</div>
                </div>
                <div className="valueContainer">
                    <div className="valueLabel">Shipping and delivery</div>
                    <div className="valueText">${shippingCost.toFixed(2)}</div>
                </div>
                <div className="valueContainer">
                    <div className="valueLabel">Tax</div>
                    <div className="valueText">${totalTax}</div>
                </div>
                <div className="valueContainer">
                    <div className="valueLabel">Discount</div>
                    <div className="valueText discount">-${discount.toFixed(2)}</div>
                </div>
            </div>
            <div className="checkoutLine"></div>
            <div className="summaryTotalContainer">
                <div className="summaryValueContainer">
                    <div className="summaryTotal">Total</div>
                    <div className="summaryPrice">${totalPrice.toFixed(2)}</div>
                </div>
                <GeneralButton btnText='Checkout' icon={<FaArrowRight />}/>
            </div>
        </div>
    );
}

export default CheckoutSummary;