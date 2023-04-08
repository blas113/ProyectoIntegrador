
import '../Css/searchbar.css'
import ImgPing from '../assets/location_ping.svg'
import { Calendar } from './Calendar'
import { useEffect, useState } from 'react'
import { CalendarsInput } from './CalendarsInput'
import { SelectList } from './SelectList'
import { useNavigate } from 'react-router-dom'
import { redirect } from 'react-router-dom'
import { CustomCalendar } from './CustomCalendar'
export const SearchBar = ({url_base}) => {

    const [idCiudad, setIdCiudad] = useState(-1);
    const [dateRange, setDateRange] = useState({
        dateStart : '',
        dateEnd : '',
        selecting: false,
      })

    const nav = useNavigate();

    // cities = cities.filter(city => city.country === "AR")

    const handleSubmit = (e) => {
        e.preventDefault();
        if (idCiudad === -1 && !(dateRange.dateStart || dateRange.dateEnd)) return;
        if (idCiudad !== -1 && !(dateRange.dateStart || dateRange.dateEnd)) {
            nav(`/productos/ciudades/${idCiudad}`);
        }
        else if (idCiudad === -1 && (dateRange.dateStart && dateRange.dateEnd))  {
            nav(`/productos/fechas/${dateRange.dateStart}/${dateRange.dateEnd}`)
        } else nav(`/productos/fechas/${dateRange.dateStart}/${dateRange.dateEnd}/ciudad/${idCiudad}`)
    }

    return (
        <section className='searchSection'>
            <h1 className="searchTitle">Busca ofertas en hoteles, casas y mucho más</h1>
            <form className="searchForm" onSubmit={handleSubmit}>
                <SelectList setId={setIdCiudad} url_base={url_base}/>
                <CalendarsInput dateRange={dateRange} setDateRange={setDateRange} />
                {/* <CustomCalendar activeStartDate={new Date()} selectRange={true} dateRange={dateRange} setDateRange={setDateRange}/> */}
                <button type="submit">Buscar</button>
            </form>
        </section>
    )   
}