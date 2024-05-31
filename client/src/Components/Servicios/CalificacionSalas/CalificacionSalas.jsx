import React, { useState } from 'react';
import Modal from '../PopUp/Modal';
import ReactMarkdown from 'react-markdown';
import './CalificacionSalas.css';
import Imagen from '../../../img/servicios/CalificacionSalas.png';

// Contenido de tu archivo Markdown
const markdownContent = `# Calificación de Salas y Tópicos Clínicos

En Mesafarq, ofrecemos servicios especializados en la calificación de salas y tópicos clínicos para asegurar que cumplan con los estándares de calidad y regulaciones vigentes. Nuestro objetivo es garantizar que los espacios clínicos operen con la máxima eficiencia y seguridad.

## Nuestros Servicios

### Calificación de Instalación (IQ)
- Verificamos que las salas y tópicos se instalen correctamente según las especificaciones y normativas aplicables.
- Realizamos inspecciones detalladas y documentamos todos los aspectos de la instalación.

### Calificación de Operación (OQ)
- Evaluamos el funcionamiento de las salas y tópicos para asegurar que operen dentro de los parámetros establecidos.
- Realizamos pruebas y mediciones para validar el rendimiento operativo.

### Calificación de Desempeño (PQ)
- Verificamos que las salas y tópicos cumplan con los criterios de desempeño en condiciones reales de uso.
- Realizamos estudios de estabilidad y reproducibilidad para asegurar resultados consistentes.

### Validación de Procesos
- Validamos los procesos asociados con el uso de las salas y tópicos para garantizar la integridad y calidad de los servicios.
- Implementamos protocolos de validación y realizamos análisis detallados.

### Gestión de Documentación
- Mantenemos y gestionamos toda la documentación necesaria para cumplir con las normativas de calificación.
- Proporcionamos informes detallados y certificados de calificación.

### Capacitación y Soporte
- Ofrecemos programas de capacitación para el personal sobre la correcta operación y mantenimiento de las salas y tópicos.
- Brindamos soporte técnico continuo para resolver cualquier inconveniente.

## Compromiso con la Calidad
En Mesafarq, estamos comprometidos con la excelencia en la calificación de salas y tópicos clínicos para el sector salud. Confíe en nosotros para asegurar que sus instalaciones cumplen con los más altos estándares de calidad y regulaciones.

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
                <button className="btn-ver-servicios" onClick={() => setIsModalOpen(true)}>Ver detalles</button>
            </div>
            <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </Modal>
        </div>
    );
}

export default CalificacionSalas;
