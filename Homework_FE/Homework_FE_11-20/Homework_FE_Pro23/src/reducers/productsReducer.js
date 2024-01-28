const initialState = {
  products: [],
  error: null,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'ADD_PRODUCT':
          return {
              ...state,
              products: [...state.products, action.payload],
              error: null,
          };
          case 'ERROR_PRODUCT':
            return {
              ...state,
              error: action.payload,
            }
      default:
          return state;
  }
};