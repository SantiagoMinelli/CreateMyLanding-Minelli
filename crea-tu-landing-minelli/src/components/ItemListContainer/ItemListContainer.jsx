import { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Item from "./Item";
import "./ItemListContainer.css";

function ItemListContainer() {
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosRef = collection(db, "productos");
        const snapshot = await getDocs(productosRef);
        const productosData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProductos(productosData);
      } catch (error) {
        console.error("Error cargando productos:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, []);

  if (loading) return <div className="loading">Cargando productos...</div>;

  return (
    <div className="productos-container">
      <h2>Todos nuestros productos</h2>
      <div className="productos-grid">
        {productos.map((producto) => (
          <Item 
            key={producto.id}
            id={producto.id}
            nombre={producto.nombre}
            precio={producto.precio}
            imagen={producto.imagen}
            categoria={producto.categoria}
            showCategory={true}
          />
        ))}
      </div>
    </div>
  );
}

export default ItemListContainer;