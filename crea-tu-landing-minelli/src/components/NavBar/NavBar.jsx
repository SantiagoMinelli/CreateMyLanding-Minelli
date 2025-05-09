import "./NavBar.css"
//import logo from "../../assets"
import CartWidget from "../CartWidget/CartWidget"

function NavBar() {

    return (
        <nav className="navbar">
            <div>
                <img src="" alt="Logo Buenas Cosas" />
            </div>
            <ul className="navbar-links">
                <li className="navbar-item">
                    <a href="">Inicio</a>
                </li>
                <li className="navbar-item">
                    <a href="">Panificación</a>
                </li>
                <li className="navbar-item">
                    <a href="">Pastelería</a>
                </li>               
            </ul>
            <CartWidget/>
        </nav>
    )
}

export default NavBar