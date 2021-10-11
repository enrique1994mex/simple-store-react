import { useState, useEffect } from "react";
import { useLocation } from "react-router";
import Barra from "../../Productos/components/Barra";
import "./style.css";
import UseUser from "../../../components/UseUser"; 

export default function Login() {

    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const {login, isLogged} = UseUser();
    const navigate = useLocation();
    
    useEffect(() => {
        if (isLogged) navigate('/'); 
    }, [isLogged, navigate])

    const handleSubmit = (e) => {
        e.preventDefault();
        login({userName, password});
    }

    return(
        <>
        <Barra/>
        <di className="contend">
            <div className="contend-elements">
                <p className="contend-elements-title">Client</p>
                <form onSubmit={handleSubmit} action="" method="POST" className="contend-elements-form">
                    <div className="form-div">
                        <label for="email">E-mail</label>
                        <input type="email" 
                        name="email" 
                        id="email"
                        onChange={(e) => setUserName(e.target.value)} 
                        value={userName} required /><span className="form-div-barra"></span>
                    </div>
                    <div className="form-div">
                        <label for="password">Password</label>
                        <input type="password" 
                        name="password" 
                        id="password" 
                        onChange={(e) => setPassword(e.target.value)}
                        value={password} required /><span className="form-div-barra"></span>
                    </div>
                    <div className="form-div">
                        <button className="form-div-button"  type="submit">Send</button>
                    </div>
                </form>
            </div>
        </di>
        </>
    )
}