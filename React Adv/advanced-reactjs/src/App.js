import React, { useState, useEffect } from 'react'
import { ThemeContex, themes } from './Theme'
import Card from './Card'

function App() {
  const [token, setToken] = useState()

  useEffect(() => {
    setTimeout(() => {
      setToken(() => {
        'a4s6da5se718'
      })
    }, 4000)
  }, [setToken])

  return (
    <ThemeContex.Provider value={{ ...themes.primary, token }}>
      <Card />
    </ThemeContex.Provider>
  )
}

export default App
