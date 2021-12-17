import { AiFillCloseCircle } from 'react-icons/ai'
import { IProduct } from '../../Routes'

import './style.css'
interface ProductInCartProps {
    data: IProduct
    handleAddOrRemoveProduct: (product: IProduct) => void;
}

function ProductInCart({ data, handleAddOrRemoveProduct}: ProductInCartProps) {
    const { name, url, price } = data


    function handleClick() {
        handleAddOrRemoveProduct(data)
    }

    return (
        <div className="cart-container">
            <img src={url} alt={name} />

            <div className="namecar-cart">
                <p>{name}</p>
                <strong>{new Intl.NumberFormat('pt-BR', {style: 'currency', currency:'BRL'}).format(price)}</strong>
                <button type="button" className="buttonRemove-cart" onClick={handleClick}>
                    <AiFillCloseCircle size={35}/>
                </button>    
            </div>

        </div>
    )
}

export default ProductInCart
