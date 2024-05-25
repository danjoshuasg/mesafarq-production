import React from 'react';
import './ServiciosInicio.css';
import ConsultoriaFarmaceutica_img from '../../../img/servicios/ConsultoriaFarmaceutica.png';
import CalificacionEquipos_img from '../../../img/servicios/CalificacionEquipos.png';
import CalificacionSalas_img from '../../../img/servicios/CalificacionSalas.png';
import MapeosTermicos_img from '../../../img/servicios/MapeosTérmicos.png';

const ServiciosInicio = () => {
  const servicios = [
    {
      nombre: 'Consultaría farmacéutica',
      descripcion: 'Proporcionamos asesoramiento experto para optimizar procesos, garantizar el cumplimiento regulatorio y mejorar la eficiencia en la gestión de productos y equipos farmacéuticos.',
      imagen: ConsultoriaFarmaceutica_img
    },
    {
      nombre: 'Calificación de Salas',
      descripcion: 'Proporcionamos evaluación y certificación de clínicas y quirófanos para asegurar el cumplimiento de estándares de calidad, seguridad y normativa sanitaria.',
      imagen: CalificacionEquipos_img
    },
    {
      nombre: 'Calificación de equipos',
      descripcion: 'Ofrecemos evaluación y certificación de equipos clínicos e industriales para garantizar su desempeño, seguridad y cumplimiento de normativas.',
      imagen: CalificacionSalas_img
    },
    {
      nombre: 'Mapeos térmicos',
      descripcion: 'Ofrecemos análisis detallado de la distribución de temperatura en instalaciones para optimizar el acondicionamiento y asegurar el cumplimiento de estándares de calidad y eficiencia energética.',
      imagen: MapeosTermicos_img
    },
    // Puedes añadir más servicios aquí
  ];

  return (
    <div className="servicios-contenedor">
      <h2>SERVICIOS QUE OFRECEMOS</h2>
      <div className="servicios">
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio">
            <div className="servicio-imagen"> {/* Imagen después */}
              <img src={servicio.imagen} alt={servicio.nombre} />
            </div>
            <div className="servicio-info"> {/* Info primero */}
              <h3>{servicio.nombre}</h3>
              <div className="contenedor-descripcion">
                <p>{servicio.descripcion}</p>
              </div>
              <button className="leer-mas">Leer más</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ServiciosInicio;
