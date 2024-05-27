import React from 'react';
import './Footer.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta que tu componente
import logo from '../../img/navbar/logo_sin_letra.png';
import mesafarq from '../../img/navbar/logo_letra.png';
import { EnvelopeSimple, FacebookLogo, WhatsappLogo } from "@phosphor-icons/react";

// Componente para cada enlace del pie de página
const FooterLink = ({ Icon, url, children }) => (
  <div className="enlace">
    <Icon color="#FFFFFF" size={20} />
    <a href={url} target="_blank" rel="noopener noreferrer">{children}</a>
  </div>
);

// Definición de enlaces como un arreglo para simplificar la renderización
const links = [
  { Icon: FacebookLogo, url: "https://www.facebook.com/mesafarq", children: "Facebook" },
  { Icon: EnvelopeSimple, url: "mailto:venta@mesafarq.pe", children: "Correo" },
  { Icon: WhatsappLogo, url: "mailto:info@mesafarq.pe", children: "Whatsapp" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="footer-logo">
            <img src={logo} alt="Logo" />
            <div className="footer-texto-logo">
              <img src={mesafarq} alt="Mesafarq" />
            </div>
          </div>
          <span className="footer-rights">©Todos los derechos reservados</span>
        </div>
        <div className="footer-links">
          {links.map((link, index) => (
            <FooterLink key={index} {...link} />
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
