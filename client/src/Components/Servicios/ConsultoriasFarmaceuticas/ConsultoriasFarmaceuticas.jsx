import React, { useState } from 'react';
import Modal from '../PopUp/Modal';
import ReactMarkdown from 'react-markdown';
import './ConsultoriasFarmaceuticas.css'
import Imagen from '../../../img/servicios/ConsultoriaFarmaceutica.png';

// Contenido de tu archivo Markdown
const markdownContent = `# Consultorías Farmacéuticas

En MESAFARQ, ofrecemos servicios especializados en consultorías farmacéuticas para apoyar a las empresas en la industria de los medicamentos. Nuestro objetivo es garantizar que los productos farmacéuticos cumplan con las normativas y estándares de calidad más estrictos.

## Nuestros Servicios

### Desarrollo y Validación de Métodos Analíticos
- Asistimos en el desarrollo y validación de métodos analíticos para asegurar la precisión y fiabilidad de los resultados.
- Realizamos estudios de estabilidad y pruebas de pureza.

### Gestión de Documentación Regulatoria
- Mantenemos y gestionamos toda la documentación necesaria para cumplir con las normativas regulatorias.
- Asistimos en la preparación y presentación de dossiers para la aprobación de productos.

### Auditoría y Certificación de Proveedores
- Evaluamos y auditamos a los proveedores para asegurar que cumplen con las normativas de calidad.
- Implementamos programas de certificación para garantizar un suministro continuo de productos de alta calidad.

### Control de Calidad en la Producción
- Supervisamos las operaciones de fabricación para asegurar la conformidad con las especificaciones del producto.
- Realizamos inspecciones y pruebas de calidad para validar la seguridad y eficacia del producto.

### Capacitación y Desarrollo del Personal
- Ofrecemos programas de capacitación para el personal sobre buenas prácticas de manufactura y regulaciones.
- Fomentamos una cultura de calidad y mejora continua en toda la organización.

### Consultoría en Asuntos Regulatorios
- Proporcionamos asesoramiento en asuntos regulatorios para la comercialización de productos farmacéuticos.
- Ayudamos en la interpretación y aplicación de normativas locales e internacionales.

### Verificación de las Buenas Prácticas de Manufactura

- Evaluar y asegurar que los procesos de manufactura de una empresa cumplan con los estándares de calidad y regulaciones vigentes. 
- Inspección detallada de instalaciones, equipos y procedimientos para garantizar la producción de productos seguros y efectivos. 
- Se proporcionará recomendaciones para mejorar la eficiencia y cumplir con las normativas de la industria, asegurando la calidad y seguridad del producto final.

## Compromiso con la Excelencia
En MESAFARQ, estamos comprometidos con la excelencia en nuestras consultorías farmacéuticas. Confíe en nosotros para asegurar que sus productos farmacéuticos cumplan con los más altos estándares de calidad y regulaciones.

Su aliado estratégico en consultorías farmacéuticas.`;

function ConsultoriasFarmaceuticas() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="contenedor-consultorias-farmaceuticas">
            <div className="consultorias-farmaceuticas-left">
                <img src={Imagen} alt="Consultorías Farmacéuticas" />
            </div>
            <div className="consultorias-farmaceuticas-right">
                <h2>Consultorías Farmacéuticas</h2>
                <p>En MESAFARQ, ofrecemos consultorías especializadas para apoyar a las empresas en la industria farmacéutica. Nuestro objetivo es garantizar que sus productos farmacéuticos cumplan con las normativas y estándares de calidad más estrictos. Ofrecemos servicios integrales que incluyen el desarrollo y validación de métodos analíticos, gestión de documentación regulatoria, auditoría y certificación de proveedores, control de calidad en la producción, capacitación y desarrollo del personal, consultoría en asuntos regulatorios y verificación de las buenas prácticas de manufactura. Confíe en MESAFARQ como su aliado estratégico en consultorías farmacéuticas.</p>
                <button className="btn-ver-servicios" onClick={() => setIsModalOpen(true)}>Ver detalles</button>
            </div>
            <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </Modal>
        </div>
    );
}

export default ConsultoriasFarmaceuticas;
