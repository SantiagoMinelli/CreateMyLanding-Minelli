import { useEffect, useState } from "react";
import Item from "./Item";

import productosBuenasCosas from '../../data/productos.js';
import "./ItemListContainer.css";

function ItemListContainer() {

    const [items,setItems] = useState([]);

    useEffect(() => {
        const fetchProductos = new Promise((resolve) => {
            setTimeout(() => {
                resolve(productosBuenasCosas)
            },1000)
        })
    
        fetchProductos.then((data) => {
            setItems(data)
        })
    },[])

    return (
        <div>
            <div className="container">
                <div className="row">
                    {productosBuenasCosas.map(prod=>(
                        <Item key={prod.id} {...prod}/>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer