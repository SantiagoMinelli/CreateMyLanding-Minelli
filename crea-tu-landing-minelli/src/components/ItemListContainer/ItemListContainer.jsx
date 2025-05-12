import "./ItemListContainer.css";

function ItemListContainer({message}) {
    return (
        <div>
            <div className="encabezado">
                <h1>{message}</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-3">
                        <div className="card">
                            <img className="imagen-card" alt="TST Imagen" src="/logo-buenas-cosas.png"/>
                            <h2>TST Pastelería 1</h2>
                            <p>$$$$$$</p>
                            <button>Añadir</button>
                        </div>                       
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img className="imagen-card" alt="TST Imagen" src="/logo-buenas-cosas.png"/>
                            <h2>TST Pastelería 2</h2>
                            <p>$$$$$$</p>
                            <button>Añadir</button>
                        </div>   
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img className="imagen-card" alt="TST Imagen" src="/logo-buenas-cosas.png"/>
                            <h2>TST Pastelería 3</h2>
                            <p>$$$$$$</p>
                            <button>Añadir</button>
                        </div>   
                    </div>
                    <div className="col-3">
                        <div className="card">
                            <img className="imagen-card" alt="TST Imagen" src="/logo-buenas-cosas.png"/>
                            <h2>TST Pastelería 4</h2>
                            <p>$$$$$$</p>
                            <button>Añadir</button>
                        </div>   
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemListContainer