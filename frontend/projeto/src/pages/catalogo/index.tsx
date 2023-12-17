import React, { useState, useEffect } from 'react';
import Filtro from './Filtro';
import ClothingCard from './Filtro/ClothingCard';

interface ClothingItem {
  id: number;
  nome: string;
  categoria:string;
  tamanho: string;
  cor:string;
  material: string;
  preco: number;
  imagem:string; 
}

const Catalogo = () => {
  const [filteredItems, setFilteredItems] = useState<ClothingItem[]>([]);
  const [clothingItems, setClothingItems] = useState<ClothingItem[]>([]);

  const handleFilteredItems = (filteredItems: ClothingItem[]) => {
    setFilteredItems(filteredItems);
  };

  useEffect(() => {
    // Fazendo a requisição à API quando o componente é montado
    fetch('http://localhost:8080/produtos')
      .then(response => response.json())
      .then(data => {
        setClothingItems(data); // Atualiza o estado com os dados da API
      })
      .catch(error => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []); // O segundo parâmetro [] garante que o efeito só será executado uma vez, equivalente ao componentDidMount()

  
  return (
    <div>
      <h1>Seu Catálogo</h1>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: 1 }}>
        
          <Filtro clothingItems={clothingItems} onFilteredItems={handleFilteredItems} />
        </div>
        <div style={{ flex: 2 }}>
          <div className="catalog-items">
            {filteredItems.length > 0 ? (
              filteredItems.map((item) => (
                <div key={item.id} className="clothing-card">
                 
                  <ClothingCard key={item.id} item={item} />
                </div>
              ))
            ) : (
              clothingItems.map((item) => (
                <div key={item.id} className="clothing-card">
                  
                  <ClothingCard key={item.id} item={item} />
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Catalogo;
