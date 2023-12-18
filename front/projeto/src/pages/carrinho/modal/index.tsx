// Modal.tsx
import React, { useState } from 'react';

interface ModalProps {
  item: {
    id: number;
    nome: string;
    preco: number;
    quantidade: number;
    cor: string;
    tamanho: string;
    imagem: string;
  };
  handleCloseModal: () => void;
}

const Modal: React.FC<ModalProps> = ({ item, handleCloseModal }) => {
  const [editedQuantity, setEditedQuantity] = useState(item.quantidade);

  const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditedQuantity(Number(event.target.value));
  };

  const handleUpdateQuantity = () => {
    const updatedItem = {
      ...item,
      quantidade: editedQuantity,
    };
  
    fetch(`http://localhost:8080/carrinho/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })
      .then((response) => {
        if (response.ok) {
          handleCloseModal();
          window.location.reload(); // Recarregar a página
        } else {
          throw new Error('Erro ao atualizar a quantidade do produto');
        }
      })
      .catch((error) => {
        console.error('Erro ao fazer a requisição PUT:', error);
      });
  };
  
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Detalhes do Produto</h3>
        <p>Nome: {item.nome}</p>
        <p>Cor: {item.cor}</p>
        <p>Tamanho: {item.tamanho}</p>
        <p>
          Quantidade: 
          <input
            type="number"
            value={editedQuantity}
            onChange={handleQuantityChange}
          />
        </p>
        <button onClick={handleUpdateQuantity}>Atualizar Quantidade</button>
        <button onClick={handleCloseModal}>Fechar</button>
      </div>
    </div>
  );
};

export default Modal;
