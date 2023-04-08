import React from 'react'
import { FaFacebook, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa";
import '../Css/footer.css'
import { UserContext } from '../utils/UserProvider';
import { useContext } from 'react';

const Footer = () => {

  return (
    <footer>
      <div className="copyright">
        <p>©2021 Digital Booking</p>
      </div>
      <div className="redes">
        <a href="#"><FaFacebook /></a>
        <a href="#"><FaLinkedinIn /></a>
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaInstagram /></a>
      </div>
    </footer>
  )
}

export default Footer