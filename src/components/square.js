import React from 'react'
import PropTypes from 'prop-types'

const Square = ({ value, onClick }) => {
    // console.log(value)
    // console.log(onClick)
    return (
        <button className="square" onClick={onClick}>
            {value}
        </button>
    );
}

Square.propTypes = {
    onClick: PropTypes.func.isRequired,
    value: PropTypes.string
}

export default Square