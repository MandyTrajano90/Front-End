import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// interface CartItem {
//   title: string;
//   price: number;
//   quantity: number;
//   // Adicione outros campos conforme necessário
// }

function Checkout() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    cpf: '',
    phone: '',
    cep: '',
    address: '',
    paymentMethod: '', // Opções: "boleto", "visa", "master", "elo"
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    // Recupere os itens do carrinho do localStorage quando o componente for montado
    const storedCartItems = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(storedCartItems);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Valide os campos aqui (por exemplo, verifique se estão preenchidos)
    if (
      formData.fullName
      && formData.email
      && formData.cpf
      && formData.phone
      && formData.cep
      && formData.address
      && formData.paymentMethod
    ) {
      // Envie os dados do formulário (formData) para onde desejar
      // Esvazie o carrinho
      localStorage.removeItem('cart');
      // Redirecione para a tela principal
      navigate('/');
    } else {
      // Exiba uma mensagem de erro na página
      setErrorMessage('Campos inválidos');
    }
  };

  return (
    <div>
      <h2>Checkout</h2>
      <h3>Resumo dos Produtos:</h3>
      <ul>
        {cartItems.map((item, index) => (
          <li key={ index }>{item.title}</li>
        ))}
      </ul>
      <form onSubmit={ handleSubmit }>
        <label>
          Nome completo:
          <input
            type="text"
            name="fullName"
            value={ formData.fullName }
            onChange={ handleInputChange }
            data-testid="checkout-fullname"
          />
        </label>
        <label>
          E-mail:
          <input
            type="email"
            name="email"
            value={ formData.email }
            onChange={ handleInputChange }
            data-testid="checkout-email"
          />
        </label>
        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            value={ formData.cpf }
            onChange={ handleInputChange }
            data-testid="checkout-cpf"
          />
        </label>
        <label>
          Telefone:
          <input
            type="text"
            name="phone"
            value={ formData.phone }
            onChange={ handleInputChange }
            data-testid="checkout-phone"
          />
        </label>
        <label>
          CEP:
          <input
            type="text"
            name="cep"
            value={ formData.cep }
            onChange={ handleInputChange }
            data-testid="checkout-cep"
          />
        </label>
        <label>
          Endereço:
          <input
            type="text"
            name="address"
            value={ formData.address }
            onChange={ handleInputChange }
            data-testid="checkout-address"
          />
        </label>
        <div>
          Método de pagamento:
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="boleto"
              onChange={ handleInputChange }
              data-testid="ticket-payment"
            />
            Boleto
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="visa"
              onChange={ handleInputChange }
              data-testid="visa-payment"
            />
            Visa
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="master"
              onChange={ handleInputChange }
              data-testid="master-payment"
            />
            MasterCard
          </label>
          <label>
            <input
              type="radio"
              name="paymentMethod"
              value="elo"
              onChange={ handleInputChange }
              data-testid="elo-payment"
            />
            Elo
          </label>
          {/* Adicione mais opções conforme necessário */}
        </div>
        <button type="submit" data-testid="checkout-btn">
          Finalizar Compra
        </button>
        {errorMessage && (
          <p data-testid="error-msg" style={ { color: 'red' } }>
            {errorMessage}
          </p>
        )}
      </form>
    </div>
  );
}

export default Checkout;
