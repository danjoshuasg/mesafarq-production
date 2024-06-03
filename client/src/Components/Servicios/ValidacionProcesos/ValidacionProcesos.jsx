import React, { useState } from 'react';
import Modal from '../PopUp/Modal';
import ReactMarkdown from 'react-markdown';
import './ValidacionProcesos.css'
import Imagen from '../../../img/servicios/ValidacionProcesos.png';
// Contenido de tu archivo Markdown
const markdownContent = `# Validación de procesos

En MESAFARQ, ofrecemos el servicio de validación de procesos farmacéuticos. Este asegura que los procedimientos de manufactura cumplen con los estándares de calidad y regulaciones vigentes. Este proceso es esencial para garantizar la consistencia, seguridad y eficacia de los productos farmacéuticos.

## Servicios Incluidos:

### Análisis de Riesgos
- Identificación y evaluación de posibles riesgos en el proceso de manufactura.

### Desarrollo de Protocolos de Validación
- Creación de protocolos detallados que describen las pruebas y criterios de aceptación.

### Ejecución de Pruebas
- Realización de pruebas de validación en condiciones controladas para verificar la reproducibilidad y robustez del proceso.

### Documentación Completa
- Generación de informes detallados que documentan los resultados de las pruebas y las conclusiones de la validación.

### Revisión y Aprobación
- Evaluación final y aprobación de los procesos validados para garantizar el cumplimiento regulatorio.

## Compromiso con la Excelencia
En MESAFARQ, estamos comprometidos con la excelencia en nuestros servicios enfocados en la validación de sus procesos. Confíe en nosotros para asegurar que sus procesos mantengan la más alta calidad del mercado.

Somos su aliado estratégico`;

function ValidacionProcesos() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="contenedor-validacion-procesos">
            <div className="validacion-procesos-left">
                <img src={Imagen} alt="Validación Procesos" />
            </div>
            <div className="validacion-procesos-right">
                <h2>Validación de Procesos</h2>
                <p>En MESAFARQ, entendemos la importancia de la validación de procesos en la industria farmacéutica. Nuestro objetivo es garantizar que cada fase del proceso de manufactura cumpla con los más altos estándares de calidad, asegurando la seguridad y eficacia de los productos. Contamos con un equipo de expertos dedicados a ofrecer servicios completos de validación, desde el análisis de riesgos hasta la aprobación final, proporcionando tranquilidad y confianza a nuestros clientes.</p>
                <button className="btn-ver-servicios" onClick={() => setIsModalOpen(true)}>Ver detalles</button>
            </div>
            <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
            </Modal>
        </div>
    );
}

export default ValidacionProcesos;
