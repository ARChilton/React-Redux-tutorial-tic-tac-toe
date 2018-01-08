import React from 'react'
import PropTypes from 'prop-types'

const Square = ({ value = null, onClick, }) => (
  <button className="square" onClick={onClick}>
    {value}
  </button>
)
// PropTypes checks the props are provided and in the correct type
// the isRequired flag defines that a value is always required
Square.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
}

Square.defaultProps = {
  value: null,
}

export default Square
