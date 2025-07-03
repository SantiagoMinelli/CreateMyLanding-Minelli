import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Home from './components/Pages/Home';
import Error from './components/Pages/Error';
import Cart from "./components/Pages/Cart";
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemList from './components/ItemListContainer/ItemList';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';
import './App.css';
import Footer from './components/Pages/Footer';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productos" element={<ItemListContainer />} />
        <Route path="/categoria/:categoriaId" element={<ItemList />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
