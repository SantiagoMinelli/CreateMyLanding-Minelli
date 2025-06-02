import "./NavBar.css";
import logo from "../../assets/logo-buenas-cosas.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function NavBar() {

    return (
        <nav className="navbar">
            <div>
                <Link to="/">
                    <img className="logo" src={logo} alt="Logo Buenas Cosas"/>
                </Link>
            </div>
            
            {/* Menú de navegación */}
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/productos" className="nav-link">Todos los Productos</Link>
                </li>
                <li className="nav-item">
                    <Link to="/category/Pasteleria" className="nav-link">Pastelería</Link>
                </li>
                <li className="nav-item">
                    <Link to="/category/Panificacion" className="nav-link">Panificación</Link>
                </li>
                <li className="nav-item">
                    <Link to="/nosotros" className="nav-link">Nosotros</Link>
                </li>
            </ul>
            
            <CartWidget/>
        </nav>
    )
}

export default NavBar