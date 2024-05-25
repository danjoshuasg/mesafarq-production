import React from 'react'
import './Item.css'

const Item = (props) => {
  return (
    <div className='item'>
        <img src={props.image} alt=''/>
        <p>{props.name}</p>
        <div className="item-prices">

        </div>
        <div className="item-specifications">
            
        </div>

        <div className="item-specifications">
            
        </div>
    </div>
  )
}

export default Item