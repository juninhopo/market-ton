import "./styles.css";

import { IProduct } from "../../App";

import Product from "../../components/Product";

interface ProductListProps {
  cart: IProduct[];
  handleAddOrRemoveProduct: (product: IProduct) => void;
}

function ProductsList({ cart, handleAddOrRemoveProduct }: ProductListProps) {
  const productsList = [
    {
      id: 1,
      name: "Mustang",
      url: "https://www.pumaclubdobrasil.com.br/wp-content/uploads/2020/07/Carros-6-400x400.jpg",
      price: 350000,
    },
    {
      id: 2,
      name: "Lamborguini",
      url: "https://www.pumaclubdobrasil.com.br/wp-content/uploads/2020/07/Carros-6-400x400.jpg",
      price: 850000,
    },
    {
      id: 3,
      name: "Ferrari",
      url: "https://www.pumaclubdobrasil.com.br/wp-content/uploads/2020/07/Carros-6-400x400.jpg",
      price: 700000,
    },
    {
      id: 4,
      name: "Camaro",
      url: "https://www.pumaclubdobrasil.com.br/wp-content/uploads/2020/07/Carros-6-400x400.jpg",
      price: 150000,
    },
    {
      id: 5,
      name: "Merceds AMG",
      url: "https://www.pumaclubdobrasil.com.br/wp-content/uploads/2020/07/Carros-6-400x400.jpg",
      price: 400000,
    },
    {
      id: 6,
      name: "Dodge",
      url: "https://www.pumaclubdobrasil.com.br/wp-content/uploads/2020/07/Carros-6-400x400.jpg",
      price: 200000,
    },
  ];

  return (
    <div className="product-list">
        {productsList.map((product) => {
          return <Product data={product} />;
        })}
    </div>
  );
}

export default ProductsList;
