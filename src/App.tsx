import { useState } from 'react'

import Cart from "./pages/Cart";
import ProductsList from "./pages/ProductsList";
import Header from "./components/Header";

import './App.css'

export interface IProduct {
  id: number
  name: string
  url: string
  price: number
}

function App() {
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
    <div id="body">
      <Header />
      <Cart/>

      {/* <ProductsList cart={cart} handleAddOrRemoveProduct={handleAddOrRemoveProduct}  /> */}
    </div>
  );
}

export default App;
