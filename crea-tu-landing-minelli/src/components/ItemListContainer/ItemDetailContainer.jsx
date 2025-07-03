import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";
import Item from "./Item";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
  const { id } = useParams();
  const [producto, setProducto] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducto = async () => {
      try {
        const docRef = doc(db, "productos", id);
        const docSnap = await getDoc(docRef);
        
        if (docSnap.exists()) {
          setProducto({
            id: docSnap.id,
            nombre: docSnap.data().nombre,
            descripcion: docSnap.data().descripcion,
            precio: docSnap.data().precio,
            imagen: docSnap.data().imagen,
            categoria: docSnap.data().categoria,
            ingredientes: docSnap.data().ingredientes || [],
            stock: docSnap.data().stock || 0
          });
        }
      } catch (error) {
        console.error("Error cargando producto:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducto();
  }, [id]);

  if (loading) return <div className="loading">Cargando producto...</div>;
  if (!producto) return <div>Producto no encontrado</div>;

  return (
    <div className="detalle-container">
      <Item 
        {...producto}
        isDetail={true}
        showFullDescription={true}
      />
    </div>
  );
}

export default ItemDetailContainer;
