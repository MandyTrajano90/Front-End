import React, { useState, useEffect } from 'react';

// Interface para representar a estrutura de um item do carrinho
interface CartItem {
  title: string;
  price: number;
  quantity: number;
  // Adicione outros campos conforme necessário
}

function Car() {
  // Recupere os produtos do carrinho do localStorage
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  useEffect(() => {
    const items: CartItem[] = JSON.parse(localStorage.getItem('cart') || '[]');
    setCartItems(items);
  }, []);

  const increaseQuantity = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity += 1;
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const decreaseQuantity = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart[index].quantity = Math.max(updatedCart[index].quantity - 1, 1);
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const removeProduct = (index: number) => {
    const updatedCart = [...cartItems];
    updatedCart.splice(index, 1);
    setCartItems(updatedCart);
    updateLocalStorage(updatedCart);
  };

  const updateLocalStorage = (updatedCart: CartItem[]) => {
    localStorage.setItem('cart', JSON.stringify(updatedCart));
  };

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
                {item.quantity}
              </p>
              <button
                onClick={ () => increaseQuantity(index) }
                data-testid="product-increase-quantity"
              >
                Aumentar Quantidade
              </button>
              <button
                onClick={ () => decreaseQuantity(index) }
                data-testid="product-decrease-quantity"
              >
                Diminuir Quantidade
              </button>
              <button
                onClick={ () => removeProduct(index) }
                data-testid="remove-product"
              >
                Remover Produto
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Car;
