import React from 'react'

import { H2Swpper, H3Swpper } from './style'

function H2({ title, type }) {
  return type === 'h2' ? (
    <H2Swpper>{title}</H2Swpper>
  ) : (
    <H3Swpper>{title}</H3Swpper>
  )
}

export default H2
