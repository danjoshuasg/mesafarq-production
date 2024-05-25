import React from 'react';
import Resumen from '../Components/Inicio/Resumen/Resumen.jsx';
import ContactoFormulario from '../Components/Inicio/ContactoForm/ContactoForm.jsx';
import ProductosInicio from '../Components/Inicio/ProductosInicio/ProductosInicio.jsx';
import NumerosInicio from '../Components/Inicio/NumerosInicio/NumerosInicio.jsx';
import ServiciosInicio from '../Components/Inicio/ServiciosInicio/ServiciosInicio.jsx';
import Mapa from '../Components/Inicio/Mapa/Mapa.jsx';
import image1 from '../Components/Assets/LogosAliados/kimberly - gray.png';
import image2 from '../Components/Assets/LogosAliados/pfizer - gray.png';
import image3 from '../Components/Assets/LogosAliados/roche posay - gray.png';
import image4 from '../Components/Assets/LogosAliados/Bayer - gray.png';

{/*import Carousel from '../Components/Inicio/Carousel/Carousel.jsx';*/}
{/*import EquipoMesafarq from '../Components/Inicio/EquipoMesafarq/EquipoMesafarq.jsx';*/}

const images = [image1, image2, image3, image4];

const Inicio = () => {
  return (
    <div>
      <Resumen/>
      {/*<Carousel images={images} />*/}
      <ProductosInicio/>
      <NumerosInicio/>
      <ServiciosInicio/>
      {/*<EquipoMesafarq/>*/}
      <Mapa/>
      <ContactoFormulario/>
    </div>
  );
}

export default Inicio;