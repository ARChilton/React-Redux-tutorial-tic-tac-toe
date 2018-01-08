import * as actions from './actions.js';
import { combineReducers } from 'redux';

const initialState = {
    history: [{
        squares: Array(9).fill(null)
    }],
    xIsNext: true,
    stepNumber: 0,
    winner: null
};

const xoGame = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case actions.CLICKED_SQUARE:
            return Object.assign({}, state, {
                history: [...state.history, {
                    squares: state.history[state.stepNumber].squares.map((square, index) => {
                        if (index === action.square) {
                            return state.xIsNext ? 'X' : 'O';
                        }
                        return square;
                    })
                }
                ],
                stepNumber: state.stepNumber + 1,
                xIsNext: !state.xIsNext
            });
        case actions.GAME_WON:
            return Object.assign({}, state, {
                winner: action.winner
            });
        case actions.INCREMENT_STEP:
            return Object.assign({}, state, {
                stepNumber: state.stepNumber + 1
            });
        default:
            return state;
    }

}

const xoGameApp = combineReducers({
    xoGame
});

export default xoGameApp