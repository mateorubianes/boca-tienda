import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import CartItem from '../CartItem/CartItem';
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);

  if (totalQuantity === 0) {
    return (
      <div>
        <li>No hay items en el carrito</li>
        <Link to='/' className='Option'>Productos</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map(p => <CartItem key={p.id} {...p} />)}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
      <Link to='/checkout' className='Option'>Checkout</Link>
    </div>
  );
};

export default Cart;