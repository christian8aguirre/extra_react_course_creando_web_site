import React from 'react';
import './SingleProduct.css'

const SingleProduct = (props) => {
  if(!props) return null;
  const { description, imagen, nombre, precio} = props.producto;
  
  return (
    <div className = 'info-producto'>
      <div className = 'imagen'>
        <img src = {`/img/${imagen}.png`} alt={nombre}/>
      </div>

      <div className = 'info'>
        <h2>{nombre}</h2>
        <p className='precio'>$ {precio}</p>
        <p>{description}</p>
      </div>

    </div>
  )
}

export default SingleProduct;