
import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom';
import CararcteristicaProducto from '../Components/CararcteristicaProducto';
import DescripcionProducto from '../Components/DescripcionProducto';
import HeaderProducto from '../Components/HeaderProducto';
import PoliticaProducto from '../Components/PoliticaProducto';
import UbicacionProducto from '../Components/UbicacionProducto';
import GaleryImages from "../Components/GaleryImages";
import '../Css/product.css'
import { Link, useNavigate } from 'react-router-dom'
import { TwoCalendarBlock } from '../Components/TwoCalendarBlock';
import {UserContext} from '../utils/UserProvider';


const DetalleProducto = ({url_base}) => {
    
  const [producto, setProducto] = useState({})
  const {id} = useParams();
  const [actualDate, setActualDate] = useState(new Date());
  const [secondDate, setSecondDate] = useState(new Date(new Date(new Date().getFullYear(), new Date().getMonth() + 1, 1)))
  const navigate = useNavigate();
  const {userInfo} = useContext(UserContext);



  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`${url_base}/productos/${id}`);
      const prod = await response.json();
      setProducto(prod);
    }
  fetchData();
}, [])

  return (
    <>
    <HeaderProducto result={producto}/>
    <div className="product-template">
      <UbicacionProducto result={producto}/>
      <GaleryImages result={producto}/>
      <DescripcionProducto result={producto}/>
      <div className="caracteristicas-calendario">
        <CararcteristicaProducto result={producto}/>
      </div>
      <div className="calendar-setterContainer">
          <TwoCalendarBlock url_base={url_base} product_id={id} viewOnly={true}/>
          {userInfo ? <Link to={`/detalleProducto/${id}/reserva`} state={{state:producto}} className='reserva-btn'>Iniciar reserva</Link> : <Link className='reserva-btn' to={`/login`} state={{prevUrl: window.location.pathname, error: 1}} >Iniciar reserva</Link> 
           }
      </div>
      <PoliticaProducto result={producto}/>
    </div>
    </>
  )
}

export default DetalleProducto
