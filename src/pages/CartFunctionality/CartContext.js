import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();
export const useCart = () => useContext(CartContext);

export const CartProvider = ( { children }) => {
    const [cartItems, setCartItems] = useState(() => {
        const savedCart = localStorage.getItem("cart");
        return savedCart ? JSON.parse(savedCart) : [];
    }); // Initialise an empty cart

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem("cart")) || [];
        setCartItems(savedCart);
    }, []);

    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product, quantity = 1) => {
        setCartItems(prevItems => {
            const existing = prevItems.find(item => item.id === product.id);
            if (existing) {
                // If the item is is in cart, increase quantity
                return prevItems.map (item =>
                    item.id === product.id
                        ? {...item, quantity: item.quantity += 1}
                        : item
                );
            } else {
                // Add new item to cart
                return [...prevItems, {...product, quantity}];
            }
        });
    };

    const removeFromCart = (id) => {
        setCartItems(prevItems => prevItems.filter(item => item.id !== id));
    };

    const updateQuantity = (id, newQuantity) => {
        setCartItems(prevItems =>
            prevItems.map(item => 
                item.id === id ? { ...item, quantity: newQuantity } : item
            )
        );
    };

    const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
    const subTotal = cartItems.reduce((sum, item) => sum += (item.price * item.quantity), 0);
    const totalTax = (subTotal * 0.12).toFixed(2);
    const shippingCost = totalItems <= 4 ? totalItems * 10.00 : 50.00;

    const discount = subTotal > 400 ? totalItems * 4.68 : 0.00;

    const totalPrice = (totalItems + subTotal + totalItems + shippingCost) - discount;
    

    return (
        <CartContext.Provider value={{ cartItems, addToCart, removeFromCart, updateQuantity, totalItems, subTotal, totalTax, shippingCost, discount, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}