import Header from "../../components/Header";
import { IProduct } from '../../Routes'

import ProductInCart from '../../components/ProductInCart'

import EmptyCartImg from '../../assets/empty-cart.png'

import "./style.css";

interface CartProps {
  cart: IProduct[];
  handleAddOrRemoveProduct: (product: IProduct) => void;
}

function Cart ({handleAddOrRemoveProduct, cart}:CartProps ) {
      return (
        <>
          <Header isOnCart />
          
          { cart.length === 0 ? (
            <div className="empty-cart-container"><img src={EmptyCartImg} alt="Imagem de carrinho vazio" /></div>
          ) : (
            <div className="cart-list">
            
              <div className="titleCart">
                <h1>Seu carrinho:</h1>
              </div>

              <div className="productsList">
                  {cart.map((product) => {
                    return (
                      <ProductInCart 
                        key={product.id} 
                        data={product} 
                        handleAddOrRemoveProduct={handleAddOrRemoveProduct}
                      />);
                  })}
              </div>
            </div>
          )}
        </>
      );

}

export default Cart
