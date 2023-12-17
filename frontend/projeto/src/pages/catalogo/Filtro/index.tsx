import React, { useState, useEffect } from 'react';
import LogicaFiltro from './logica'; 
import ClothingCard, { ClothingItem } from './ClothingCard'; 
import './filtro.css'

interface FiltroProps {
  clothingItems: ClothingItem[];
  onFilteredItems: (filteredItems: ClothingItem[]) => void;
}



const Filtro: React.FC<FiltroProps> = ({ clothingItems, onFilteredItems }) => {
  const [filteredItems, setFilteredItems] = useState<ClothingItem[]>(clothingItems);

  type FilterKeys = 'tamanho' | 'cor' | 'material' | 'preco'; // Defina as chaves que podem ser filtradas


  const handleFilterChange = (filters: any) => {
    // Lógica para filtrar os itens com base nos filtros aplicados
    const filtered = clothingItems.filter((item) => {
      for (const key in filters) {
        if (filters[key] !== '' && String(item[key as keyof ClothingItem ]) !== filters[key]) {
          return false;
        }
      }
      return true;
    });
    setFilteredItems(filtered);
  };

  
  
  


  useEffect(() => {
    onFilteredItems(filteredItems);
  }, [filteredItems, onFilteredItems]);
  
  return (
    <div className="catalog">
      <LogicaFiltro clothingItems={clothingItems} onFilterChange={handleFilterChange} />
      <div className="catalog-content">
        <div>
          {filteredItems.map((item) => (
            <div key={item.id}>
              <ClothingCard item={item} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Filtro;
