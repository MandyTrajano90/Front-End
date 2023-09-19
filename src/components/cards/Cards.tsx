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
    </div>

  );
}

export default Cards;
