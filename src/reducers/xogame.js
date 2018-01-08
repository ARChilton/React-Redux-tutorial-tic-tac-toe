import * as actions from '../actions'

// Contains the initial state of the application
// This could have been a subsection of the overall store
// containing only the state of the relevant parts for the reducer below
export const initialState = {
  history: [{
    squares: Array(9).fill(null),
  }],
  xIsNext: true,
  stepNumber: 0,
  winner: null,
  historicStep: null,
}
/**
 * function from react example to calc winner
 * @param {[]} squares
 */
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}
/**
 * This controls the functionality of the app and updates the state
 * must have a default that returns the state as it is
 * this stops the app from breaking if the action is not in the switch
 * Contains a switch which will reference an action from the actions.js file
 * this can be written as a string but is safer taken as a variable which is stored
 * in the action.js file and cross-referenced against the action itself
 * Unless returning the state as it is prior to the action this function MUST return a new object
 * as not to mutate the previous state, required for time travel actions
 * @param {object} state defines the current state of the app BEFORE the action is taken
 * @param {object} action defines the action that has been requested from the app
 */
export const xoGame = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
  case actions.CLICKED_SQUARE: {
    const historyLength = state.history.length - 1
    if (typeof state.history[historyLength].squares[action.square] === 'string') {
      console.log('already played')
      return Object.assign({}, state, { historicStep: null, })
    }
    if (typeof state.winner === 'string') {
      return state
    }
    const squares = state.history[state.stepNumber].squares.map((square, index) => {
      if (index === action.square) {
        return state.xIsNext ? 'X' : 'O'
      }
      return square
    })
    const winner = calculateWinner(squares)

    return Object.assign({}, state, {
      history: [...state.history, {
        squares,
      }
      ],
      stepNumber: state.stepNumber + 1,
      xIsNext: !state.xIsNext,
      historicStep: null,
      winner,
    })
  }
  case actions.VIEW_HISTORIC_STEP:
    console.log(`Historic step to be seen: ${action.stepId}`)

    return Object.assign({}, state, {
      historicStep: action.stepId,
    })

  default:
    return state
  }
}
