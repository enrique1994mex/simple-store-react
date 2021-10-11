
import Card from "./components/Producto/Card";
import "./style.css";

export default function Productos({productos}) {
    
    return(
        <div className="productos">
            {
            productos?.map((value, index) => <Card key={index} {...value} />)
            }
        </div> 
    );
}

