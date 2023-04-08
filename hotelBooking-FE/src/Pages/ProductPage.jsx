// import { ProductHeader } from "../Components/ProductHeader"
// import { Product } from "../Components/Product"
import { useParams } from "react-router-dom"


export const ProductPage = () => {

  const {id} = useParams();

  return (
    <>
        {/* <ProductHeader id={id}/> 
        <Product id={id}/> */}
    </>
)
}