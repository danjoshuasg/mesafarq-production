import React, { useState } from 'react';
import Modal from '../PopUp/Modal';
import ReactMarkdown from 'react-markdown';
import './CalificacionEquipos.css';
import Imagen from '../../../img/servicios/CalificacionEquipos.png';

// Contenido de tu archivo Markdown
const markdownContent = `# Calificación de Equipos de Laboratorio y Clínicos

En MESAFARQ, ofrecemos servicios especializados en la calificación de equipos de laboratorio y clínicos para asegurar que cumplan con los estándares de calidad y regulaciones vigentes. Nuestro objetivo es garantizar que sus equipos operen con la máxima precisión y seguridad.

## Nuestros Servicios

### Calificación de Instalación (IQ)
- Verificamos que los equipos se instalen correctamente según las especificaciones del fabricante y las normativas aplicables.
- Realizamos inspecciones detalladas y documentamos todos los aspectos de la instalación.

### Calificación de Operación (OQ)
- Evaluamos el funcionamiento de los equipos para asegurar que operen dentro de los parámetros establecidos.
- Realizamos pruebas y mediciones para validar el rendimiento operativo.

### Calificación de Desempeño (PQ)
- Verificamos que los equipos cumplan con los criterios de desempeño en condiciones reales de uso.
- Realizamos estudios de estabilidad y reproducibilidad para asegurar resultados consistentes.

### Gestión de Documentación
- Mantenemos y gestionamos toda la documentación necesaria para cumplir con las normativas de calificación.
- Proporcionamos informes detallados y certificados de calificación.

### Capacitación y Soporte
- Ofrecemos programas de capacitación para el personal sobre la correcta operación y mantenimiento de los equipos.
- Brindamos soporte técnico continuo para resolver cualquier inconveniente.

## Compromiso con la Calidad
En MESAFARQ, estamos comprometidos con la excelencia en la calificación de equipos para el sector salud. Confíe en nosotros para asegurar que sus equipos cumplen con los más altos estándares de calidad y regulaciones.

Su aliado estratégico en la calificación de equipos de laboratorio y clínicos.`;

function CalificacionEquipos() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="contenedor-calificacion-equipos">
            <div className="calificacion-equipos-left">
                <img src={Imagen} alt="Calificación de Equipos" />
            </div>
            <div className="calificacion-equipos-right">
                <h2>Calificación de Equipos</h2>
                <p>En MESAFARQ, sabemos lo crucial que es la calificación de equipos en el ámbito de laboratorio y clínico. Nuestro compromiso es garantizar que sus equipos operen con la máxima precisión y seguridad, cumpliendo con los estándares de calidad y regulaciones vigentes. Ofrecemos servicios integrales que incluyen la calificación de instalación, operación y desempeño, así como la gestión completa de la documentación y programas de capacitación. Confíe en nosotros como su aliado estratégico para mantener la excelencia y la fiabilidad en sus procesos.</p>
                <button className="btn-ver-servicios" onClick={() => setIsModalOpen(true)}>Ver detalles</button>
            </div>
            <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </Modal>
        </div>
    );
}

export default CalificacionEquipos;
