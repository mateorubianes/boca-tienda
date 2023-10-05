import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({id,name,img,price,stock}) => {
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <img src={img} alt={name}/>
            </div>
            <div>
                <p>Precio: {price}</p>
                <p>Stock Disponible: {stock}</p>
            </div>
            <div>
                <Link to={`/item/${id}`}>Ver detalle</Link>   
            </div>
        </div>
    );
}

export default Item;
