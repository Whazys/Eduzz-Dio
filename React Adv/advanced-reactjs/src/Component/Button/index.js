import React from 'react'
import PropTypes from 'prop-types'

function Button(props) {
  const { children, onClick } = props
  return <button onClick={onClick}>{children}</button>
}

Button.ProTypes = {
  onClick: PropTypes.func.isRequired
}

export default Button