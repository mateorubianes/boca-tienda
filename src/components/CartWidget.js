import CarritoImg from "../img/carrito.png"
import ItemListContainer from "./ItemListContainer"

const CartWidget = () => {
    return(
        <div className="is-flex is-align-items-center is-justify-content-center">
            <img src={CarritoImg} alt="carrito de Boca" className="image is-64x64 mr-4 mt-4"/>
            <ItemListContainer items={0}/>
        </div>
    )
}

export default CartWidget