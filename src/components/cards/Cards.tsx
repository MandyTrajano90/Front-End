import { useState } from 'react';
import styles from './Card.module.css';
import { getProductById } from '../../services/api';

type CardType = {
  id: string,
  title: string,
  permalink: string,
  price: number,
  thumbnail: string
};

function Cards({ product }: { product: CardType }) {
  const [productDetail, setProductDetail] = useState({
    id: '',
    title: '',
    price: 99.99,
    thumbnail: '',

  });

  const fetchData = async () => {
    try {
      const data = await getProductById(product.id);
      setProductDetail(data);
      console.log(productDetail);
    } catch (error) {
      console.error('Erro ao buscar detalhes do produto', error);
    }
  };

  return (

    <div className={ styles.container } key={ product.id } data-testid="product">
      <img src={ product.thumbnail } alt={ product.title } />
      <p className={ styles.ttle }>{product.title}</p>
      <p className={ styles.info }>{product.id}</p>
      <p className={ styles.info }>{product.permalink}</p>
      <p className={ styles.info }>{product.price}</p>
      <button onClick={ fetchData }>clique aqui</button>
    </div>

  );
}

export default Cards;
