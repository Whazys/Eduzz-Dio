import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const element = 'Iniciando React'
const element2 = <h1>Começando...</h1>

function App() {
  return (
    <div>
      {element}
      {element}2
    </div>
  )
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)
