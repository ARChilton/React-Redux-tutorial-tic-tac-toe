import React from 'react'
import PropTypes from 'prop-types'
import SingleMove from '../containers/singleMoveContainer'

/* takes the prop moves and maps it to multiple SingleMove components
 which are given the move and onClick props */
const Moves = ({ moves, onClick, }) => (
  <ol>

    {moves.map((move, id) => (
      <SingleMove key={id} {...move} onClick={onClick} move={id} />
    ))}

  </ol>
)
// PropTypes checks the props are provided and in the correct type
Moves.propTypes = {
  moves: PropTypes.arrayOf(PropTypes.object).isRequired,
  onClick: PropTypes.func,
}

Moves.defaultProps = {
  onClick: null,
}

export default Moves
