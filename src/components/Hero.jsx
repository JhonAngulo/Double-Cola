import React from 'react'
import Controls from './Controls'

const Hero = () => {
  return (
    <div className='container-setup'>
      <h2 className='container-setup-title'>welcome to the drink machine</h2>
      <div className='container-machine'>
        <img src='/images/machine.png' alt='machine' />
        <Controls />
      </div>
    </div>
  )
}

export default Hero
