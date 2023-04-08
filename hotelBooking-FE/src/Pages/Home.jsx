import React, { useContext } from 'react'
import Catalogo from './Catalogo';
import { SearchBar } from '../components/SearchBar';
import { Categories } from '../components/Categories';
import { useLocation } from 'react-router-dom';
import { UserContext } from '../utils/UserProvider';

const Home = ({url_base, setPagActual}) => {

    // const location = useLocation();
    // console.log(location.state);
    return (
        <>
            <SearchBar url_base={url_base}/>
            <Categories url_base={url_base}/>
            <Catalogo url_base={url_base} filtro='random'/>       
        </>
    )
}

export default Home