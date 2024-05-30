import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../../img/navbar/logo_sin_letra.png';
import mesafarq from '../../img/navbar/logo_letra.png';
import { NavLink } from 'react-router-dom';
import { List, X } from "@phosphor-icons/react";

const Navbar = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleMenuClick = (menuName) => {
    if (menuName !== "Mas") {
      setIsDropdownVisible(false);
    } else {
      setIsDropdownVisible(!isDropdownVisible);
    }
    if (window.innerWidth <= 768) setIsMobileMenuVisible(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuVisible(!isMobileMenuVisible);
  };

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMobileMenuVisible(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div className='navbar'>
      <div className='nav-logo'>
        <img src={logo} alt="Logo"/>
        <div className="nav-texto-logo">
          <img src={mesafarq} alt="Mesafarq"/>
        </div>
      </div>

      <ul className={`nav-menu ${isMobileMenuVisible ? "active" : ""}`}>
        <li onClick={() => handleMenuClick('Inicio')}>
          <NavLink to="/" exact activeClassName="active">Inicio</NavLink>
        </li>
        <li onClick={() => handleMenuClick('Acerca')}>
          <NavLink to="/acerca" activeClassName="active">Acerca</NavLink>
        </li>
        <li onClick={() => handleMenuClick('Productos')}>
          <NavLink to="/productos" activeClassName="active">Productos</NavLink>
        </li>
        <li onClick={() => handleMenuClick('Servicios')}>
          <NavLink to="/servicios" activeClassName="active">Servicios</NavLink>
        </li>
        {isMobile && (
          <li className="nav-agendar-cita" onClick={() => window.location.href='https://api.whatsapp.com/send/?phone=%2B51982053098&text&type=phone_number&app_absent=0'}>
            <a>Agende una cita</a>
          </li>
        )}
      </ul>
      {!isMobile && (
        <div className="nav-agendar-cita">
          <button onClick={() => window.location.href='https://api.whatsapp.com/send/?phone=%2B51982053098&text&type=phone_number&app_absent=0'}>Agende una cita</button>
        </div>
      )}
      {isMobile && (
        <div className={`nav-hamburger ${isMobileMenuVisible ? "active" : ""}`} onClick={toggleMobileMenu}>
          <div className="hamburger-icon">
            {isMobileMenuVisible ? <X size={32} color="#FFFFFF" /> : <List size={32} color="#FFFFFF" />}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
