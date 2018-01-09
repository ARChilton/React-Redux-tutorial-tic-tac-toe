import React from 'react'
import renderer from 'react-test-renderer'
import Status from './status'

it('renders correctly', () => {
  const statusText = 'test status'
  const status = renderer
    .create(<Status status={statusText} />)
    .toJSON()
  expect(status).toMatchSnapshot()
})
