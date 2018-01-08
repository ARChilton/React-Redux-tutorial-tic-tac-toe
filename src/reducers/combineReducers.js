import { combineReducers } from 'redux'
import { xoGame } from './xogame' //imports the reducers to be combined from this file

// combines the reducers into a single reducer function this optimises the reducers and makes file management easier
const xoGameApp = combineReducers({
    xoGame
});

//exports the reducers combined, this is utilised at the location the store is created (index.js in this app)
export default xoGameApp 