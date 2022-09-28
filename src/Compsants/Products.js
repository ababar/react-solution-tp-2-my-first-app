
import Product from "./Product";
function Products(props) {
    return (
      <div class="container">
        <div class="row">
          {
            props.produits.map((produit, index)=>{
              return <Product key={index} data={produit} />
            })
          }
        </div>
      </div>
    )
}
export default Products;