import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import productosBuenasCosas from "../../data/productos";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
    const { itemId } = useParams();
    const [items, setItems] = useState([]);
    const [producto, setProducto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [cantidad, setCantidad] = useState(1);

    useEffect(() => {
    const fetchProductos = new Promise((resolve) => {
        setTimeout(() => {
            resolve(productosBuenasCosas);
        },200);
    });

    fetchProductos.then((data) => {
        setItems(data);
        });
    }, []);

    useEffect(() => {
    if (items.length > 0) {
        const encontrado = items.find((prod) => prod.id === parseInt(itemId));
        setProducto(encontrado || null);
        setLoading(false);
        }
    }, [items, itemId]);

    const incrementar = () => setCantidad((prev) => prev + 1);
    const decrementar = () => {
        if (cantidad > 1) setCantidad((prev) => prev - 1);
    };

    if (loading) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Cargando producto...</p>;
    if (!producto) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Producto no encontrado.</p>;


    return (
<div className="container-detail">
        <div className="card-detail">
            <div className="detail-image">
                <img src={producto.imagen} alt={producto.nombre} className="imagen-card-detail" />
            </div>

            <div className="detail-info">
                <h2 className="title-prod">{producto.nombre}</h2>
                <p className="price-prod">$ {producto.precio}</p>

                <div className="tags">
                    <span className="tag">{producto.categoria}</span>
                </div>

                <hr className="divider" />

                <ul className="description-prod">
                    <li>{producto.descripcion}</li>
                </ul>

                <div className="item-count">
                    <button className="btn-menos" onClick={decrementar}>−</button>
                    <span className="cantidad">{cantidad}</span>
                    <button className="btn-mas" onClick={incrementar}>+</button>
                </div>

                <button className="btn-añadir">
                    Agregar al Carrito
                </button>
            </div>
        </div>
    </div>
    );
}

export default ItemDetailContainer;