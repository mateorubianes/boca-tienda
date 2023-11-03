import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';
import { Link } from 'react-router-dom';
import CarritoImg from "../../img/carrito.png"
import "./CartWidget.css"

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Link to='/cart' className='is-flex is-align-items-center is-justify-content-center' style={{ display: totalQuantity > 0 ? 'block' : 'none' }}>
      <img className='CartImg' src={CarritoImg} alt='cart-widget' />
      {totalQuantity}
    </Link>
  );
};

export default CartWidget;