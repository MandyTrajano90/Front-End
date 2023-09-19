export async function getCategories() {
  try {
    const response = await fetch('https://api.mercadolibre.com/sites/MLB/categories');
    const data = await response.json();
    console.log(data);
    return data;
  } catch (error) {
    console.error('Erro para obter os dados apartir de funcao GetCategories', error);
    throw error;
  }
}

//       "id": "MLB5672",
//       "name": "Acessórios para Veículos"

// https://api.mercadolibre.com/sites/MLB/search?category=$CATEGORY_ID
// export async function getProductsFromCategoryAndQuery(/* categoryId, query */) {
export async function getProductsFromCategoryAndQuery(QUERY?: string) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${QUERY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro funço getProductsFromCategoryAndQuery', error);
    throw error;
  }
}

export async function getProductByCategory(CATEGORY?: string) {
  try {
    const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${CATEGORY}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro funcao getProductByCategory', error);
    throw error;
  }
}

export async function getProductById(PRODUCT_ID?: string) {
  // Esta implementação específica não é avaliada, mas pode ajudar você 🙂
  // Atenção: essa função não deverá ser chamada na tela do carrinho de compras.
  try {
    const response = await fetch(`https://api.mercadolibre.com/items/${PRODUCT_ID}`);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Erro para obter os dados apartir da funcao getPRoductById', error);
    throw error;
  }
}

// testando
