import React from 'react';
import './Mapa.css'; 

const Mapa = () => {
  // Asegúrate de reemplazar 'TU_CLAVE_API' con tu clave de la API de Google y la parte de 'q=Tu+Dirección' con la dirección que deseas mostrar.
  const googleMapsUrl = `https://www.google.com/maps/embed/v1/place?key=AIzaSyBeSiR7E4c3E3lMxA897kCmrxXpiUClZRQ&q=-12.052448633773839, -76.9805193754354`;

  return (
    <div className="mapa-container">
      <h2>VISÍTENOS</h2>
      <p>Calle Marsella 448 Urb. Santa Rosa de Quives. Santa Anita</p>
      <div className="mapa">
        <iframe
          title="Ubicacion-Mesafarq"
          width="600"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          allowFullScreen
          src={googleMapsUrl}>
        </iframe>
      </div>
    </div>
  );
}

export default Mapa;
