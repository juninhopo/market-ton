import { IProduct } from '../../Routes'

import './styles.css'


interface ProductProps {
  data: IProduct
  handleAddOrRemoveProduct: (product: IProduct) => void;
  alreadyIsInCart: boolean
}

function Product ({ data, handleAddOrRemoveProduct, alreadyIsInCart }: ProductProps) {
  const { name, url, price } = data

  function handleClick() {
    handleAddOrRemoveProduct(data)
  }

  return (
    <div className="container">
      <img src={url} alt={name} />

      <div className="namecar">
        <p>{name}</p>
        <strong>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(price)}</strong>
        <button 
          className="buttonAdd" 
          onClick={handleClick} 
          style={alreadyIsInCart ? { backgroundColor: 'red'} : { backgroundColor: '#37e51b' }}
        >
          {
            alreadyIsInCart ? 'Remover' : 'Adicionar'
          }
        </button>
      </div>

    </div>
  )
} 

export default Product
