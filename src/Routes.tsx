import { useState } from 'react'
import { Switch, BrowserRouter, Route } from 'react-router-dom'

import Cart from "./pages/Cart";
import ProductsList from "./pages/ProductsList";

export interface IProduct {
  id: number
  name: string
  url: string
  price: number
}

function Routes() {

  const [ cart, setCart ] = useState<IProduct[]>([])

  function addProduct(newProduct: IProduct) {
    setCart((oldState) => [...oldState, newProduct])
  }

  function removeProduct(productRemoved: IProduct) {
    const newCart = cart.filter((cartProduct) => {
      if (productRemoved.id === cartProduct.id) {
        return false
      } else {
        return true
      }
    })

    setCart(newCart)
  }

  function handleAddOrRemoveProduct(product: IProduct) {
    const isAlreadyAdded = cart.find((cartProduct) => {
      if (product.id === cartProduct.id) {
        return true
      } else {
        return false
      }
    })

    if (isAlreadyAdded) {
      removeProduct(product)
    } else {
      addProduct(product)
    }

  }
    return (
      <BrowserRouter>
        <Switch>
          <Route 
            path="/" 
            exact
            render={() => <ProductsList cart={cart} handleAddOrRemoveProduct={handleAddOrRemoveProduct}  />} 
          />
          <Route 
            path="/cart" 
            render={() => <Cart cart={cart} handleAddOrRemoveProduct={handleAddOrRemoveProduct}  />}
          />
        </Switch>
      </BrowserRouter>
    )
}

export default Routes