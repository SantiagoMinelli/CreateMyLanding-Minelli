import { FaShoppingCart } from "react-icons/fa";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "./CartContext";
import "./CartWidget.css";

function CartWidget() {
    const { cantidadProductos } = useContext(CartContext);
    const navigate = useNavigate();

    return (
        <div className="carrito" onClick={() => navigate("/cart")}>
            <FaShoppingCart size="24px" />
            {cantidadProductos() > 0 && (
                <span className="contador-carrito">{cantidadProductos()}</span>
            )}
        </div>
    );
}

export default CartWidget;