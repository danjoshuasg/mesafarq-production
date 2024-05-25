import React from 'react';
import './Historia.css';
import Imagen_resumen from '../../Assets/Historia/MesaFarq.png';

function Historia() {
  return (
    <div className="historia-contenedor">
      <div className="historia-left">
        <h2>NUESTRA HISTORIA</h2>
        <div>
          <div className="mensaje">
            <p>INDUSTRIAS ESPECIALIZADAS MESAFARQ S.R.L. surgió para atender las exigencias de la industria farmacéutica en la producción de líquidos estériles y el cumplimiento de las Buenas Prácticas de Manufactura. Fundada por un grupo de expertos en la manufactura farmacéutica, MESAFARQ se estableció con el objetivo de ofrecer soluciones integrales que aseguren calidad y seguridad en cada proceso. Comprometida con la excelencia, MESAFARQ colabora estrechamente con sus clientes para superar desafíos operativos y regulatorios, redefiniendo los estándares de producción farmacéutica a nivel global.</p>
          </div>
        </div>
      </div>
      <div className="historia-right">
        <img src={Imagen_resumen} alt="Descripción" /> 
      </div>
    </div>
  );
}

export default Historia;
