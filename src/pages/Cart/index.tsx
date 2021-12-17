import ProductInCart from '../../components/ProductInCart'

import "./style.css";

function Cart () {

    const productsList = [
        {
          id: 1,
          name: "Mustang",
          url: "https://www.competitionhobbies.com.br/img/products/bolha-mustang-fastback-67-1-10-de-200mm-clear-sem-pintura_1_600.jpg  ",
          price: 350000,
        },
        {
          id: 2,
          name: "Lamborguini",
          url: "https://www.limahobbies.com.br/arquivos/ids/182426-400-400/JAD30765_01_2-FF-LAMBORGHINI-MURCIELAGO-1-24-JAD30765.jpg?v=637485768010630000",
          price: 850000,
        },
        {
          id: 3,
          name: "Ferrari",
          url: "https://www.limahobbies.com.br/arquivos/ids/181169-400-400/SIG-FERRARI-488-GTB-1-43-UNICA-01-BUR3690401.jpg?v=637408931235400000",
          price: 700000,
        },
        {
          id: 4,
          name: "Camaro",
          url: "https://www.limahobbies.com.br/arquivos/ids/185815-400-400/Miniatura-Chevrolet-Camaro-SS-RS-2010-1-24-Special-Edition-Maisto-AMARELO-31207-01.jpg?v=637715671729970000",
          price: 150000,
        },
        {
          id: 5,
          name: "Merceds AMG",
          url: "https://rihappy.vteximg.com.br/arquivos/ids/910881-400-400/veiculo-hot-wheels-escala-1-64-boulevard-mercedes-benz-g-class-1991-mattel-100300443_Frente.jpg?v=637419398516970000",
          price: 400000,
        },
        {
          id: 6,
          name: "Dodge",
          url: "https://fipalshop.com.br/wp-content/uploads/2021/08/20210813092804-400x400.png",
          price: 200000,
        },
      ];

      return (
        <div className="cart-list">
            
            <div className="titleCart">
               <h1>Seu carrinho:</h1>
            </div>

            <div className="productsList">
                {productsList.map((product) => {
                return <ProductInCart data={product} />;
                })}
            </div>
            

        </div>
      );

}

export default Cart
