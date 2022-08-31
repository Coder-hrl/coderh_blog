import React from 'react'

import ItemSwpper from './style'

function Item(props) {
  const { img, title, technical, desc } = props
  return (
    <ItemSwpper>
      <img src={img} alt="项目图片" />
      <div className="title">{title}</div>
      <div className="technical">
        {technical.map((item) => (
          <div className="tech-item">{item}</div>
        ))}
      </div>
      <div className="desc">{desc}</div>
    </ItemSwpper>
  )
}

export default Item
