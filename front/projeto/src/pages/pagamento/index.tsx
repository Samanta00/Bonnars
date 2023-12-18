import React, { useState } from 'react';
import './Styles/styles.css'

interface PaymentFormData {
  name: string;
  email: string;
  address: string;
  card: string;
  expiry: string;
  cvv: string;
}

const Payment: React.FC = () => {
  const [formData, setFormData] = useState<PaymentFormData>({
    name: '',
    email: '',
    address: '',
    card: '',
    expiry: '',
    cvv: '',
  });

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Aqui você pode enviar os dados para processamento
    console.log('Dados de pagamento enviados:', formData);
    // Lógica para enviar os dados para o servidor ou outro destino
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
          <input type="text" id="name" name="name" value={formData.name} onChange={handleInputChange} required />
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
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="card">Número do Cartão de Crédito</label>
          <input type="text" id="card" name="card" value={formData.card} onChange={handleInputChange} required />
        </div>
        <div className="form-group">
          <label htmlFor="expiry">Data de Expiração</label>
          <input
            type="text"
            id="expiry"
            name="expiry"
            value={formData.expiry}
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
    </div>
  );
};

export default Payment;
