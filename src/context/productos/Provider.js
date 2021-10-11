import ProductoContext from "./index";
import apiCall from "../../api";
import { useState } from "react";


export default function ProductoProvider({children}) {
    const [productos, setProductos] = useState([]);
    const [productoDetail, setProductoDetail] = useState({});
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false); 
    const [errorMessage, setErrorMessage] = useState("");

    const getProductos = async () => {
        try {
            setIsLoading(true);
            setErrorMessage("");
            setHasError(false);
            const productosResult = await apiCall({
                url: "https://pokeapi.co/api/v2/pokemon?limit=100"
            });
            setProductos(productosResult.results);
        } catch (error) {
            setProductos([]);
            setErrorMessage("Algo ha pasado");
            setHasError(true); 
        } finally {
            setIsLoading(false);
        }
    }

    const getProductoDetail = async (id) => {
        if(!id) Promise.reject("Id es requerido"); 
        try {
            setIsLoading(true);
            const productoDetail = await apiCall({
                url: `https://pokeapi.co/api/v2/pokemon/${id}`
            });
            setProductoDetail(productoDetail);
        } catch (error) {
            setProductoDetail({});
        } finally {
            setIsLoading(false);
        }
    }

    return(
        <ProductoContext.Provider value={{getProductos, 
        productos, 
        getProductoDetail, 
        productoDetail,
        isLoading,
        errorMessage,
        hasError }}>
        {children}
        </ProductoContext.Provider>
    )
}