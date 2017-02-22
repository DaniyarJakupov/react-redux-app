import {createStore, applyMiddleware} from 'redux';
import rootReducer from '../reducers';
import reduxImmutable from 'redux-immutable-state-invariant';

export default function storeConfig(inititalState) {
  return createStore(rootReducer, inititalState, applyMiddleware(reduxImmutable()))
}

