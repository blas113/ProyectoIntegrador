import React from 'react'
import '../css/headerProducto.css';
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const HeaderProducto = ({result}) => {
  const navigate = useNavigate()

  return (
    <div className='header'>
      <div>
      <h4>{result?.categoria?.nombre}</h4>
      <h2>{result?.nombre}</h2>
      </div>
      <Link onClick={() => navigate(-1)}><FaChevronLeft/></Link>
    </div>
  )
}

export default HeaderProducto 
