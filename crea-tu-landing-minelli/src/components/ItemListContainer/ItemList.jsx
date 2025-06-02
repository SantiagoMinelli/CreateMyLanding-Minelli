import React from 'react';


function ItemList() {

    return (
    <div id="container">
            {prodcutosBuenasCosas.map(prod=>(
        <Producto {...prod}/>
        ))}
    </div>
    )
}

export default ItemList