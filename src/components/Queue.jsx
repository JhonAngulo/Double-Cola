import React, { useEffect, useContext } from 'react'
import Client from './Client'
import AppContext from '../context/AppContext'

const Queue = () => {

  const { state: { queueClient } } = useContext(AppContext)

  const handleImage = (client) => {
    return `/public/images/${client.toLowerCase()}.png`
  }

  useEffect(() => {

  }, [queueClient])
  return (
    <div className='container-queue'>
      <h2 className='container-queue__title'>client served: {queueClient.length}</h2>
      <div className='container-queue__list'>
        {
          
          queueClient.map((client, index) => <Client key={`client_${index}`} name={client} img={handleImage(client)} />)
        }
      </div>

    </div>
  )
}

export default Queue


  // const list = ['Sheldon', 'Leonard', 'Penny', 'Rajesh', 'Howard']

  // const whoIsNext = (names, r) => {
  //   let geekNames = names.length
  //   while (r > geekNames) {
  //     r = r - geekNames
  //     geekNames = geekNames * 2
  //   }

  //   return names[Math.ceil(r / (geekNames / names.length)) - 1]
  // }