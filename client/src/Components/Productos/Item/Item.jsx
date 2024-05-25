import React, { useState } from 'react';
import './Item.css';

const Item = (props) => {
    const [showMore, setShowMore] = useState(false); // Estado para controlar la visibilidad

    return (
        <div className='item'>
            <img src={props.image} alt={props.name} />
            <div className="item-name"><span>Nombre:</span><p>{props.name}</p></div>
            <div className="item-prices"><span>Precio:</span><p>{props.price}</p></div>

            {showMore && ( // Solo muestra esta sección si showMore es true
                <>
                    <div className="item-detail"><span>ID:</span><p>{props.id}</p></div>
                    <div className="item-specifications"><span>Especificaciones:</span><p>{props.specifications}</p></div>
                    <div className="item-units"><span>Unidades:</span><p>{props.units}</p></div>
                    <div className="item-type"><span>Tipo:</span><p>{props.type}</p></div>
                </>
            )}
            
            <button onClick={() => setShowMore(!showMore)}>{showMore ? 'Ver menos' : 'Ver más'}</button> {/* Botón para alternar la visibilidad */}
        </div>
    );
}

export default Item;
