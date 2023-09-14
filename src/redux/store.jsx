// store.js
import { configureStore, applyMiddleware } from 'redux';
import rootReducer from './reducers'; 


import thunk from 'redux-thunk';

const middlewares = [thunk]; 

const store = configureStore(
  rootReducer,
  applyMiddleware(...middlewares)
);

export default store;
