import React from 'react'
import PropTypes from 'prop-types'

import TitleSwpper from './style'

function Title(props) {
  const { type, value, color = '#2e317c' } = props

  return (
    <TitleSwpper>
      <div className={type} style={{ color }}>
        {value}
      </div>
    </TitleSwpper>
  )
}

Title.propTypes = {
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  color: PropTypes.string,
}

export default Title
