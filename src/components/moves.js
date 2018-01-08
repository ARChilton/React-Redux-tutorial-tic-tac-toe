import React from 'react'
import PropTypes from 'prop-types'
import SingleMove from '../containers/SingleMove'


const Moves = ({moves, onClick}) => {
  return (
    <ol>
      {moves.map((move, id) => (
        <SingleMove key={id} {...move} onClick={onClick} move={id}/>
      ))}
    </ol>
  )
}

Moves.propTypes = {
  moves: PropTypes.array.isRequired,
}

export default Moves
