import React from 'react'
import Controls from './Controls'

const Hero = () => {
  return (
    <div className='container-hero'>
      <h2 className='container-hero-title'>welcome to the drink machine</h2>
      <div className='container-machine'>
        <img className='container-machine__img' src='/images/machine.png' alt='machine' />
        <Controls />
      </div>
    </div>
  )
}

export default Hero
