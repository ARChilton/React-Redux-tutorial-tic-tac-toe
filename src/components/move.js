import React from 'react'
import PropTypes from 'prop-types'

const Move = ({ move, onClick }) => {
    const desc = move ? 'Go to move #' + move : 'Go to the game start'
    return (

        <li key={move}>
            <button onClick={onClick}>{desc}</button>
        </li>

    )
}

Move.propTypes = {
    move: PropTypes.number.isRequired,
    onClick: PropTypes.func.isRequired,


}

export default Move