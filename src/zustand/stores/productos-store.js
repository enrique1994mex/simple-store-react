import create from "zustand";
import apiCall from "../../api";

const useProductosStore = create ((set, get) => ({
    getProductos: async () => {
        try {
            set({isLoading: true, errorMessage: "", hasError: false});
            const productosResult = await apiCall({
                url: "https://pokeapi.co/api/v2/pokemon?limit=100"
            });
            set({productos: productosResult.results}); 
        } catch (error) {
            set({productos: [], errorMessage: "Algo ha pasado", hasError: true});
        } finally {
            set({isLoading: false});
        }
    }, 
    productos: [], 
    getProductoDetail: async (id) => {
        if(!id) Promise.reject("Id es requerido");
        try {
            set({isLoading: true, errorMessage: "", hasError: false}); 
            const productoDetail = await apiCall({
                url: `https://pokeapi.co/api/v2/pokemon/${id}`
            });
            set({productoDetail})
        } catch (error) {
            set({hasError: true, errorMessage: "Algo ha pasado", productoDetail: {}})
        } finally {
            set({isLoading: false})
        }
    }, 
    productoDetail: {},
    isLoading: false,
    errorMessage: "",
    hasError: false
}));

export default useProductosStore; 