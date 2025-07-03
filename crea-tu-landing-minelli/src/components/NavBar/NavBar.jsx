import { Link, Outlet } from "react-router-dom";
import CartWidget from "../CartWidget/CartWidget";
import "../NavBar/NavBar.css";
import logo from "../../../public/logo-buenas-cosas.png";

function NavBar() {
    return (
    <>
    <nav className="navbar">
        <div>
            <Link to="/">
                <img className="logo" src={logo} alt="Logo Buenas Cosas"/>
            </Link>
        </div>

        <div className="categorias">
        <Link to="/productos">Todos los Productos</Link>
        <Link to="/categoria/Pasteleria">Pastelería</Link>
        <Link to="/categoria/Panificacion">Panificación</Link>
        </div>

        <CartWidget />
    </nav>
    <Outlet/>
    </>
    );
}

export default NavBar;