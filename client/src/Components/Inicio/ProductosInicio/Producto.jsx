import React from 'react';
import './ProductosInicio.css';

const Producto = ({ icon: Icon, color, title, description }) => {
  return (
    <div className="ProductoInicio">
      <div className="icono-contenedor">
        <Icon color={color} size={30} className="producto-icono" />
      </div>
      <h3>{title}</h3>
      <div className="texto-contenedor">
        <p>{description}</p>
      </div>
    </div>
  );
}

export default Producto;
