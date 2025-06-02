import "./NavBar.css";
import logo from "../../assets/logo-buenas-cosas.png";
import CartWidget from "../CartWidget/CartWidget";

import {BrowserRouter, Routes,Route} from "react-router-dom";



function NavBar() {

    return (
        <nav className="navbar">
            <div>
                <img className="logo" src={logo} alt="Logo Buenas Cosas"/>
            </div>
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<Layout/>}>
                        <Route index element={<Home/>}/>
                        <Route path='/productos' element={<Productos/>}/>
                        <Route path='/productos/:id' element={<DetalleProd/>}/>
                        <Route path='/nosotros' element={<Nosotros/>}/>
                        <Route path='/*' element={<Error/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
            <CartWidget/>
        </nav>
    )
}

export default NavBar