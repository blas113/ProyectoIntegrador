import React from 'react'
import '/src/css/CaracteristicaProducto.css'

import idefault from '/src/assets/features/default.svg'
import feature_1 from '/src/assets/features/feature_1.svg'
import feature_2 from '/src/assets/features/feature_2.svg'
import feature_3 from '/src/assets/features/feature_3.svg'
import feature_4 from '/src/assets/features/feature_4.svg'
import feature_5 from '/src/assets/features/feature_5.svg'
import feature_6 from '/src/assets/features/feature_6.svg'
import feature_7 from '/src/assets/features/feature_7.svg'
import feature_8 from '/src/assets/features/feature_8.svg'

const CararcteristicaProducto = ({result}) => {

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
    <div className='caracteristica'>
        <h3>¿Qué ofrece éste lugar?</h3>
        <hr></hr>
        <ol className='caract'>
          {result.caracteristicas?.map(caracteristica => (
            <li>
              <img src={getIcon(caracteristica.titulo)} alt="" />
              <p>{caracteristica.titulo}</p>
            </li>
          ))}
        </ol>
    </div>
  )
}

export default CararcteristicaProducto