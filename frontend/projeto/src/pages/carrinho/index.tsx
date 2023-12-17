import React, { useState, useEffect } from 'react';
import './Styles/carrinho.css';

interface CartItem {
  id: number;
  nome: string;
  preco: number;
  quantidade: number;
}

export default function Carrinho() {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    fetch('http://localhost:8080/carrinho')
      .then((response) => response.json())
      .then((data) => {
        setCartItems(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os dados:', error);
      });
  }, []);

  const getTotalPrice = () => {
    return cartItems.reduce((total, item) => total + item.preco * item.quantidade, 0);
  };

  const handleEdit = (id: number) => {
    console.log(id)
    setShowModal(true); 
  };

  const handleCloseModal = () => {
    setShowModal(false); 
  };



  const handleCancel = (id: number) => {
    fetch(`http://localhost:8080/carrinho/${id}`, {
      method: 'DELETE'
    })
      .then((response) => {
        if (response.ok) {
          const updatedCart = cartItems.filter((item) => item.id !== id);
          setCartItems(updatedCart);
        } else {
          console.error('Erro ao deletar item do carrinho');
        }
      })
      .catch((error) => {
        console.error('Erro ao fazer a requisição DELETE:', error);
      });
  };
  

  return (
    <div className="cart-container">
      <h2>Shopping Cart</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <div className="item-details">
              <span>{item.nome}</span>
              <span>Quantity: {item.quantidade}</span>
              <span>Price: ${item.preco * item.quantidade}</span>
            </div>
            
            <div className='alinhamentoBotoes'>
                  <i
                    className="bi bi-pencil-fill fs-3 me-2"
                    onClick={() => handleEdit(item.id)}
                    id='iconeEditar'
                  ></i>
                <button className="cancel-button" onClick={() => handleCancel(item.id)}>
                  X
                </button>
                
            </div>

          </div>
        ))}
      </div>
      {cartItems.length > 0 && (
        <div className="cart-footer">
          <div className="total">Total: ${getTotalPrice()}</div>
          <button className="checkout-button">Finalizar Compra</button>
        </div>
      )}

      {showModal && (
        <div className="modal">
          <div className="modal-content">
            {/* Conteúdo do modal */}
            <h3>Editar Produto</h3>
            {/* Inclua os campos de edição e botões de salvar/cancelar */}
            <button onClick={handleCloseModal}>Fechar</button>
          </div>
        </div>
      )}

    </div>
  );
}
