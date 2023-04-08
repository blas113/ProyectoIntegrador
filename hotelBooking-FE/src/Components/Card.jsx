
import React from 'react'
import { Link } from 'react-router-dom'
import { FaHeart, FaMapMarkerAlt,FaStar } from "react-icons/fa";
import noImage from '../assets/no-image.png'

import idefault from '/src/assets/features/default.svg'
import feature_1 from '/src/assets/features/feature_1.svg'
import feature_2 from '/src/assets/features/feature_2.svg'
import feature_3 from '/src/assets/features/feature_3.svg'
import feature_4 from '/src/assets/features/feature_4.svg'
import feature_5 from '/src/assets/features/feature_5.svg'
import feature_6 from '/src/assets/features/feature_6.svg'
import feature_7 from '/src/assets/features/feature_7.svg'
import feature_8 from '/src/assets/features/feature_8.svg'

const Card = ({item}) => {
    
    const getStarArray = val => {
          const arr = Array(5).fill(0);
          arr.fill(1, 0, val)
          return arr;
    }

    const getIcon = (feature) => {
        switch (feature) {
          case 'Desayuno':
            return feature_1
          case 'Wifi':
            return feature_2
          case 'Estacionamiento':
            return feature_3
          case 'Aire acondicionado':
            return feature_4
          case 'Piscina':
            return feature_5
          case 'Gimnasio':
            return feature_6
          case 'Sala de Reuniones':
            return feature_7
          case 'Mascotas':
            return feature_8
          default:
            return idefault
        }
      }
    
    return (
        <div className="card">
            <div className="imagen">
            <FaHeart className="icono" />
            {item.imagenes.length > 0 ?
                <img src={item.imagenes[0].url} alt=""/>
            :   <img src={noImage} alt=""/>}
            </div>
            <div className="informacion">
            <h3>{item.categoria.nombre} <span>{getStarArray(item.valoracion).map(elem => {
            if (elem) return <FaStar />
            else return <></>
            })}</span></h3>
            <h2>{item.nombre}</h2>
            <h4><FaMapMarkerAlt className="iconMap"/> {`${item.direccion.calle}  ${item.direccion.nroPuerta}`}, {item.direccion.ciudad.nombre}</h4>
            {/* <div className='map'>VER EN EL MAPA</div> */}
            <span className='iconos'><ol className='caract1'>
          {item.caracteristicas?.map(caracteristica => (
            <li>
              <img src={getIcon(caracteristica.titulo)} alt="" />
            </li>
          ))}
        </ol></span> 
            <p>{item.descripcion.length > 80 ? item.descripcion.slice(0, 80)+"..." : item.descripcion}</p>
            <Link to={'/detalleProducto/' + item.id}><button>Ver más</button></Link>
            </div>
        </div>
    )
}

export default Card