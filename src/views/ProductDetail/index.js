import { useParams } from "react-router";
import {useEffect} from "react"; 
//import ProductoContext from "../../context/productos";
import Loading from "../../components/Loading";
import ErrorMessage from "../../components/ErrorMessage";
import MustCard from "../Productos/components/Producto/MustCard";
import Barra from "../Productos/components/Barra";
import "./style.css";
import useProductosStore from "../../zustand/stores/productos-store"; 
import shallow from "zustand/shallow";

export default function ProductDetail() {
    const {id} = useParams();
    //const {getProductoDetail, productoDetail, isLoading, hasError, errorMessage} = useContext(ProductoContext);
    const {getProductoDetail, productoDetail, isLoading, hasError, errorMessage} = useProductosStore( state => ({
        getProductoDetail: state.getProductoDetail,
        productoDetail: state.productoDetail,
        isLoading: state.isLoading,
        hasError: state.hasError,
        errorMessage: state.errorMessage 
    }), shallow)

    useEffect(() => {
        /**
     * Cada que se cargué la pantalla o cada que cambie el id
     * solicitar el detalle del producto 
     */
    getProductoDetail(id).catch(null);
    }, [getProductoDetail, id]);

    if(isLoading) {
        return <Loading title="Cargando producto..."/>
    }

    return(
        <div>
            {hasError ? <ErrorMessage message={errorMessage}/> : (
                <>  
                <Barra/>
                <div className="mustcard">
                    <MustCard name={productoDetail?.name} 
                            peso={productoDetail?.weight}
                            height={productoDetail?.height}
                    />
                </div>
                </>
            )}
        </div>
    )
}