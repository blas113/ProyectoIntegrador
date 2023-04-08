import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import HeaderReserva from '../Components/HeaderProducto'
import DetalleReserva from '../Components/DetalleReserva'
import PoliticaProducto from '../Components/PoliticaProducto'
import FormReserva from '../Components/FormReserva';
import HorarioLlegada from '../Components/HorarioLlegada';
import '../Css/detalle_reserva.css'
import { TwoCalendarBlock } from '../Components/TwoCalendarBlock';
import { useNavigate } from 'react-router-dom'
import axios from 'axios';

const Reserva = ({url_base}) => {
    const [producto, setProducto] = useState({})
    const {id} = useParams();
    const location = useLocation();

    const navigate = useNavigate()
    const [horarioLlegada, setHorarioLlegada] = useState("");
    const [errorMsg, setErrorMsg] = useState("")

    const [dateRange, setDateRange] = useState({
      dateStart : '',
      dateEnd : '',
      selecting: false,
    })

    useEffect(() => {
      setProducto(location.state?.state);
    }, [])

  const realizarReserva = () => {
    setErrorMsg("");
    if (horarioLlegada === "" || horarioLlegada === "NaN") {
      return;
    }
    const token = localStorage.getItem("token");

  axios.post(`${url_base}/reservas`, {
    horaLlegada: horarioLlegada,
    checkIn: dateRange.dateStart,
    checkOut: dateRange.dateEnd,
    producto_id: producto.id,
  }, {
    headers: {
      'Content-Type' : 'application/json',
      "Authorization" : `Bearer ${token}`
    }
  })
  .then(response => navigate('/reserva-exitosa'))
  .catch(err => setErrorMsg(err.response.data))
};


  return (
    <>
    <HeaderReserva result={producto}/>
    <section className="reserva-bloque">
    <h2 className='form-h2'>Datos del usuario</h2>
      <FormReserva url_base={url_base} setHorarioLlegada={setHorarioLlegada}/>
      <DetalleReserva realizarReserva={realizarReserva} result={producto} arrivalDate={dateRange.dateStart} departureDate={dateRange.dateEnd} errorMsg={errorMsg}/>
      <TwoCalendarBlock url_base={url_base} product_id={id} viewOnly={false} setDateRange={setDateRange} dateRange={dateRange}/>
      <HorarioLlegada horarioLlegada={horarioLlegada} setHorarioLlegada={setHorarioLlegada}/>
    </section>

    <PoliticaProducto result={producto}/>
    </>
  )
}

export default Reserva