import React from 'react'
import Catalogo from './Catalogo';
import { SearchBar } from '../components/SearchBar';

const ListaProductos = ({url_base, filtro}) => {

    return (
        <>
            <SearchBar url_base={url_base}/>
            <Catalogo url_base={url_base} filtro={filtro}/>
        </>
    )
}

export default ListaProductos