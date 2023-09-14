const initialState = {
  coordinates: null,
};

export default function mapReducer(state = initialState, action) {
  switch (action.type) {
    case "SET_COORDINATES":
      return {
        ...state,
        coordinates: action.payload,
      };
    default:
      return state;
  }
}