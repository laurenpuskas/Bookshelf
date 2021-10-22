import React from 'react'

import * as style from './style.module.scss'

const Card = (props) => {
  return (
    <div className={`${style.card} ${props.className}`} style={props.style}>
      {props.children}
    </div>
  )
}

export default Card
