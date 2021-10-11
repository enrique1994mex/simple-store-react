import { useEffect } from "react";
//import ProductoContext from "../context/productos";
import Productos from "./Productos";
import Barra from "./Productos/components/Barra";
import Loading from "../components/Loading";
import ErrorMessage from "../components/ErrorMessage";
import useProductosStore from "../zustand/stores/productos-store";
import shallow from "zustand/shallow"; 

export default function Home() {
    const {getProductos, productos, isLoading, hasError, errorMessage} = useProductosStore(state => ({
        getProductos: state.getProductos,
        productos: state.productos,
        isLoading: state.isLoading,
        hasError: state.hasError,
        errorMessage: state.errorMessage
    }), shallow); 
    //const {getProductos, productos, isLoading, hasError, errorMessage} = useContext(ProductoContext);

    useEffect(() => {
        getProductos().catch(null);
    }, [getProductos]);

    if(isLoading){
        return <Loading title="Cargando resultados..."/>;
    }

    return(
        <>
            {hasError ? <ErrorMessage message={errorMessage}/> : 
            <div>
                <Barra/>
                <Productos productos={productos}/>
            </div>
            }
        </>       
    );
}