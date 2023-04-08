import React from 'react'
import '../Css/successfulBooking.css'
import { Link, useLocation } from 'react-router-dom';

export const SuccessfulBooking = () => {

  let location = useLocation();

  return (
    <div className='div'>
      <section className='SuccessSection'>
        <img src='/src/assets/atomoCheck.svg' alt='Icono Check'/>
        {location.pathname == '/reserva-exitosa' &&
        <div className="successDiv">
          <h2>¡Muchas gracias!</h2>
          <p>Su reserva se ha realizado con éxito</p> 
        </div>
        }
        {location.pathname == '/creacion-exitosa' &&
        <p>Tu propiedad se a creado con éxito.</p> 
        }
        <Link to='/'><button className='buttonOK'>OK</button></Link>  
        </section>
    </div>
  )
}

