const API_URL = 'https://api.mercadolibre.com/sites/MLB/categories';

export async function getCategories() {
  const response = await fetch(API_URL);
  const categories = await response.json();
  return categories;
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  const response = await fetch(`https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`);
  const products = await response.json();
  return products;
}
