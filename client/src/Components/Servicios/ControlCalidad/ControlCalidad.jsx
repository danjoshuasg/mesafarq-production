import React, { useState } from 'react';
import Modal from '../PopUp/Modal';
import ReactMarkdown from 'react-markdown';
import './ControlCalidad.css'
import Imagen from '../../Assets/Servicios/cadena logistica.png';

// Contenido de tu archivo Markdown
const markdownContent = `# Control de calidad 

En Mesafarq, comprendemos la importancia crítica de mantener estándares de calidad excepcionales en la industria de insumos médicos. Nuestra especialidad radica en la implementación de prácticas de control de calidad robustas y eficientes que aseguran la integridad de los productos médicos desde la adquisición hasta la entrega al cliente.

## Nuestros Servicios

### Auditoría y Certificación de Proveedores
- Evaluamos y auditamos a los proveedores para asegurarnos de que cumplen con las regulaciones nacionales e internacionales.
- Implementamos programas de certificación para garantizar la producción y suministro continuo de insumos de alta calidad.

### Control de Calidad en el Proceso de Manufactura
- Supervisamos las operaciones de fabricación para garantizar la conformidad con las especificaciones del producto.
- Realizamos pruebas en el sitio y análisis de laboratorio para validar la calidad y seguridad del producto.

### Gestión de Documentación Regulatoria
- Mantenemos y gestionamos toda la documentación requerida para cumplir con las regulaciones vigentes.
- Asistimos en la preparación y presentación de documentos regulatorios para nuevos productos o cambios en productos existentes.

### Inspección y Pruebas de Producto Final
- Realizamos inspecciones detalladas y pruebas de calidad de los productos finales antes del envío.
- Nos aseguramos de que cada lote cumpla con las especificaciones de calidad y las expectativas del cliente.

### Gestión de No Conformidades y Acciones Correctivas
- Identificamos productos no conformes y implementamos acciones correctivas rápidamente.
- Analizamos las causas de la no conformidad para mejorar los procesos y prevenir futuras incidencias.

### Capacitación y Desarrollo del Personal
- Ofrecemos programas de capacitación para el personal sobre prácticas de calidad y conformidad regulatoria.
- Fomentamos una cultura de calidad y mejora continua en toda la organización.

### Monitoreo Continuo y Mejora de la Calidad
- Utilizamos métricas de calidad y herramientas de monitoreo para evaluar continuamente los procesos de calidad.
- Implementamos iniciativas de mejora de la calidad basadas en datos para optimizar los procedimientos operativos.

## Compromiso con la Excelencia
En Mesafarq, nuestro compromiso es proporcionar servicios de control de calidad que no solo cumplen, sino que superan las normativas y expectativas de la industria médica. Nuestra meta es ser su aliado estratégico en la mejora y mantenimiento de la calidad superior de sus productos.

Confíe en nosotros para elevar los estándares de sus insumos médicos y llevar su empresa al siguiente nivel de excelencia operativa.
`;

function ControlCalidad() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
      <div className="contenedor-control-calidad">
          <div className="control-calidad-left">
              <h2>Control de calidad de negocios en salud</h2>
              <button className="btn-ver-servicios" onClick={() => setIsModalOpen(true)}>Ver detalles</button>
          </div>
          <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
              <ReactMarkdown>{markdownContent}</ReactMarkdown>
          </Modal>
          <div className="control-calidad-right">
              <img src={Imagen} alt="Descripción" />
          </div>
      </div>
    );
}

export default ControlCalidad;
