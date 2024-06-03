import React from 'react';
import './ProductosInicio.css';
import { Tooth, WashingMachine, PawPrint, Thermometer } from "@phosphor-icons/react/dist/ssr";

import Producto from './Producto';

function ProductosInicio() {
  return (
    <div className="ProductosInicio">
      <h2>PRODUCTOS QUE OFRECEMOS</h2>
      <div className="ProductosInicio-Contenedor">
        {/* Comenta o elimina el componente de "Fármacos" */}
        {/* <Producto 
          icon={Pill} 
          color='#A2A2B0' 
          title='Fármacos' 
          description='Los fármacos abarcan medicamentos de prescripción, vacunas, productos de venta libre, vitaminas, y equipamiento para la dispensación y almacenamiento de fármacos, esenciales para una farmacia efectiva y completa.' 
        /> */}
        <Producto 
          icon={WashingMachine} 
          color='#A2A2B0' 
          title='Esterilización y Limpieza' 
          description='Se tienen equipos y materiales para la esterilización y limpieza de espacios de salud' 
        />
        <Producto 
          icon={Tooth} 
          color='#A2A2B0' 
          title='Equipos y materiales dentales' 
          description='Se tienen equipos y materiales para la implementación de consultorios odontológicos' 
        />
        <Producto 
          icon={PawPrint} 
          color='#A2A2B0' 
          title='Equipos y materiales veterinarios' 
          description='Se tienen equipos y materiales para la implementación de salas veterinarias' 
        />
        <Producto 
          icon={Thermometer} 
          color='#A2A2B0' 
          title='Instrumentos de medición' 
          description='Se tienen instrumentos para la medición del ambiente en salas y laboratorios' 
        />
      </div>
    </div>
  );
}

export default ProductosInicio;
