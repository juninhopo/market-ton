import './styles.css'
import { IProduct } from '../../App'

interface ProductProps {
  data: IProduct
}

function Product ({ data }: ProductProps) {
  const { name, url, price } = data

  return (
    <div id="container">
      <img src={url} alt={name} />
      <p>{name}</p>
      <strong>{price}</strong>
      <button>Adicionar</button>
    </div>
  )
}

export default Product
