import React from 'react'
import '/src/css/HeaderProducto.css';
import { FaChevronLeft } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';

const HeaderAdministracion = () => {
  const navigate = useNavigate()

  return (
    <div className='header'>
        <h2>Administración de productos</h2>
        <Link onClick={() => navigate(-1)}><FaChevronLeft/></Link>
    </div>
  )
}

export default HeaderAdministracion 