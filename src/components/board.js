import React from 'react'
import GameStatus from '../containers/gameStatus' // imports the GameStatus container, this could have also been a container


/**
 * renders the GameStatus container of index i
 * @param {number} i
 */
function renderSquare(i) {
  return (
    <GameStatus index={i} />
  )
}


// dumb rendering only component
const Board = () => (
  <div>
    <div className="board-row">
      {renderSquare(0)}
      {renderSquare(1)}
      {renderSquare(2)}
    </div>
    <div className="board-row">
      {renderSquare(3)}
      {renderSquare(4)}
      {renderSquare(5)}
    </div>
    <div className="board-row">
      {renderSquare(6)}
      {renderSquare(7)}
      {renderSquare(8)}
    </div>
  </div>
)


// allows other files to utilise the Board component
export default Board
