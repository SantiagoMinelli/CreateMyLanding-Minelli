import { useEffect, useState } from "react";
import { collection, getDocs, query, where, limit } from "firebase/firestore";
import { db } from "../../firebase";
import Item from "../ItemListContainer/Item";
import "./Home.css";

function Home() {
  const [destacados, setDestacados] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDestacados = async () => {
      try {
        const productosRef = collection(db, "productos");
        const q = query(productosRef, where("destacado", "==", true), limit(4));
        const snapshot = await getDocs(q);
        const productosData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setDestacados(productosData);
      } catch (error) {
        console.error("Error cargando productos destacados:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchDestacados();
  }, []);

  return (
    <div className="home-container">
      <div className="hero-section">
        <h1>Bienvenido a Buenas Cosas</h1>
        <p>Productos SIN T.A.C.C hechos con amor ❤️</p>
      </div>

      <div className="destacados-section">
        <h2>Nuestros Productos Destacados</h2>
        
        {loading ? (
          <p className="cargando">Cargando productos destacados...</p>
        ) : (
          <div className="destacados-grid">
            {destacados.map(producto => (
              <Item
                key={producto.id}
                id={producto.id}
                nombre={producto.nombre}
                precio={producto.precio}
                imagen={producto.imagen}
                categoria={producto.categoria}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;