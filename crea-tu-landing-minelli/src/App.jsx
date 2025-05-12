import "./App.css";
import NavBar from "./components/NavBar/NavBar.jsx";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";

function App() {

  return (
    <>
      <NavBar/>
      <ItemListContainer message={"¡Bienvenidos a Buenas Cosas!"}/>
    </>
  )
}

export default App
