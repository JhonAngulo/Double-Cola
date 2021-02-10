import React, { useEffect, useContext, useRef } from 'react'
import Client from './Client'
import AppContext from '../context/AppContext'

const Queue = () => {
  const { state } = useContext(AppContext)
  const { queueClient, running } = state

  const handleImage = (client) => {
    return `/images/${client.toLowerCase()}.png`
  }

  const clientEndRef = useRef(null)
  const scrollToBottom = () => {
    clientEndRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    if (running) {
      scrollToBottom()
    }
  }, [queueClient, running])

  return (
    <div className='container-queue'>
      <h2 className='container-queue__title'>Queue: {queueClient.length}</h2>
      <div className='container-queue__list'>
        {
          queueClient.map((client, index) => <Client key={`client_${index}`} name={client} img={handleImage(client)} />)
        }
        <div ref={clientEndRef}></div>
      </div>

    </div>
  )
}

export default Queue
