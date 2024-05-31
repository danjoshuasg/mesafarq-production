import React from 'react'
import ConsultoriasFarmaceuticas from '../Components/Servicios/ConsultoriasFarmaceuticas/ConsultoriasFarmaceuticas.jsx';
import CalificacionSalas from '../Components/Servicios/CalificacionSalas/CalificacionSalas.jsx';
import MapeoTermico from '../Components/Servicios/MapeoTermico/MapeoTermico.jsx';
import CalificacionEquipos from '../Components/Servicios/CalificacionEquipos/CalificacionEquipos.jsx';


const Servicios  = () => {
  return (
    <div className="">
      <ConsultoriasFarmaceuticas/>
      <CalificacionSalas/>
      <MapeoTermico/>
      <CalificacionEquipos/>
    </div>

  )
}

export default Servicios 