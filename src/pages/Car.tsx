import React from 'react';

// Interface para representar a estrutura de um item do carrinho
interface CartItem {
  title: string;
  price: number;
  // Adicione outros campos conforme necessário
}

function Car() {
  // Recupere os produtos do carrinho do localStorage
  const cartItems: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');

  return (
    <div>
      {cartItems.length === 0 ? (
        <h2 data-testid="shopping-cart-empty-message">Seu carrinho está vazio</h2>
      ) : (
        <div>
          {cartItems.map((item, index) => (
            <div key={ index }>
              <p data-testid="shopping-cart-product-name">{item.title}</p>
              <p>
                Preço:
                {' '}
                {item.price}
              </p>
              <p data-testid="shopping-cart-product-quantity">
                Quantidade: 1

              </p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Car;
