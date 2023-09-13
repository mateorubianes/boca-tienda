import CartWidget from "./CartWidget"

const NavBar = () => {
    return(
        <nav className="navBar">
            <div className="has-background-link-dark is-flex-direction-column is-flex is-align-items-center py-5">
                <h3 className="title is-1 mt-0 has-text-warning">BOCA TIENDA</h3>
                <div className="columns is-variable is-3">
                    <div className="column is-one-fifth">
                        <button className="button is-medium is-fullwidth">REMERAS</button>
                    </div>
                    <div className="column">
                        <button className="button is-medium is-fullwidth">GORRAS</button>
                    </div>
                    <div className="column">
                        <button className="button is-medium is-fullwidth">PANTALONES</button>
                    </div>
                    <div className="column">
                        <button className="button is-medium is-fullwidth">SHORTS</button>
                    </div>
                    <div className="column">
                        <button className="button is-medium is-fullwidth">CAMPERAS</button>
                    </div>
                </div>
            </div>
            <CartWidget/>
        </nav>
    )
}

export default NavBar