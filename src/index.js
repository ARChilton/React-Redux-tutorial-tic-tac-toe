import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import './index.css'
import App from './components/app'
import xoGameApp from './reducers/combineReducers'

//This sets up the state store
let store = createStore(xoGameApp);
//shows the first state on the console
console.log(store.getState());
//subscribes to all changes of the state and shows them on the console (should be DEV only)
const unsubscribe = store.subscribe(() => {
  console.log(store.getState())
});

/**
 * React renders the app
 * The Provider is the conduit through which the state store is provided
 * The App component holds the rest of the app
 * document.getElementById('root') references the root element in 
 */
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);