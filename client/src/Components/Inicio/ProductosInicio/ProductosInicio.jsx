import React from 'react';
import './ProductosInicio.css';
import { Pill, Dna, Stethoscope } from "@phosphor-icons/react/dist/ssr";
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
          icon={Dna} 
          color='#A2A2B0' 
          title='Insumos clínicos' 
          description='Los insumos clínicos indispensables incluyen soluciones para análisis clínicos, indicadores, colorantes para muestras, y sustancias para pruebas diagnósticas, cruciales para laboratorios y diagnósticos precisos.' 
        />
        <Producto 
          icon={Stethoscope} 
          color='#A2A2B0' 
          title='Suministros médicos' 
          description='Los suministros médicos esenciales incluyen guantes desechables, mascarillas, jeringas, vendas, desinfectantes, y equipos de diagnóstico como estetoscopios y tensiómetros, cruciales para una atención sanitaria segura y eficaz.' 
        />
      </div>
    </div>
  );
}

export default ProductosInicio;
