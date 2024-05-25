// Testimonios.jsx
import React from 'react';
import './Testimonios.css'; // Asegúrate de que el nombre del archivo coincide
import Imagen from '../../Assets/Testimonios/medico.jpg'
const Testimonios = () => {
  return (
    <section className="testimonios">
      <h2>TESTIMONIOS</h2>
      <div className="testimonial-container">
        <blockquote>
        "¡Gracias por suministrar productos de calidad que realmente marcan la diferencia en la atención al paciente! Nuestro hospital ha mejorado significativamente la eficiencia y la seguridad con los insumos que nos proporcionaron. ¡Nuestro equipo está más equipado que nunca, y eso en menos de una semana!"
        </blockquote>
        <div className="testimonial-author">
          <img src={Imagen} alt="Rey Charles" className="author-photo" />
          <div className="author-info">
            <p>Rey Charles</p>
            <p>@reycharles</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonios;
