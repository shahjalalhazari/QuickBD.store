export const getProducts = async (category) => {
  if (category) {
    const res = await fetch(`https://dummyjson.com/products/category/${category}?limit=0`); // GET ALL PRODUCTS OF THE CATEGORY.
    const data = await res.json();
    return data.products;
  } else {
    const res = await fetch('https://dummyjson.com/products?limit=10'); // GET FIRST 10 PRODUCTS.
    const data = await res.json();
    return data.products;
  }
};