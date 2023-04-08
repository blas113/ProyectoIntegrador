import React, { useEffect } from 'react'
import '../Css/login.css'
import { useState, useContext } from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import { UserContext } from '../utils/UserProvider'
import { FaEye, FaEyeSlash} from "react-icons/fa";

import {
  validateEmail,
  validatePassword,
} from '../utils/signupValidations'

export const Login = ({url_base}) => {

  const [animateStart, setAnimateStart] = useState(false);
  const {prevUrl, error} = useLocation().state ? useLocation().state : [null, null];
  const [shown, setShown] = useState(false);
  const switchShown = () => setShown(!shown);
  console.log({prevUrl, error});

  const [user,setUser] = useState({
    email:"",
    password:""
  })

  useEffect(() => {
    if (error) {
      setAnimateStart(true);
      setTimeout(() => {
        setAnimateStart(false);
      }, 5000)
    }
  }, [])

  const {fetchUserInfo} = useContext(UserContext);
  const navigate = useNavigate()

  const [errorMsg, setErrorMsg] = useState('');

  const [errors, setErrors] = useState({
    email: false,
    password: false,
  })

  const onSubmitForm = (e) => {
      e.preventDefault();
      const arrayErrors = Object.values(errors)

      const requestOptions = {
        method: 'POST',
        body: JSON.stringify({"email":user.email,"password":user.password }),
        headers: { 'Content-Type': 'application/json' }
    };

    if (arrayErrors.every((error) => error === false)) {
    fetch(url_base+'/users/auth', requestOptions)
        .then(async response => 
          {
            const us = await response.json()

            if(response.status == 200) {
              localStorage.setItem('token', us.token);
              fetchUserInfo(us.token);
              if (prevUrl) navigate(`${prevUrl}`)
              else navigate('/', {state : {}});
            } else if (response.status === 401) setErrorMsg("Credenciales inválidas");
          }
          ).catch(err => {
            setErrorMsg(err.response.data);
          })
        }
        else {
          setErrorMsg('Revisa los valores del formulario')
        }
  };

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

  return (<>
      <p className={`login-error ${animateStart && 'animate'}`}>Debes loguearte para poder iniciar una reserva!</p>
      <div className='page'>
       <h3 className='in-Sesion'>Iniciar Sesión</h3>
        <form className='form' onSubmit={onSubmitForm}>
          <label>Correo electrónico</label>
            <input 
                type="email"
                required 
                name="email"
                onChange={(e) => validateEmail(e.target.value)
                  ? handleChange(e.target.name, e.target.value)
                  : handleError(e.target.name)}
                />
                {errors.email && <p className='error'>Debes ingresar un correo válido</p>}
          
          <label>Contraseña</label>

            <div className="div-pass">
              <input 
                  type={shown ? 'text' : 'password'}
                  required 
                  name="password"
                  onChange={(e) => validatePassword(e.target.value)
                    ? handleChange(e.target.name, e.target.value)
                    : handleError(e.target.name)}
                  />
                  <span onClick={switchShown}>
                    {shown ? <FaEyeSlash/> : <FaEye/>}
                  </span>
            </div>
                {errors.password && <p className='error'>La contraseña debe tener al menos 6 caracteres</p>}
            <div className='but'>
            <button className='button' type="submit">Ingresar</button>
            </div>
            <p className="error-msg" style={{'text-align' : 'center', 'color' : 'red', 'font-weight' : '700' }}>{errorMsg}</p>
            <div className="lin">
            <p>¿Aún no tenés cuenta? <Link to='/register'> Registrate </Link></p> 
            </div>

        </form>
    </div>
  </>
  )
}
