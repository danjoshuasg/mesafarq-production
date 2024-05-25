import React, { useState, useEffect } from 'react';
import './Navbar.css';
import logo from '../Assets/logo.png';
import { Link } from 'react-router-dom';
import { List } from "@phosphor-icons/react";

const Navbar = () => {
  const [menu, setMenu] = useState("Inicio");
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);
  const [isMobileMenuVisible, setIsMobileMenuVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
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
        <p>MESAFARQ</p>
      </div>
      <ul className={`nav-menu ${isMobileMenuVisible ? "active" : ""}`}>
        <li onClick={() => handleMenuClick('Inicio')}><Link to="/">Inicio</Link>{menu === "Inicio" ? <hr/> : null}</li>
        <li onClick={() => handleMenuClick('Acerca')}><Link to="/acerca">Acerca</Link>{menu === "Acerca" ? <hr/> : null}</li>
        <li onClick={() => handleMenuClick('Productos')}><Link to="/productos">Productos</Link>{menu === "Productos" ? <hr/> : null}</li>
        <li onClick={() => handleMenuClick('Servicios')}><Link to="/servicios">Servicios</Link>{menu === "Servicios" ? <hr/> : null}</li>
        <li className='nav-dropdown' onMouseLeave={() => setIsDropdownVisible(false)}>
          <div onClick={() => handleMenuClick('Mas')}>Más{menu === "Mas" ? <hr /> : null}
            {isDropdownVisible && (
              <ul className='dropdown-menu'>
                <li onClick={() => handleMenuClick('Blog')}><Link to="/blog">Blog</Link></li>
                <li onClick={() => handleMenuClick('FAQ')}><Link to="/faq">FAQ</Link></li>
              </ul>
            )}
          </div>
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
          <div className="hamburger-icon"><List size={32} color="#FFFFFF" /></div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
