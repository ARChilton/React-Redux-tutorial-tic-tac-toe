import React from 'react'
import PropTypes from 'prop-types'

const Status = ({status = 'Next player is O'}) => (
  <div>
    {status}
  </div>
)

Status.propTypes = {
  status: PropTypes.string.isRequired,
}

export default Status
