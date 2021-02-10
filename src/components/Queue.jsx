import React, { useEffect, useContext, useRef } from 'react'
import Client from './Client'
import AppContext from '../context/AppContext'

import Sheldon from '../assert/images/sheldon.png'
import Leonard from '../assert/images/leonard.png'
import Penny from '../assert/images/penny.png'
import Rajesh from '../assert/images/rajesh.png'
import Howard from '../assert/images/howard.png'
import UserDefault from '../assert/images/user_default.png'

const Queue = () => {
  const { state } = useContext(AppContext)
  const { queueClient, running } = state

  const handleImage = (client) => {
    switch (client) {
      case 'Sheldon':
        return Sheldon

      case 'Leonard':
        return Leonard

      case 'Penny':
        return Penny

      case 'Rajesh':
        return Rajesh

      case 'Howard':
        return Howard

      default:
        return UserDefault
    }
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
        {queueClient.map((client, index) => (
          <Client
            key={`client_${index}`}
            name={client}
            img={handleImage(client)}
          />
        ))}
        <div ref={clientEndRef}></div>
      </div>
    </div>
  )
}

export default Queue
