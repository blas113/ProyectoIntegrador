import React from 'react'
import '/src/css/UbicacionProducto.css';
import { FaMapMarkerAlt,FaStar } from "react-icons/fa";

const UbicacionProducto = ({result}) => {

  

  return (
    <div className='ubic'>
        <div className='lugar'>
        <FaMapMarkerAlt/>
            <h5>{result?.direccion?.calle} {result?.direccion?.nroPuerta}, {result?.direccion?.ciudad?.nombre}</h5>
        </div>
        <div className='calif'>
            <div className='calificacion'>
            <p>Muy bueno</p>
            <div className='star'>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
            </div>
            </div>
            <div className='puntaje'>10</div>
        </div>
        
    </div>
  )
}

export default UbicacionProducto