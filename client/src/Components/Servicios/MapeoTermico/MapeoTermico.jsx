import React, { useState } from 'react';
import Modal from '../PopUp/Modal';
import ReactMarkdown from 'react-markdown';
import './MapeoTermico.css'
import Imagen from '../../../img/servicios/MapeoTermico.png';
// Contenido de tu archivo Markdown
const markdownContent = `# Mapeo Térmico

En Mesafarq, ofrecemos servicios de mapeo térmico para asegurar la integridad y calidad de los productos farmacéuticos y médicos durante su almacenamiento y transporte. Utilizamos tecnología avanzada para monitorear y analizar las condiciones térmicas de sus instalaciones y vehículos.

## Nuestros Servicios

### Evaluación de Instalaciones
- Realizamos evaluaciones térmicas detalladas de almacenes y áreas de almacenamiento.
- Identificamos puntos críticos y áreas de riesgo térmico.

### Monitoreo de Temperatura
- Implementamos sistemas de monitoreo continuo de temperatura y humedad.
- Proporcionamos alertas en tiempo real para condiciones fuera de rango.

### Análisis de Datos
- Analizamos los datos de temperatura para identificar patrones y tendencias.
- Proporcionamos informes detallados y recomendaciones para la mejora.

### Validación de Equipos
- Validamos equipos de refrigeración y sistemas de control térmico.
- Aseguramos que los equipos cumplen con las normativas y estándares de calidad.

### Capacitación y Consultoría
- Ofrecemos programas de capacitación sobre gestión térmica y mejores prácticas.
- Proporcionamos consultoría especializada para mejorar sus procesos de control térmico.

## Compromiso con la Excelencia
En Mesafarq, estamos comprometidos con la excelencia en nuestros servicios de mapeo térmico. Confíe en nosotros para asegurar que sus productos se mantengan en condiciones óptimas y cumplan con las normativas de calidad.

Su aliado estratégico en mapeo térmico y control de calidad.`;

function MapeoTermico() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="contenedor-mapeo-termico">
            <div className="mapeo-termico-left">
                <img src={Imagen} alt="Mapeo Térmico" />
            </div>
            <div className="mapeo-termico-right">
                <h2>Mapeo Térmico</h2>
                <button className="btn-ver-servicios" onClick={() => setIsModalOpen(true)}>Ver detalles</button>
            </div>
            <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </Modal>
        </div>
    );
}

export default MapeoTermico;
