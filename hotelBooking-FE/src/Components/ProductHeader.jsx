import ProdArrow from '../assets/prod_header_arrow.svg'
import { useState, useEffect } from 'react';
import '../Css/product-header.css'
import { Link } from 'react-router-dom'


export const ProductHeader = ({id}) => {

  const [product, setProduct] = useState({});

  const products = [
    {
      id: 1,
      cat: "hotel",
      name: "Staying Inn",
      valoracion: 4,
      direccion: "Avenida Rivadavia 666",
      url: 'https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f3e0.png',
    },
    {
      id: 2,
      cat: "hostel",
      name: "Casablanca Hostel",
      valoracion: 2.5,
      direccion: "Avenida San Martin 942",
      url: 'https://images.emojiterra.com/google/noto-emoji/v2.034/512px/1f3e0.png',
    }
  ]

  useEffect(() => {
    setProduct(products.find(product => product.id === +id));
  }, [])


  return (<div className="product-header">
    <div className="prod-info"><p className='cat'>{product.cat}</p><p className='name'>{product.name}</p></div>
    <Link to='/'><img src={ProdArrow} /></Link>
  </div>)
}