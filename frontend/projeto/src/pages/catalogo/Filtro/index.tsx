import React from 'react';

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

interface FiltroProps {
  clothingItems: ClothingItem[];
  onFilterChange: (filters: any) => void;
}

const Filtro: React.FC<FiltroProps> = ({ clothingItems, onFilterChange }) => {
    const getUniqueValues = <K extends keyof ClothingItem>(key: K): ClothingItem[K][] => {
        return Array.from(new Set(clothingItems.map((item) => item[key])));
    };
      

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    onFilterChange({ [name]: value });
  };

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    onFilterChange({ [name]: value });
  };

  const sizes = getUniqueValues('size');
  const colors = getUniqueValues('color');
  const materials = getUniqueValues('material');
  const priceRange = {
    min: Math.min(...clothingItems.map((item) => item.price)),
    max: Math.max(...clothingItems.map((item) => item.price)),
  };

  return (
    <div className="filter-panel">
      <h3>Filters</h3>
      <div className="filter-section">
        <label>Tamanho:</label>
        <select name="size" onChange={handleFilterChange}>
          <option value="">All</option>
          {sizes.map((size) => (
            <option key={size} value={size}>
              {size}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-section">
        <label>Cor:</label>
        <select name="color" onChange={handleFilterChange}>
          <option value="">All</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-section">
        <label>Material:</label>
        <select name="material" onChange={handleFilterChange}>
          <option value="">All</option>
          {materials.map((material) => (
            <option key={material} value={material}>
              {material}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-section">
        <label>Faixa de Preço:</label>
        <input
          type="range"
          min={priceRange.min}
          max={priceRange.max}
          step={10}
          name="price"
          onChange={handlePriceChange}
        />
        <span>${priceRange.min} - ${priceRange.max}</span>
      </div>
    </div>
  );
};

export default Filtro;
