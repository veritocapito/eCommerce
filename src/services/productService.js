const BASE_URL = 'https://6900bc30ff8d792314bb3787.mockapi.io/products';

const createProduct = async (productData) => {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(productData),
  });

  if(!response.ok) {
    throw new Error('Error creando el producto');
  }

  const data = await response.json();
  return data;
};

const getProducts = async (category) => {
  let url = BASE_URL;
  if (category) {
    url += `?category=${category}`;
  }
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error('Error obteniendo los productos');
  }
  const data = await response.json();
  return data;
};

const getProductById = async (id) => {
  const response = await fetch(`${BASE_URL}/${id}`);
  if (!response.ok) {
    throw new Error('El producto buscado no existe.');
  }
  const data = await response.json();
  return data;
};

export { createProduct, getProducts, getProductById };