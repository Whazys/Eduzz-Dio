import { userState } from 'react'
import Button from '../Button'

const Card = () => {
  const [valor, setValor] = userState(0)
  function Adicionar() {
    setValor(valor + 1)
  }
  function Remover() {
    setValor(valor - 1)
  }

  return (
    <div className="card">
      <div className="card-header">First Card</div>
      <div className="card-body">
        <Button className="btn btn-sucess" onClick={Adicionar}>
          Adicionar
        </Button>
        <Button className="btn btn-danger" onClick={Remover}>
          Remover
        </Button>

        <p>{valor}</p>
      </div>
    </div>
  )
}

export default Card
