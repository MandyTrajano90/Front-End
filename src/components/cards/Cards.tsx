import { useNavigate } from 'react-router-dom';
import styles from './Card.module.css';

type CardType = {
  id: string,
  title: string,
  permalink: string,
  price: number,
  thumbnail: string
};

function Cards({ product }: { product: CardType }) {
  const navigate = useNavigate();

  function handleClick() {
    navigate(`/details/${product.id}`);
    // setProductDetail(product.id)

    console.log(product.id);
  }

  function handleAddToCart() {
    // Cria um objeto com as informações do produto
    const cartItem = {
      id: product.id,
      title: product.title,
      permalink: product.permalink,
      price: product.price,
      thumbnail: product.thumbnail,
      quantity: 1,
    };

    // Verifica se já há itens no carrinho no localStorage
    const existingCart = localStorage.getItem('cart');

    // Se não houver itens no carrinho, cria um novo array com o item atual
    if (!existingCart) {
      const newCart = [cartItem];
      localStorage.setItem('cart', JSON.stringify(newCart));
    } else {
      // Se já houver itens no carrinho, adiciona o item atual ao array existente
      const parsedCart = JSON.parse(existingCart);
      parsedCart.push(cartItem);
      localStorage.setItem('cart', JSON.stringify(parsedCart));
    }
  }

  return (

    <div className={ styles.container } key={ product.id } data-testid="product">
      <img src={ product.thumbnail } alt={ product.title } />
      <p className={ styles.ttle }>{product.title}</p>
      <p className={ styles.info }>{product.id}</p>
      <p className={ styles.info }>{product.permalink}</p>
      <p className={ styles.info }>{product.price}</p>
      <button
        onClick={ handleClick }
        data-testid="product-detail-link"
      >
        clique aqui
      </button>
      <button onClick={ handleAddToCart } data-testid="product-add-to-cart">
        Adicionar ao Carrinho
      </button>
    </div>

  );
}

export default Cards;
