import React from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    return (
        <div>
            <div>
                <h2>{name}</h2>
                <img src={img} alt={name}/>
            </div>
            <div>
                <p>Categoria: {category}</p>
                <p>description: {description}</p>
                <p>Precio: {price}</p>
                <p>Stock Disponible: {stock}</p>
            </div>
            <div>
                <Link to={"/"}>Volver</Link>
            </div>
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log("cantidad Agregada", quantity)}/>
        </div>
    );
}

export default ItemDetail;
