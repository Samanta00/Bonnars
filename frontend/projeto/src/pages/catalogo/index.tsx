import React, { useState } from 'react';
import Filtro from './Filtro';

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

interface CatalogProps {
    clothingItems: ClothingItem[];
}

const Catalogo=()=>{
    const [filteredItems, setFilteredItems] = useState<ClothingItem[]>([]);
    const clothingItems: ClothingItem[] = [
        {
          id: 1,
          name: 'Camiseta',
          category: 'Roupas',
          size: 'M',
          color: 'Azul',
          material: 'Algodão',
          price: 25.99,
          image: 'caminho/para/imagem.jpg',
        },
     
      ];
  const applyFilters = (filteredData: ClothingItem[]) => {
    setFilteredItems(filteredData);
  };
    return(
        <div className="filter-panel">
        <h1>Catálogo</h1>
        <Filtro clothingItems={clothingItems} onFilterChange={applyFilters} />
       
        <div className="clothing-items">
          {filteredItems.map((item) => (
            <div key={item.id} className="clothing-item">
              <img src={item.image} alt={item.name} />
              <h3>{item.name}</h3>
              <p>Tamanho: {item.size}</p>
              <p>Cor: {item.color}</p>
              <p>Material: {item.material}</p>
              <p>Preço: ${item.price}</p>
            </div>
          ))}
        </div>
      </div>
    )
}

export default Catalogo;