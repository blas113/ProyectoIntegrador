import React from 'react'
import '../Css/politicasProducto.css'

const PoliticaProducto = ({result}) => {
  return (
    <div className='politicasProd'>
        <h3>Qué tenes que saber</h3>
        <hr></hr>
        <div className='politicas' >
          <section>
          <div>
          <h4>Normas de la casa</h4>
          <p>Check-out: 10:00</p>
          <p>No se permiten fiestas</p>
          <p>No fumar</p>
          
        </div>
        
        <div>
          <h4>Salud y seguridad</h4>
          <p>Se aplican las pautas de distanciamiento social y otras normas relacionadas con el coronavirus</p>
          <p>Detector de humo</p>
          <p>Deposito de seguridad</p>  
        </div>
        </section>
      
        <div id='cancelacion'>
          <h4>Politica de cancelación</h4>
          <p>Agregá las fechas de tu viaje para obtener los detalles de cancelación de esta estadía</p>
        </div>
        <div></div>
        </div>
    </div>
  )
}

export default PoliticaProducto