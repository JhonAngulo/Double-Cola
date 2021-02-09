import React from 'react'
import Layout from './pages/Layout'
import Setup from './components/Setup'
import Queue from './components/Queue'

const App = () => {

  return (
    <Layout>
      <Setup />
      <Queue />
    </Layout>
  )
}

export default App
