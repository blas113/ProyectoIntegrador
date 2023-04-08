import React from 'react'
import '../Css/register.css'
import { useState } from 'react'
import { Link, useNavigate } from "react-router-dom";
import { useContext } from 'react';
import { UserContext } from '../utils/UserProvider';
import axios from 'axios';

import {
  validateFirstAndLastName,
  validateEmail,
  validatePassword,
  comparePasswords
} from '../utils/signupValidations'

export const Register = ({url_base}) => {

  const navigate = useNavigate();
  const apiRegister = '/users/signup';
  const {fetchUserInfo} = useContext(UserContext);


  const [ errorMsg, setErrorMsg ] = useState('');

  const [ user, setUser ] = useState({
    nombre: '',
    apellido: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  
  const [errors, setErrors] = useState({
    nombre: false,
    apellido: false,
    email: false,
    password: false,
    confirmPassword: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    const arrayErrors = Object.values(errors)
    if (arrayErrors.every((error) => error === false)) {
        delete user.confirmPassword;
        axios.post(`${url_base}${apiRegister}`, user)
        .then((response) => {
          console.log(response);
          if(response.status === 201) {
            localStorage.setItem('token', response.data.token)
            fetchUserInfo(response.data.token);
            navigate('/')
          }
        })
        .catch(err => {
          setErrorMsg(err.response.data)
        });
      }
     else {
      setErrorMsg('Revisa los valores del formulario')
    }
  }

  const handleChange = (name, value) => {
    setErrors({ ...errors, [name]: false })
    setUser({
      ...user,
      [name]: value.trim()
    })
    
  }

  const handleError = (name) => {
    setErrors({ ...errors, [name]: true })
  }

  return (
    <div className='page'>
      <h3 className='in-Sesion'>Crear cuenta</h3>
        <form className='form' onSubmit={handleSubmit}>
          <section className='nomyAp'> 
            <div>         
            <label>Nombre</label>
              <input required 
                type="text"
                name='nombre'
                placeholder='John'
                onChange={
                  (e) => validateFirstAndLastName(e.target.value)
                  ? handleChange(e.target.name, e.target.value)
                  : handleError(e.target.name)
                }
                />
                {errors.nombre && <p className='error'>Debes ingresar un nombre válido</p>}
            </div>
            <div>
            <label>Apellido</label>
              <input required 
                type="text"
                name='apellido'
                placeholder='Doe'
                onChange={
                  (e) =>  validateFirstAndLastName(e.target.value)
                  ? handleChange(e.target.name, e.target.value)
                  : handleError(e.target.name)
                }
                />
                {errors.apellido && <p className='error'>Debes ingresar un apellido válido</p>}
            </div>
          </section>
          
          <div className="form-input">
            <label>Correo electrónico</label>
              <input required 
                  type="email"
                  name='email'
                  placeholder='john@mail.com'
                  onChange={
                    (e) => validateEmail(e.target.value)
                    ? handleChange(e.target.name, e.target.value)
                    : handleError(e.target.name)
                  }
                  />
                  {errors.email && <p className='error'>Debes ingresar un correo válido</p>}
          </div>
          <div className="form-input">
            <label>Contraseña</label>

              <input required 
                  type="password"
                  name='password'
                  placeholder='******'
                  onChange={
                    (e) => validatePassword(e.target.value)
                    ? handleChange(e.target.name, e.target.value)
                    : handleError(e.target.name)
                  }
                  />
                  {errors.password && <p className='error'>La contraseña debe tener al menos 6 caracteres</p>}
          </div>
          <div className="form-input">
          <label>Confirmar contraseña</label>

            <input required 
                type="password"
                name='confirmPassword'
                placeholder='******'
                onChange={
                  (e) => comparePasswords(user.password, e.target.value)
                  ? handleChange(e.target.name, e.target.value)
                  : handleError(e.target.name)
                }
                />
                {errors.confirmPassword && <p className='error'>Ambas contraseñas deben ser iguales</p>}
          </div>
            <div className='but'>
              <button className='button' type="submit">Crear cuenta</button>
              {errorMsg && <p id="error-message">{`${errorMsg}`}</p>}
            </div>
            <div className="lin"><p>¿Ya tienes una cuenta? <Link to='/login'> Iniciar sesión </Link></p></div>
        </form>
    </div>
  )
}
