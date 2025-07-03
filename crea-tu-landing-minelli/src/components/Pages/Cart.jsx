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
    const [errors, setErrors] = useState({
        celular: ""
    });

    const validatePhone = (phone) => {
        const phoneRegex = /^[0-9]{8,15}$/;
        return phoneRegex.test(phone);
    };

    const calcularTotal = () => {
        return cartItems.reduce((total, item) => total + (item.precio * item.cantidad), 0);
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        if (name === "celular") {
            setErrors(prev => ({
                ...prev,
                celular: value && !validatePhone(value) 
                    ? "Número inválido (debe contener entre 8-15 dígitos)" 
                    : ""
            }));
        }
        
        setDatosCliente(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFinalizarCompra = () => {
        setMostrarFormulario(true);
        setErrors({ celular: "" });
    };

    const handleEnviarFormulario = (e) => {
        e.preventDefault();
        
        // Validar celular
        if (!validatePhone(datosCliente.celular)) {
            setErrors({
                celular: "Por favor ingrese un número de celular válido (8-15 dígitos)"
            });
            return;
        }

        console.log("Datos del cliente:", datosCliente);
        setMostrarFormulario(false);
        setMostrarMensaje(true);
        vaciarCarrito();
        
        setTimeout(() => setMostrarMensaje(false), 8000);
    };

    const aumentarCantidad = (producto) => {
        agregarAlCarrito({ ...producto, cantidad: 1 });
    };

    const disminuirCantidad = (producto) => {
        producto.cantidad > 1 
            ? agregarAlCarrito({ ...producto, cantidad: -1 }) 
            : removerDelCarrito(producto.id);
    };

    return (
        <div className="cart-container">
            {/* Modales */}
            {mostrarFormulario && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h3>Datos de contacto</h3>
                        <form onSubmit={handleEnviarFormulario}>
                            {["nombre", "apellido", "celular"].map((field) => (
                                <div key={field} className="form-group">
                                    <label htmlFor={field}>
                                        {field === "celular" ? "Número de celular" : field.charAt(0).toUpperCase() + field.slice(1)}
                                    </label>
                                    <input
                                        type={field === "celular" ? "tel" : "text"}
                                        id={field}
                                        name={field}
                                        value={datosCliente[field]}
                                        onChange={handleInputChange}
                                        required
                                        {...(field === "celular" && { 
                                            pattern: "[0-9]{8,15}",
                                            title: "Ingrese entre 8 y 15 dígitos"
                                        })}
                                    />
                                    {field === "celular" && errors.celular && (
                                        <span className="error-message">{errors.celular}</span>
                                    )}
                                </div>
                            ))}
                            <div className="form-buttons">
                                <button type="button" onClick={() => setMostrarFormulario(false)}>
                                    Cancelar
                                </button>
                                <button type="submit">Confirmar pedido</button>
                            </div>
                        </form>
                    </div>
                </div>
            )}

            {mostrarMensaje && (
                <div className="modal-overlay">
                    <div className="success-message">
                        <svg viewBox="0 0 24 24" className="success-icon">
                            <path fill="currentColor" d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z" />
                        </svg>
                        <h3>¡Pedido realizado con éxito!</h3>
                        <p>Gracias {datosCliente.nombre} {datosCliente.apellido}, hemos recibido tu pedido.</p>
                        <p>Nos contactaremos contigo para coordinar la entrega.</p>
                    </div>
                </div>
            )}

            {/* Contenido principal */}
            <h2>Tu Carrito contine: ({cantidadProductos()} {cantidadProductos() === 1 ? 'producto' : 'productos'})</h2>

            {cartItems.length === 0 && !mostrarMensaje ? (
                <div className="empty-cart">
                    <p>No hay productos en tu carrito</p>
                    <Link to="/productos" className="continue-shopping">
                        Seguir comprando
                    </Link>
                </div>
            ) : (
                <>
                    <div className="cart-items-container">
                        {cartItems.map((item) => (
                            <div key={item.id} className="cart-item">
                                <div className="item-details">
                                    <h3>{item.nombre}</h3>
                                    <p>Precio unitario: ${item.precio.toFixed(2)}</p>
                                    <div className="quantity-controls">
                                        <button onClick={() => disminuirCantidad(item)}>-</button>
                                        <span>{item.cantidad}</span>
                                        <button onClick={() => aumentarCantidad(item)}>+</button>
                                    </div>
                                    <p>Subtotal: ${(item.precio * item.cantidad).toFixed(2)}</p>
                                    <button 
                                        onClick={() => removerDelCarrito(item.id)}
                                        className="remove-btn"
                                    >
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="cart-summary">
                        <h3>Total: ${calcularTotal().toFixed(2)}</h3>
                        <div className="action-buttons">
                            <button onClick={vaciarCarrito} className="clear-btn">
                                Vaciar Carrito
                            </button>
                            <button onClick={handleFinalizarCompra} className="checkout-btn">
                                Finalizar Pedido
                            </button>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;