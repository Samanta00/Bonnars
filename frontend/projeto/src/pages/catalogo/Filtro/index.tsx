import React, { useState } from 'react';
import LogicaFiltro from './logica'; 
import ClothingCard, { ClothingItem } from './ClothingCard'; // Importe a interface ClothingItem corretamente

interface FiltroProps {
  clothingItems: ClothingItem[];
}

const Filtro: React.FC<FiltroProps> = ({ clothingItems }) => {
  const [filteredItems, setFilteredItems] = useState<ClothingItem[]>(clothingItems);

  type FilterKeys = 'size' | 'color' | 'material' | 'price'; // Defina as chaves que podem ser filtradas

  const handleFilterChange = (filters: Partial<Record<FilterKeys, string>>) => {
    const filtered = clothingItems.filter((item) => {
      for (const key in filters) {
        if (Object.prototype.hasOwnProperty.call(filters, key)) {
          const filterValue = filters[key as FilterKeys]; // Diga ao TypeScript que a chave é uma das chaves permitidas
          if (filterValue && String(item[key as FilterKeys]) !== filterValue) {
            return false;
          }
        }
      }
      return true;
    });
    setFilteredItems(filtered);
  };
  
  return (
    <div className="catalog">
      <LogicaFiltro clothingItems={clothingItems} onFilterChange={handleFilterChange} />
      <div className="catalog-items">
        {/* Renderize os itens filtrados aqui */}
        {filteredItems.map((item) => (
          <ClothingCard key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Filtro;
