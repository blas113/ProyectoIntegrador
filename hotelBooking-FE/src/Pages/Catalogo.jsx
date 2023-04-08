import React, {useEffect, useState, useContext} from 'react'
import Card from '../Components/Card'
import { Outlet, UNSAFE_DataRouterStateContext, useParams } from 'react-router-dom';
import '../Css/cards.css'
import BounceLoader from 'react-spinners/BounceLoader'


const Catalogo = ({url_base, filtro}) => {

    const cssOverride = {
        display: "block",
        color: "#fbc02d",
    }
    const [failedToRetrieve, setFailedToRetrieve] = useState(false);
    const [productos,setProductos] = useState([]);
    const {arrivalDate, departureDate, id} = useParams();

    const [filtroData, setFiltroData] = useState('');

    const getUrl = filtro => {

        let res;
        if (filtro === 'ciudad' || filtro === 'random' || filtro === 'categoria') res = `${url_base}/productos/${filtro}${id ? `/${id}` : ''}`;
        else if (filtro === 'fechas') res = `${url_base}/productos/fechas/${arrivalDate}/${departureDate}`;
        else if (filtro === 'fecha-ciudad') res = `${url_base}/productos/fechas/${arrivalDate}/${departureDate}/ciudad/${id}`

        return res;
    }
    
    useEffect(() => {
            const url = getUrl(filtro);
            setFailedToRetrieve(false);
            fetch(url)
            .then(result=> {
                if (result.status !== 204) return result.json()
                else {
                    setProductos([])
                    setFailedToRetrieve(true);
                }
            })
            .then(items=>{
                if (items) setProductos(items)
            })
            .catch(err => {
                setFailedToRetrieve(true);
            })
    }, [id, arrivalDate, departureDate]);

    return (
        <div className='catalogo'>
        <Outlet/>
        <h2 className='titulo'>{filtro !== 'random' ? `Busqueda por ${filtro}: ${filtroData}` : 'Recomendaciones' }</h2>
            {failedToRetrieve ?  <p className='no-result'>Ups! No se encontraron resultados para la busqueda realizada.</p> : 
                productos.length > 0 ? 
                <div className='grid cat'>{productos.map(item => (
                    <Card key={item.id} item={item}/>
                    ))}
                </div>
                : <div className='spinner-container'><BounceLoader cssOverride={cssOverride} loading={true} size={60}/></div>} 
        </div>
    )
}

export default Catalogo