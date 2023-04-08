import React, {useState} from 'react'
import './App.css'
import { useLayoutEffect } from 'react';
import { Routes, Route, useParams, useLocation } from 'react-router-dom';
import Home from './Pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import { Login } from './components/Login'
import { Register } from './components/Register'
import DetalleProducto from './Pages/DetalleProducto'
import { CategoriaProducto } from './Pages/CategoriaProducto'
import Catalogo from './Pages/Catalogo';
import ListaProductos from './Pages/ListaProductos';
import Reserva from './Pages/Reserva';
import ReservaExitosa from './Pages/ReservaExitosa';
import Administracion from './Pages/Administracion';
import { General } from './Pages/General';
import { url_base } from './utils';

function App() {
  
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return <section className='wrapper'>{children}</section>;
  };

  return (
    <div className="App">
        <Routes>
          <Route element={<General />}>
            <Route path='/' element={<Home url_base={url_base} />}/>
            <Route  path='/login' element={<Login url_base={url_base} />} />
            <Route  path='/register' element={<Register url_base={url_base} />} />
            <Route path='/detalleProducto/:id' element={<DetalleProducto url_base={url_base} />}/>
            <Route  path='/detalleProducto/:id/reserva' element={<Reserva url_base={url_base} />} />
            <Route  path='/productos/categoria/:id' element={<ListaProductos url_base={url_base} filtro='categoria'/>} />
            <Route path='*' element={<h1>Page not found</h1>}/>
            <Route path='/productos/ciudades/:id' element={<ListaProductos url_base={url_base} filtro='ciudad'/>} />
            <Route path='/productos/fechas/:arrivalDate/:departureDate' element={<ListaProductos url_base={url_base} filtro='fechas'/>} />
            <Route path='/productos/fechas/:arrivalDate/:departureDate/ciudad/:id' element={<ListaProductos url_base={url_base} filtro='fecha-ciudad'/>} />
            <Route path='/reserva-exitosa' element={<ReservaExitosa />}/>
            <Route path='/creacion-exitosa' element={<ReservaExitosa />}/>
            <Route path='/administracion' element={<Administracion />}/>
          </Route>
        </Routes>
    </div>
  )
}

export default App