import React, { useState } from 'react';
import './GestionCadena.css'
import Modal from '../PopUp/Modal';
import ReactMarkdown from 'react-markdown';
import Imagen from '../../Assets/Servicios/consultoria.png'

// Contenido de tu archivo Markdown
const markdownContent = `# Gestión de cadena de suministros

En nuestra empresa, nos especializamos en la gestión eficiente de la cadena de suministros para distribuidores de insumos y partes de equipos médicos, ofreciendo un espectro completo de servicios diseñados para optimizar las operaciones, reducir costos y mejorar la satisfacción del cliente. Nuestros servicios incluyen:

- **Adquisición Estratégica:** Identificamos y nos asociamos con proveedores de primera línea para garantizar la calidad y la disponibilidad constante de insumos y partes críticas. Nuestro enfoque en la negociación y la gestión de relaciones con proveedores nos permite obtener las mejores condiciones, incluyendo precios competitivos y plazos de entrega óptimos.
- **Gestión de Inventarios:** Implementamos soluciones avanzadas de gestión de inventarios, incluyendo sistemas de seguimiento y pronóstico, para asegurar que los productos esenciales estén siempre disponibles sin incurrir en excesos que generen costos de almacenamiento innecesarios.
- **Logística y Distribución:** Nuestra red logística garantiza una distribución eficiente y oportuna de insumos y partes a cualquier punto del país. Nos enfocamos en la optimización de rutas y la selección de transportistas para reducir los tiempos de entrega y los costos asociados.
- **Control de Calidad:** Mantenemos los más altos estándares de calidad en todos los eslabones de la cadena de suministro. Nuestros procesos de inspección y validación aseguran que todos los productos cumplan con las normativas y expectativas de calidad antes de su distribución.
- **Gestión de Riesgos:** Identificamos y mitigamos proactivamente los riesgos asociados con la cadena de suministros, desde la volatilidad de precios hasta la interrupción de la cadena de suministro, para garantizar una operación ininterrumpida y confiable.
- **Cumplimiento Normativo:** Nos aseguramos de que todas las operaciones cumplan con las leyes y regulaciones locales e internacionales, incluyendo las normas de seguridad y ambientales, garantizando una operación ética y responsable. 
- **Consultoría y Mejora Continua:** Ofrecemos servicios de consultoría para identificar oportunidades de mejora en la cadena de suministros. Aplicamos metodologías de mejora continua para optimizar los procesos, aumentar la eficiencia y reducir costos.

Al confiar en nosotros la gestión de parte de su cadena de suministros, los distribuidores de insumos y partes de equipos médicos pueden enfocarse en su core business, con la seguridad de que su operación logística está en manos de expertos. Estamos comprometidos con la excelencia operativa y la innovación, con el objetivo de superar las expectativas de nuestros clientes y contribuir al éxito de su negocio.
`;

function GestionCadena() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="contenedor-gestion-cadena">
        <div className="gestion-cadena-left">
            <img src={Imagen} alt="Descripción" />
        </div>
        <Modal isOpen={isModalOpen} close={() => setIsModalOpen(false)}>
                <ReactMarkdown>{markdownContent}</ReactMarkdown>
        </Modal>
        <div className="gestion-cadena-right">
            <h2>Gestión de cadena de suministros</h2>
            <button className="btn-ver-servicios" onClick={() => setIsModalOpen(true)}>Ver detalles</button>
        </div>
    </div>
    
  )
}

export default GestionCadena

