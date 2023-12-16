import React, { useState } from 'react';
import Filtro from './Filtro';
import ClothingCard from './Filtro/ClothingCard';

interface ClothingItem {
  id: number;
  name: string;
  category: string;
  size: string;
  color: string;
  material: string;
  price: number;
  image: string;
}

const Catalogo = () => {
  const [filteredItems, setFilteredItems] = useState<ClothingItem[]>([]);
  const [clothingItems] = useState<ClothingItem[]>([
    {
      id: 1,
      name: 'Camisa Azul',
      category: 'Masculino',
      size: 'M',
      color: 'Azul',
      material: 'Algodão',
      price: 25.99,
      image: 'caminho/para/imagem1.jpg',
    },
    {
      id: 2,
      name: 'Vestido Floral',
      category: 'Feminino',
      size: 'S',
      color: 'Rosa',
      material: 'Algodão',
      price: 39.99,
      image: 'caminho/para/imagem2.jpg',
    },
    {
      id: 3,
      name: 'Camisa Azul',
      category: 'Masculino',
      size: 'M',
      color: 'Azul',
      material: 'Algodão',
      price: 25.99,
      image: 'caminho/para/imagem1.jpg',
    },
    {
      id: 4,
      name: 'Vestido Floral',
      category: 'Feminino',
      size: 'S',
      color: 'Rosa',
      material: 'Algodão',
      price: 39.99,
      image: 'caminho/para/imagem2.jpg',
    },
    {
      id: 5,
      name: 'Camisa Azul',
      category: 'Masculino',
      size: 'M',
      color: 'Azul',
      material: 'Algodão',
      price: 25.99,
      image: 'caminho/para/imagem1.jpg',
    },
    {
      id: 6,
      name: 'Vestido Floral',
      category: 'Feminino',
      size: 'S',
      color: 'Rosa',
      material: 'Algodão',
      price: 39.99,
      image: 'caminho/para/imagem2.jpg',
    },
    {
      id: 7,
      name: 'Camisa Azul',
      category: 'Masculino',
      size: 'M',
      color: 'Azul',
      material: 'Algodão',
      price: 25.99,
      image: 'caminho/para/imagem1.jpg',
    },
    {
      id: 8,
      name: 'Vestido Floral',
      category: 'Feminino',
      size: 'S',
      color: 'Rosa',
      material: 'Algodão',
      price: 39.99,
      image: 'caminho/para/imagem2.jpg',
    },
  ]);

  const handleFilteredItems = (filteredItems: ClothingItem[]) => {
    setFilteredItems(filteredItems);
  };

  return (
    <div>
      <h1>Seu Catálogo</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
          <Filtro clothingItems={clothingItems} onFilteredItems={handleFilteredItems} />
        </div>
        <div style={{ flex: 2 }}>
          <div className="catalog-items">
            {(filteredItems.length > 0 ? filteredItems : clothingItems).map((item) => (
              <div key={item.id}>
                <p>{item.name}</p>
                <ClothingCard item={item} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};


export default Catalogo;
