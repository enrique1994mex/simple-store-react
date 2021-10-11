import ComprasContext from "./index";
import { useState } from "react";

export default function ComprasProvider({children}) {

    const [compras, setCompras] = useState([]); 

    const guardarProductos = (name, url) => {
        setCompras([...compras, {name, url}]);   
    }

    const eliminarProductos = (id) => {
        setCompras(compras.filter( e => e.nombre !== id));  
    }

    return(
        <ComprasContext.Provider value={{guardarProductos, compras, eliminarProductos}}>
            {children}
        </ComprasContext.Provider>
    )
}
