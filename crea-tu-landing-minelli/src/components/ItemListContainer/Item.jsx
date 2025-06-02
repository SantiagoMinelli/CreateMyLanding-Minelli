import { Link } from "react-router-dom";

function Item({id,nombre,descripcion,precio,imagen}) {
    return (
    <Link to={`/item/${id}`} className="card">
        <img src={imagen} alt="Imagen" />
        <h2>{nombre}</h2>
        <h4>{descripcion}</h4>
        <h2>${precio}</h2>
    </Link>
    )
}

export default Item
