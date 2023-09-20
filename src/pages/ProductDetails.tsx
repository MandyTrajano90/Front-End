import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import styles from '../components/cards/Card.module.css';
import { getProductById } from '../services/api';

function ProductDetails() {
  const navigate = useNavigate();
  const [details, setDetails] = useState({
    id: '',
    title: '',
    thumbnail: '',
    price: 99.99,
    category_id: '',
  });

  const { id } = useParams();
  // if (!id) {
  //   return <div>Carregando...</div>;
  // }

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProductById(id);
        setDetails(data);
      } catch (error) {
        console.error('Erro ao buscar categorias listadas', error);
      }
    }
    fetchData();
  }, [id]);

  const handleAddToCart = () => {
    // Recupere o carrinho do localStorage (se existir)
    const cart = JSON.parse(localStorage.getItem('cart') || '[]');

    // Adicione o produto atual ao carrinho
    cart.push({
      id: details.id,
      title: details.title,
      thumbnail: details.thumbnail,
      price: details.price,
      quantity: 1, // Você pode ajustar a quantidade conforme necessário
    });

    // Salve o carrinho atualizado no localStorage
    localStorage.setItem('cart', JSON.stringify(cart));
  };

  const handleClick = () => {
    navigate('/car');
  };

  return (
    <>
      <h1>
        `Deu certo
        {id}
        `
      </h1>
      <div className={ styles.container } key={ details.id } data-testid="product">
        <img
          data-testid="product-detail-image"
          src={ details.thumbnail }
          alt={ details.title }
        />
        <p
          className={ styles.title }
          data-testid="product-detail-name"
        >
          {details.title}
        </p>
        <p
          className={ styles.info }
        >
          {details.id}
        </p>
        <p
          data-testid="product-detail-price"
          className={ styles.info }
        >
          {details.price}
        </p>
        <button onClick={ handleAddToCart } data-testid="product-detail-add-to-cart">
          Adicionar ao Carrinho
        </button>
        <button onClick={ handleClick }>Ir Para o Carrinho</button>
      </div>
    </>
  );
}

export default ProductDetails;
/*
{
  "id": "MLB3705488556",
  "site_id": "MLB",
  "title": "Pano Reutilizável Scott Duramax 174 Unidades",
  "subtitle": null,
  "seller_id": 222382819,
  "category_id": "MLB263727",
  "official_store_id": null,
  "price": 42.9,
  "base_price": 42.9,
  "original_price": null,
  "currency_id": "BRL",
  "initial_quantity": 274,
  "available_quantity": 100,
  "sold_quantity": 100,
  "sale_terms": [],
  "buying_mode": "buy_it_now",
  "listing_type_id": "gold_special",
  "start_time": "2023-06-09T17:30:21.000Z",
  "stop_time": "2043-06-04T04:00:00.000Z",
  "condition": "new",
  "permalink": "https://produto.mercadolivre.com.br/MLB-3705488556-pano-reutilizavel-scott-duramax-174-unidades-_JM",
  "thumbnail_id": "862137-MLU47589991014_092021",
  "thumbnail": "http://http2.mlstatic.com/D_862137-MLU47589991014_092021-I.jpg",
  "secure_thumbnail": "https://http2.mlstatic.com/D_862137-MLU47589991014_092021-I.jpg",
  "pictures": [],
  "video_id": null,
  "descriptions": [
  ],
  "accepts_mercadopago": true,
  "non_mercado_pago_payment_methods": [
  ],
  "shipping": {},
  "international_delivery_mode": "none",
  "seller_address": {},
  "seller_contact": null,
  "location": {
  },
  "coverage_areas": [
  ],
  "attributes": [],
  "warnings": [
  ],
  "listing_source": "",
  "variations": [
  ],
  "status": "active",
  "sub_status": [
  ],
  "tags": [],
  "warranty": "Garantia do vendedor: 7 dias",
  "catalog_product_id": "MLB18399896",
  "domain_id": "MLB-CLEANING_CLOTHS",
  "parent_item_id": null,
  "differential_pricing": null,
  "deal_ids": [],
  "automatic_relist": false,
  "date_created": "2023-06-09T17:30:21.000Z",
  "last_updated": "2023-09-18T16:46:06.000Z",
  "health": null,
  "catalog_listing": true,
  "channels": []
}

*/
