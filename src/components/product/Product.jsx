import React from 'react'
import './product.css'

const Product = ({Image, Title}) => {
  return (
    <div className='gibson__product'>
      <div className="product">
        <h1>{Title}</h1>
        <img src={Image} />
      </div>
    </div>
  )
}

export default Product