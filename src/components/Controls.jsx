import React from 'react'

const Controls = () => {
  return (
    <div>
      <input type="number" value={1} min="0" max="100" />
      <button className='btn' >Start</button>
      <button className='btn' >Reset</button>
    </div>
  )
}

export default Controls
