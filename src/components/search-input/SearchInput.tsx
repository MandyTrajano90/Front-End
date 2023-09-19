import { useEffect, useState } from 'react';
import {
  getProductsFromCategoryAndQuery,
  getProductByCategory,
  getCategories,
} from '../../services/api';

import Cards from '../cards/Cards';

type Categories = {
  id: '',
  name: ''
};

function SearchInput() {
  const [searchInput, setSearchInput] = useState('');
  const [productList, setProductList] = useState([]);

  const [categories, setCategories] = useState<Categories[]>([]);
  const [categoriesId, setCategoriesId] = useState('');

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getCategories();
        setCategories(data);
      } catch (error) {
        console.error('Erro ao buscar categorias listadas', error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    async function fetchData() {
      try {
        const data = await getProductByCategory(categoriesId);
        console.log(data.results);
        setProductList(data.results);
      } catch (error) {
        console.error('Erro ao buscar categorias', error);
      }
    }
    fetchData();
  }, [categoriesId]);

  async function handleSearchButton() {
    try {
      const data = await getProductsFromCategoryAndQuery(searchInput);
      setProductList(data.results);
      console.log(productList);
    } catch (error) {
      console.error('Erro ao buscar categorias', error);
    }

    return productList;
  }

  // "id": "MLB3837349240",
  // "title": "Faca Esportiva Aço Inoxidável Xingu Com Bainha Plástica",
  // "permalink": "https://www.mercadolivre.com.br/faca-esportiva-aco-inoxidavel-xingu-com-bainha-plastica/p/MLB22510032",
  // "price": 65.08,
  // "thumbnail": "http://http2.mlstatic.com/D_975760-MLB41404418635_042020-I.jpg",

  return (
    <>

      <div>
        <label>
          Nome:
          <input
            value={ searchInput }
            onChange={ (event) => setSearchInput(event.target.value) }
            data-testid="query-input"
          />
        </label>

        <button data-testid="query-button" onClick={ handleSearchButton }>Busca</button>

        {productList.length < 1 && (
          <h2 data-testid="home-initial-message">
            Digite algum termo de pesquisa ou escolha uma categoria.
          </h2>
        )}

      </div>

      <div>
        {productList.length > 0 && (
          <ul>
            {productList.map((product, index) => (
              <Cards key={ index } product={ product } />
            ))}
          </ul>
        )}
      </div>

      <aside>
        <h2>Categorias</h2>
        <ul>
          <label htmlFor="categorias">
            {categories.map((category) => (
              <li key={ category.id } data-testid="category">
                <label>
                  <input
                    type="radio"
                    data-testid="category-checkbox"
                    name="categorias"
                    value={ category.id }
                    onClick={ () => setCategoriesId(category.id) }
                  />
                  {' '}
                  {category.name}
                </label>
              </li>
            ))}
          </label>
        </ul>
      </aside>

    </>
  );
}

export default SearchInput;
