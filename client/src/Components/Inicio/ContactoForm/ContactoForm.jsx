import React, { useState } from 'react';
import './ContactoForm.css'; // Asegúrate de tener el archivo CSS en la misma carpeta

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí manejarías el envío del formulario, como enviar los datos a un servidor
    console.log(formData);
  };

  return (
    <div className="contact-form-container">
      <h2>CONTÁCTENOS</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            placeholder="Nombre"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            placeholder="Correo"
            required
          />
        </div>
        <div className="form-group">
          <textarea
            name="mensaje"
            value={formData.mensaje}
            onChange={handleChange}
            placeholder="Mensaje"
            required
          />
        </div>
        <div className="form-group">
          <button type="submit">Enviar</button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
