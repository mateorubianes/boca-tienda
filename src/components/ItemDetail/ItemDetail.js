import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext } from '../../context/CartContext';

const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)
    const {addItem} = useContext(CartContext)
    
    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }
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
            <footer>
                {
                    quantityAdded > 0 
                    ? 
                    (
                        <Link to={"/cart"}>Terminar compra</Link>
                    ) 
                    : 
                    (
                        <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>    
                    )
                }
            </footer>
        </div>
    );
}

export default ItemDetail;
