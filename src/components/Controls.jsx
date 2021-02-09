import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

const Controls = () => {

  const { state: { running, drinksAvailable }, toggleRunning, changeDrinksAvailable, reset } = useContext(AppContext)

  const handleRunning = () => {
    toggleRunning()
  }

  const handleInput = (e) => {
    changeDrinksAvailable({ value: e.target.value })
  }

  const handleReset = () => {
    reset({ flag: true})
  }

  return (
    <div>
      <label>
        Drins Aviliable:
      <input type="number" min="1" max="100" value={drinksAvailable} onChange={handleInput} />
      </label>
      <button className='btn' onClick={handleRunning} >{running ? 'Stop' : 'Start'}</button>
      <button className='btn' onClick={handleReset} >Reset</button>
    </div>
  )
}

export default Controls
