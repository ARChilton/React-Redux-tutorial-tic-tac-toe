import { connect } from 'react-redux'

import Moves from '../components/moves'
import { viewHistoricStep } from '../actions';

//props req. moves onClick desc
const mstp = (state, ownProps) => {
    return {
        moves: state.xoGame.history,
    }
}
// == onClick moved to singleMoveContainer ==
// const mdtp = (dispatch, ownProps) => {

//     return {
//         onClick: () => {
//             return dispatch(viewHistoricStep())
//         }
//     }
// }
const mdtp = {}

const MovesTaken = connect(
    mstp, mdtp
)(Moves)

export default MovesTaken