import { Outlet, useLocation } from "react-router-dom"
import Footer from "../Components/Footer"
import Header from "../Components/Header"
import { useState, useLayoutEffect } from "react"
import UserProvider from '../utils/UserProvider';


export const General = () => {
  const Wrapper = ({ children }) => {
    const location = useLocation();
    useLayoutEffect(() => {
      document.documentElement.scrollTo(0, 0);
    }, [location.pathname]);
    return <section className='wrapper'>{children}</section>;
  };

  return (<>
        <Header />
        <Wrapper>
          <Outlet />
        </Wrapper>
        <Footer />
    </>)
}