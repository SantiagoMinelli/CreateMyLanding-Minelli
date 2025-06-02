import "./Error.css"
import { Link } from "react-router-dom";

function Error() {
  return (
    <div className="main">
      <h1>404 - Página no encontrada</h1>
      <p>La ruta que estás buscando no existe.</p>
      <Link to="/" className="link">
        Volver al inicio
      </Link>
    </div>
  );
}

export default Error;