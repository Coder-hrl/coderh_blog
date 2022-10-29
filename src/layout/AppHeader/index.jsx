import React from 'react'
import { useNavigate } from 'react-router-dom'

import { AppHeaderSwpper } from './style'

function AppHeader() {
  const navigate = useNavigate()

  const selectHome = () => {
    navigate('home')
  }

  return (
    <AppHeaderSwpper>
      <h2 onClick={selectHome}>Coderh Personal Blog</h2>
    </AppHeaderSwpper>
  )
}

export default AppHeader
