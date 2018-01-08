import * as actions from '../actions';


export const initialState = {
    history: [{
        squares: Array(9).fill(null)
    }],
    xIsNext: true,
    stepNumber: 0,
    winner: null,
    historicStep: null
};

export const xoGame = (state = initialState, action) => {
    console.log(action.type);
    switch (action.type) {
        case actions.CLICKED_SQUARE:
            const historyLength = state.history.length - 1
            if (typeof state.history[historyLength].squares[action.square] === 'string') {
                console.log('already played');
                return Object.assign({}, state, { historicStep: null })
            }
            if (typeof state.winner === 'string') {
                return state
            }
            const squares = state.history[state.stepNumber].squares.map((square, index) => {
                if (index === action.square) {
                    return state.xIsNext ? 'X' : 'O';
                }
                return square;
            })
            const winner = calculateWinner(squares)

            return Object.assign({}, state, {
                history: [...state.history, {
                    squares: squares
                }
                ],
                stepNumber: state.stepNumber + 1,
                xIsNext: !state.xIsNext,
                historicStep: null,
                winner: winner
            })

        case actions.VIEW_HISTORIC_STEP:
            console.log('Historic step to be seen')
            console.log(action.stepId)
            console.log(state.history)

            return Object.assign({}, state, {
                historicStep: action.stepId
            })

        default:
            return state;
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
    ];
    for (let i = 0; i < lines.length; i++) {
        const [a, b, c] = lines[i];
        if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
            return squares[a];
        }
    }
    return null;
}


