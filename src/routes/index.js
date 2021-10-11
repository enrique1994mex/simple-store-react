import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Productos  from "../views";
import Compras from "../views/Compras";
import ProductDetail from "../views/ProductDetail";
import Login from "../views/Registro/Login/Login";
import SignIn from "../views/Registro/SignIn/SignIn";

export default function Routers() {
    return(
        <Router>
            <Switch>
                <Route path="/" exact>
                    <Productos/>
                </Route>
                <Route path="/producto/:id">
                    <ProductDetail/>
                </Route>
                <Route path="/Login" exact>
                    <Login/>
                </Route>
                <Route path="/SigIn" exact>
                    <SignIn/>
                </Route>
                <Route path="/Buy" exact>
                    <Compras/>
                </Route>
            </Switch>
        </Router>
    )
}