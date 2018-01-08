import React from 'react'

import Board from './board'
import GameInfo from './gameInfo'


export const Game = () => {
  return (
    <div className="game">
      <Board/>
      <GameInfo/>
    </div>
  )
}

export default Game


