import React from 'react'
import Controls from './Controls'

const Setup = () => {
  return (
    <div className='container-setup'>
      <h2 className='container-setup-title'>Setup</h2>
      <div className='container-machine'>
        <img src='/images/machine.png' alt='machine' />
        <Controls />
      </div>
    </div>
  )
}

export default Setup
