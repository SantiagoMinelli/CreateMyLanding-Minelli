import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Item from "./Item";
import productosBuenasCosas from "../../data/productos";
import "./ItemListContainer.css";

function ItemList() {
    const { categoriaId } = useParams();
    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log("Categoría desde URL:", categoriaId);
        const fetchProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productosBuenasCosas);
            }, 500);
        });

        fetchProductos.then((data) => {
console.log("Productos cargados:", data);

    if (categoriaId) {
        const filtrados = data.filter(
            (prod) =>
            prod.categoria.toLowerCase() === categoriaId.toLowerCase()
            );
            console.log("Productos filtrados:", filtrados);
            setItems(filtrados);
        } else {    
            setItems(data);
                }
            setLoading(false);
        });
    }, [categoriaId]);

    if (loading) return <p style={{ textAlign: "center", marginTop: "2rem" }}>Cargando productos...</p>;

    return (
        <div className="container">
            <h2 style={{ textAlign: "center", paddingTop: "10px" }}>
                {categoriaId
                    ? `Productos de ${categoriaId}`
                    : "Todos los productos"}
            </h2>
            <div className="row">
                {items.length > 0 ? (
                    items.map((prod) => <Item key={prod.id} {...prod} />)
                ) : (
                    <p style={{ textAlign: "center", marginTop: "2rem" }}>
                        No se encontraron productos en esta categoría.
                    </p>
                )}
            </div>
        </div>
    );
}

export default ItemList