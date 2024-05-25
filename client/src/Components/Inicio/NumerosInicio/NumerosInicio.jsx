import React from 'react';
import CountUp from 'react-countup';
import './NumerosInicio.css';

const NumerosInicio = () => {
  return (
    <div className="numbers-container">
      <div className="numbers-row">
        <div className="number-item">
          <CountUp end={10} duration={10} prefix="+"/>
          <p>Productos ofrecidos</p>
        </div>
        <div className="number-item">
          <CountUp end={4} duration={10} />
          <p>Categorías de productos</p>
        </div>
        <div className="number-item">
          <CountUp end={3} duration={10} prefix="+" />
          <p>Distritos alcanzados</p>
        </div>
      </div>
      <div className="button-container">
        <button>Ver más</button>
      </div>
    </div>
  );
};

export default NumerosInicio;
