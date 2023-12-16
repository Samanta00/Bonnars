import React from "react";
import './carrinho.css'

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default function Carrinho() {
    const cartItems: CartItem[] = [
        { id: 1, name: 'Item 1', price: 10, quantity: 2 },
        { id: 2, name: 'Item 2', price: 15, quantity: 1 },
        { id: 3, name: 'Item 3', price: 20, quantity: 3 },
      ];
    
      const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      };

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {cartItems.map((item) => (
                    <div key={item.id} className="cart-item">
                        <span>{item.name}</span>
                        <span>Quantity: {item.quantity}</span>
                        <span>Price: ${item.price * item.quantity}</span>
                    </div>
                ))}
            </div>
            <div className="total">Total: ${getTotalPrice()}</div>
        </div>
    );
}