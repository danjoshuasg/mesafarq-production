import React from 'react';
import Slider from 'react-slick';

// Importar los estilos de slick en caso de que aún no estén importados globalmente
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import './Carousel.css'; // Tu propio archivo CSS para estilos adicionales

const Carousel = ({ images }) => {
  // Configuraciones para el carrusel
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 500
  };

  return (
    <div className='carousel-wrapper'>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div className="box">
            <div key={index} className="carousel-content">
              <img src={image} alt={`Slide ${index}`} />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;