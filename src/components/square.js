import styled, {css} from 'react-emotion'
import React from 'react'
import PropTypes from 'prop-types'

// Example 1 of emotion styling - using CSS
const squareStyle = css `
background: green;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
`

// Example 1
const CSSSquare = ({value = null, onClick}) => (
  <button className={squareStyle} onClick={onClick}>
    {value}
  </button>
)

// Example 2 of using emotion styling - using styled
const Basic = ({value = null, onClick, className}) => (
  <button className={className} onClick={onClick}>
    {value}
  </button>
)

// Example 2 - creates a styled version of the "Basic" component
const Square = styled(Basic) `
background: blue;
    border: 1px solid #999;
    float: left;
    font-size: 24px;
    font-weight: bold;
    line-height: 34px;
    height: 34px;
    margin-right: -1px;
    margin-top: -1px;
    padding: 0;
    text-align: center;
    width: 34px;
`
// PropTypes checks the props are provided and in the correct type
// the isRequired flag defines that a value is always required
Basic.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  className: PropTypes.string.isRequired,
}

Basic.defaultProps = {
  value: null,
}
CSSSquare.propTypes = {
  onClick: PropTypes.func.isRequired,
  value: PropTypes.string,
}

CSSSquare.defaultProps = {
  value: null,
}
export default Square
