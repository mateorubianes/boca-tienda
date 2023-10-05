import CartWidget from "./CartWidget"
import { Link, NavLink } from "react-router-dom"

const NavBar = () => {
    return(
        <nav className="navBar">
            <div className="has-background-link-dark is-flex-direction-column is-flex is-align-items-center py-5">
                <Link to={"/"}>  
                    <h3 className="title is-1 mt-0 has-text-warning">BOCA TIENDA</h3>
                </Link>
                <div className="columns is-variable is-3">
                    <div className="column is-one-fifth">
                        <NavLink to={`category/remera`} className="button is-medium is-fullwidth">REMERAS</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`category/gorra`} className="button is-medium is-fullwidth">GORRAS</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`category/pantalon`} className="button is-medium is-fullwidth">PANTALONES</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`category/short`} className="button is-medium is-fullwidth">SHORTS</NavLink>
                    </div>
                    <div className="column">
                        <NavLink to={`category/campera`} className="button is-medium is-fullwidth">CAMPERAS</NavLink>
                    </div>
                </div>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar