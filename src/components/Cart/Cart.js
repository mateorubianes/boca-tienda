import { useContext } from "react";
import { CartContext } from '../../context/CartContext';
import CartItem from "../CartItem/CartItem";
import { Link } from 'react-router-dom';

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
  console.log("Cart component - cart:", cart);
  console.log("Cart component - totalQuantity:", totalQuantity);
  console.log("Cart component - total:", total);

  if (totalQuantity === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to='/' className='Option'>Productos</Link>
      </div>
    );
  }

  return (
    <div>
      {cart.map((item) => (
        <CartItem key={item.id} {...item} />
      ))}
      <h3>Total: ${total}</h3>
      <button onClick={() => clearCart()}>
        Limpiar carrito
      </button>
      <Link to="/checkout">
        Checkout
      </Link>
    </div>
  );
};

export default Cart;