import React from "react";
import './CartPage.css';
import { useCart } from "./CartFunctionality/CartContext";

import Header from '../components/HeaderComponent/Header';
import BagItem from "../components/CartComponents/BagItemComponent/BagItem";
import CheckoutSummary from "../components/CartComponents/CheckoutSummaryComponent/CheckoutSummary";

const CartPage = () => {

    const { cartItems } = useCart();
    
    return (
        <div className="cartPageContainer">
            <Header />
            <div className="cartPage">
                <div className="cartPageBag">
                    <div className="cartPageText">Your Bag</div>
                    {cartItems.length === 0 ? (
                        <div className="emptyCart">Your Cart is Empty</div>
                    ) : (
                        <div className="cartList">
                            {cartItems.map(item => (
                                <div key={item.id} className="cartItem">
                                    <BagItem 
                                        id={item.id}
                                        src={item.src} 
                                        brand={item.brand} 
                                        name={item.name} 
                                        price={item.price}
                                        quantity={item.quantity}/>
                                    <div className="cartLine"></div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                <div className="cartPageSummary">
                    <CheckoutSummary />
                </div>
            </div>
        </div>
    );
}

export default CartPage;