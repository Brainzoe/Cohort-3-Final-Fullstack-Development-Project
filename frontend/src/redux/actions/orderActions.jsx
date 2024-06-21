// Placeholder for order actions
//src/redux/actions/orderActions.js
import axios from 'axios';

export const placeOrder = (orderData) => async (dispatch) => {
  try {
    const response = await axios.post('/api/orders', orderData);
    dispatch({ type: 'PLACE_ORDER_SUCCESS', payload: response.data });
  } catch (error) {
    dispatch({ type: 'PLACE_ORDER_FAILURE', payload: error.response.data });
  }
};
