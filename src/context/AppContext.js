import { createContext, useState, useEffect, useCallback } from 'react'
import { whoIsNext } from '../hooks/useWhoIsNext'

const Context = createContext({})

export function AppContextProvider({ children }) {

  const [state, setState] = useState({
    running: false,
    drinksAvailable: 1,
    iteration: 0,
    queueClient: [],
    clientList: ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']
  })

  const addIteration = useCallback(
    ({ newClient }) => {
      setState({
        ...state,
        iteration: state.iteration + 1,
        queueClient: [...state.queueClient, newClient]
      })
    }, [state]
  )

  const reset = useCallback(
    ({ flag }) => {
      setState({
        ...state,
        running: false,
        iteration: 0,
        queueClient: flag ? [] : [...state.queueClient]
      })
    }, [state]
  )

  const { running, iteration, drinksAvailable } = state

  useEffect(() => {
    let interval = null
    if (running) {
      if (iteration < drinksAvailable) {
        interval = setInterval(() => {
          addIteration({ newClient: whoIsNext( state.clientList, iteration + 1)})
        }, 1000)
      } else {
        reset({ flag: false })
        clearInterval(interval)
      }
    } else if (!running && iteration !== 0) {
      clearInterval(interval)
    }
    return () => clearInterval(interval)
  }, [running, iteration, drinksAvailable, addIteration, reset])

  const toggleRunning = () => {
    setState({
      ...state,
      running: !state.running,
      queueClient: !state.running && state.iteration === 0 ? [] : [...state.queueClient] 
    })
  }

  const changeDrinksAvailable = ({ value }) => {
    setState({
      ...state,
      drinksAvailable: value
    })
  }

  return (
    <Context.Provider value={{ state, toggleRunning, changeDrinksAvailable, reset }}>
      {children}
    </Context.Provider>
  )
}

export default Context