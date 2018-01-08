import { connect } from 'react-redux'

import Moves from '../components/moves'


// props req. moves onClick

/**
 * maps the changes in the history of the game to steps which can be recalled
 * @param {object} state
 * @param {object} ownProps
 */
const mstp = state => ({ moves: state.xoGame.history, })


// no actions to be dispatched
const mdtp = {}

const MovesTaken = connect(mstp, mdtp)(Moves)

export default MovesTaken
