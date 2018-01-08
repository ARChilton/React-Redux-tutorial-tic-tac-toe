import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
// import * as actions from './actions.js';
import App from './components/app'
import xoGameApp from './reducers/combineReducers';

let store = createStore(xoGameApp);
console.log(store.getState());
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);