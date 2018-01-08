import React from 'react'

import StatusHeading from '../containers/Status'
import MovesTaken from '../containers/moveContainer'

const GameInfo = () => {
    return (
        <div className="game-info">
            <StatusHeading />
            <MovesTaken />
        </div>
    )
}



export default GameInfo
