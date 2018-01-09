import React from 'react'
import Board from './board'
import GameInfo from './gameInfo'


// lays out the game into two components the board and the information at the side
const Game = () => (
  <div className="game">
    <div className="game-board">
      <Board />
    </div>
    <GameInfo />
  </div>
)

export default Game
