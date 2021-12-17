import Header from "../../components/Header";
import { css } from "@emotion/react";
import PacmanLoader from "react-spinners/PacmanLoader";

import { useState, useEffect } from "react"

import api from '../../config/api'
import Product from "../../components/Product";

import { IProduct } from "../../Routes";

import "./styles.css";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;
interface ProductListProps {
  cart: IProduct[];
  handleAddOrRemoveProduct: (product: IProduct) => void;
}

function ProductsList({ cart, handleAddOrRemoveProduct }: ProductListProps) {
  const [products, setProducts] = useState<IProduct[]>([])
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useState("#37e51b");

  useEffect(() => {
    async function getProducts() {
      setLoading(true)
      const response = await api.get('/products')

      setProducts(response.data)
      setLoading(false)
    }

    getProducts()

  }, [])

  return (
    <>
      <Header />
      { loading ? (
        <div className="loading-products">
          <PacmanLoader color={color} loading={loading} css={override} size={30} />
        </div>
      ) : (
        <div className="product-list">
          {products.map((product) => {
            const alreadyIsInCart = cart.find(item => {
              if (item.id === product.id) {
                return true
              } else {
                return false
              }
            })

            return (
              <Product 
                key={product.id} 
                data={product} 
                handleAddOrRemoveProduct={handleAddOrRemoveProduct}
                alreadyIsInCart={Boolean(alreadyIsInCart)}
              />
            );
          })}
      </div>
      )}
    </>
  );
}

export default ProductsList;
