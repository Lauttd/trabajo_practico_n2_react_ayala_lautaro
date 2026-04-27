export const productosReducer = (state, action) => {
  switch (action.type) {
    case 'SET_PRODUCTS':
      return { ...state, productos: action.payload };
    
    case 'ADD_PRODUCT': 
      return {
        ...state,
        productos: [...state.productos, action.payload]
      };

    case 'DELETE_PRODUCT':
      return {
        ...state,
        productos: state.productos.filter((p) => p._id !== action.payload)
      };

    default:
      return state;
  }
};