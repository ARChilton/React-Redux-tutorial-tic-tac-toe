import { connect } from 'react-redux'

export const Status = ({status = 'Next player is O'}) => (
  <div>
    {status}
  </div>
)

//props req. status and moves
export const mapStateToProps = (state) => ({
  status: state.xoGame.winner
    ? 'Winner: ' + state.xoGame.winner
    : 'Next player: ' + (state.xoGame.xIsNext ? 'X' : 'O'),
})

export default connect(
  mapStateToProps,
)(Status)
