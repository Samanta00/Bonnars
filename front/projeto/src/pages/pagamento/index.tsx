import React, { useState, useEffect } from 'react';

import './Styles/styles.css'

interface PaymentFormData {
  nome: string;
  email: string;
  endereco: string;
  numeroCartao: string;
  data: string;
  cvv: string;
}

const Payment: React.FC = () => {
  const [pagantes, setPagantes] = useState<any[]>([]);
  const [formData, setFormData] = useState<PaymentFormData>({
    nome: '',
    email: '',
    endereco: '',
    numeroCartao: '',
    data: '',
    cvv: '',
  });

  useEffect(() => {
    fetch('http://localhost:8080/pagantes')
      .then((response) => response.json())
      .then((data) => {
        setPagantes(data);
      })
      .catch((error) => {
        console.error('Erro ao buscar os dados dos pagantes:', error);
      });
  }, []); 

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const requestData = {
      nome: formData.nome,
      email: formData.email,
      endereco: formData.endereco,
      numeroCartao: formData.numeroCartao,
      data: formData.data,
      cvv: formData.cvv,
    };

     
    
    try {
      const response = await fetch('http://localhost:8080/pagantes', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestData),
      });
  
      if (response.ok) {
        console.log('Pagamento realizado com sucesso!');
        setFormData({
          nome: '',
          email: '',
          endereco: '',
          numeroCartao: '',
          data: '',
          cvv: '',
        });
        alert("Pagamento realizado com sucesso!")
      } else {
        console.error('Erro ao processar pagamento.');
      }
    } catch (error) {
      console.error('Erro ao enviar dados de pagamento:', error);
    }
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <div className="payment-container">
      <h2>Checkout</h2>
      <form className="payment-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Nome Completo</label>
          <input type="text" id="name" name="nome" value={formData.nome} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="address">Endereço de Entrega</label>
          <input
            type="text"
            id="address"
            name="endereco"
            value={formData.endereco}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="card">Número do Cartão de Crédito</label>
          <input type="text" id="card" name="numeroCartao" value={formData.numeroCartao} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="expiry">Data de Expiração</label>
          <input
            type="text"
            id="expiry"
            name="data"
            value={formData.data}
            onChange={handleInputChange}
            placeholder="MM/AA"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="cvv">CVV</label>
          <input type="text" id="cvv" name="cvv" value={formData.cvv} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <input type="submit" value="Pagar" />
        </div>
      </form>

      <div className="pagantes-list">
        <h2>Lista de Solicitações de Compra</h2>
        <ul>
          {pagantes.map((pagante, index) => (
            <li key={index}>
              <p>Nome: {pagante.nome}</p>
              <p>Email: {pagante.email}</p>
              <p>Endereço: {pagante.endereco}</p>
              <p>Número do Cartão: {pagante.numeroCartao}</p>
            </li>
          ))}
          
        </ul>
      </div>
    </div>
  );
};

export default Payment;
