import "./style.css";
import { Link } from "react-router-dom";
import {useLocation} from "react-router"; 
import {Icon} from "@material-ui/core";
import useComprasStore from "../../../../zustand/stores/compras-store";
import shallow from "zustand/shallow";  

export default function Card({name, url}) {

    const {guardarProductos, eliminarProductos, obtenerNumCompras} = useComprasStore(state => ({guardarProductos: state.guardarProductos, 
        eliminarProductos: state.eliminarProductos, 
        obtenerNumCompras: state.obtenerNumCompras,
        numCompras: state.numCompras}), shallow);

    const getId = () => url.split("/")[6];

    const handleIcon = () => {
        guardarProductos(name, url);
        obtenerNumCompras();
    }

    const handleIcon2 = () => {
        eliminarProductos(name);
        obtenerNumCompras(); 
    }

    const location = useLocation();
    
    return(
        <div className="card-div">
            <h2 className="card-title">{name}</h2>
            
            <div className="card-description">
            Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source.  
            </div>
            <div className="card-stars">
                <Icon>grade</Icon>
                <Icon>grade</Icon>
                <Icon>grade</Icon>
                <Icon>grade</Icon>
                <Icon>grade</Icon>
            </div>

           <div className="card-foot">
                {
                location.pathname !== "/Buy" && <>         
                <button className="card-botton"><Link className="card-botton-product" to={`/producto/${getId()}`}>Ver más</Link></button>
                <button className="card-botton" onClick={handleIcon}>Agregar al carrito</button>
                </>}
                
                <button className="card-botton" onClick={handleIcon2}>Quitar del carrito</button>
            </div> 

        </div>
    )
}