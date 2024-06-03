import React, { useState } from 'react';
import Modal from '../PopUp/Modal';
import ReactMarkdown from 'react-markdown';
import './CalificacionSalas.css';
import Imagen from '../../../img/servicios/CalificacionSalas.png';

// Contenido de tu archivo Markdown
const markdownContent = `# Calificación de Salas Limpias

En MESAFARQ, ofrecemos servicios especializados en la calificación de salas limpias para asegurar que cumplan con los estándares de calidad y regulaciones vigentes. Nuestro objetivo es garantizar que los espacios clínicos operen con la máxima eficiencia y seguridad.

## Nuestros Servicios

### Calificación de Diseño (DQ)
-Análisis detallado del diseño respecto a los requisitos técnicos y normativos.
-Recomendaciones para mejorar el diseño y asegurar su conformidad con las regulaciones.

### Calificación de Instalación (IQ)
- Verificamos que las salas y tópicos se instalen correctamente según las especificaciones y normativas aplicables.
- Realizamos inspecciones detalladas y documentamos todos los aspectos de la instalación.

### Calificación de Operación (OQ)
- Evaluamos el funcionamiento de las salas y tópicos para asegurar que operen dentro de los parámetros establecidos.
- Realizamos pruebas y mediciones para validar el rendimiento operativo.

### Calificación de Desempeño (PQ)
- Verificamos que las salas y tópicos cumplan con los criterios de desempeño en condiciones reales de uso.
- Realizamos las pruebas de:
  1. Integridad de Filtro
  2. Conteo de partículas no viables
  3. Renovaciones de aire por hora
  4. Pruebas de diferenciales de presión
  5. Prueba de recuperación
  6. Verificación de Humedad y Temperatura

### Gestión de Documentación
- Mantenemos y gestionamos toda la documentación necesaria para cumplir con las normativas de calificación.
- Proporcionamos informes detallados y certificados de calificación.

### Capacitación y Soporte
- Ofrecemos programas de capacitación para el personal sobre la correcta operación y mantenimiento de las salas y tópicos.
- Brindamos soporte técnico continuo para resolver cualquier inconveniente.

## Compromiso con la Calidad
En MESAFARQ, estamos comprometidos con la excelencia en la calificación de salas limpias para el sector salud y veterinario. Confíe en nosotros para asegurar que sus instalaciones cumplen con los más altos estándares de calidad y regulaciones.

Su aliado estratégico en la calificación de salas y tópicos clínicos.`;

function CalificacionSalas() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="contenedor-calificacion-salas">
            <div className="calificacion-salas-left">
                <img src={Imagen} alt="Calificación de Salas" />
            </div>
            <div className="calificacion-salas-right">
                <h2>Calificación de Salas</h2>
                <p>En MESAFARQ, brindamos servicios especializados de calificación de salas limpias para garantizar que cumplen con los estándares de calidad y regulaciones vigentes. Nuestro objetivo es asegurar que sus espacios clínicos operen con la máxima eficiencia y seguridad, proporcionando tranquilidad y confianza a nuestros clientes. Ofrecemos una gama completa de servicios, incluyendo la calificación de diseño, instalación, operación y desempeño, así como la gestión de documentación y programas de capacitación. Confíe en nosotros como su aliado estratégico en la calificación de salas limpias.</p>
                <button className="btn-ver-servicios" onClick={() => setIsModalOpen(true)}>Ver detalles</button>
            </div>
            <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </Modal>
        </div>
    );
}

export default CalificacionSalas;
