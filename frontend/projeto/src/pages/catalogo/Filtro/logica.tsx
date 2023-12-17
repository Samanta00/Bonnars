import React from 'react';
import './Styles/painelFiltro.css'

interface ClothingItem {
  id: number;
  nome: string;
  categoria: string;
  tamanho: string;
  cor: string;
  material: string;
  preco: number;
  imagem: string;
}

interface LogicaFiltroProps {
  clothingItems: ClothingItem[];
  onFilterChange: (filters: any) => void;
}

const LogicaFiltro: React.FC<LogicaFiltroProps> = ({ clothingItems, onFilterChange }) => {
  const getUniqueValues = <K extends keyof ClothingItem>(key: K): ClothingItem[K][] => {
    return Array.from(new Set(clothingItems.map((item) => item[key])));
  };

  const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => {
    const { name, value } = event.target;
    onFilterChange({ [name]: value });
  };

  const tamanho = getUniqueValues('tamanho');
  const cor = getUniqueValues('cor');
  const materials = getUniqueValues('material');
  const precoRange = {
    min: Math.min(...clothingItems.map((item) => item.preco)),
    max: Math.max(...clothingItems.map((item) => item.preco)),
  };

  return (
    <div className="filter-panel">
      <h3>Filters</h3>
      <div className="filter-section">
        <label>Tamanho:</label>
        <select name="size" onChange={handleFilterChange}>
          <option value="">All</option>
          {tamanho.map((tamanho) => (
            <option key={tamanho} value={tamanho}>
              {tamanho}
            </option>
          ))}
        </select>
      </div>
      <div className="filter-section">
        <label>Cor:</label>
        <select name="color" onChange={handleFilterChange}>
          <option value="">All</option>
          {cor.map((cor) => (
            <option key={cor} value={cor}>
              {cor}
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
          min={precoRange.min}
          max={precoRange.max}
          step={10}
          name="preco"
          onChange={handleFilterChange}
        />
        <span>${precoRange.min} - ${precoRange.max}</span>
      </div>
    </div>
  );
};

export default LogicaFiltro;
