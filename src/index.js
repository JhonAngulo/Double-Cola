import React from 'react'
import { render } from 'react-dom'
import App from './App'
import { AppContextProvider } from './context/AppContext'
import './styles/global.scss'

render(
  <React.StrictMode>
    <AppContextProvider >
      <App />
    </AppContextProvider >
  </React.StrictMode>,
  document.getElementById('root')
)
