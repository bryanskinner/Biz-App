const initialState = {
    user: null, 
  };
  
  export default function userReducer(state = initialState, action) {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          user: action.payload,
        };
      case 'LOGOUT':
        return {
          ...state,
          user: null,
        };
      default:
        return state;
    }
  }
  