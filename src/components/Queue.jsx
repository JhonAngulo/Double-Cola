import React, { useEffect } from 'react'

const Queue = ({ list }) => {

  useEffect(() => {
    
  }, [list])
  return (
    <div>
      <h2>client served</h2>
      {
        list.map((person, index) => <p key={index}>{person}</p>)
      }
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