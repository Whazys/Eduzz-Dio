import React, { useContext } from 'react'
import { ThemeContext } from './'

function Form() {
  const context = useContext(ThemeContext)

  const renderForm = (
    <form>
      <label>Name</label>
      <input />
      <label>E-mail</label>
      <input />
      <label>Idade:</label>
      <input />
      <label>Celular</label>
      <input />
    </form>
  )

  const renderNotLogged = <h1>Necessário fazer o login</h1>

  return <div>{!context.token ? renderNotLogged : renderForm}</div>
}

export default Form
