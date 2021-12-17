import './styles.css'
import { IProduct } from '../../App'


interface ProductProps {
  data: IProduct
}

function Product ({ data }: ProductProps) {
  const { name, url, price } = data

  return (
    <div className="container">
      <img src={url} alt={name} />

      <div className="namecar">
        <p>{name}</p>
        <strong>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(price)}</strong>
        <button className="buttonAdd">Adicionar</button>
      </div>

    </div>
  )
} 

export default Product
