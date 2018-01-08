import React from 'react'
// import Square from './square'
import GameStatus from '../containers/gameStatus'


const Board = () => {
    return (
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
    );
}

function renderSquare(i) {
    return (
        <GameStatus index={i} />
        // <Square
        //     index={i}
        // // value={squares[i]}
        // // onClick={() => onClick(i)}
        // />
    );
}


export default Board