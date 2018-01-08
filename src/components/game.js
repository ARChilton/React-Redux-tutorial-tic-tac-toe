import React from 'react';

import Board from './board';
import GameInfo from './gameInfo'



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


