import "./style.css";
import {Icon} from "@material-ui/core";
import Icono from "./Icono";
import { Link } from "react-router-dom"; 
import UseUser from "../../../../components/UseUser";
import {useState} from "react"; 


export default function Barra() {

    const {isLogged, logout} = UseUser();

    const [botton, setBotton] = useState(false);
      
    return(
        <nav className="barra-nav">
            <ul className="barra-ul">
                <li className="principal"><Link className="barra-li" to="/"><Icon>storefront</Icon></Link></li>
                {isLogged ? <li  className={`second ${botton? 'active': ''}`}><Link className="barra-li" onClick={logout}>Logout</Link></li>
                : <li className={`second ${botton? 'active': ''}`}><Link className="barra-li" to="/Login">Login</Link></li>}
                <li className={`second ${botton? 'active': ''}`}><Link className="barra-li" to="/SigIn">Sign In</Link></li>
                <li className={`second ${botton? 'active': ''}`}>
                    <Link className="barra-li icon" to="/Buy">
                        <Icono/> 
                        <Icon>shopping_cart</Icon>
                    </Link>
                </li>
                <li className="barra-li toggle" onClick={() => (setBotton(!botton))}>{botton? <Icon>highlight_off</Icon> : <Icon>menu</Icon>}</li>
            </ul>
        </nav>
    )
}