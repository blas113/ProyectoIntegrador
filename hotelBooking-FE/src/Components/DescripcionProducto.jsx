import React from 'react'
import '/src/css/DescripcionProducto.css';

const DescripcionProducto = ({result}) => {
  return (
    <div className='descripcion'>
        <h3>Alojate en el corazón de {result?.direccion?.ciudad?.nombre}</h3>
        <p>
           {result.descripcion}
        </p>
    </div>
  )
}

export default DescripcionProducto