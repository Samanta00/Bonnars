// ClothingCard.tsx
import React from 'react';

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
      {/* Conteúdo do componente ClothingCard */}
    </div>
  );
};

export default ClothingCard;
