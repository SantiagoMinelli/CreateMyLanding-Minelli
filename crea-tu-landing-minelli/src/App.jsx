import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
// import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import './App.css';

// Componentes temporales (los reemplazaremos después)
const Home = () => <div>Página de Inicio</div>;
const Nosotros = () => <div>Página Nosotros</div>;
const Error = () => <div>Página no encontrada - Error 404</div>;

function App() {

  return (
    <>
    <BrowserRouter>
      <NavBar/>
      <Routes>
            {/* Ruta principal */}
            <Route path="/" element={<Home />} />
            
            {/* Ruta para todos los productos */}
            <Route path="/productos" element={<ItemListContainer />} />
            
            {/* Ruta para productos por categoría */}
            <Route path="/category/:categoryId" element={<ItemListContainer />} />
            
            {/* Ruta para detalle de producto */}
            {/*<Route path="/productos/:id" element={<ItemDetailContainer />} />*/}
            
            {/* Ruta Nosotros */}
            <Route path="/nosotros" element={<Nosotros />} />
            
            {/* Ruta 404 - debe ir al final */}
            <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
