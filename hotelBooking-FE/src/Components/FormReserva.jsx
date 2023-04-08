import React from 'react'
import { useState, useEffect } from 'react'
import '../Css/formReserva.css'



const FormReserva = ({url_base}) => {

    const [user, setUser] = useState ({
        firstName: '',
        lastName: '',
        email: '',
        
    })



    useEffect(() => {

    const token = localStorage.getItem("token");
    const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' , 'Authorization': "Bearer " + token }

  };
        fetch(url_base + "/users", requestOptions)
        .then((response) => {
          if (!response.ok) {
            throw new Error(`HTTP error: ${response.status}`);
          }
        return response.json();
      })
        .then((data) => setUser({firstName:data.nombre,lastName:data.apellido,email:data.email}))
        .catch((err) => console.error(`Fetch problem: ${err.message}`));
    }, [])

  return (
    <div className='formR'>
        <form className='formRes'>
            <section className='name-section'>
                <div>
                    <label>Nombre</label>
                    <input 
                        type="text"
                        name='firstName'
                        disabled
                        value={user.firstName}
                    />
                  
                </div>
            <div>
            <label>Apellido</label>
            <input 
                type="text"
                name='lastName'
                disabled
                value={user.lastName}
            />
            
            </div>
            </section> 
            <div className='email'>
            <label>Correo electrónico</label>
            <input 
              className='mail'
                type="email"
                name='email'
                disabled
                value={user.email}
                
            />
            </div>
        </form>
    </div>
  )
}

export default FormReserva