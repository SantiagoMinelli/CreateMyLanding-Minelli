import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { CartContext } from "../CartWidget/CartContext";
import "./Item.css";

    function Item({ 
    id, 
    nombre, 
    descripcion, 
    precio, 
    imagen, 
    categoria, 
    isDetail = false 
    }) {
    const { agregarAlCarrito } = useContext(CartContext);
    const [cantidad, setCantidad] = useState(1);

    const handleAgregarAlCarrito = () => {
        agregarAlCarrito({
        id,
        nombre,
        precio,
        imagen,
        cantidad
    });

    // Efecto visual
    const boton = document.querySelector(`.boton-carrito[data-id="${id}"]`);
    if (boton) {
    boton.textContent = "✓ Agregado";
    boton.style.backgroundColor = "#27ae60";
        setTimeout(() => {
            boton.textContent = "Añadir al Carrito";
            boton.style.backgroundColor = "#d35400";
            }, 1500);
        }
    };

    // Vista de lista (compacta)
    if (!isDetail) {
    return (
        <div className="producto-card">
            <Link to={`/item/${id}`}>
                <img src={imagen} alt={nombre} className="producto-imagen" />
                <h3>{nombre}</h3>
                <p className="precio">${precio}</p>
            </Link>
        </div>
    );
    }

    // Vista de detalle (completa)
    return (
    <div className="producto-detalle">
        <div className="imagen-container">
            <img src={imagen} alt={nombre} className="imagen-detalle" />
        </div>

        <div className="info-container">
            <h2>{nombre}</h2>
            <p className="precio-detalle">${precio}</p>
            <p className="categoria-detalle">{categoria}</p>
            <p className="descripcion">{descripcion}</p>

            <div className="controles-cantidad">
                <button onClick={() => setCantidad(prev => Math.max(1, prev - 1))}>-</button>
                <span>{cantidad}</span>
                <button onClick={() => setCantidad(prev => prev + 1)}>+</button>
            </div>

            <button onClick={handleAgregarAlCarrito} className="boton-carrito" data-id={id}>
            Añadir al Carrito
            </button>

            <Link to="/productos" className="volver">
            Volver a productos
            </Link>
        </div>
    </div>
    );
}

export default Item;