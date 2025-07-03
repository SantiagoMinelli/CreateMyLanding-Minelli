import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../CartWidget/CartContext";
import "./Cart.css";

const Cart = () => {
    const { 
        cartItems, 
        agregarAlCarrito,
        removerDelCarrito, 
        vaciarCarrito, 
        cantidadProductos 
    } = useContext(CartContext);

    const [mostrarMensaje, setMostrarMensaje] = useState(false);
    const [mostrarFormulario, setMostrarFormulario] = useState(false);
    const [datosCliente, setDatosCliente] = useState({
        nombre: "",
        apellido: "",
        celular: ""
    });

    const calcularTotal = () => {
        return cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setDatosCliente({
            ...datosCliente,
            [name]: value
        });
    };

    const handleFinalizarCompra = () => {
        setMostrarFormulario(true);
    };

    const handleEnviarFormulario = (e) => {
        e.preventDefault();
        console.log("Datos del cliente:", datosCliente);
        
        setMostrarFormulario(false);
        setMostrarMensaje(true);
        vaciarCarrito();
        
        setTimeout(() => {
            setMostrarMensaje(false);
        }, 6000);
    };

    // Función para aumentar/disminuir cantidad
    const aumentarCantidad = (producto) => {
        agregarAlCarrito({ ...producto, cantidad: 1 });
    };

    const disminuirCantidad = (producto) => {
        if (producto.cantidad > 1) {
            agregarAlCarrito({ ...producto, cantidad: -1 });
        } else {
            removerDelCarrito(producto.id);
        }
    };

    return (
        <div className="cart-container">
            {/* Modal de formulario */}
            {mostrarFormulario && (
                <div className="formulario-modal">
                    <div className="contenido-formulario">
                        <h3>Datos de contacto</h3>
                        <form onSubmit={handleEnviarFormulario}>
                            <div className="form-group">
                                <label htmlFor="nombre">Nombre</label>
                                <input
                                    type="text"
                                    id="nombre"
                                    name="nombre"
                                    value={datosCliente.nombre}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="apellido">Apellido</label>
                                <input
                                    type="text"
                                    id="apellido"
                                    name="apellido"
                                    value={datosCliente.apellido}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            
                            <div className="form-group">
                                <label htmlFor="celular">Número de celular</label>
                                <input
                                    type="tel"
                                    id="celular"
                                    name="celular"
                                    value={datosCliente.celular}
                                    onChange={handleInputChange}
                                    required
                                />
                            </div>
                            
                            <div className="botones-formulario">
                                <button 
                                    type="button" 
                                    onClick={() => setMostrarFormulario(false)}
                                    className="boton-cancelar"
                                >
                                    Cancelar
                                </button>
                                <button 
                                    type="submit" 
                                    className="boton-confirmar"
                                >
                                    Confirmar compra
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {/* Mensaje de compra exitosa */}
            {mostrarMensaje && (
                <div className="mensaje-exito">
                    <div className="contenido-mensaje">
                        <svg viewBox="0 0 24 24" className="icono-exito">
                            <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                        </svg>
                        <h3>¡Compra realizada con éxito!</h3>
                        <p>Gracias {datosCliente.nombre}, hemos recibido tu pedido.</p>
                        <p>Nos contactaremos contigo para coordinar la entrega.</p>
                    </div>
                </div>
            )}

            {/* Contenido principal del carrito */}
            <h2>Tu Carrito contiene ({cantidadProductos()} producto/s)</h2>

            {cartItems.length === 0 && !mostrarMensaje ? (
                <div className="cart-vacio">
                    <p>No hay productos en tu carrito</p>
                    <Link to="/productos" className="boton-seguir-comprando">
                        Seguir comprando
                    </Link>
                </div>
            ) : cartItems.length > 0 ? (
                <>
                    <div className="cart-items">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="cart-item-info">
                                    <h3>{item.nombre}</h3>
                                    <p>Precio unitario: ${item.precio}</p>
                                    
                                    <div className="controles-cantidad">
                                        <button onClick={() => disminuirCantidad(item)}
                                            className="boton-cantidad">
                                            -
                                        </button>
                                        <span className="cantidad-display">{item.cantidad}</span>
                                        <button onClick={() => aumentarCantidad(item)}
                                            className="boton-cantidad">
                                            +
                                        </button>
                                    </div>
                                    
                                    <p>Subtotal: ${item.precio * item.cantidad}</p>
                                    <button 
                                        onClick={() => removerDelCarrito(item.id)} 
                                        className="boton-eliminar"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>Total: ${calcularTotal()}</h3>
                        <div className="botones-accion">
                            <button onClick={vaciarCarrito} className="boton-vaciar">
                                Vaciar Carrito
                            </button>
                            <button onClick={handleFinalizarCompra} className="boton-finalizar">
                                Finalizar Compra
                            </button>
                        </div>
                    </div>  
                </>
            ) : null}
        </div>
    );
};

export default Cart;
