import { connect } from 'react-redux'

import Move from '../components/move'
import { viewHistoricStep } from '../actions'

// props req. moves onClick
const mstp = (state, ownProps) => {
  console.log(ownProps)
  return ownProps
}

const mdtp = (dispatch, ownProps) => {
  console.log(ownProps)
  return {
    onClick: () => dispatch(viewHistoricStep(ownProps.move)),
  }
}

const SingleMove = connect(mstp, mdtp)(Move)

export default SingleMove
