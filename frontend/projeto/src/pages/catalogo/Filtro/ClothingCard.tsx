// ClothingCard.tsx
import React from 'react';

export interface ClothingItem {
  id: number;
  name: string;
  category: string;
  size: string;
  color: string;
  material: string;
  price: number;
  image: string;
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
