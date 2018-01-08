import { connect } from 'react-redux'

import Status from '../components/status'

//props req. status and moves
const mstp = (state, ownProps) => {
    console.log(state)
    let status;

    if (typeof state.xoGame.winner === 'string') {
        status = 'Winner: ' + state.xoGame.winner;
    } else {
        status = 'Next player: ' + (state.xoGame.xIsNext ? 'X' : 'O');
    }
    return {
        status: status
    }
}

const StatusHeading = connect(
    mstp, {}
)(Status)

export default StatusHeading