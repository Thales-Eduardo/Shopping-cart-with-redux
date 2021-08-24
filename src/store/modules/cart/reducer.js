import produce from 'immer';

export function cart(state = [], action) {
  switch (action.type) {
    case 'ADD_TO_CART':
      return produce(state, (draft) => {
        const productIndex = draft.findIndex(
          (p) => p.id === action.products.id,
        );

        if (productIndex >= 0) {
          draft[productIndex].amount += 1;
        } else {
          draft.push({
            ...action.products,
            amount: 1,
          });
        }
      });
    default:
      return state;
  }
}
