import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import reducers from './reducers';

const cartMiddleware = (store) => (next) => (action) => {
  const currState = store.getState();
  if (currState.cart.incart.includes(action.payload)) {
    action.type = '';
  }
  next(action);
};

export const store = createStore(
  reducers,
  {},
  applyMiddleware(cartMiddleware, thunk, logger)
);
