import React from 'react'
import PropTypes from 'prop-types'

const Status = ({status}) => (
  <div>
    <div>{status}</div>

  </div>
)

Status.propTypes = {
  status: PropTypes.string.isRequired,
}

export default Status
