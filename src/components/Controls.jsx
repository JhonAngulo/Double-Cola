import React, { useContext } from 'react'
import AppContext from '../context/AppContext'

const Controls = () => {

  const { state, actions } = useContext(AppContext)
  const { running, drinksAvailable, queueClient, iteration } = state
  const { toggleRunning, changeDrinksAvailable, reset } = actions

  const handleRunning = () => {
    toggleRunning()
  }

  const handleInput = (e) => {
    changeDrinksAvailable({ value: e.target.value })
  }

  const handleReset = () => {
    reset({ flag: true })
  }

  const latest = queueClient[queueClient.length - 1]

  return (
    <div>
      <div className='controls'>
        <div className='controls__instructions'>
          <h3 className='controls__instructions-title' >Instructions: </h3>
          <ol className='controls__instructions-items'>
            <li className='controls__instructions-item' >set the amount of <strong>drinks available</strong></li>
            <li className='controls__instructions-item' >press start to start delivering the drinks</li>
          </ol>
        </div>
        <div className='controls__input'>
          <label className='controls__input-label'>
            <span> Drinks available:</span>
            <input className='controls__input-in' type="number"
              min="1" max="100"
              value={drinksAvailable} onChange={handleInput}
              disabled={iteration ? true : false} />
          </label>
        </div>
        <div className='controls__buttons' >
          <button className='btn' onClick={handleRunning} >{running ? 'Stop' : 'Start'}</button>
          <button className='btn' onClick={handleReset} >Reset</button>
        </div>

      </div>
      <br />
      {
        latest && !running && <p className='alert info'>{`The last in the queue was: ${latest}`}</p>
      }
    </div>
  )
}

export default Controls
