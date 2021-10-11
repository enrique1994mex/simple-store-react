import UsuarioContext from "./index";
import { useState } from "react";

export default function UsuarioProvider({children}) {

    const [jwt, setJwt] = useState(null);

    return(
        <UsuarioContext.Provider value={{jwt, setJwt}}>
            {children}
        </UsuarioContext.Provider>
    )
}