import './style.css'
import { IProduct } from '../../App'
import { AiFillCloseCircle } from 'react-icons/ai'

interface ProductInCartProps {
    data: IProduct
}

function ProductInCart({ data }: ProductInCartProps) {
    const { name, url, price } = data

    return (
        <div className="container">
            <img src={url} alt={name} />

            <div className="namecar">
                <p>{name}</p>
                <strong>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(price)}</strong>
                <button type="button" className="buttonRemove">
                    <AiFillCloseCircle size={35}/>
                </button>    
            </div>

        </div>
    )
}

export default ProductInCart
