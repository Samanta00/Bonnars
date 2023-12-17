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

  type FilterKeys = 'size' | 'color' | 'material' | 'price'; // Defina as chaves que podem ser filtradas


  const handleFilterChange = (filters: Partial<Record<FilterKeys, string>>) => {
    const filtered = clothingItems.filter((item) => {
      return Object.entries(filters).every(([key, value]) => {
        if (value && item[key as keyof ClothingItem] !== value) {
          return false;
        }
        return true;
      });
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
