import React from 'react';
// import { connect } from 'react-redux';
// import * as actions from '../actions';


import Board from './board';
import GameInfo from './gameInfo'

// function handleClick(i) {
//     return store.dispatch(actions.clickSquare(i));
// }

// const mapStateToProps = (state, ownProps) => {
//     return {
//         squares: ownProps.squares === state.history[state.history.length - 1].squares
//     }
// }
// const mapDispachToProps = (dispatch, ownProps) => {
//     onClick: (i) => dispatch(actions.clickSquare(i));
// }

export const Game = () => {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <GameInfo />
        </div>
    );
}

export default Game


