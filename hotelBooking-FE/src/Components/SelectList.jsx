import { Calendar } from './Calendar'
import { useEffect, useState, useMemo } from 'react'
import "../css/select_list.css"
import { retrieveCities } from '../utils'
import ImgPing from '../assets/location_ping.svg'
import LocOpt from '../assets/loc_option.svg'
import debounce from '../utils/debounceFunction'


export const SelectList = ({url_base, setId}) => {

    const [filteredCities, setFilteredCities] = useState([]);
    const [inputValue, setInputValue] = useState("");
    const [listVisibility, setListVisibility] = useState(false);

    

    const fetchDebounced = useMemo(() => {
        const fetchCities = async (query) => {
            setListVisibility(true);
            let response = await fetch(`${url_base}/ciudades`, {
                headers : {
                    "Content-Type" : "application/json",
                    "Accept" : "application/json"
                }
            });
            let data = await response.json();
            setFilteredCities(retrieveCities(query, data))
        }
        return debounce(fetchCities, 200);
    }, [])

    useEffect(() => {
        if (inputValue !== "") fetchDebounced(inputValue);
        else {
            setFilteredCities([]);
        }
    }, [inputValue, fetchDebounced])

    const handleChange = e => {
        if (e.target.value == "") setId(-1);
        setInputValue(e.target.value);
    }
        
    const handleClick = e => {
        setInputValue(e.target.getAttribute('city'));
        setId(+e.target.id);
        setListVisibility(false);
    }

    
    return <section className='select_container'>
        <img src={ImgPing} alt="" />
        <div className='inputContainer'>
            <input onChange={handleChange} id="selectInput" type="text" placeholder='¿A dónde vamos?' value={inputValue} autocomplete="off"/>
        </div>
        <section className={`options ${listVisibility && 'visible'}`}>
            {filteredCities.length > 0 ? filteredCities.map((city, index) => <div className='option' key={index} id={city.id}  city={`${city.nombre}, ${city.pais.codigo}`} onClick={handleClick}><img src={LocOpt}/><section><p>{city.nombre}, {city.pais.codigo}</p><p className='optCountry'>{city.country}</p></section></div>) : ""}
        </section>
    </section>
}