import Barra from "../../Productos/components/Barra";
import "./style.css";

export default function SignIn() {

    return(
        <>
        <Barra/>
        <div className="contend">
            <div className="contend-elements">
                <p className="contend-elements-title">Personal information</p>
                <form action="" method="POST" className="contend-elements-form">
                    <div className="form-div">
                        <label for="nombre">Name</label>
                        <input type="text" name="nombre" id="nombre" required /><span className="form-div-barra"></span>
                    </div>
                    <div className="form-div">
                        <label for="apellido">Last name</label>
                        <input type="text" name="apellido" id="apellido" required /><span className="form-div-barra"></span>
                    </div>
                    <div className="form-tel">
                        <label for="telefono">Cell phone</label>
                        <input type="tel" name="telefono" id="telefono" required /><span className="form-div-barra"></span>
                    </div>
                    <div className="form-div">
                        <label for="email">E-mail</label>
                        <input type="email" name="email" id="email" required /><span className="form-div-barra"></span>
                    </div>
                    <div className="form-div">
                        <label for="password">Password</label>
                        <input type="password" name="password" id="password" required /><span className="form-div-barra"></span>
                    </div>
                    <div className="form-check">
                        <input type="checkbox" id="check" />
                        <label for="check">I accept the Terms and Conditions and authorize the use of my data in accordance with the Privacy Statement. 
                        </label>
                    </div>
                    <div className="form-div">
                        <button className="form-div-button" type="submit">Send</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}