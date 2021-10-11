import { useCallback, useContext } from "react";
import UsuarioContext from "../context/usuario";

export default function UseUser() {

    const {jwt, setJwt} = useContext(UsuarioContext);

    const login = useCallback(({userName, password}) => {
        setJwt('test');
    }, [setJwt])

    const logout = useCallback(() => {
        setJwt(null)
    }, [setJwt])

    return {
        isLogged: Boolean(jwt),
        login,
        logout 
    }
}