// Producto.js
import React from 'react';
import './ProductosInicio.css';

const Producto = ({ icon: Icon, color, title, description }) => {
  return (
    <div className="ProductoInicio">
      <h3> <Icon color={color} size={30}/> {title}</h3>
      <div className="texto-contenedor">
        <p>{description}</p>
      </div>
      <button>Ver más</button>
    </div>
  );
}

export default Producto;
