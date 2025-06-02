import logo from "../../../public/logo-buenas-cosas.png";
import CartWidget from "../CartWidget/CartWidget";
import { Link, Outlet } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
    return (
        <>
        <nav className="navbar">
            {/* Logo */}
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
                    <Link to={"/ItemListContainer"} className="nav-link">Productos</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/categoria/Pasteleria"} className="nav-link">Pastelería</Link>
                </li>
                <li className="nav-item">
                    <Link to={"/categoria/Panificacion"} className="nav-link">Panificación</Link>
                </li>
            </ul>
            {/* Carrito */}
            <CartWidget/>
        </nav>
        <Outlet/>
        </>
    )
}

export default NavBar