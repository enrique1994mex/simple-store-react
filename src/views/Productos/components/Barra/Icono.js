import shallow from "zustand/shallow";
import useComprasStore from "../../../../zustand/stores/compras-store";
export default function Icono({ onIconValue}) {

    const {numCompras} = useComprasStore(state => ({numCompras: state.numCompras}), shallow);
    
    return(
        <div>{numCompras}</div>
    )
}