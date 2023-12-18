import React, { useState } from 'react';
import './Styles/clothinhCard.css';

export interface ClothingItem {
  id: number;
  nome: string;
  categoria: string;
  tamanho: string;
  cor: string;
  material: string;
  preco: number;
  imagem: string;
}

interface ClothingCardProps {
  item: ClothingItem;
}

const ClothingCard: React.FC<ClothingCardProps> = ({ item }) => {
  const [quantity, setQuantity] = useState(0);
  const [successMessage, setSuccessMessage] = useState('');

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  };

  const addToCart = () => {
    if (quantity > 0) {
      const cartItem = {
        id_Produto: item.id,
        nome: item.nome,
        tamanho: item.tamanho,
        cor: item.cor,
        preco: item.preco,
        quantidade: quantity,
        imagem: item.imagem,
      };
  
      fetch('http://localhost:8080/carrinho', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cartItem),
      })
        .then(response => response.json())
        .then(data => {
          console.log('Item adicionado ao carrinho:', data);
          setSuccessMessage('Produto adicionado ao carrinho!');
          setQuantity(0); 
        })
        .catch(error => {
          console.error('Erro ao adicionar item ao carrinho:', error);
       
        });
    } else {
      console.log('A quantidade precisa ser maior que zero para adicionar ao carrinho');
      alert("A quantidade precisa ser maior que zero para adicionar ao carrinho")
    }
  };
  

  return (
    <div className="clothing-item">
      <img src={item.imagem} alt={item.nome} className="clothing-image" />
      <div className="clothing-details">
        <h5>{item.nome}</h5>
        <p>Preço: ${item.preco.toFixed(2)}</p>
        <p>Tamanho: {item.tamanho}</p>
        <p>Cor: {item.cor}</p>
        <div className="quantity-controls">
          <i className="bi bi-cart-dash-fill" onClick={decreaseQuantity}></i>
          <span>{quantity}</span>
          <i className="bi bi-cart-plus-fill" onClick={increaseQuantity}></i>
        </div>
        <button className="botao-comprar" onClick={addToCart}>Comprar</button>
        {successMessage && <p>{successMessage}</p>}
      </div>
    </div>
  );
};

export default ClothingCard;
