import * as actions from '../actions'


export const initialState = {
  history: [{
    squares: Array(9).fill(null),
  }],
  xIsNext: true,
  stepNumber: 0,
  winner: null,
  historicStep: null,
}

const squareHasBeenPlayed = (history, playedSquare) => (
  history[history.length - 1].squares[playedSquare]
)

export const xoGame = (state = initialState, action) => {
  console.log(action.type)
  switch (action.type) {
    case actions.CLICKED_SQUARE:
      if (squareHasBeenPlayed(state.history, action.square)) {
        return {...state, historicStep: null} // Reset game view to current step
      }

      if (state.winner) {
        return state // No more actions
      }

      const squares = state.history[state.stepNumber].squares.map(
        (square, index) => (index === action.square
          ? (state.xIsNext ? 'X' : 'O')
          : square),
      )

      return {
        ...state,
        history: [...state.history, {squares}],
        stepNumber: state.stepNumber + 1,
        xIsNext: !state.xIsNext,
        historicStep: null,
        winner: calculateWinner(squares),
      }

    case actions.VIEW_HISTORIC_STEP:
      return {
        ...state,
        historicStep: action.stepId,
      }

    default:
      return state
  }

}

//function from react example to calc winner
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ]
  for (let i = 0; i < lines.length; i++) {
    const [a, b, c] = lines[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}


