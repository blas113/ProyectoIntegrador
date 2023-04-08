import React from 'react'
import '/src/css/horarioLlegada.css'
import  { useState } from 'react';


const HorarioLlegada = ({horarioLlegada ,setHorarioLlegada}) => {

    const opcionesHorario = [
        '09:00',
        '10:00',
        '11:00',
        '12:00',
        '13:00',
        '14:00',
        '15:00',
        '16:00',
        '17:00',
        '18:00',
        '19:00',
        '20:00'
      ];

      const handleChange = (event) => {
        setHorarioLlegada(event.target.value);
      }

  return (
    <div className='llegada'>
      <h2>Tu horario de llegada</h2>
      <div className='bloque'>
      
        <div className='title'>
            <img src='/src/assets/Check.svg' alt='check' />
            <p>Tu habitación va a estar lista para el check-in entre las 10:00 AM y las 11:00 PM</p>
        </div>
        <label>
        Indica tu horario estimado de llegada
            <select className={`${horarioLlegada === "NaN" ? 'invalid' : ''}`} value={horarioLlegada} onChange={handleChange}>
                <option value="NaN">Selecciona una opcion</option>
          {opcionesHorario.map((opcion) => (
                <option key={opcion} value={opcion}>{opcion}</option>
          ))}
            </select>
            <p>{horarioLlegada === "NaN" ? 'Debes elegir un horario para poder realizar la reserva' : ''}</p>
        </label>
      
    </div>
    </div>
    
  )
}

export default HorarioLlegada