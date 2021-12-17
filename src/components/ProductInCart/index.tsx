import './styles.css'
import { IProduct } from '../../App'
import { AiFillCloseCircle } from 'react-icons/ai'

interface ProductInCartProps {
  data: IProduct
}

function ProductInCart ({ data }: ProductInCartProps) {
  const { name, url, price } = data

  return (
    <div id="container">
      <img src={url} alt={name} />
      <p>{name}</p>
      <strong>{price}</strong>
      <button>< AiFillCloseCircle /></button>
    </div>
  )
}

export default ProductInCart
