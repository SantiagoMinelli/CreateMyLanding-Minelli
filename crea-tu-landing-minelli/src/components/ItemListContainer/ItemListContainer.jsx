import { useEffect, useState } from "react";
import ItemList from "./ItemList";

import productosBuenasCosas from '../../data/productos.js';
import "./ItemListContainer.css";

function ItemListContainer({message}) {

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
            <div className="encabezado">
                <h1>{message}</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <ItemList items={items}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer