//authReducer
const initialState = {
  isAuthenticated: false,
  user: null,
  admin: null,
  loading: false,
  error: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_REQUEST':
    case 'ADMIN_LOGIN_REQUEST':
      return {
        ...state,
        loading: true,
        error: null,
      };
    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        user: action.payload.user,
        loading: false,
        error: null,
      };
    case 'ADMIN_LOGIN_SUCCESS':
      return {
        ...state,
        isAuthenticated: true,
        admin: action.payload.admin,
        loading: false,
        error: null,
      };
    case 'LOGIN_FAILURE':
    case 'ADMIN_LOGIN_FAILURE':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
        admin: null,
        loading: false,
        error: action.payload,
      };
    case 'LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        user: null,
      };
    case 'ADMIN_LOGOUT':
      return {
        ...state,
        isAuthenticated: false,
        admin: null,
      };
    default:
      return state;
  }
};

export default authReducer;
