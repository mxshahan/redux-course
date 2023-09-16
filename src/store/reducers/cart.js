import { ADD_TO_CART, DECREASE_ITEM, INCREASE_ITEM, REMOVE_FROM_CART } from '../types';

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const item = action.payload;
      const index = state.findIndex((c) => c.product.id === item.id);

      if (index !== -1) {
        state[index].qty += 1;
        state = [...state];
      } else {
        state = [...state, { product: item, qty: 1 }];
      }

      return state;
    }
    case REMOVE_FROM_CART: {
      return state.filter((c) => c.product.id !== action.payload);
    }
    case INCREASE_ITEM: {
      return (state = state.map((c) => {
        if (c.product.id === action.payload) {
          c.qty += 1;
        }
        return c;
      }));
    }
    case DECREASE_ITEM: {
      return (state = state.map((c) => {
        if (c.product.id === action.payload) {
          if (c.qty > 1) c.qty -= 1;
        }
        return c;
      }));
    }
    default:
      return state;
  }
};

export default cartReducer;
