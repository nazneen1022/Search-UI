export const setProducts = (products) => {
  console.log("in action:", products);
  return { type: "GET_SEARCH_PRODUCTS", payload: products };
};
