// Placeholder for order reducer
//src/redux/reducers/orderReducer.js
const initialState = {
    orders: [],
    loading: false,
    error: null,
  };
  
  const orderReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'PLACE_ORDER_SUCCESS':
        return { ...state, orders: [...state.orders, action.payload], loading: false, error: null };
      case 'PLACE_ORDER_FAILURE':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  
  export default orderReducer;
  