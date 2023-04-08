import React from 'react'
import FormularioProducto from '../Components/FormularioProducto';
import HeaderAdministracion from '../Components/HeaderAdministracion';

const Administracion = ({url_base}) => {
  return (
    <div>
        <HeaderAdministracion />
        <h1 className="title-admin">Crear propiedad</h1>
        <FormularioProducto/>
    </div>
  )
}

export default Administracion