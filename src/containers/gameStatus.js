import { connect } from 'react-redux' //imports the connect function

import { clickSquare } from '../actions' //this imports the action(s) to be dispatched
import Square from '../components/square' //this is the component that will be wrapped by this container

/**
 * maps the state to the props for the square object
 * @param {object} state 
 * @param {object} ownProps 
 */
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
/**
 * maps the dispatching of actions to a prop function
 * @param {object} dispatch 
 * @param {object} ownProps 
 */
const mdtp = (dispatch, ownProps) => {

    return {
        onClick: () => {
            return (
                dispatch(clickSquare(ownProps.index))
            )
        }
    }
}

/**
 * connects the mapStateToProps and mapDispatch to props to the Square component
 */
const GameStatus = connect(
    mstp, mdtp
)(Square)

export default GameStatus