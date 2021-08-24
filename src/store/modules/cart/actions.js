export function addToCart(products) {
  return {
    type: 'ADD_TO_CART',
    products,
  };
}

export function removeFromCart(id) {
  return {
    type: 'REMOVE_FROM_CART',
    id,
  };
}
