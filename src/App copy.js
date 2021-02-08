import React, { useState, useEffect } from 'react'
import Queue from './components/Queue'

const App = () => {
  const [drinksAvailable, setDrinksAvailable] = useState(1)
  const [iteration, setIteration] = useState(0)
  const [running, setRunning] = useState(false)
  const [list, setList] = useState([])

  const handleRunning = () => {
    setRunning(!running)
    !running && iteration == 0 && setList([])
  }

  const reset = () => {
    setIteration(0)
    setRunning(false)
  }

  const persons = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']

  const whoIsNext = (names, r) => {
    let geekNames = names.length
    while (r > geekNames) {
      r = r - geekNames
      geekNames = geekNames * 2
    }

    return names[Math.ceil(r / (geekNames / names.length)) - 1]
  }

  const handleNextPerson = () => {
    const next = whoIsNext(persons, iteration + 1)
    setList((list) => [...list, next])
  }

  useEffect(() => {
    let interval = null
    if (running) {
      if (iteration < drinksAvailable) {
        interval = setInterval(() => {
          setIteration((iteration) => iteration + 1)
          handleNextPerson()
        }, 1000)
      } else {
        reset()
        clearInterval(interval)
      }
    } else if (!running && iteration !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running, iteration, drinksAvailable])

  return (
    <div>
      <div>{iteration}</div>
      <div>
        <input
          value={drinksAvailable}
          type='number'
          onChange={(e) => {
            setDrinksAvailable(e.target.value)
          }}
        />
        <button onClick={handleRunning}>{running ? 'Pause' : 'Start'}</button>
        <button onClick={reset}>Reset</button>
      </div>
      <Queue list={list} />
    </div>
  )
}

export default App
