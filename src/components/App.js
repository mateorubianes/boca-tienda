import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bulma/css/bulma.css"
import { CartProvider } from "../context/CartContext"
import Cart from "./Cart/Cart"
const App = () => {
    return(
        <>
            <BrowserRouter>
                <CartProvider>
                    <NavBar/>
                    <Routes>
                        <Route exact path="/" element={<ItemListContainer />}/>
                        <Route exact path="/category/:categoryId" element={<ItemListContainer />}/>
                        <Route exact path="/item/:itemId" element={<ItemDetailContainer/>}/>
                        <Route exact path="/cart" element={<Cart/>}/>
                        <Route exact path="*" element={<h1>404 NOT FOUND</h1>}/>
                    </Routes>
                </CartProvider>
            </BrowserRouter>
        </>
    )
}

export default App