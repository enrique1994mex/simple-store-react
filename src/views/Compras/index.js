import Card from "../Productos/components/Producto/Card";
import Barra from "../Productos/components/Barra";
import useComprasStore from "../../zustand/stores/compras-store";
import "./style.css"; 

export default function Compras() {
    const {compras} = useComprasStore(state => ({compras: state.compras}));

    return(
       <>
        <Barra/> 
        <div className="productos">
            {
                compras?.map((value, index) => <Card key={index} {...value} />)
            }
        </div>
        
        <div className="compra">
            <button className="compra-button">Confirmar compra</button>
        </div> 
       </>
        
    )
}