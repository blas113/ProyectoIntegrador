import React, { useEffect } from 'react'
import { FaStar, FaMapMarkerAlt } from "react-icons/fa";
import { Link } from 'react-router-dom';


const DetalleReserva = ({realizarReserva, result, arrivalDate, departureDate, errorMsg}) => {

    const getStarArray = val => {
        const arr = Array(5).fill(0);
        arr.fill(1, 0, val)
        return arr;
  }

  return (
    <>
    <section className="container-detalle">
        <div>
            <h1>Detalle de la reserva</h1>
            <img src={result?.imagenes?.at(0)?.url} alt="" />
        </div>

        <div>
            <div className="title-puntaje">
            <h4>{result?.categoria?.nombre}</h4>
            <h2>{result?.nombre}</h2>
            <p>{getStarArray(result?.valoracion).map(elem => {
                if (elem) return <FaStar />
                else return <></>
                })}</p>
            </div>
            
            <h4 className="ubicacion"><FaMapMarkerAlt className="iconMap"/> {`${result?.direccion?.calle}  ${result?.direccion?.nroPuerta}`}, {result?.direccion?.ciudad.nombre}</h4>
            
            <section className="date-checks">
                <div className="check">
                    <p>Check In</p>
                    <p>{`${arrivalDate}`}</p>
                </div>
                <div className="check">
                    <p>Check Out</p>
                    <p>{`${departureDate}`}</p>
                </div>
            </section>
            
            <div className="button-reserva">
                <Link><button onClick={() => realizarReserva()}>CONFIRMAR RESERVA</button></Link>
            </div>
                <p className="err">{errorMsg}</p>
        </div>
    </section>
    </>
  )
}

export default DetalleReserva