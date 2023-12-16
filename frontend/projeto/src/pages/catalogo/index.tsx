import React from 'react';
import Filtro from './Filtro';

const Catalogo = () => {

  const clothingItems = [
    {
      id: 1,
      name: 'Camisa',
      category: 'Masculino',
      size: 'M',
      color: 'Azul',
      material: 'Algodão',
      price: 25.99,
      image: 'caminho/para/imagem.jpg',
    },
    
  ];

  return (
    <div>
      <h1>Seu Catálogo</h1>
      
      <Filtro clothingItems={clothingItems} />
    </div>
  );
};

export default Catalogo;
