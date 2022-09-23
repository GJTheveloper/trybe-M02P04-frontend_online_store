export async function getCategories() {
  const categoriesEndPoint = 'https://api.mercadolibre.com/sites/MLB/categories';
  const fetchAPI = await fetch(categoriesEndPoint);
  const dataCategories = await fetchAPI.json();
  return dataCategories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const productsEndPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`;
  const fetchAPI = await fetch(productsEndPoint);
  const dataFromCategoryAndQuery = await fetchAPI.json();
  return dataFromCategoryAndQuery;
}

export async function getProductsFromCategory(query) {
  const productsEndPoint = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  const fetchAPI = await fetch(productsEndPoint);
  const dataFromProducts = await fetchAPI.json();
  return dataFromProducts;
}

export async function getProductsFromCategoryId(categoryId) {
  const categoryEndPoint = `https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}`;
  const fetchAPI = await fetch(categoryEndPoint);
  const dataProductsFromCategoryID = await fetchAPI.json();
  return dataProductsFromCategoryID;
}

export async function getDetailsFromProductId(productId) {
  const getProductId = await fetch(`https://api.mercadolibre.com/items/${productId}`);
  const productIdFromApi = await getProductId.json();
  return productIdFromApi;
}
