import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from "./components/NavBar/NavBar";
import Home from './components/Pages/Home';
import Error from './components/Pages/Error';
import ItemList from './components/ItemListContainer/ItemList';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemListContainer/ItemDetailContainer';

import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<NavBar/>}>
              <Route index element={<Home/>}/>
              <Route path="/ItemListContainer" element={<ItemListContainer/>}/>
              <Route path="/Item/:itemId" element={<ItemDetailContainer/>}/>
              <Route path="/categoria/:categoriaId" element={<ItemList/>}/>
              <Route path="/*" element={<Error/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
