import React from 'react';
import './Footer.css'; // Asegúrate de que el archivo CSS esté en la misma carpeta que tu componente
import { EnvelopeSimple, FacebookLogo } from "@phosphor-icons/react";

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
  { Icon: EnvelopeSimple, url: "mailto:info@mesafarq.pe", children: "Correo" },
];

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <span>© MESAFARQ. 2024</span>
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
