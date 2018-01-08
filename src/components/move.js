import React from 'react'
import PropTypes from 'prop-types'


const Move = ({move, onClick}) => (
  <li key={move}>
    <button onClick={onClick}>
      {move
        ? 'Go to move #' + move
        : 'Go to the game start'}
    </button>
  </li>
)

Move.propTypes = {
  move: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Move
