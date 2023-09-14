import { combineReducers } from 'redux';
import userReducer from './user';
import listingsReducer from './listings';
import mapReducer from './map';

const rootReducer = combineReducers({
  user: userReducer,
  listings: listingsReducer,
  map: mapReducer,
});

export default rootReducer;
