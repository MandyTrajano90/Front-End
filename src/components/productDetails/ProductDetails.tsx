import styles from '../cards/Card.module.css';

type DetailsType = {
  id: string,
  title: string,
  price: number,
  thumbnail: string
};

function ProductDetails({ product }: { product: DetailsType }) {
  // if (!product) {
  //   return <div>Carregando...</div>;
  // }

  return (
    <div className={ styles.container } key={ product.id } data-testid="product">
      <img
        data-testid="product-detail-image"
        src={ product.thumbnail }
        alt={ product.title }
      />
      <p className={ styles.title } data-testid="product-detail-name">{product.title}</p>
      <p className={ styles.info }>{product.id}</p>
      <p data-testid="product-detail-price" className={ styles.info }>{product.price}</p>
      <button data-testid="shopping-cart-button">Comprar Produto</button>
    </div>
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
