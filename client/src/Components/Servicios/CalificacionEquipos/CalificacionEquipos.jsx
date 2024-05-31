import React, { useState } from 'react';
import Modal from '../PopUp/Modal';
import ReactMarkdown from 'react-markdown';
import './CalificacionEquipos.css';
import Imagen from '../../../img/servicios/CalificacionEquipos.png';

// Contenido de tu archivo Markdown
const markdownContent = `# Calificación de Equipos de Laboratorio y Clínicos

En Mesafarq, ofrecemos servicios especializados en la calificación de equipos de laboratorio y clínicos para asegurar que cumplan con los estándares de calidad y regulaciones vigentes. Nuestro objetivo es garantizar que sus equipos operen con la máxima precisión y seguridad.

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

### Validación de Procesos
- Validamos los procesos asociados con el uso de los equipos para garantizar la integridad y calidad de los resultados.
- Implementamos protocolos de validación y realizamos análisis detallados.

### Gestión de Documentación
- Mantenemos y gestionamos toda la documentación necesaria para cumplir con las normativas de calificación.
- Proporcionamos informes detallados y certificados de calificación.

### Capacitación y Soporte
- Ofrecemos programas de capacitación para el personal sobre la correcta operación y mantenimiento de los equipos.
- Brindamos soporte técnico continuo para resolver cualquier inconveniente.

## Compromiso con la Calidad
En Mesafarq, estamos comprometidos con la excelencia en la calificación de equipos para el sector salud. Confíe en nosotros para asegurar que sus equipos cumplen con los más altos estándares de calidad y regulaciones.

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
                <button className="btn-ver-servicios" onClick={() => setIsModalOpen(true)}>Ver detalles</button>
            </div>
            <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </Modal>
        </div>
    );
}

export default CalificacionEquipos;
