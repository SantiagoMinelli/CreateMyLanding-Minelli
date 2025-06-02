import { useEffect, useState } from "react";
//import Item from "../ItemListContainer/Item.jsx";
import "./Home.css";
import productosBuenasCosas from '../../data/productos.js';

function Home() {
  const [items,setItems] = useState([]);

    useEffect(() => {
        const fetchProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productosBuenasCosas)
            },2000)
        })
    
        fetchProductos.then((data) => {
            setItems(data)
        })
    },[])

  return (
    <div>
        <main className="home-content">
          <h1>Bienvenido a Buenas Cosas</h1>
          <p>Productos SIN T.A.C.C hechos con amor ❤️</p>
      </main>
    </div>
  )
}

export default Home