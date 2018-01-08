import { connect } from 'react-redux'
import { clickSquare } from '../actions'
import Square from '../components/square'


const mstp = (state, ownProps) => {

    const history = state.xoGame.history;
    let hLength = history.length
    let value = null;

    if (typeof state.xoGame.historicStep === 'number') {
        value = history[state.xoGame.historicStep].squares[ownProps.index]
    } else {
        value = history[hLength - 1].squares[ownProps.index]
    }
    return {
        value: value
    }
}
const mdtp = (dispatch, ownProps) => {

    return {
        onClick: () => {
            return (
                dispatch(clickSquare(ownProps.index))
            )
        }
    }
}

const GameStatus = connect(
    mstp, mdtp
)(Square)

export default GameStatus