import NavBar from "./NavBar"
import ItemListContainer from "./ItemListContainer"
import ItemDetailContainer from "./ItemDetailContainer/ItemDetailContainer"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import "bulma/css/bulma.css"

const App = () => {
    return(
        <>
            <BrowserRouter>
                <NavBar/>
                <Routes>
                    <Route exact path="/" element={<ItemListContainer />}/>
                    <Route exact path="/category/:categoryId" element={<ItemListContainer />}/>
                    <Route exact path="/item/:itemId" element={<ItemDetailContainer/>}/>
                    <Route exact path="*" element={<h1>404 NOT FOUND</h1>}/>
                </Routes>
            </BrowserRouter>
        </>
    )
}

export default App