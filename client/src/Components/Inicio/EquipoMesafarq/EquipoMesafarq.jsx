import React from 'react';
import CEO_img from '../../Assets/Equipo/CEO.png';
import CTO_img from '../../Assets/Equipo/CTO.png';
import CMO_img from '../../Assets/Equipo/CMO.png';
import { LinkedinLogo } from "@phosphor-icons/react"
import './EquipoMesafarq.css';

const EquipoMesafarq = () => {
    const equipo = [
        {
          nombre: 'Julian Belaunde Mantilla',
          cargo: 'CEO',
          imagen: CEO_img,
          linkedIn: ''
        },
        {
          nombre: 'Liliana Visconde Garay',
          cargo: 'CTO',
          imagen: CTO_img,
          linkedIn: ''
        },
        {
            nombre: 'Flavia Estrada Prado',
            cargo: 'CMO',
            imagen: CMO_img,
            linkedIn: ''
        },
        // Puedes añadir más miembros aquí
      ];


  return (
    <div className="equipo-contenedor">
      <h2>NUESTRO EQUIPO</h2>
      <div className="integrantes">
        {equipo.map((integrante, index) => (
          <div key={index} className="tarjeta-integrante">
            <img src={integrante.imagen} alt={`Imagen de ${integrante.cargo}`} className="imagen-integrante" />
            <h3>{integrante.cargo}</h3>
            <p>{integrante.nombre}</p>
            <a href={integrante.linkedIn} 
               className="btn-linkedin" 
            >
              <LinkedinLogo size={32} className="linkedin-icon"/>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default EquipoMesafarq;
