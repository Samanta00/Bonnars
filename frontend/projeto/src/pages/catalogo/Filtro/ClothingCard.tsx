// ClothingCard.tsx
import React from 'react';
import './Styles/clothinhCard.css';

export interface ClothingItem {
  id: number;
  nome: string;
  categoria:string;
  tamanho: string;
  cor:string;
  material: string;
  preco: number;
  imagem:string; 
}


interface ClothingCardProps {
  item: ClothingItem;
}




const ClothingCard: React.FC<ClothingCardProps> = ({ item }) => {

    return (
      <div className="clothing-item">
        <img src={item.imagem} alt={item.nome} className="clothing-image" />
        <div className="clothing-details">
          <h5>{item.nome}</h5>
          <p>Preço: ${item.preco.toFixed(2)}</p>
          <p>Tamanho: {item.tamanho}</p>
          <p>Cor: {item.cor}</p>
          <i className="bi bi-bag-heart-fill">Comprar</i>
        </div>
      </div>
    );
  };

export default ClothingCard;
