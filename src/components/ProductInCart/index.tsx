import './style.css'
import { IProduct } from '../../App'
import { AiFillCloseCircle } from 'react-icons/ai'

interface ProductInCartProps {
  data: IProduct
}

function ProductInCart ({ data }: ProductInCartProps) {
  const { name, url, price } = data

  return (
    <div className="container">
        <img src={url} alt={name} />

        <div className="namecar">
            <p>{name}</p>
            <strong>R$ {price}</strong>
            <AiFillCloseCircle className="buttonRemove"/>

        </div>
    </div>
  )
}

export default ProductInCart
