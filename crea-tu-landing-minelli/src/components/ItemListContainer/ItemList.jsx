import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import Item from "./Item";
//import "./ItemList.css";

function ItemList() {
  const { categoriaId } = useParams();
  const [productos, setProductos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProductos = async () => {
      try {
        const productosRef = collection(db, "productos");
        const q = query(productosRef, where("categoria", "==", categoriaId));
        const snapshot = await getDocs(q);
        const productosData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setProductos(productosData);
      } catch (error) {
        console.error(`Error cargando productos de ${categoriaId}:`, error);
      } finally {
        setLoading(false);
      }
    };

    fetchProductos();
  }, [categoriaId]);

  if (loading) return <div className="loading">Cargando productos...</div>;

  return (
    <div className="productos-container">
      <h2>Productos de {categoriaId}</h2>
      <div className="productos-grid">
        {productos.length > 0 ? (
          productos.map((producto) => (
            <Item
              key={producto.id}
              id={producto.id}
              nombre={producto.nombre}
              precio={producto.precio}
              imagen={producto.imagen}
              categoria={producto.categoria}
              showCategory={false}
            />
          ))
        ) : (
          <p>No hay productos en esta categoría</p>
        )}
      </div>
    </div>
  );
}

export default ItemList;