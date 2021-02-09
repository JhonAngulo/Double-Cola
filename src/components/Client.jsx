import React from 'react'

const Client = ({ img, name }) => (
  <div className='client'>
    <img className='client__img' src={img} alt={name} />
    <div className='client__detail'>
      <h3 className='client__detail-title' >{name}</h3>
      <p>has been attended</p>
    </div>
  </div>
)


export default Client
