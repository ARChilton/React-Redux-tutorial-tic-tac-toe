import { connect } from 'react-redux'

import Moves from '../components/moves'
import { viewHistoricStep } from '../actions';

//props req. moves onClick 
const mstp = (state, ownProps) => {
    return {
        moves: state.xoGame.history,
    }
}

const mdtp = {}

const MovesTaken = connect(
    mstp, mdtp
)(Moves)

export default MovesTaken