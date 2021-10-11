import create from "zustand"; 

const useComprasStore = create((set, get) => ({
    compras: [], 
    guardarProductos: (name, url) => {
        set(state => ({compras: [...state.compras, {name, url}]}))
    }, 
    eliminarProductos: (id) => {
        const compras = get().compras;  
        set({compras: compras.filter( e => e.name !== id)})
    },
    numCompras: 0,
    obtenerNumCompras: () => {
        set(state => ({numCompras: state.compras.length}))
    }
})); 

export default useComprasStore;