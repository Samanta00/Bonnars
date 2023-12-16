import React, { useState } from 'react';

import './carrinho.css'

interface CartItem {
    id: number;
    name: string;
    price: number;
    quantity: number;
}

export default function Carrinho() {
    const [cartItems, setCartItems] = useState<CartItem[]>([
        { id: 1, name: 'Item 1', price: 10, quantity: 2 },
        { id: 2, name: 'Item 2', price: 15, quantity: 1 },
        { id: 3, name: 'Item 3', price: 20, quantity: 3 },
      ]);
    
      const getTotalPrice = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
      };
    
      const handleCancel = (id: number) => {
        const updatedCart = cartItems.filter((item) => item.id !== id);
        setCartItems(updatedCart);
      };

    return (
        <div className="cart-container">
        <h2>Shopping Cart</h2>
        <div className="cart-items">
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
              <div className="item-details">
                <span>{item.name}</span>
                <span>Quantity: {item.quantity}</span>
                <span>Price: ${item.price * item.quantity}</span>
              </div>
              <button className="cancel-button" onClick={() => handleCancel(item.id)}>
                X
              </button>
            </div>
          ))}
        </div>
        {cartItems.length > 0 && (
          <div className="cart-footer">
            <div className="total">Total: ${getTotalPrice()}</div>
            <button className="checkout-button">Finalizar Compra</button>
          </div>
        )}
      </div>
    );
}