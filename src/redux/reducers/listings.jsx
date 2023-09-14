const initialState = {
    businesses: [],
  };
  
  export default function listingsReducer(state = initialState, action) {
    switch (action.type) {
      case 'ADD_LISTING':
        return {
          ...state,
          businesses: [...state.businesses, action.payload],
        };
      case 'DELETE_LISTING':
        
        return {
          ...state,
          businesses: state.businesses.filter((listing) => listing.id !== action.payload),
        };
      default:
        return state;
    }
  }
  