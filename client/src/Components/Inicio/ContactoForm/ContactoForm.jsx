import React, { useState } from 'react';
import './ContactoForm.css'; // Asegúrate de tener el archivo CSS en la misma carpeta
import emailjs from 'emailjs-com';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    correo: '',
    asunto: '',
    mensaje: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false); // Nuevo estado para manejar el envío exitoso

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(formData);
  };

  const sendEmail = (data) => {
    emailjs.send('service_3k128lv', 'template_8umnirc', {
      to_email: 'dan.joshua.santivanez@gmail.com',
      from_name: data.nombre,
      reply_to: data.correo,
      subject: data.asunto,
      message: data.mensaje,
    }, 'T4PYpuVhYbVp4gO9y')
    .then((response) => {
      console.log('SUCCESS!', response.status, response.text);
      setIsSubmitted(true); // Cambiar el estado a true cuando el envío es exitoso
    }, (error) => {
      console.log('FAILED...', error);
    });
  };

  if (isSubmitted) {
    return (
      <div className="contact-form-container">
        <h2>Mensaje enviado con éxito <span role="img" aria-label="check">✔️</span></h2>
      </div>
    );
  }

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
          <input
            type="text"
            name="asunto"
            value={formData.asunto}
            onChange={handleChange}
            placeholder="Asunto"
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
