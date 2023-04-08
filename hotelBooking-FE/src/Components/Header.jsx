import React, { useEffect, useState, useContext } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { FaBars, FaTimes, FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import '/src/Css/header.css';
import { UserContext } from '../utils/UserProvider';

import userSvg from '../assets/user-128.svg'

const Header = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const [responsive, setResponsive] = useState(false);
    const [burgerActive, setBurgerActive] = useState(false);
    const [logOutExpanded, setLogOutExpanded] = useState(false)
    const {userInfo, setUserInfo, fetchUserInfo} = useContext(UserContext);

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (token) {
            fetchUserInfo(token)
        } 
    }, []);

    const cerrarSesion = () => {
        setResponsive(false);
        setBurgerActive(false);
        localStorage.removeItem('token');
        setUserInfo(null)
        navigate('/')
    }

    const handleClick = e => {
        setResponsive(prev => !prev)
        if(burgerActive) setBurgerActive(false)
    }

    const expand = e => {
            setLogOutExpanded(true);
    }

    const unExpand = e => {
            setLogOutExpanded(false);
    }
    return (
        <header>
            <div id="logo">
                <Link to='/'>
                    <img src="/src/assets/logo 1.svg" alt="logo Digital Booking"/>
                    <p>Sentite como en tu hogar</p>
                </Link>
            </div>
            {userInfo ? <div className="user">
                <div onMouseEnter={expand} onMouseLeave={unExpand} className={`userName ${logOutExpanded && 'focused'}`}>
                    {userInfo.apellido} ,{userInfo.nombre} <img src={userSvg} alt="" />
                    <div className={`expandable ${logOutExpanded && 'expanded'}`}>
                        <button className={`logOut-btn`} onClick={()=>{cerrarSesion()}}>Cerrar sesion</button>
                        {userInfo.role.id === 1 ? <Link to="/administracion">Admin</Link> : ''}
                        
                    </div>
                </div>
            </div>  : <div id="home-button">
            {location.pathname != "/Register" && <Link to='Register' className="nav-link">
                Crear cuenta
                </Link> }
            {location.pathname != "/Login" && <Link to='Login' className="nav-link">
                Iniciar sesión
                </Link> }
            </div>
}

            <div className="nav-responsive" onClick={handleClick}>
                {/* <FaBars /> */}
                <div className={`burgers ${burgerActive && 'active'}`} onClick={() => setBurgerActive(prev => !prev) }>
                    <span className="burger"></span>
                    <span className="burger"></span>
                    <span className="burger"></span>
                </div>
            </div>
            <nav className={`responsive-navbar ${responsive && 'visible'}`}>
                <section className="title-responsive">
                {userInfo ? 
                <div className="user-mobile">
                <p className="circle">{userInfo.nombre.charAt(0)}{userInfo.apellido.charAt(0)}</p>
                <p className="hellow">Hola,</p>
                <p className="userName">{userInfo.nombre}</p>
                </div> : <p>Menu</p>
                }
                </section>
                
                <section className="links">
                {!userInfo &&
                    <>
                        {location.pathname != "/Register" && <Link to='Register' className="responsive-link" onClick={handleClick}>
                        Crear cuenta
                        </Link> }

                        {location.pathname != "/Login" && <Link to='Login' className="responsive-link" onClick={handleClick}>
                        Iniciar sesión
                        </Link> }
                    </>
                }
                {userInfo && userInfo.role.id === 1 && <Link to='/administracion' className="responsive-link" onClick={handleClick}>
                        Admin
                        </Link> }
                </section>
                


                <section className='footer-mobile'>
                    {userInfo ? 
                    <p>¿Deseas <span onClick={()=>{cerrarSesion()}}>cerrar sesión</span>?</p> : ''
                    }
                    <div className="redes-mobile">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaLinkedinIn /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                    </div>                   
                </section>
            </nav>
        </header>
    )
}

export default Header